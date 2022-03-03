const express = require("express");
const router = express.Router();
const executeScriptController = require("../controllers/scraper-script");
const { executeScraper, killProcess, saveDataToDatabase, createCsvFile, createScraperScript, createCsvSavedData, removeGlobalScaperObject, checkRunningScript } = executeScriptController();


module.exports = function(...middleWares)   {

    router.post("/create-script/:id", createScraperScript, ...middleWares);

    router.post("/execute-script/:scriptId", executeScraper, ...middleWares); 

    router.post("/save-data/:scriptId", saveDataToDatabase, ...middleWares); // we need to send the apiRoute back

    router.get("/kill-script-processes/:scriptId", killProcess, ...middleWares); // we only need the script id; haven't tested this yet...

    router.get("/create-csv/:scriptId", createCsvFile, ...middleWares); // we then return the created csv file along with the images...

    router.post("/create-csv-saved-data/", createCsvSavedData, ...middleWares); // we then return the created csv file along with the images...

    router.post("/remove-scraper-object/:scriptId", removeGlobalScaperObject, ...middleWares) // delete some of the old scraper object

    router.get("/check-running-script/:scriptId", checkRunningScript, ...middleWares) // check if a script is currently running..


    return router;
    
}

