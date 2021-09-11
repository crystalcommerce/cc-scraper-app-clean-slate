const { createDirPath } = require("../../utilities/file-system");
const { toUrl } = require("../../utilities/string");


module.exports = async function(dirPath, allProducts, downloadImageFn, imagePropName, imageNameObject, bulkCount = 70, i = 0)   {

    let imageDirPath = await createDirPath(dirPath, toUrl("images"));

    async function downloadByBulk(dirPath, allProducts, bulkCount, i) {
        let promises = [],
            counter = bulkCount + i < allProducts.length ? bulkCount + i : allProducts.length;
        
        while(i < counter)  {
            
            promises.push(await downloadImageFn.bind(null, allProducts[i], imageDirPath, imagePropName, imageNameObject, i));

            i++;
        }

        await Promise.all(promises.map(async item => await item()));
        if(i < allProducts.length)    {
            await downloadByBulk(dirPath, allProducts, bulkCount, i);
        }
    }
    

    await downloadByBulk(dirPath, allProducts, bulkCount, i);
}