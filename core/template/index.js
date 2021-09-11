const path = require("path");
const { createDirPath } = require(path.join(process.cwd(), "utilities", "file-system"));
const { toUrl } = require(path.join(process.cwd(), "utilities", "string"));
const csvDataWriter = require(path.join(process.cwd(), "core", "csv-data-writer"));
const bulkImageDownloader = require(path.join(process.cwd(), "core", "bulk-image-downloader"));
const downloadImage = require(path.join(process.cwd(), "core", "download-image"));
const bulkProductDetailsScraper = require(path.join(process.cwd(), "core", "bulk-product-details-scraper"));
const pageEvaluatorProductsList = require(path.join(process.cwd(), "core", "page-evaluator-products-list"));
const pageEvaluatorProductsListPaginated = require(path.join(process.cwd(), "core", "page-evaluator-products-list-paginated"));
const pageEvaluatorSingleProduct = require(path.join(process.cwd(), "core", "page-evaluator-single-product"));

module.exports = async function(scraperOptions)  {

    const {
        productListUrl,
        siteResource, 
        productBrand, 
        productSet,
        productUrlProp,
        paginated,
        evaluatorObjects,
        imagePropName,
        imageNameObject,
        csvExcludedProps,
    } = scraperOptions;

    let validDirName = [siteResource.siteName, productBrand, productSet].filter(dirName => dirName && dirName.trim() !== "").map(dirName => toUrl(dirName)),
        csvFileName = `${toUrl(siteResource.siteName)}-${validDirName.join("-")}`,
        dirPath = await createDirPath(process.cwd(), "data", ...validDirName),
        [initialEvaluator] = evaluatorObjects,
        unscrapedData = [];
        
    // removing the initialEvaluator;
    evaluatorObjects.shift();

    let productListEvaluator = paginated ? pageEvaluatorProductsListPaginated : pageEvaluatorProductsList,
        productObjects = await productListEvaluator(productListUrl, initialEvaluator);

        // productObjects = productObjects.slice(15, 20);
    
    // scrape data based on the entered steps;
    for(let i = 0; i < evaluatorObjects.length; i++) {
        let evaluatorObject = evaluatorObjects[i],
            unscrapedObjects = await bulkProductDetailsScraper(productObjects, pageEvaluatorSingleProduct, evaluatorObject, productUrlProp);
        
        unscrapedData.push(...unscrapedObjects);
    }

    console.table(productObjects);
    console.table(unscrapedData);
    


    // download images;
    await bulkImageDownloader(dirPath, productObjects, downloadImage, imagePropName, imageNameObject);

    await csvDataWriter(dirPath, csvFileName, productObjects, [...csvExcludedProps]);
    

    return {
        productObjects,
        unscrapedData,
        writeDataToCsv : async () => await csvDataWriter(dirPath, csvFileName, productObjects, [...csvExcludedProps], true),
        writeUnscrapedDataToCsv : async () => await csvDataWriter(dirPath, csvFileName, unscrapedData, [], true),
    }

}