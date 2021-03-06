const crypto = require("crypto");
const path = require("path");
const { scrapersDb, productSetsDb } = require("../../models");
const fileZipper = require("../../core/file-zipper");
const { fileExists, createDirPath } = require("../../utilities/file-system");
const csvDataWriter = require("../../core/csv-data-writer");
const Model = require("../../models/classes/model");
const { toUrl } = require("../../utilities/string");

module.exports = function()   {

    async function createScraperScript(req, res, next)    {
        try {
            let scraperData = await scrapersDb.getById(req.params.id),
                {   
                    productCategory,
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
                scraperOptions = { ...req.body, productSet : groupIdentifier, productCategory, siteName, siteUrl, productBrand, imagePropName, imageNameObject, csvExcludedProps },
                absoluteScriptFilePath = path.resolve("..", "..", `${scriptFilePath}.js`),
                getScraperObject = require(absoluteScriptFilePath), // this is where we get the scriptObject;
                scraperScript = getScraperObject(io, scraperOptions); // TODO : configure this

            delete require.cache([absoluteScriptFilePath]);  
            let scriptId = crypto.randomBytes(4).toString("hex");
                
    
            // CREATE THE DIRPATH 
            await scraperScript.createDataDirPath();
    
            scraperScript.scriptId = scriptId;
              
            // we save the current running scraperScript in the global variables;
            await global.currentRunningScripts.push({
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
            
            req.requestResult = {data : scriptId, status : 200};
            next();
        } 
        catch(err) {    
            req.requestResult = {
                message : err.message,
                status : 404,
            };
            next();
        }
        
    }
    
    // this will be the thing that executes the scraper function
    async function executeScraper(req, res) {
    
        try {
            let savedScript = await global.currentRunningScripts.find(script => script.scriptId === req.params.scriptId),
                scraperScript = savedScript.instance;
    
            // sending back the response

            if(scraperScript)    {
                // executing all remaining evaluators;
                // Scraping all data recursively up until 5 times of recursive scraping or at least 5 unscraped data left;
                await scraperScript.executeEvaluators();
        
                // bulk image downloading...
                await scraperScript.downloadImagesByBulk();
                
            }

            req.requestResult = {
                statusOk : true,
                status : 200,
                message : "Currently running the script.",
                data : {scrapedProducts : scraperScript.productObjects, unscrapedProducts : scraperScript.unscrapedData}
            }
            next();

        }
        catch(err)  {
            req.requestResult = {
                message : err.message,
                status : 404,
            };
            next();

        }
    
        
    }
    
    
    async function checkRunningScript(req, res) {
    
        try {
            let savedScript = await global.currentRunningScripts.find(script => script.scriptId === req.params.scriptId),
                scraperScript = savedScript.instance;
    
            if(scraperScript.scriptRunning)   {
                req.requestResult = {
                    statusOk : true,
                    message : "Currently running the script.",
                    scriptRunning : scraperScript.scriptRunning,
                    data : {scrapedProducts : scraperScript.productObjects, unscrapedProducts : scraperScript.unscrapedData}
                };
            } else  {
                req.requestResult = {
                    statusOk : true,
                    status : 200,
                    message : "Script has finished running.",
                    scriptRunning : false,
                    data : {scrapedProducts : scraperScript.productObjects, unscrapedProducts : scraperScript.unscrapedData}
                };
            }

            next();
        }
        catch(err)  {
            req.requestResult = {
                message : err.message,
                status : 404,
            };

            next();
        }
    }
    
    
    async function killProcess(req, res)    {
    
        try {
            let savedScript = await global.currentRunningScripts.find(script => script.scriptId === req.params.scriptId);
                scraperScript = savedScript.instance;

    
            if(scraperScript)   {
                // need to kill the process here... // currently not working

                scraperScript.cancelScraper();
    
                req.requestResult = {
                    statusOk : true,
                    status : 200,
                    message : "Scraping has been canceled."
                };
            } else  {
                throw Error("We couldn't find the scraper you were trying to cancel");
            }
            
        }
        catch(err) {
    
            req.requestResult = {
                statusOk : false,
                status : 404,
                message : err.message,
            };
        }
        
    }
    
    async function createCsvFile(req, res)  {
    
        try {
            let savedScript = await global.currentRunningScripts.find(script => script.scriptId === req.params.scriptId),
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
                        req.requestResult = {
                            statusOk : true,
                            status : 200,
                            message : "We have successfully created a zipped file.",
                            filePath : zippedDirPath,
                        };
                    } catch(err)    {
    
                        req.requestResult = {statusOk : false, status : 404, message : `File Not Found : ${err.message}`};
                    }
                });
    
                
            } else  {
                throw Error("We couldn't find the scraped data you were trying to save into csv file.");
            }
        }
        catch(err) {
    
            req.requestResult = {
                statusOk : false,
                status : 404,
                message : err.message,
            };
        }
    }
    
    
    async function removeGlobalScaperObject(req, res)   {

        try {
            let savedScript = await global.currentRunningScripts.find(script => script.scriptId === req.params.scriptId),
            scraperScript = savedScript.instance;
    
            global.currentRunningScripts = await global.currentRunningScripts.filter(script => script.scriptId !== req.params.scriptId);
    
            delete(scraperScript);
            req.requestResult = {
                statusOk : true,
                status : 200,
                message : `We have successfully deleted the script id : ${scraperScript.scriptId}, from the current running scripts`,
            };
        }
        catch(err)  {
            req.requestResult = {
                statusOk : false,
                status : 403,
                message : err.message,
            };
        }
    }
    
    
    async function saveDataToDatabase(req, res) {
    
        try {
            let { scriptId } = req.params,
                { apiRoute, scraperId } = req.body,
                savedScript = await global.currentRunningScripts.find(script => script.scriptId === scriptId),
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
    
                // saving the data simultaneously into our database
                let promises = scraperScript.productObjects.map(product => {
                    return async () => {
                        let foundModel = await Model.getModelByName(apiRoute.replace("/api/", "")),
                            modelInstance = require(path.join(process.cwd(), "models", "dynamic", foundModel.fileName)),
                            foundProduct = await modelInstance.getOneByFilter(product),
                            result;
                    
                        if(foundProduct)        {
                            
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


                req.requestResult = {
                    statusOk : true,
                    status : 200,
                    message : "We have successfully saved the scraped data into our database.",
                };
                
            } else  {
                throw Error("We couldn't find the data you were trying to save in our database.");
            }
    
        }
        catch(err) {

            req.requestResult = {
                statusOk : false,
                status : 404,
                message : err.message,
            };
        }
    }
    
    async function createCsvSavedData(req, res) {

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
                let csvWriteResult = await csvDataWriter(targetPath, csvFileName, productObjects, [...csvExcludedProps, "imagePaths"], true),
                    zippedDirectoryResult = await fileZipper(targetPath, destinationPath);
                
                
            } else  {
                throw Error("These are not product objects...")
            }
    
        } 
        catch(err)  {
            req.requestResult = {statusOk : false, status : 403, message : err.message};
        }
    
    
    }
    
    
    return { executeScraper, killProcess, createCsvFile, saveDataToDatabase, createScraperScript, createCsvSavedData, removeGlobalScaperObject, checkRunningScript };
}
