const mongoose = require("mongoose");
const path = require("path");
const { toUrl, toCapitalizeAll, toNormalString } = require("../../utilities/string");

// modelInstances
const dbInstances = require("../../models");
const { scrapersDb, siteResourcesDb, productSetsDb } = dbInstances;

// classes
const Scraper = require("../../models/classes/scraper");
const Model = require("../../models/classes/model");
const { deleteAllInDirPath, fileExists } = require("../../utilities/file-system");

// utility
const { nodeRestart } = require("../../utilities");


module.exports = function()   {

    const recordName = "Scraper";

    
    // getAll
    async function getAll(req, res, next)   {

        try {
            let result = await scrapersDb.getAll();
            req.requestResult = {data : result , status : 200};
            next();
        } catch(err)    {
            req.requestResult = {
                message : err.message,
                status : 404,
            };
        }

    }

    // get one by id;
    async function getOneById(req, res) {
        res.setHeader("Content-type", "application/json");

        scrapersDb.getById(req.params.id)
            .then(result => {
                if(!result) throw Error(`No ${recordName} was found.`);
                
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                let result = JSON.stringify({
                    message : err.message,
                    status : 404,
                }, null, 4);
                res.status(404).send(result);
            });
    }

    // getOneByFilter
    async function getOneByFilter(req, res)    {
        res.setHeader("Content-type", "application/json");

        scrapersDb.getOneByFilter(req.query)
            .then(result => {
                if(!result) throw Error(`No ${recordName} was found.`);
                
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                let result = JSON.stringify({
                    message : err.message,
                    status : 404,
                }, null, 4);
                res.status(404).send(result);
            });
    }

    // create
    async function create(req, res)   {
        res.setHeader("Content-type", "application/json");

        let { 
                siteResource, 
                productBrand, 
                imagePropName,
                imageNameObject,
                csvExcludedProps,
                modelObjectOptions, 
                routeObjectOptions, 
                evaluatorObjects,
                usage,
                groupIdentifierKey,
            } = req.body,
            scraperObject = new Scraper(siteResource, productBrand),
            scriptFilePath,
            apiRoute = `/api/${scraperObject.routeObject.routeName}`;

        await scraperObject.scriptObject.getScriptFilePath();
        scriptFilePath = scraperObject.scriptObject.scriptFilePath;


        // create a siteResources data; // we're not checkiing if there's already a resource, it will fail if there is already;
        // but the process still has to go on.
        await siteResourcesDb.create({
            siteUrl : scraperObject.siteUrl,
            siteName : scraperObject.siteName,
        });

        // save the scraper in the database;
        scrapersDb.create({
            siteUrl : siteResource.siteUrl,
            siteName : siteResource.siteName,
            productBrand,
            imagePropName,
            imageNameObject,
            evaluatorObjects,
            csvExcludedProps,
            scriptFilePath,
            usage,
            apiRoute,
            groupIdentifierKey,
            modelObjectOptions,
            routeObjectOptions,
        })
            .then(result => {
                try {   
                    // create the files
                    scraperObject.createScraper(modelObjectOptions, routeObjectOptions, evaluatorObjects);
                    
                    res.send(JSON.stringify(result, null, 4));
                }
                catch(err)  {
                    
                }
                
            })
            .catch(err => {
                res.status(403).send(JSON.stringify({status : 403, message : err.message}, null, 4));
            });
    }

    async function scraperRewriteAll(req, res) {
        res.setHeader("Content-type", "application/json");

        try {
            let scrapers = await scrapersDb.getAll();
            if(!scrapers)   {
                throw Error("We couldn't rewrite all the scrapers data.")
            }
            if(scrapers.length) {

                for(let scraper of scrapers)    {
                    try {
                        let { siteName, siteUrl, productBrand, modelObjectOptions, routeObjectOptions, evaluatorObjects } = scraper,
                            siteResource = {siteName, siteUrl},
                            scraperObject = new Scraper(siteResource, productBrand);
                        
                        await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, evaluatorObjects);
                        // Scraper.deleteScraper(siteName, productBrand)
                        //     .then(async res => {
                        //         await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, evaluatorObjects);
                        //     })
                        //     .catch(err => {
                        //         console.log(err);
                        //     });
                    }
                    catch(err)  {
                        console.log(err);
                    }
                }

                

                await new Promise((resolve, reject) => {
                    res.send(JSON.stringify({
                        status : 200,
                        message : "We have re-written all the scrapers needed.",
                    }, null, 4));
                    resolve();
                });
                
                nodeRestart();

            } else  {
                res.send(JSON.stringify({
                    status : 200,
                    message : "There are no scrapers to be rewritten.",
                }, null, 4));
            }
            
        }
        catch(err)  {
            res.send(JSON.stringify({
                status : 404,
                message : err.message,
            }, null, 4));
        }
    }

    async function scraperRewrite(req, res) {
        res.setHeader("Content-type", "application/json");
        try {
            let { id : scraperId } = req.params,
                scraperData = await scrapersDb.getById(scraperId),
                { siteName, siteUrl, productBrand, modelObjectOptions, routeObjectOptions, evaluatorObjects } = scraperData,
                scraperObject = new Scraper({siteName, siteUrl}, productBrand);

            // await Scraper.deleteScraper(siteName, productBrand);

            await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, evaluatorObjects);


            res.send(JSON.stringify({
                status : 200,
                message : "We have re-written the scraper.",
            }, null, 4));

            nodeRestart();

        }
        catch(err)  {
            res.status(403).send(JSON.stringify({
                status : 403,
                message : "We were not able to rewrite the scraper.",
            }, null, 4));
        }
    }

    // updating is as simple as overwriting the evaluator objects;
    async function update(req, res) {

        res.setHeader("Content-type", "application/json");

        let scraperDetails = req.body,
            { evaluatorObjects, usage, groupIdentifierKey, csvExcludedProps, modelObjectOptions, routeObjectOptions } = scraperDetails,
            { siteName, siteUrl, productBrand } = scraperDetails;
            scraperObject = new Scraper({siteName, siteUrl}, productBrand);

        
        // updating the scraper details in the db...    
        try {
            await scrapersDb.update(req.params.id, { evaluatorObjects, usage, groupIdentifierKey, csvExcludedProps, modelObjectOptions });
            await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, evaluatorObjects);

            res.send({
                message : "We have successfully updated the evaluators of this scraper script.",
                statusOk : true,
                status : 200,
            });  
            
            nodeRestart();
        } catch(err)    {
            res.send(JSON.stringify({
                statusOk : false, 
                message : err.message, 
            }, null, 4)); 
        }
    }


    async function updateScraperDetails(req, res) {

        res.setHeader("Content-type", "application/json");

        let scraperDetails = req.body;

        
        // updating the scraper details in the db...    
        scrapersDb.update(req.params.id, scraperDetails)
        .then(response => {
            console.log(response);
            
            res.send(JSON.stringify({
                statusOk : true, 
                message : "We have successfully updated the scraper details.", 
                data : scraperDetails
            }, null, 4));      
            
            nodeRestart();

        })
        .catch(err => {
            res.send(JSON.stringify({
                statusOk : false, 
                message : err.message, 
            }, null, 4)); 
        }); 
        
    }

    // delete a scraper
    async function deleteOne(req, res)    {
        res.setHeader("Content-type", "application/json");
        try{
            let scraperObject = await scrapersDb.getById(req.params.id),
                {siteName, productBrand} = scraperObject,
                collectionName = `${siteName} ${productBrand}`,
                foundModel = await Model.getModelByName(toUrl(collectionName)),
                productSets = await productSetsDb.getAllFilteredData({productBrand}),
                scrapedFilesPath = path.join(process.cwd(), "data", toUrl(siteName), toUrl(productBrand));
            
            
            scrapersDb.delete(req.params.id)
                .then(async result => {


                    await Scraper.deleteScraper(siteName, productBrand);

                    // if(!foundModel)  {
                    //     throw Error(`Collection Model does not exist.`);
                    // }
                    // await new Promise(resolve => setTimeout(() => {
                    //     mongoose.connection.db.dropCollection(`${foundModel.camelCaseName.toLowerCase()}s`, function(err, result2)    {
                    //         Scraper.deleteScraper(siteName, productBrand);
                    //         resolve();
                    //     });
                    // }, 1500));
                    // for(let productSet of productSets)  {
                    //     await productSetsDb.delete(productSet._id);
                    // }
            
                    // // we need to delete the data first so we can also delete the images...
                    // // we can delete the entire data in the productsBrand folder
                    // if(fileExists(scrapedFilesPath))  {
                    //     await deleteAllInDirPath(scrapedFilesPath);
                    // }

                    res.send(JSON.stringify({message : "We have successfully deleted the scraper.", statusOk : true, status : 200}));

                    nodeRestart();
                })
                .catch(err => {
                    res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4))
                });
            
        }
        catch(err)  {

            res.status(403).send(JSON.stringify({status : 403, message : err.message}, null, 4));
        }
    }

    async function deleteSMR(req, res)  {
        res.setHeader("Content-type", "application/json");
        try{
            let scraperObject = await scrapersDb.getById(req.params.id),
                {siteName, productBrand} = scraperObject,
                collectionName = `${siteName} ${productBrand}`,
                foundModel = await Model.getModelByName(toUrl(collectionName)),
                productSets = await productSetsDb.getAllFilteredData({productBrand}),
                scrapedFilesPath = path.join(process.cwd(), "data", toUrl(siteName), toUrl(productBrand));
            
            
            scrapersDb.delete(req.params.id)
                .then(async result => {


                    await Scraper.deleteScraperSMR(siteName, productBrand);

                    if(!foundModel)  {
                        throw Error(`Collection Model does not exist.`);
                    }
                    await new Promise(resolve => setTimeout(() => {
                        mongoose.connection.db.dropCollection(`${foundModel.camelCaseName.toLowerCase()}s`, function(err, result2)    {
                            Scraper.deleteScraperSMR(siteName, productBrand);
                            resolve();
                        });
                    }, 1500));
                    for(let productSet of productSets)  {
                        await productSetsDb.delete(productSet._id);
                    }
            
                    // we need to delete the data first so we can also delete the images...
                    // we can delete the entire data in the productsBrand folder
                    if(fileExists(scrapedFilesPath))  {
                        await deleteAllInDirPath(scrapedFilesPath);
                    }

                    res.send(JSON.stringify({message : "We have successfully deleted the scraper.", statusOk : true, status : 200}));

                    nodeRestart();
                })
                .catch(err => {
                    res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4))
                });
            
        }
        catch(err)  {

            res.status(403).send(JSON.stringify({status : 403, message : err.message}, null, 4));
        }
    }

    return {
        getAll,
        getOneById,
        getOneByFilter,
        create,
        update,
        deleteOne,
        deleteSMR,
        updateScraperDetails,
        scraperRewriteAll,
        scraperRewrite,
    }
}
