const express = require("express");
const router = express.Router();
const { getMimeType, getFileObject, getFileExt, getFileExtensionsByMimeType, getSpecifiedExt } = require("../utilities/file-system");
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const axios = require("axios");


module.exports = function() {

    router.get("/any-file?", async function(req, res) {

        try {
            let { url } = req.query;
    
            if(!url)    {
                throw Error("There was no url provided for the file.")
            }
    
            let response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            });
    
            
    
            let mimeType = response.headers["content-type"],
                fileExtensions = getFileExtensionsByMimeType(mimeType),
                urlObject = new URL(url);
                webDeclaredExt = getSpecifiedExt(url, fileExtensions);
    
            res.setHeader("Content-Type", mimeType);
            response.data.pipe(res);
                
    
        } catch(err)    {
            res.setHeader("Content-type", "application/json");
            res.status(403).send(JSON.stringify({status : 403, message : err.message, statusOk : false}, null, 4));
        }
        
    
        // res.send()
    });
    
    
    // router.use(async (req, res, next) => {
    //     let urlArr = req.url.slice(1).split("/"),
    //         download = urlArr.indexOf("download") === 0,
    //         dirPaths = download ? urlArr.slice(1) : urlArr,
    //         filePath = path.join(process.cwd(), "data", ...dirPaths), // TODO: to be removed.
    //         mimeType = getMimeType(filePath),
    //         fileName = path.basename(filePath);
    
    
        
    
    //     try {
    //         if(!req.session.user)   {
    //             res.status(401);
    //             throw Error("Access Denied : You must log in to access this file.");
    //         }
    
    //         if(!fileExists(filePath)) {
    //             res.status(404)
    //             throw Error(`File Not Found : This file "${fileName}" does not exist.`);
    //         }
    //         res.setHeader("Content-type", mimeType);
    //         if(download)  {
    //             res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
                
    //         }
    //         const file = fs.createReadStream(filePath);
    
    //         file.pipe(res);
            
    //     } catch(err)  {
    //         res.setHeader("Content-type", "application/json");
    //         res.send(JSON.stringify({message : err.message, status : res.statusCode, statusOk : false,}, null, 4));
    //     }
    // });

}