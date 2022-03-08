const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { toUrl } = require("../utilities/string");
const { getFileSize, deleteFile, getFileExtensionsByMimeType, getSpecifiedExt, createDirPath, fileExists, deleteDir } = require("../utilities/file-system");

async function fileDownloader(url, givenFileName, downloadPath, preferedFileExt = null)    {

    let error = null;

    try {

        let response = await axios({
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
            fileName = preferedFileExt ? `${toUrl(givenFileName)}.${fileExt}` : `${toUrl(givenFileName)}.${fileExt}`;
        
        
        // create folder path if it doesn't exist
        if(!fileExists(downloadPath))  {
            await createDirPath(downloadPath);
        }

        const fileStream = fs.createWriteStream(path.join(downloadPath, fileName));

        if(response.status >= 300 && response.status < 200)  {
            fileStream.end();
            deleteFile(path.join(downloadPath, fileName));
            deleteDir(downloadPath);
            error = {
                url,
                fileName,
                message : `We couldn't reach the server; status code : ${response.statusCode}.`,
                statusOk : false,
                status : response.status,
            };
            throw Error(JSON.stringify(error, null, 4));
        }

        if(!fileExtensions.find(item => response.headers["content-type"].includes(item)))    {
            fileStream.end();
            deleteFile(path.join(downloadPath, fileName));
            deleteDir(downloadPath);
            error = {
                url,
                fileName,
                message : `The content type of what you're trying to download does not match the file type from the server's response.`,
                allowedFileExtensions : fileExtensions,
                statusOk : false,
                mimeType,
                enteredFileExtension : preferedFileExt,
            };
            throw Error(JSON.stringify(error, null, 4));
        }

        response.data.pipe(fileStream);


        let downloadResult =  await new Promise((resolve, reject) => {
        
            fileStream.on("finish", () => {
                fileStream.close(async () => {
                    let fileSize = Number(await getFileSize(path.join(downloadPath, fileName)));
    
                    if((!isNaN(contentLength) && fileSize >= contentLength) || fileSize > 0)    {
                        resolve({fileName, fileSize : `${(fileSize / (1024*1024)).toFixed(2)}Mb`, contentLength, fileSizeInBytes : fileSize, downloadPath, message : "We have successfully downloaded the file.", statusOk : true});
                    } else  {
                        fileStream.end();
                        deleteFile(path.join(downloadPath, fileName));
                        reject({fileName, message : `Download did not complete.`, statusOk : false})
                    }
                });
            });
    
            fileStream.on("error", (err) => {
                reject({url, fileName, message : err.message, statusOk : false});
            });
        })

        if(!downloadResult.statusOk)  {
            error = downloadResult;
            fileStream.end();
            deleteFile(path.join(downloadPath, fileName));
            deleteDir(downloadPath);
            throw Error(JSON.stringify(downloadResult));
        }

        return downloadResult;

    } catch(err)    {

        return error ? JSON.parse(err.message) : {statusOk : false, message : err.message};

    }
    
}

module.exports = fileDownloader;