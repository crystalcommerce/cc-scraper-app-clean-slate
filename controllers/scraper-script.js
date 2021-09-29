const crypto = require("crypto");
const { scrapersDb, productSetsDb } = require("../models");
const fileZipper = require("../core/file-zipper");
const { fileExists, createDirPath } = require("../utilities/file-system");
const path = require("path");
const csvDataWriter = require("../core/csv-data-writer");
const Model = require("../models/classes/model");
const allModels = require("../models");
const { toUrl } = require("../utilities/string");

module.exports = function(io)   {

    async function createScraperScript(req, res)    {
        res.setHeader("Content-type", "application/json");

        try {
            let scraperData = await scrapersDb.getById(req.params.id),
                {   
                    siteName,
                    productBrand,
                    siteUrl,
                    imagePropName,
                    imageNameObject,
                    csvExcludedProps,
                    scriptFilePath, 
                    apiRoute,
                    groupIdentifierKey,
                } = scraperData,
                groupIdentifier = req.body.groupIdentifier ? req.body.groupIdentifier : "",
                scraperOptions = { ...req.body, productSet : groupIdentifier, siteName, siteUrl, productBrand, imagePropName, imageNameObject, csvExcludedProps },
                getScraperObject = require(`../${scriptFilePath}`),
                scraperScript = getScraperObject(io, scraperOptions);


            let scriptId = crypto.randomBytes(4).toString("hex");
                
    
            // CREATE THE DIRPATH 
            await scraperScript.createDataDirPath();
    
            scraperScript.scriptId = scriptId;
              
            // we save the current running scraperScript in the global variables;
            await global.currentRuninngScripts.push({
                instance : scraperScript, 
                scriptId, 
                productSet : {
                    groupIdentifier,
                    groupIdentifierKey,
                    siteName,
                    productBrand,
                    apiRoute,
                    dataDirPath : scraperScript.dataDirPath,
                    startingUrl : req.body.productsListEvaluatorUris[0].url,
                    csvExcludedProps,
                }
            });
    
            res.send(JSON.stringify({
                scriptId,
            }, null, 4));
        } 
        catch(err) {    
            let result = JSON.stringify({
                message : err.message,
                status : 404,
            }, null, 4);
            res.status(404).send(result);
        }
        
    }
    
    // this will be the thing that executes the scraper function
    async function executeScraper(req, res) {
    
        res.setHeader("Content-type", "application/json");
        let scraperScript = null;
        try {
            let savedScript = await global.currentRuninngScripts.find(script => script.scriptId === req.params.scriptId);
            scraperScript = savedScript.instance;
    
            // sending back the response
            res.send(JSON.stringify({
                statusOk : true,
                message : "Currently running the script.",
                data : {scrapedProducts : scraperScript.productObjects, unscrapedProducts : scraperScript.unscrapedData}
            }, null, 4));
        }
        catch(err)  {
            let result = JSON.stringify({
                message : err.message,
                status : 404,
                err,
            }, null, 4);
            res.status(404).send(result);
        }
    
        if(scraperScript)    {
            // executing all remaining evaluators;
            // Scraping all data recursively up until 5 times of recursive scraping or at least 5 unscraped data left;
            await scraperScript.executeEvaluators();
    
            // bulk image downloading...
            await scraperScript.downloadImagesByBulk();
            
        }
    }
    
    
    async function checkRunningScript(req, res) {
        res.setHeader("Content-type", "application/json");
        let scraperScript = null;
    
        try {
            let savedScript = await global.currentRuninngScripts.find(script => script.scriptId === req.params.scriptId);
                scraperScript = savedScript.instance;
    
            if(scraperScript.scriptRunning)   {
                res.send(JSON.stringify({
                    statusOk : true,
                    message : "Currently running the script.",
                    scriptRunning : scraperScript.scriptRunning,
                    data : {scrapedProducts : scraperScript.productObjects, unscrapedProducts : scraperScript.unscrapedData}
                }, null, 4));
            } else  {
                res.send(JSON.stringify({
                    statusOk : true,
                    message : "Script has finished running.",
                    scriptRunning : false,
                    data : {scrapedProducts : scraperScript.productObjects, unscrapedProducts : scraperScript.unscrapedData}
                }, null, 4));
            }
        }
        catch(err)  {
            let result = JSON.stringify({
                message : err.message,
                status : 404,
                err,
            }, null, 4);
            res.status(404).send(result);
        }
    }
    
    
    async function killProcess(req, res)    {
        res.setHeader("Content-type", "application/json");
    
        try {
            let savedScript = await global.currentRuninngScripts.find(script => script.scriptId === req.params.scriptId);
                scraperScript = savedScript.instance;
    
            if(scraperScript)   {
                // need to kill the process here... // currently not working
    
                res.status(200).send(JSON.stringify({
                    statusOk : true,
                    message : "Scraping has been canceled."
                }, null, 4));
            } else  {
                res.status(404);
                throw Error("We couldn't find the scraper you were trying to cancel");
            }
            
        }
        catch(err) {
    
            res.send(JSON.stringify({
                statusOk : false,
                message : err.message,
            }, null, 4));
        }
        
    }
    
    async function createCsvFile(req, res)  {
        res.setHeader("Content-type", "application/json");
    
        try {
            let savedScript = await global.currentRuninngScripts.find(script => script.scriptId === req.params.scriptId),
                scraperScript = savedScript.instance;
    
            if(scraperScript)   {
                // write the csv file here...
                await scraperScript.writeProductObjectsToCsv();
    
                let {dataDirPath} = scraperScript,
                    targetPath = path.join(process.cwd(), dataDirPath),
                    destinationPath = await createDirPath(process.cwd(), "data", "zipped-files");
                
                // compress file in zip
                fileZipper(targetPath, destinationPath, (fileObject) => {
                    let {statusOk, message, filePath, fileName} = fileObject,
                        zippedFile = path.join(filePath, fileName), 
                        zippedDirPath = path.join("data", "zipped-files", fileName);
                
                    if(!statusOk)   {
                        throw Error(message);
                    }
                    
                    try{
                        if(!fileExists(zippedFile)) {
                            throw Error(`This file "${fileName}" does not exist.`);
                        }
                        res.send(JSON.stringify({
                            statusOk : true,
                            message : "We have successfully created a zipped file.",
                            filePath : zippedDirPath,
                        }));
                    } catch(err)    {
    
                        res.setHeader("Content-type", "application/json");
                        res.status(404).send(JSON.stringify({statusOk : false, status : 404, message : `File Not Found : ${err.message}`}, null, 4));
                    }
                });
    
                
            } else  {
                res.status(404);
                throw Error("We couldn't find the scraped data you were trying to save into csv file.");
            }
        }
        catch(err) {
    
            res.send(JSON.stringify({
                statusOk : false,
                message : err.message,
            }, null, 4));
        }
    }
    
    
    async function removeGlobalScaperObject(req, res)   {
        try {
            let savedScript = await global.currentRuninngScripts.find(script => script.scriptId === req.params.scriptId),
            scraperScript = savedScript.instance;
    
            global.currentRuninngScripts = await global.currentRuninngScripts.filter(script => script.scriptId !== req.params.scriptId);
    
            delete(scraperScript);
        }
        catch(err)  {
            res.send(JSON.stringify({
                statusOk : false,
                message : err.message,
            }, null, 4));
        }
    }
    
    
    async function saveDataToDatabase(req, res) {
        res.setHeader("Content-type", "application/json");
    
        try {
            let { scriptId } = req.params,
                { apiRoute, scraperId } = req.body,
                savedScript = await global.currentRuninngScripts.find(script => script.scriptId === scriptId),
                scraperScript = savedScript.instance,
                productSet = savedScript.productSet,
                { groupIdentifier, siteName, productBrand, dataDirPath, groupIdentifierKey } = productSet,
                foundProductSetData;
    
    
            // querying the productSetData...
            foundProductSetData = await productSetsDb.getOneByFilter({groupIdentifier, siteName, productBrand, dataDirPath});
    
            // we check if it's already saved in the database...
            if(!foundProductSetData)    {
                await productSetsDb.create(productSet);
            }
    
            if(scraperScript)   {
                
                try{
    
                    // saving the data simultaneously into our database
                    let promises = scraperScript.productObjects.map(product => {
                        return async () => {
                            let foundModel = await Model.getModelByName(apiRoute.replace("/api/", "")),
                                modelInstance = require(path.join(process.cwd(), "models", "dynamic", foundModel.fileName)),
                                foundScraper = await scrapersDb.getById(scraperId),
                                productUrlProp = foundScraper ? foundScraper.evaluatorObjects.find(item => item.type === "single").productUrlProp : null,
                                foundProduct = productUrlProp ? await modelInstance.getOneByFilter({[groupIdentifierKey] : groupIdentifier, [productUrlProp] : product[productUrlProp]}) : null,
                                result;
                            
                            if(foundProduct)    {
    
                                for(let key in product)    {
                                    if(!product[key])   {
                                        delete(product[key]);
                                    }
                                }
    
                                result = await modelInstance.update(foundProduct.id, product);
                            } else  {
                                result = await modelInstance.create(product);
                            }      
                            return result;
                        }
                    });
    
                    // saving the data simultaneously into our database
                    await Promise.all(promises.map(async (item) => await item()));
    
    
                    res.status(200).send(JSON.stringify({
                        statusOk : true,
                        message : "We have successfully saved the scraped data into our database.",
                    }, null, 4));
                } 
                catch(err)  {
                    res.status(403).send(JSON.stringify({
                        statusOk : false,
                        message : err.message,
                    }, null, 4));
                }
                
            } else  {
                throw Error("We couldn't find the data you were trying to save in our database.");
            }
            
            // remove the saved script from global;
    
            // global.currentRuninngScripts = await global.currentRuninngScripts.filter(script => script.scriptId !== req.params.scriptId);
            // delete(scraperScript);
    
        }
        catch(err) {
    
            res.send(JSON.stringify({
                statusOk : false,
                message : err.message,
            }, null, 4));
        }
    }
    
    async function createCsvSavedData(req, res) {
        res.setHeader("Content-type", "application/json");  
        let { dirPath, siteName, productBrand, groupIdentifierKey, groupIdentifier : productSet, apiRoute, csvExcludedProps } = req.body,
            targetPath = path.join(process.cwd(), dirPath); // to be replaced...
    
    
        try {
    
            if(!fileExists(targetPath))  {
                throw Error(`The path to the content doesn't exist : ${targetPath}`);
            }
    
            let destinationPath = await createDirPath(process.cwd(), "data", "zipped-files"),
                foundModel = await Model.getModelByName(apiRoute.replace("/api/", "")),
                modelInstance = require(path.join(process.cwd(), "models", "dynamic", foundModel.fileName)),
                data = await modelInstance.getAllFilteredData({[groupIdentifierKey] : productSet}),
                productObjects = data.map(item => ({...item._doc}));
                csvFileName = toUrl(`${siteName} ${productBrand} ${productSet}`),
                results = productObjects.every(item => Array.isArray(item.imagePaths));
    
            if(results) {
                try {
                    await csvDataWriter(targetPath, csvFileName, productObjects, [...csvExcludedProps, "imagePaths"], true);
                    // compress file in zip
                    fileZipper(targetPath, destinationPath, (fileObject) => {
                        let {statusOk, message, filePath, fileName} = fileObject,
                            zippedFile = path.join(filePath, fileName), 
                            zippedDirPath = path.join("data", "zipped-files", fileName);
    
    
                        if(!statusOk)   {
                            throw Error(message);
                        }
                        
                        try{
                            if(!fileExists(zippedFile)) {
                                throw Error(`This file "${fileName}" does not exist.`);
                            }
                            res.send(JSON.stringify({
                                statusOk : true,
                                message : "We have successfully created a zipped file.",
                                filePath : zippedDirPath,
                            }));
                        } catch(err)    {
                            res.status(403).send(JSON.stringify({statusOk : false, status : 403, message : err.message}, null, 4));
                        }
                    });
                }
                catch(err)  {
                    res.status(403).send(JSON.stringify({statusOk : false, status : 403, message : err.message}, null, 4));
                }
                
    
                
            } else  {
                throw Error("These are not product objects...")
            }
    
        } 
        catch(err)  {
            res.status(403).send(JSON.stringify({
                statusOk : false,
                message : err.message,
            }));
        }
    
    
    }
    
    
    return { executeScraper, killProcess, createCsvFile, saveDataToDatabase, createScraperScript, createCsvSavedData, removeGlobalScaperObject, checkRunningScript };
}
