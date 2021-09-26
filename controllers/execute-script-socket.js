const crypto = require("crypto");
const { scrapersDb } = require("../models");

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
            io.emit("script-initialization-error", {
                message : err.message,
                status : 404,
            });
        }
        
    }
    
    return { executeScraper };

}