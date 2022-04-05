const { createDirPath } = require("../../utilities/file-system");
const { toUrl } = require("../../utilities/string");
const downloadImageFn = require("./download-image");


module.exports = async function(dirPath, productObjects, imagePropName, imageNameObject, i = 0)   {

    let imageDirPath = await createDirPath(dirPath, toUrl("images"));

    async function downloadAll(productObjects, i = 0)    {
        try {
            await downloadImageFn(productObjects[i], imageDirPath, imagePropName, imageNameObject, i);
        } catch(err)    {
            console.log(err);
        }
        i++;
        if(i < productObjects.length)   {
            await downloadAll(productObjects, i);
        }
    }

    await downloadAll(productObjects, i);
}