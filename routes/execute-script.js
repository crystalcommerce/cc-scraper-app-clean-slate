const router = require("express").Router();
const { controllers : { scraperScript } } = require("../controllers");
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...scraperScript.map(item => item()));


module.exports = function()   {

    router.post("/create-script/:id", getMiddleWaresByName("createScraperScript"));

    router.post("/execute-script/:scriptId", getMiddleWaresByName("executeScraper")); 

    router.post("/save-data/:scriptId", getMiddleWaresByName("saveDataToDatabase")); // we need to send the apiRoute back

    router.get("/kill-script-processes/:scriptId", getMiddleWaresByName("killProcess")); // we only need the script id; haven't tested this yet...

    router.get("/create-csv/:scriptId", getMiddleWaresByName("createCsvFile")); // we then return the created csv file along with the images...

    router.post("/create-csv-saved-data/", getMiddleWaresByName("createCsvSavedData")); // we then return the created csv file along with the images...

    router.post("/remove-scraper-object/:scriptId", getMiddleWaresByName("removeGlobalScaperObject")) // delete some of the old scraper object

    router.get("/check-running-script/:scriptId", getMiddleWaresByName("checkRunningScript")) // check if a script is currently running..


    return router;
    
}

