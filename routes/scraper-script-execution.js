const router = require("express").Router();
const { controllers : { scraperScriptExecution } } = require("../controllers")();
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...scraperScriptExecution.map(item => item()));


module.exports = function()   {

    router.post("/initialize/:id", getMiddleWaresByName("initialize"));

    router.post("/execute-script/:scriptId", getMiddleWaresByName("executeScript")); // we can immediately save to the database,

    router.get("/check-running-script/:scriptId", getMiddleWaresByName("checkRunningScript")) // check if a script is currently running..

    router.get("/abort-script/:scriptId", getMiddleWaresByName("abortScript")); // we only need the script id; haven't tested this yet...

    router.post("/save-data/:scriptId", getMiddleWaresByName("saveDataToDatabase")); // we need to send the apiRoute back

    router.get("/create-csv/:scriptId", getMiddleWaresByName("createCsvFile")); // we then return the created csv file along with the images...

    router.post("/create-csv-saved-data/", getMiddleWaresByName("createCsvSavedData")); // we then return the created csv file along with the images...

    router.post("/remove-scraper-script-object/:scriptId", getMiddleWaresByName("removeGlobalScaperObject")) // delete some of the old scraper object

    

    return router;
    
}

