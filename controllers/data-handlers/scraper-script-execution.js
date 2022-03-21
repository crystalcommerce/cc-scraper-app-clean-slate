const path = require("path");
const axios = require("axios");
const uuid = require("mnm-uuid");
const { getScraper } = require("../../core");
const { scrapersDb, productSetsDb } = require("../../models");
const { dynamicRequire } = require("../../utilities");



module.exports = function() {

    async function initialize(req, res, next) {

        let status;

        try{
            let { id } = req.params,
                StandardScraperScript = getScraper(null),
                foundScraperObjectFromDb = await scrapersDb.getById(id);
            
            // check if there's a scraper with the id provided in the params.
            if(!foundScraperObjectFromDb)   {
                status = 404;
                throw Error(`We didn't get a scraper with an id of ${id}`);
            }

            let { scriptFilePath, modelFilePath } = foundScraperObjectFromDb,
                scriptObject = require(path.join(process.cwd(), scriptFilePath)),
                modelInstanceDb = require(path.join(process.cwd(), modelFilePath));
                scraperScript = new StandardScraperScript({...foundScraperObjectFromDb, scriptObject, ...req.body});

            // // test run
            // console.log(modelInstanceDb, scriptObject);
            await scraperScript.executeScript();
            let createResult = await modelInstanceDb.createMultiple(scraperScript.productObjects);
            // we get the model using the modelFilePath

            console.log(createResult);


            req.requestResult = {data : createResult, status : 200};
            // req.requestResult = {status : 200};
            next();

        } catch(err)    {
            req.requestResult = {status, message : err.message};
            next();
        }

    }

    async function executeScript(req, res, next)  {

    }

    async function checkRunningScript(req, res, next)   {

    }

    async function abortScript(req, res, next)  {

    }

    async function createCsvFile(req, res, next)    {

    }

    async function removeGlobalScaperObject(req, res, next) {

    }

    async function saveDataToDB(req, res, next) {

    }


    return {
        initialize,
        executeScript,
        checkRunningScript,
        abortScript,
        createCsvFile,
        removeGlobalScaperObject,
        saveDataToDB,
    }
}