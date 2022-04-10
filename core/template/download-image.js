const path = require("path");
const fileDownloader = require("../file-downloader");
const { toUrl } = require("../../utilities/string");


function getNameObjects(productObject, imageNameObject, imageDirPath, preferredExt,  i) {
    let {imageUris} = productObject,
        {shared, split} = imageNameObject,
        splitNames = function()    {
            let names = [];
            for(let prop of split) {
                names.push(productObject[prop]);
            }
            return names;
        }(),
        sharedNames = function()    {
            let names = [];
            for(let prop of shared) {
                productObject[prop] && names.push(productObject[prop]);
            }
            return names;
        }(),
        nameObjects = [];
    
    for(let j = 0; j < imageUris.length; j++)   {

        let nm = splitNames.reduce((a, b) => {
                a += b.split("//").map(item => item.trim())[j];
                return a;
            }, ""),
            imageName = toUrl([`${i + 1} ${j + 1}`, nm, ...sharedNames].join(" ")),
            imageUri = imageUris[j],
            fileName = `${imageName}.${preferredExt}`,
            filePath = path.join(imageDirPath, fileName);

        nameObjects.push({imageName, imageUri, fileName, filePath});
    }

    return nameObjects;
}

module.exports = async function(productObject, imageDirPath, imagePropName, imageNameObject, callback = (downloadResult) => {}, preferredExt = "jpg", i = 0)   {
    
    let nameObjects = getNameObjects(productObject, imageNameObject, imageDirPath, preferredExt, i);

    let promises = nameObjects.map(item => {
            let {imageUri, imageName} = item;
            return fileDownloader.bind(null, imageUri, imageName, imageDirPath, preferredExt);
        });

    let downloadResults = await Promise.all(promises.map(item => item())),
        imageNames = downloadResults.map(item => {

            callback({productObject, item});
            return item.fileName
        });
   
    productObject[imagePropName] = imageNames.join(" // ");
    
}