const { csvDataWriter } = require("../core");
const router = require("express").Router();
const modelInstanceDb = require("../models/dynamic/davesgarden-plants");
const { createDirPath } = require("../utilities/file-system");
const { toUrl } = require("../utilities/string");
const bulkImageDownloader = require("../core/template/bulk-image-downloader");
const downloadImageFn = require("../core/template/download-image");


module.exports = function()   {

    router.get("/print-data?", async function(req, res, next) {

        try {
            let { category, pathLocation } = req.query,
                productObjects = await modelInstanceDb.getAllFilteredData({category}), // this should be queried dynamically... not hardcoded...
                filePath = await createDirPath(pathLocation);
  

            // await bulkImageDownlaoder(filePath, productObjects, "productImage",  {split : [], shared : ["productName"]}, i = 0);

            await bulkImageDownloader({
                dirPath : filePath, 
                allProducts : productObjects, 
                downloadImageFn,
                imagePropName : "productImage", 
                imageNameObject : {shared : ["productName"], split : []},
                callback : async (productImageDownloadResult) => {
                    let { productObject, downloadResult } = productImageDownloadResult;
                    try {
                        if(!productObject._id)   {
                            throw Error("We didn't get the product id... the products are already in the database so the post result returned no id.");
                        }
    
                        // let updateResult = await apiRequest(`http://localhost:8080/api/seeds/${encodeURIComponent(productObject._id)}`, {
                        //     method : "PUT",
                        //     body : {
                        //         ...productObject,
                        //     },
                        // });

                        let updateResult = await modelInstanceDb.update(productObject._id, productObject);


                        console.log(updateResult);
                    } catch(err)    {
                        console.log(err);
                    }
                    
                    console.log(productImageDownloadResult);

                },
                preferedFileExt : "jpg",
                bulkCount : 25,
            });

            await writeToCsv(filePath, toUrl(category), productObjects, ["dateCreated", "_id", "__v", "imagePaths", "imageUris", "multiFaced", "productUri"], true);

            res.setHeader("Content-type", "application/json").send(JSON.stringify({
                statusOk : true,
                message : "We are now creating the csv file.",
                status : 200
            }, null, 4));

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

