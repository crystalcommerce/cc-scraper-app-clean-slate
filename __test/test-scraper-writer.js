const path = require("path");
const Scraper = require("../models/classes/scraper");
const { readFile } = require("../utilities/file-system");

(async function(){


    let scraperObject = new Scraper("Trading Card Game", "M.Y.San", "https://www.mysan.com", "M.Y.San Skyflakes");

    console.log(scraperObject);


    let modelObjectOptions = {
            "schema": {
                "imagePaths": {
                    "type": "Array",
                    "required": "false"
                },
                "imageUris": {
                    "type": "Array",
                    "required": "false"
                },
                "productName": {
                    "type": "String",
                    "required": "false"
                },
                "productImage": {
                    "type": "String",
                    "required": "false"
                },
                "productNumber" : {
                    "type": "String",
                    "required": "false"
                },
                "multiFaced": {
                    "type": "String",
                    "required": "false"
                },
                "productUri": {
                    "type": "String",
                    "required": "false"
                }
            },
            initializedProps : [
                {
                    friendlyUrlProps: []
                },
                {
                    immutableProps: []
                },
                {
                    uniqueProps: [
                        "productUri"
                    ]
                }
            ]
        },
        routeObjectOptions = {
            "recordName": "Skyflakes crackers",
            "pluralized": false
        }, 
        code = await readFile(path.join(__dirname, "flesh-and-blood-sample", "sample-code.js"))
        scriptCode = code.data;
    

    let createScraperResult = await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, scriptCode);
    
        console.log(createScraperResult);

}())