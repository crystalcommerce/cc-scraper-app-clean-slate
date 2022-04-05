const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { toUrl } = require("../utilities/string");
const { getFileSize, deleteFile, getFileExtensionsByMimeType, getSpecifiedExt, createDirPath, fileExists, deleteDir } = require("../utilities/file-system");

async function fileDownloader(url, givenFileName, downloadPath, preferedFileExt = null)    {

    let error = null,
        response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        }),
        mimeType = response.headers["content-type"],
        contentLength = Number(response.headers["content-length"])
        fileExtensions = getFileExtensionsByMimeType(mimeType),
        urlObject = new URL(url);
        webDeclaredExt = getSpecifiedExt(url, fileExtensions),
        fileExt = preferedFileExt ? preferedFileExt : webDeclaredExt;
        fileName = preferedFileExt ? `${toUrl(givenFileName)}.${fileExt}` : `${toUrl(givenFileName)}.${fileExt}`,
        downloadResult = null;

    // create folder path if it doesn't exist
    if(!fileExists(downloadPath))  {
        await createDirPath(downloadPath);
    }

    const fileStream = fs.createWriteStream(path.join(downloadPath, fileName));
    if(!fileExtensions.find(item => response.headers["content-type"].includes(item)))    {

        error = {
            url,
            fileName,
            message : `The content type of what you're trying to download does not match the file type from the server's response.`,
            allowedFileExtensions : fileExtensions,
            statusOk : false,
            mimeType,
            enteredFileExtension : preferedFileExt,
        };
        
    }

    if(error)   {
        return error;
    }

    response.data.pipe(fileStream);

    fileStream.on("finish", () => {
        fileStream.close(async () => {
            let fileSize = Number(await getFileSize(path.join(downloadPath, fileName)));

            if((!isNaN(contentLength) && fileSize >= contentLength) || fileSize > 0)    {
                downloadResult = {fileName, fileSize : `${(fileSize / (1024*1024)).toFixed(2)}Mb`, contentLength, fileSizeInBytes : fileSize, downloadPath, message : "We have successfully downloaded the file.", statusOk : true};
            } else  {
                fileStream.end();
                deleteFile(path.join(downloadPath, fileName));
                downloadResult = {fileName, message : `Download did not complete.`, statusOk : false};
            }
        });
    });

    fileStream.on("error", (err) => {
        downloadResult = {url, fileName, message : err.message, statusOk : false};
    });

    await new Promise((resolve, reject) => {
        console.log("initialize file download");
        let i = 0;
        if(downloadResult) resolve();
        let interval = setInterval(function() {
            if(downloadResult)  {
                console.log("download successful.")
                clearInterval(interval);
                resolve();
            }
            
            if(i > 40)  {
                clearInterval(interval);
                downloadResult = {fileName, message : `Download did not complete.`, statusOk : false};
                resolve()
            }

            i++;
        }, 500);

    });

    console.log(downloadResult);

    return downloadResult;
    
}

module.exports = fileDownloader;