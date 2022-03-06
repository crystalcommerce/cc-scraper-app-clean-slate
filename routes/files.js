const express = require("express");
const router = express.Router();
const { getMimeType, fileExists, baseName } = require("../utilities/file-system");
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");


router.get("/", (req, res) => {
    let filePath = Object.keys(req.query).map(key => req.query[key]).join("/"),
        mimeType = getMimeType(path.join(process.cwd(), filePath)),
        fileName = path.basename(filePath);

    console.log(`this is the ${filePath}`);

    try {
        if(!req.session.user)   {
            res.status(401);
            throw Error("Access Denied : You must be logged in to access this file.");
        }

        if(!fileExists(path.join(process.cwd(), filePath))) {
            res.status(404)
            throw Error(`File Not Found : This file "${baseName(path.join(process.cwd(), filePath))}" does not exist.`);
        }
        res.setHeader("Content-type", mimeType);
        if(req.query.qType === "download")  {
            res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
            
        }
        const file = fs.createReadStream(path.join(process.cwd(), filePath));

        file.pipe(res);
    }
    catch(err)  {
        res.setHeader("Content-type", "application/json");
        res.send(JSON.stringify({message : err.message, status : res.statusCode, statusOk : false,}, null, 4));
    }
});


module.exports = router;