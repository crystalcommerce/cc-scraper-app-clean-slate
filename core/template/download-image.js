const { fileDownloader } = require("../file-downloader");
const { toUrl } = require("../../utilities/string");

module.exports = async function(productObject, imageDirPath, imagePropName, imageNameObject, i)   {

    let imageNames = [],
        {imageUris} = productObject,
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
        }();
        
    console.log({imageNameObject, splitNames, sharedNames});
    for(let j = 0; j < imageUris.length; j++)   {

        let nm = splitNames.reduce((a, b) => {
                a += b.split("//").map(item => item.trim())[j];
                return a;
            }, ""),
            imageName = toUrl([`${i + 1} ${j + 1}`, nm, ...sharedNames].join(" ")),
            imageUri = imageUris[j];


        try {
            let downloadResult = await fileDownloader(imageUri, imageName, imageDirPath, null, ".jpg"),
                {fileName, status} = downloadResult;
    
            if(!status)    {
                throw Error("image not found");
            }
            imageNames.push(fileName);
            
            console.log(downloadResult);
        } catch(err)    {
            imageNames.push("NO IMAGE DOWNLOADED.");
            console.log("we couldn't download the image: " + err.message);
            console.log(err);
        }
    }

    productObject[imagePropName] = imageNames.join(" // ");

}