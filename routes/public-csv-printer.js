const { csvDataWriter } = require("../core");
const router = require("express").Router();
const { createDirPath, baseName } = require("../utilities/file-system");
const { toUrl } = require("../utilities/string");
const { objectToQueryString, apiRequest } = require("../utilities/url");
const bulkImageDownloader = require("../core/template/bulk-image-downloader");
const downloadImageFn = require("../core/template/download-image");



module.exports = function()   {

    router.post("/print-data", async function(req, res, next) {

        try {
            let { apiRoute, filter, pathLocation, imagePropName, imageNameObject, preferedFileExt } = req.body,
                authToken = req.header("x-auth-token");
                url = `${apiRoute}/all?${objectToQueryString(filter)}`,
                // productObjects = await modelInstanceDb.getAllFilteredData({category}), // this should be queried dynamically... not hardcoded...
                productObjects = await apiRequest(authToken, url, options = {}), // this should be queried dynamically... not hardcoded...
                filePath = await createDirPath(pathLocation),
                subDirPathName = Object.values(filter).length ? toUrl(Object.values(filter).join(" ")) : null,
                subDirPath = subDirPathName ? await createDirPath(filePath, subDirPathName) : filePath;
            
            console.table(productObjects);
            console.log(filePath);

            // await bulkImageDownlaoder(filePath, productObjects, "productImage",  {split : [], shared : ["productName"]}, i = 0);

            res.setHeader("Content-type", "application/json").send(JSON.stringify({
                statusOk : true,
                message : "We are now creating the csv file.",
                status : 200
            }, null, 4));


            await bulkImageDownloader({
                dirPath : subDirPath, 
                allProducts : productObjects, 
                downloadImageFn,
                imagePropName, 
                imageNameObject,
                callback : async (productImageDownloadResult) => {
                    let { productObject, downloadResult } = productImageDownloadResult;
                    try {
                        if(!productObject._id)   {
                            throw Error("We didn't get the product id... the products are already in the database so the post result returned no id.");
                        }
                        // console.log({url : `${apiRoute}/${encodeURIComponent(productObject._id.toString())}`});
                        let updateResult = await apiRequest(authToken, `${apiRoute}/${encodeURIComponent(productObject._id.toString())}`, {
                            method : "PUT",
                            body : {
                                ...productObject,
                            },
                        });

                        // let updateResult = await modelInstanceDb.update(productObject._id, productObject);


                        console.log(updateResult);
                    } catch(err)    {
                        console.log(err);
                    }
                    
                    console.log(productImageDownloadResult);

                },
                preferedFileExt : preferedFileExt ? preferedFileExt : "jpg",
                bulkCount : 25,
            });

            await csvDataWriter(subDirPath, baseName(subDirPath), productObjects, ["dateCreated", "_id", "__v", "imagePaths", "imageUris", "multiFaced", "productUri"], true);

            console.log(`\n\n\n=========================================================\n`);
            console.log({
                status : "finished printing CSV",
                message : "We have finished downloading the images and printing the csv files.",
                totalCount : productObjects.length,
                filter,
            });
            console.log(`\n=========================================================\n\n\n`);


        } catch(err)    {
            console.log(err);

            res.status(403).setHeader("Content-type", "application/json").send(JSON.stringify({
                message : err.message,
                status : 403,
                statusOk : false,
            }, null, 4));

        }

    });

    return router;
    
}

