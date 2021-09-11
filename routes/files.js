const express = require("express");
const router = express.Router();
const { getMimeType, fileExists, baseName } = require("../utilities/file-system");
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require("fs");


router.get("/:fileToken?", (req, res) => {
    let { fileToken } = req.params,
        { filePath } = req.query,
        mimeType = getMimeType(path.join(process.cwd(), filePath)),
        fileName = path.basename(filePath);

    // console.log(`this is the ${fileName}`);

    try {
        let token = jwt.verify(fileToken, process.env.JWT_SECRET_KEY);


        if(!Object.keys(token).includes("tempToken"))    {
            throw Error("Please provide a valid token for accessing the files.");
        }

        try{
            if(!fileExists(path.join(process.cwd(), filePath))) {
                throw Error(`This file "${baseName(path.join(process.cwd(), filePath))}" does not exist.`);
            }
            res.setHeader("Content-type", mimeType);
            if(req.query.qType === "download")  {
                res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
                
            }
            const file = fs.createReadStream(path.join(process.cwd(), filePath));

            file.pipe(res);
        } catch(err)    {
            res.setHeader("Content-type", "application/json");
            res.status(404).send(JSON.stringify({statusOk : false, status : 404, message : `File Not Found : ${err.message}`}, null, 4));
        }
    }
    catch(err)  {
        res.setHeader("Content-type", "application/json");
        res.status(401).send(JSON.stringify({message : `Access Denied : ${err.message}`, status : 401, statusOk : false,}, null, 4));
    }
});


module.exports = router;