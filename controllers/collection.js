const path = require("path");
const Model = require("../models/classes/model");
const Route = require("../models/classes/route");
const mongoose = require("mongoose");
const { toCapitalize, toUrl, toNormalString } = require("../utilities/string");


// create
async function create(req, res) {
    let {modelName, schema, initializedProps, pluralized} = req.body,
        foundModel = await Model.getModelByName(modelName);
        

    res.setHeader("Content-type", "application/json");

    try {

        if(foundModel)  {
            throw Error(`We already have a database collection (table) with the same model name. Please try to update that or delete the collection first before creating one.`);
        }
        if(!modelName && !schema)   {
            throw Error(`Creating a database collection/table requires a model name and schema object`);
        }

        let model = new Model(modelName),
            route = new Route(modelName),
            createModelResult = await model.createModel(schema, initializedProps);
        

        if(!createModelResult.statusOk)  {
            throw Error(`We already have a database collection (table) with the same model name. Please try to update that or delete the collection first before creating one.`);
        }  

        let createRouteResult = await route.createRoute(model.modelInstanceName, model.recordName, pluralized);
        res.send(JSON.stringify({
            createModelResult,
            createRouteResult,
        }, null, 4));

    } catch(err)    {
        res.status(403).send(JSON.stringify({
            status : 403,
            message : err.message,
        }, null, 4));
    }
    
}


// read
async function getOneByName(req, res) {
    let {modelName} = req.params;
        modelObject = await Model.getModelByName(modelName),
        routeObject = await Route.getRouteByName(toUrl(modelName));
    
    res.setHeader("Content-type", "application/json");
    if(!modelObject && !routeObject)    {
        res.status(404).send(JSON.stringify({
            status : 404, 
            statusOk : false, 
            message : "We coudn't get the collection model and route that you look for"
        }, null, 4));
    }else   {
        res.send(JSON.stringify({
            status : 200, 
            statusOk : true, 
            message : "We have found the database collection/table that you looked for.",
            data : {
                ...modelObject,
                ...routeObject,
            }
        }, null, 4));
    }
}


async function getAll(req, res)   {
    let modelObjects = await Model.getModels(),
        routeObjects = await Route.getRoutes();
    
    res.setHeader("Content-type", "application/json");
    if(!modelObjects && !routeObjects)    {
        res.status(404).send(JSON.stringify({
            status : 404, 
            statusOk : false, 
            message : "We coudn't get the collection model and route that you look for"
        }, null, 4));
    }else   {
        res.send(JSON.stringify({
            status : 200, 
            statusOk : true, 
            message : "We have found the database collections/tables that you looked for.",
            data : {
                modelObjects,
                routeObjects,
            }
        }, null, 4));
    }
}


// update
async function update(req, res)   {

}


// delete
async function deleteOne(req, res)   {
    
    res.setHeader("Content-type", "application/json");

    let { collectionName } = req.params,
        foundModel = await Model.getModelByName(collectionName),
        foundRoute = await Route.getRouteByName(toNormalString(collectionName, "url"));


    if(foundModel && foundRoute)    {
        try {
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
                    res.send(JSON.stringify({status : 200, statusOk : true, message : "We have successfully deleted the collection"}, null, 4));
                    resolve();
                });
                
            }, 1500));

        }
        catch(err)   {
            res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
        }
    } else  {
        res.status(404).send(JSON.stringify({
            message : "We weren't able to find a collection with that name",
            statusOk : false,
        }, null, 4));
    }

    

}

module.exports = {create, getOneByName, getAll, update, deleteOne};