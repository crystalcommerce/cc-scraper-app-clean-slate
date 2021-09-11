const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { toUrl } = require("../utilities/string");
const { getFileSize, deleteFile } = require("../utilities/file-system");

async function fileDownloader(url, givenFileName, downloadPath, expectedFileType = null, givenFileType = null)    {

    let fileType = givenFileType ? givenFileType : path.extname(url.split("?")[0]),
        fileName = `${toUrl(givenFileName)}${fileType}`, 
        contentLength;
    
    
    // create folder path if it doesn't exist
    if(!fs.existsSync(downloadPath))  {
        await fs.promises.mkdir(downloadPath, {recursive : true});
    }

    const fileStream = fs.createWriteStream(path.join(downloadPath, fileName));

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    if(response.status >= 200 && response.status <= 300)  {
        if(expectedFileType && !response.headers["content-type"].includes(expectedFileType))    {
            fileStream.end();
            deleteFile(path.join(downloadPath, fileName));
            reject({url, fileName, message : `The content type of what you're trying to download does not match the file type from the server's response. \n\tRequested File Type : ${fileType} \n\tServer's Response File Type : ${response.headers["content-type"]}`, status : false});
        }
        contentLength = Number(response.headers["content-length"]);
        response.data.pipe(fileStream);

    } else  {
        fileStream.end();
        deleteFile(path.join(downloadPath, fileName));
        return {url, fileName, message : `We couldn't reach the server; status code : ${response.statusCode}.`, status : false};
    }

    return await new Promise((resolve, reject) => {
        
        fileStream.on("finish", () => {
            fileStream.close(async () => {
                let fileSize = Number(await getFileSize(path.join(downloadPath, fileName)));

                if((!isNaN(contentLength) && fileSize >= contentLength) || fileSize > 0)    {
                    resolve({fileName, fileSize : `${(fileSize / (1024*1024)).toFixed(2)}Mb`, contentLength, fileSizeInBytes : fileSize, downloadPath, message : "We have successfully downloaded the file.", status : true});
                } else  {
                    fileStream.end();
                    deleteFile(path.join(downloadPath, fileName));
                    reject({fileName, message : `Download did not complete.`, status : false})
                }
            });
        });

        fileStream.on("error", (err) => {
            reject({url, fileName, message : err.message, status : false});
        });
    })

}

module.exports = { fileDownloader };