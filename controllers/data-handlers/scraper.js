const mongoose = require("mongoose");
const path = require("path");
const { toUrl, toCapitalizeAll, toNormalString } = require("../../utilities/string");

// modelInstances
const dbInstances = require("../../models");
const { scrapersDb, productSetMetaDb, productSetsDb } = dbInstances;

// classes
const Scraper = require("../../models/classes/scraper");
const Model = require("../../models/classes/model");
const { deleteAllInDirPath, fileExists } = require("../../utilities/file-system");

// utility
const { nodeRestart } = require("../../utilities");


module.exports = function()   {
    
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
            next();
        }

    }

    // get one by id;
    async function getOneById(req, res, next) {
        
        try {
            let result = await scrapersDb.getById(req.params.id);
            if(!result) throw Error(`No ${scrapersDb.recordName} was found.`);

            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
    }

    // getOneByFilter
    async function getOneByFilter(req, res, next)    {
        
        try {
            let result = await scrapersDb.getOneByFilter(req.query);
            if(!result) throw Error(`No ${scrapersDb.recordName} was found.`);

            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }

    }

    // create
    async function create(req, res, next)   {
        try{

            let { 
                    productCategory,
                    siteName,
                    siteUrl, 
                    productBrand, 
                    imagePropName,
                    imageNameObject,
                    csvExcludedProps,
                    modelObjectOptions, 
                    routeObjectOptions, 
                    scriptCode,
                    usage,
                    groupIdentifierKey,
                } = req.body,
                scraperObject = new Scraper(productCategory, siteName, siteUrl, productBrand),
                scriptFilePath,
                apiRoute = `/api/${scraperObject.routeObject.routeName}`;

            await scraperObject.scriptObject.getScriptFilePath();
            scriptFilePath = scraperObject.scriptObject.scriptFilePath;

            // check first if we already have a scraper with the same 
                // - productCategory,
                // - siteUrl,
                // - siteName,
                // - productBrand,
            let foundScraperDetails = await scrapersDb.getOneByFilter({
                productCategory,
                siteUrl,
                siteName,
                productBrand,
            });

            if(foundScraperDetails) {
                throw Error(`We already have a scraper with the same product category : ${productCategory}, site URL : ${siteUrl}, site name : ${siteName}, and product brand : ${productBrand}.`);
            }


            // create a productsMeta data; // we're not checkiing if there's already a resource, it will fail if there is already;
            // but the process still has to go on.
            
            let productMeta = {productCategory, siteName, siteUrl, productBrand};
            
            await Promise.all(Object.keys(productMeta).map(async key => {
                await productSetMetaDb.create({
                    metaKey : key,
                    metaValue : productMeta[key],
                });
            }))


            

            let createScraperResult = await scrapersDb.create({
                productCategory,
                siteName,
                siteUrl,
                productBrand,
                imagePropName,
                imageNameObject,
                scriptCode,
                csvExcludedProps,
                scriptFilePath,
                usage,
                apiRoute,
                groupIdentifierKey,
                modelObjectOptions,
                routeObjectOptions,
            });

            if(createScraperResult.statusOk === false)   {
                throw Error("We were unable to save the Scraper details.");
            }

            // we create the files here;

            let createFileResult = await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, scriptCode);

            if(createFileResult.statusOk === false) {
                throw Error(createFileResult.message);
            }


            req.requestResult = {status : 200, message : "We have successfully created the necessary scraper files, and have also saved the scraper details into our database.", data : createScraperResult.data};

            next();

        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};

            nodeRestart();

            next();
        }
    }

    async function scraperRewriteAll(req, res, next) {
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

    async function scraperRewrite(req, res, next) {
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
    async function update(req, res, next) {

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


    async function updateScraperDetails(req, res, next) {

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
    async function deleteScraperScript(req, res, next)    {
        
        try{
            let scraperObject = await scrapersDb.getById(req.params.id),
                { siteName, productBrand } = scraperObject,
                collectionName = `${siteName} ${productBrand}`,
                foundModel = await Model.getModelByName(toUrl(collectionName)),
                productSets = await productSetsDb.getAllFilteredData({productBrand}),
                scrapedFilesPath = path.join(process.cwd(), "data", toUrl(siteName), toUrl(productBrand));
            

            // delete just the script
            let deleteResult = Scraper.deleteScraperScript(path.join(process.cwd(), scraperObject.scriptFilePath));

            
            // scrapersDb.delete(req.params.id)
            //     .then(async result => {


            //         await Scraper.deleteScraper(siteName, productBrand);

            //         // if(!foundModel)  {
            //         //     throw Error(`Collection Model does not exist.`);
            //         // }
            //         // await new Promise(resolve => setTimeout(() => {
            //         //     mongoose.connection.db.dropCollection(`${foundModel.camelCaseName.toLowerCase()}s`, function(err, result2)    {
            //         //         Scraper.deleteScraper(siteName, productBrand);
            //         //         resolve();
            //         //     });
            //         // }, 1500));
            //         // for(let productSet of productSets)  {
            //         //     await productSetsDb.delete(productSet._id);
            //         // }
            
            //         // // we need to delete the data first so we can also delete the images...
            //         // // we can delete the entire data in the productsBrand folder
            //         // if(fileExists(scrapedFilesPath))  {
            //         //     await deleteAllInDirPath(scrapedFilesPath);
            //         // }

            //         res.send(JSON.stringify({message : "We have successfully deleted the scraper.", statusOk : true, status : 200}));

            //         nodeRestart();
            //     })
            //     .catch(err => {
            //         res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4))
            //     });
            
        }
        catch(err)  {

            res.status(403).send(JSON.stringify({status : 403, message : err.message}, null, 4));
        }
    }

    async function deleteSMR(req, res, next)  {
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
