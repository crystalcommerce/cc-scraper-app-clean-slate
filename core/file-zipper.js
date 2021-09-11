const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const {baseName, fileExists, getFileSize} = require("../utilities/file-system");


module.exports = async function(targetPath, destinationPath, callback)    {
    console.log(new Date().getTime());
    let fileName = `${baseName(targetPath)}.zip`,
        filePath = destinationPath,
        compeleteFilePath = path.join(destinationPath, fileName);

    const output = fs.createWriteStream(compeleteFilePath);    
    const archive = archiver('zip',  {
        zlib: { level: 9 } // Sets the compression level.
    });

    archive.pipe(output);

    output.on('end', function() {
        
        console.log("it ended...")
    });
    
    archive.directory(targetPath, false);

    archive.finalize();
    archive.on("progress", () => {
        
    });

    archive.on("error", (err) => {
        callback({statusOk : false, message : err.message})
    })
    archive.on("finish", () => {
        output.on("close", () => {
            if(fileExists(compeleteFilePath))   {
                callback({statusOk : true, fileName, filePath, message : "We have finished zipping the file."})
            }
        })
        
    });

}