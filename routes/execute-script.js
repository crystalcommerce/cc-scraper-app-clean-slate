const express = require("express");
const router = express.Router();
const { executeScraper, killProcess, saveDataToDatabase, createCsvFile, createScraperScript, createCsvSavedData, removeGlobalScaperObject } = require("../controllers/scraper-script");

router.post("/script/create-script/:id", createScraperScript);

router.post("/script/execute-script/:scriptId", executeScraper); 

router.post("/script/save-data/:scriptId", saveDataToDatabase); // we need to send the apiRoute back

router.get("/script/kill-script-processes/:scriptId", killProcess); // we only need the script id; haven't tested this yet...

router.get("/script/create-csv/:scriptId", createCsvFile); // we then return the created csv file along with the images...

router.post("/script/create-csv-saved-data/", createCsvSavedData); // we then return the created csv file along with the images...

router.post("/script/remove-scraper-object/:scriptId", removeGlobalScaperObject)

module.exports = router;