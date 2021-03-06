const path = require("path");
const { createDirPath } = require("../utilities/file-system");
const { toUrl } = require("../utilities/string");
const fileDownloader = require("./file-downloader");
const csvDataWriter = require("./csv-data-writer");


module.exports = function(io)   {
    class StandardScraperScript {

        constructor(scraperOptions)    {
            const {  
                // coming from scrapersDb data;
                productCategory,
                siteName,
                siteUrl,
                productBrand,
                imageNameObject,
                imagePropName,
                csvExcludedProps, // TODO :  remove the excluded props... just do it on downloading of data... we may not need to create data dirPath
    
                // coming from user input;
                startingPointUrl,
                
                // scriptObject saved on to our scripts folder; args, getSingleProduct, getAllProducts
                scriptObject,
            } = scraperOptions;
    
            //
            this.productCategory = productCategory;
                
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
            this.getAllProducts;
            this.getSingleProduct;
            this.requiredArgs = [];
            
            
            // scraper-generated properties
            this.productsDirPath; 
            this.csvFileNameScrapedData;
            this.csvFileNameUnscrapedData;
            this.unscrapedData = [];
            this.productObjects = [];
            
    
            this.scriptId;
    
            this.currentCount = 0;
            this.rescraping = false;
            this.scriptRunning = false;
    
            // event emitter // socketInstance
    
            this.getScriptProperties();
    
        }
    
        getDirNameArr(...args) {
            let dirArr = [this.productCategory, this.siteName, this.productBrand, this.productSet];
            dirArr.push(...args);
            return dirArr.filter(dirName => dirName && dirName.trim() !== "").map(dirName => toUrl(dirName));
        }
    
    
        getImagePath(imageDirPath)  {
            return imageDirPath.slice(imageDirPath.indexOf("data"));
        }
    
        addEmitter(eventName, data)   {
            console.log(eventName, data);
            if(io)  {
                io.customEvent.emit(eventName, data);
            }
        }
    
        async createProductsDirPath() {
            let dirNameArr = this.getDirNameArr();
            this.productsDirPath = await createDirPath(process.cwd(), "data", "products", ...dirNameArr);
        }
        
        getScriptProperties()   {
            if(this.scriptObject.args.length)  {
                this.requiredArgs = this.scriptObject.args.map(key => this[key]);
            }
            if(typeof this.scriptObject.getAllProducts !== "undefined") {
                this.getAllProducts = this.scriptObject.getAllProducts;
            }
            if(typeof this.scriptObject.getSingleProduct !== "undefined")   {
                this.getSingleProduct = this.scriptObject.getSingleProduct;
            }
        }

        async executeScript()   {
            
            this.scriptRunning = true;
            this.addEmitter("finished-scraping", {
                message : `We have have successfully scraped the data and the URIs of the images`,
                status : `success`,
                phase : "start-scraping",
                data : this.productObjects,
                unscrapedData : this.unscrapedData,
                scriptId : this.scriptId,
            });

            try {
                //execute the getAllProductScript here...
                let { productObjects, unscrapedData, productSet } = await this.getAllProducts(...this.requiredArgs);
                
        
                this.productObjects = productObjects;
                this.unscrapedData = unscrapedData;
                this.productSet = productSet;

                // write the names of the images
                this.setProductsImageNames();

                this.addEmitter("finished-scraping", {
                    message : `We have have successfully scraped the data and the URIs of the images`,
                    status : `success`,
                    phase : "finished-scraping",
                    data : this.productObjects,
                    unscrapedData : this.unscrapedData,
                    scriptId : this.scriptId,
                });


                this.scriptRunning = false;
            } catch(err)    {
                this.scriptRunning = false;
                this.addEmitter("finished-scraping", {
                    message : `Scraping Process has been stopped : ${err.message}`,
                    status : `failed`,
                    phase : "scraping-error",
                    data : this.productObjects,
                    unscrapedData : this.unscrapedData,
                    scriptId : this.scriptId,
                });
            }
    
        }

        createImageName(productObject, i)   {
            let imageNames = [],
                {imageUris} = productObject,
                {shared, split} = this.imageNameObject,
                fileExt = this.imageNameObject.preferedExt ? `.${this.imageNameObject.preferedExt}` : "",
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
                    imageName = toUrl([`${i + 1} ${j + 1}`, nm, ...sharedNames].join(" "));
    
                imageNames.push(`${imageName}${fileExt}`)
                
            }

            productObject[this.imagePropName] = imageNames.join(" // ");
        }
        
        setProductsImageNames()   {
            this.productObjects.forEach((productObject, i) => {
                this.createImageName(productObject, i);
            })
        }
    
        async downloadImage(productObject, imageDirPath, i)   {
    
            let imageNames = productObject[this.imagePropName].split(" // "),
                {imageUris} = productObject,
                imagePaths = [];
                
            for(let j = 0; j < imageUris.length; j++)   {
    
                let imageName = imageNames[j],
                    imageUri = imageUris[j];
    
    
                try {
                    let downloadResult = await fileDownloader(imageUri, imageName, imageDirPath, "jpg"),
                        { fileName, statusOk } = downloadResult,
                        imagePath = `/${this.getImagePath(imageDirPath)}/${fileName}`;
    
                    if(!statusOk)    {
                        throw Error("image not found");
                    }
                    imageNames.push(fileName);
                    imagePaths.push(imagePath);

                    
                    this.addEmitter("image-downloading", {
                        message : `Currently downloading the images for the scraped products.`,
                        status : `success`,
                        data : {imageUri, imagePath, fileName},
                        phase : "image-downloading",
                        scriptId : this.scriptId,
                    });
    
                } catch(err)    {
                    imageNames.push("NO IMAGE DOWNLOADED.");
                    
                    this.addEmitter("failed-image-download", {
                        message : "we couldn't download the image: " + err.message,
                        status : `success`,
                        data : {imageUri},
                        phase : "image-downloading-error",
                        scriptId : this.scriptId,
                    });
                }
            }
    
            productObject[this.imagePropName] = imageNames.join(" // ");
            productObject.imagePaths = imagePaths.map(item => item.replace(/\\/g, "/"));
        }
    
    
        async downloadImagesByBulk(subDirName = null, bulkCount = 70, i = 0) {
    
            let imageDirPath = await createDirPath(this.productsDirPath, `${subDirName ? `${subDirName}/images` : `images`}`);
    
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
            this.addEmitter("finished-downloading-images", {
                message : `We have successfully downloaded the images`,
                status : `success`,
                type : `list`,
                phase : "finished-downloading",
                data : this.productObjects,
                unscrapedData : this.unscrapedData,
                scriptId : this.scriptId,
            });
        }
    
        async cancelScraper()    {
            this.scriptRunning = false;
        }
    
        async writeProductObjectsToCsv(subDirName = null)    {
            await this.createProductsDirPath();
            let dirPath = subDirName ? await createDirPath(this.productsDirPath, subDirName) : this.productsDirPath;
    
            this.csvFileNameScrapedData = toUrl(`${this.productBrand} ${this.productSet}`);
            this.csvFileNameUnscrapedData = `UNSCRAPED-DATA-${this.csvFileNameScrapedData}`;
            await csvDataWriter(dirPath, this.csvFileNameScrapedData, this.productObjects, [...this.csvExcludedProps], true);
            await csvDataWriter(dirPath, this.csvFileNameUnscrapedData, this.unscrapedData, [], true);
        }
    
    }

    return StandardScraperScript

}
