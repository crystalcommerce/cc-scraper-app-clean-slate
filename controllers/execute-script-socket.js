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

    async function executeScraper(data)    {

        let { scraperId } = data;

        console.log(scraperId);

        try {
            let scraperData = await scrapersDb.getById(scraperId),
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
                groupIdentifier = data.groupIdentifier ? data.groupIdentifier : "",
                scraperOptions = { ...data, productSet : groupIdentifier, siteName, siteUrl, productBrand, imagePropName, imageNameObject, csvExcludedProps },
                getScraperObject = require(`../${scriptFilePath}`),
                scraperScript = getScraperObject(io, scraperOptions);

            let scriptId = crypto.randomBytes(4).toString("hex");
                
    
            // CREATE THE DIRPATH 
            await scraperScript.createDataDirPath();
    
            scraperScript.scriptId = scriptId;
            
            console.log(scraperScript);

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
                    startingUrl : data.productsListEvaluatorUris[0].url,
                }
            });
            

            console.log(scriptId);
            

            io.emit("script-initialization-ready", {
                scriptId,
                message : "Script initialization ready.",
                status : 200,
            });
            

            // executing all remaining evaluators;
            // Scraping all data recursively up until 5 times of recursive scraping or at least 5 unscraped data left;
            await scraperScript.executeEvaluators();
    
            // bulk image downloading...
            await scraperScript.downloadImagesByBulk();
            
        } 
        catch(err) {    
            // return data here;
            console.log(err);
            io.emit("script-initialization-ready", {
                message : "Script initialization ready.",
                status : 200,
            });
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
    
    return { executeScraper };

}