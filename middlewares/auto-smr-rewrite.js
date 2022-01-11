/* 
    this middleware takes care of rewriting all the dynamically
    created modules for the model, route, and middleware for each of the 
    scraper created, and the scraped data gets taken care of as well.

*/

const { nodeRestart } = require("../utilities");
const { scrapersDb } = require("../models");
const Scraper = require("../models/classes/scraper");
const { fileExists, writeFile } = require("../utilities/file-system");
const path = require("path");


module.exports = async function(req, res, next)   {

    try {
        let scrapers = await scrapersDb.getAll(),
            fileProof = path.join(__dirname, "rewritten.txt");
        if(!scrapers)   {
            throw Error("We couldn't rewrite all the scrapers data.");
        }

        if(scrapers.length && !fileExists(fileProof)) {

            for(let scraper of scrapers)    {
                try {
                    let { siteName, siteUrl, productBrand, modelObjectOptions, routeObjectOptions, evaluatorObjects } = scraper,
                        siteResource = {siteName, siteUrl},
                        scraperObject = new Scraper(siteResource, productBrand);
                    
                    await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, evaluatorObjects);
                    // console.log("we're rewriting... no more deleting...")
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
            console.log("Pre requisites have been re-rewritten");

            writeFile(fileProof, JSON.stringify({fileRewrite : true, author : "Michael Norward"}))
                .then(res => {
                    nodeRestart();
                })
                .catch(err => {
                    console.log(err);
                })


            
            
        } else  {
            console.log("Pre requisites have been checked... we have it...");
            next();
        }
        
    }
    catch(err)  {
        console.log(err);
        next();
    }
    
}