/*
    The purpose of this file is to make sure that all active scraper files are written to its latest update whenever the app starts.
    The app only needs to start once, and when we add more scrapers into the app, it would never require restarting the app. Each scraper script that gets used when scraping a product set, is composed of three modules/files :  the dynamic route module, the dynamic model module, and the script module.
*/

const { scrapersDb, } = require("../models");
const Scraper = require("../models/classes/scraper");

module.exports = async function() {
    try {
        let scraperObjectsFromDb = await scrapersDb.getAllFilteredData({isActive : true}),
            promises = [];

        if(!scraperObjectsFromDb.length)   {
            throw Error("We do not have any stored scrapers to rewrite.")
        }
        

        for(let scraperObjectFromDb of scraperObjectsFromDb)    {
            promises.push(async function() {
                let scraperObject = await Scraper.instantiateByObject(scraperObjectFromDb),
                    { modelObjectOptions, routeObjectOptions, scriptCode } = scraperObjectFromDb;

                return await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, scriptCode);
            })
        }
            

        let rewriteAllResult = await Promise.all(promises.map(async callback => await callback()));

        console.log(rewriteAllResult);

    } catch(err)    {
        console.log(err.message);
    }
}