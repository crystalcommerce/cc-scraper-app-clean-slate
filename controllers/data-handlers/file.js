const express = require("express");
const router = express.Router();
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const axios = require("axios");
const { getMimeType, getFileObject, getFileExt, getFileExtensionsByMimeType, getSpecifiedExt } = require("../../utilities/file-system");


module.exports = function() {
    // show images...
    // show page...
    // show raw html
    // parse css...
    // parse js

    async function showJpegImage(req, res, next)   {

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

            console.log({
                mimeType,
                fileExtensions,
                urlObject,
                webDeclaredExt,
            });
            if(!mimeType.includes("image")) {
                throw Error(`This url only works with image content-type; we received a "${mimeType}" instead.`)
            }
    
            res.setHeader("Content-Type", "image/jpeg");
            response.data.pipe(res);
                
    
        } catch(err)    {
            res.setHeader("Content-type", "application/json");
            res.status(403).send(JSON.stringify({status : 403, message : err.message, statusOk : false}, null, 4));
        }
    }

    return {
        showJpegImage
    }

}