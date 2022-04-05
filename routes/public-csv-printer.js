const { csvDataWriter } = require("../core");
const router = require("express").Router();
const modelInstanceDb = require("../models/dynamic/watch-charts");
const { createDirPath } = require("../utilities/file-system");
const { toUrl } = require("../utilities/string");
const bulkImageDownlaoder = require("../core/template/bulk-image-downloader");
const downloadImageFn = require("../core/template/download-image");


module.exports = function()   {

    router.get("/print-data?", async function(req, res, next) {

        try {
            let { productBrand, pathLocation } = req.query,
            productObjects = await modelInstanceDb.getAllFilteredData({productBrand}),
            filePath = await createDirPath(pathLocation);
            // await bulkImageDownlaoder(pathLocation, productObjects, downloadImageFn, "productImage", {split : [], shared : ["productName"]}, 25);

            res.setHeader("Content-type", "application/json").send(JSON.stringify({
                statusOk : true,
                message : "We are now creating the csv file.",
                status : 200
            }, null, 4));

            await bulkImageDownlaoder(pathLocation, productObjects, "productImage",  {split : [], shared : ["productName"]}, i = 0);


            await csvDataWriter(filePath, toUrl(productBrand), productObjects, ["_id", "dateCreated", "imageUris", "__v"], true);

            

        } catch(err)    {
            res.status(403).setHeader("Content-type", "application/json").send(JSON.stringify({
                message : err.message,
                status : 403,
                statusOk : false,
            }, null, 4));

        }

    });

    return router;
    
}

