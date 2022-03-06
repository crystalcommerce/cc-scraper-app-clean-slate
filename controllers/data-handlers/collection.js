const path = require("path");
const Model = require("../../models/classes/model");
const Route = require("../../models/classes/route");
const mongoose = require("mongoose");
const { toUrl, toNormalString } = require("../../utilities/string");


module.exports = function()   {
    // create
    async function create(req, res, next) {

        try {

            let {modelName, schema, initializedProps, pluralized} = req.body,
                foundModel = await Model.getModelByName(modelName);

            if(foundModel)  {
                throw Error(`We already have a database collection (table) with the same model name. Please try to update that or delete the collection first before creating one.`);
            }
            if(!modelName && !schema)   {
                throw Error(`Creating a database collection/table requires a model name and schema object`);
            }

            let model = new Model(modelName),
                route = new Route(modelName),
                createModelResult = await model.createModel(schema, initializedProps);

            if(!createModelResult.writeModelResult.result)  {
                throw Error(`We already have a database collection (table) with the same model name. Please try to update that or delete the collection first before creating one.`);
            }  

            let createRouteResult = await route.createRoute(model.modelInstanceName, model.recordName, pluralized);
            req.requestResult = {
                data :{
                    createModelResult,
                    createRouteResult,
                }, 
                status :200
            };

            next();
        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }
        
    }


    // read
    async function getOneByName(req, res, next) {

        try {
            let {modelName} = req.params;
                modelObject = await Model.getModelByName(modelName),
                routeObject = await Route.getRouteByName(toUrl(modelName));

            if(!modelObject && !routeObject)    {
                throw Error("We coudn't get the collection model and route that you look for")
            }

            req.requestResult = {
                data :{
                    status : 200, 
                    statusOk : true, 
                    message : "We have found the database collection/table that you looked for.",
                    data : {
                        ...modelObject,
                        ...routeObject,
                    }
                }, 
                status : 200
            };
            next();
        } 
        catch(err)  {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
    }


    async function getAll(req, res, next)   {

        try {
            let modelObjects = await Model.getModels(),
                routeObjects = await Route.getRoutes();
            
            if(!modelObjects && !routeObjects)    {
                throw Error("We coudn't get the collection model and route that you look for");
            }

            req.requestResult = {
                data : {
                    status : 200, 
                    statusOk : true, 
                    message : "We have found the database collections/tables that you looked for.",
                    data : {
                        modelObjects,
                        routeObjects,
                    }
                }, 
                status : 200,
            };
            next();

        }
        catch(err)  {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
    }


    // update
    async function update(req, res, next)   {

    }


    // delete
    async function deleteOne(req, res, next)   {

        try {
            let { collectionName } = req.params,
                foundModel = await Model.getModelByName(collectionName),
                foundRoute = await Route.getRouteByName(toNormalString(collectionName, "url"));

            if(!foundModel && !foundRoute)    {
                throw Error("We weren't able to find a collection with that name");
            }

            let dbInstance = require(path.join(process.cwd(), "models", "dynamic", foundModel.fileName)),
                allData = await dbInstance.getAll();

            // we delete all data inside the collection...
            for(let i = 0; i < allData.length; i++) {
                await dbInstance.delete(allData[i]._id);
            }

            // we then delete the collection themselves... model and route files.
            await new Promise((resolve, reject) => setTimeout(() => {
                mongoose.connection.db.dropCollection(`${foundModel.camelCaseName.toLowerCase()}s`, function(err, result)    {
                    if(err) {
                        
                    }
                    
                    Model.deleteModelByName(foundModel.fileName);
                    Route.deleteRouteByName(toNormalString(collectionName, "url"));
                    req.requestResult = {
                        data : { status : 200, statusOk : true, message : "We have successfully deleted the collection"},
                        status : 200,
                    };
                    resolve();
                });
                
            }, 1500));
            next();

        } catch(err)  {
            req.requestResult = {status : 403, message : err.message};
            next();
        }

    }

    return { create, getOneByName, getAll, update, deleteOne };
}



