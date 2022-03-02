const path = require("path");
const { createDirPath } = require("../utilities/file-system");
const { toUrl } = require("../utilities/string");
const { fileDownloader } = require("./file-downloader");
const csvDataWriter = require("./csv-data-writer");


module.exports = function(socketInstance)   {

    class StandardScraperScript {

        constructor(scraperOptions)    {
            const {
                // coming from siteResource object;
                siteName,
                siteUrl,
    
                // coming from scrapersDb data;
                productBrand,
                imageNameObject,
                imagePropName,
                csvExcludedProps,
    
                // coming from user input;
                startingPointUrl,
                
                // evaluatorObjects saved on to our scripts folder;
                scriptObject,
            } = scraperOptions;
                
            // site Resource object
            this.siteName = siteName;
            this.siteUrl = siteUrl;
            
            // scrapersDb data object
            this.productBrand = productBrand;
            this.productSet;
            this.imageNameObject = imageNameObject;
            this.imagePropName = imagePropName;
            this.csvExcludedProps = csvExcludedProps;
            
            
            // userInputObjects;
            this.startingPointUrl = startingPointUrl;
            // this.productsPageListType = productsPageListType;
            
            // scripts uploaded and written in the app;
            this.scriptObject = scriptObject;
            
            
            // scraper-generated properties
            this.dataDirPath; 
            this.csvFileNameScrapedData;
            this.csvFileNameUnscrapedData;
            this.unscrapedData = [];
            this.productObjects = [];
            

            this.scriptId;

            this.currentCount = 0;
            this.rescraping = false;
            this.scriptRunning = false;
        }
    
    
        getDirNameArr(...args) {
            let dirArr = [this.siteName, this.productBrand, this.productSet];
            dirArr.push(...args);
            return dirArr.filter(dirName => dirName && dirName.trim() !== "").map(dirName => toUrl(dirName));
        }
    
    
        getDataRelativePath(...args)   {
            let dirNameArr = this.getDirNameArr(...args);
    
            return path.join("data", ...dirNameArr);
        }
    
    
        getImagePath(imageDirPath)  {
            return imageDirPath.slice(imageDirPath.indexOf("data"));
        }
    
    
        async createDataDirPath() {
            let dirNameArr = this.getDirNameArr();
            this.dataDirPath = await createDirPath("data", ...dirNameArr);
        }
    
        async executeScript()   {
            
            let { args, callback } = this.scriptObject,
                requiredArgs = args.map(key => this[key]),
                { productObjects, unscrapedData, productSet } = await callback(...requiredArgs);

            this.productObjects = productObjects;
            this.unscrapedData = unscrapedData;
            this.productSet = productSet;

        }
    
    
        async downloadImage(productObject, imageDirPath, i)   {
    
            let imageNames = [],
                imagePaths = [],
                {imageUris} = productObject,
                {shared, split} = this.imageNameObject,
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
                
            for(let j = 0; j < imageUris.length; j++)   {
    
                let nm = splitNames.reduce((a, b) => {
                        a += b.split("//").map(item => item.trim())[j];
                        return a;
                    }, ""),
                    imageName = toUrl([`${i + 1} ${j + 1}`, nm, ...sharedNames].join(" ")),
                    imageUri = imageUris[j];
    
    
                try {
                    let downloadResult = await fileDownloader(imageUri, imageName, imageDirPath, null, ".jpg"),
                        {fileName, status} = downloadResult,
                        imagePath = `/${this.getImagePath(imageDirPath)}/${fileName}`; /* Currently working on this... */
            
                    if(!status)    {
                        throw Error("image not found");
                    }
                    imageNames.push(fileName);
                    imagePaths.push(imagePath);
                    
                    // io.emit("image-downloading", {
                    //     message : `Currently downloading the images for the scraped products.`,
                    //     status : `success`,
                    //     type : `single`,
                    //     data : {imageUri, imagePath, fileName},
                    //     phase : "image-downloading",
                    //     scriptId : this.scriptId,
                    // });

                } catch(err)    {
                    imageNames.push("NO IMAGE DOWNLOADED.");

                    // io.emit("image-downloading", {
                    //     message : "we couldn't download the image: " + err.message,
                    //     status : `success`,
                    //     type : `single`,
                    //     data : {imageUri},
                    //     phase : "image-downloading",
                    //     scriptId : this.scriptId,
                    // });
                }
            }
    
            productObject[this.imagePropName] = imageNames.join(" // ");
            productObject.imagePaths = imagePaths.map(item => item.replace(/\\/g, "/"));
            
        }
    
    
        async downloadImagesByBulk(subDirName = null, bulkCount = 70, i = 0) {
    
            let imageDirPath = await createDirPath(this.dataDirPath, `${subDirName ? `${subDirName}/images` : `images`}`);
    
            const downloadByBulk = async(bulkCount, i) => {
                let promises = [],
                    counter = bulkCount + i < this.productObjects.length ? bulkCount + i : this.productObjects.length;
                
                while(i < counter)  {
                    
                    promises.push(await this.downloadImage.bind(this, this.productObjects[i], imageDirPath, i));
    
                    i++;
                }
    
                await Promise.all(promises.map(async item => await item()));
                if(i < this.productObjects.length)    {
                    await downloadByBulk(bulkCount, i);
                }
            }
            
            await downloadByBulk(bulkCount, i);
    
            this.scriptRunning = false;
            // io.emit("finished-scraping", {
            //     message : `We have successfully scraped the data...`,
            //     status : `success`,
            //     type : `list`,
            //     phase : "finished-scraping",
            //     data : this.productObjects,
            //     unscrapedData : this.unscrapedData,
            //     scriptId : this.scriptId,
            // });
        }
    
        async cancelScraper()    {
            this.scriptRunning = false;
        }
    
        async writeProductObjectsToCsv(subDirName = null)    {
            await this.createDataDirPath();
            let dirPath = subDirName ? await createDirPath(this.dataDirPath, subDirName) : this.dataDirPath;
    
            this.csvFileNameScrapedData = this.getDirNameArr(subDirName).join("-");
            this.csvFileNameUnscrapedData = `UNSCRAPED-DATA-${this.csvFileNameScrapedData}`;
            await csvDataWriter(dirPath, this.csvFileNameScrapedData, this.productObjects, [...this.csvExcludedProps, "imagePaths"], true);
            await csvDataWriter(dirPath, this.csvFileNameUnscrapedData, this.unscrapedData, [], true);
        }
    
    }
    
    return StandardScraperScript;
}

