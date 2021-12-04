const puppeteer = require("puppeteer");
const path = require("path");
const { createDirPath } = require("../utilities/file-system");
const { isObjectInArray } = require("../utilities/objects-array");
const { toUrl } = require("../utilities/string");
const { fileDownloader } = require("./file-downloader");
const csvDataWriter = require("./csv-data-writer");
const crypto = require("crypto");


module.exports = function(io)   {

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
                productsListEvaluatorUris,
                productSet,
                // productsPageListType, // paginated or not... used by productsListEvaluators only;
                evaluatorArgs, // arguments to be passed to productsPageEvaluators,
                
                // evaluatorObjects saved on to our scripts folder;
                evaluatorObjects,
            } = scraperOptions;
                
            // site Resource object
            this.siteName = siteName;
            this.siteUrl = siteUrl;
            
            // scrapersDb data object
            this.productBrand = productBrand;
            this.imageNameObject = imageNameObject;
            this.imagePropName = imagePropName;
            this.csvExcludedProps = csvExcludedProps;
            
            // userInputObjects;
            this.productsListEvaluatorUris = productsListEvaluatorUris;
            this.productSet = productSet;
            // this.productsPageListType = productsPageListType;
            this.evaluatorArgs = evaluatorArgs;
            
            // hard-coded evaluatorObjects;
            this.evaluatorObjects = evaluatorObjects;
            
            
            // scraper-generated properties
            this.dataDirPath; 
            this.scriptsDirPath; 
            this.csvFileNameScrapedData;
            this.csvFileNameUnscrapedData;
            this.unscrapedData = [];
            this.productObjects = [];
            this.evaluatorIndex;
            
            // additionalScraperOptions;
    
            this.browserOptions = {
                headless : true,
                args: ['--no-sandbox'],
            }
            this.pageOptions = {
                height : 900,
                width : 1440,
            };
            this.bulkScrapingOptions = {
                bulkCount : 1,
                maxBatchCount : 100,
                timeDelay : 70000,
                maximumUnscrapedData : 5,
                recursionTimes : 5,
                recursive : true,
            };
            
            this.runningBrowsers = [];
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
    
    
        async createScriptsDirPath() {
            // let dirNameArr = this.getDirNameArr();
            // this.scriptsDirPath = await createDirPath("data", ...dirNameArr);
        }
    
    
        async evaluateProductsListPaginated(evaluatorObject) {
    
            let browser = await puppeteer.launch(this.browserOptions),
                page = await browser.newPage(),
                { url } = this.productsListEvaluatorUris.find(item => item.evaluatorIndex === this.evaluatorIndex),
                { args } = this.evaluatorArgs.find(item => item.evaluatorIndex === this.evaluatorIndex),
                { callback, waitMethods } = evaluatorObject,
                browserId = crypto.randomBytes(4).toString("hex");
    
            this.runningBrowsers.push({browser, browserId});
    
            const getProductObjects = async (page, url) => {
        
                await page.setViewport(this.pageOptions);
                await page.goto(url, {waitUntil : "networkidle0", timeout : 0});
                if(waitMethods.length)  {
                    for(let waitMethod of waitMethods)    {
                        await page[waitMethod.name](waitMethod.args);
                    }
                }
        
        
                let { productObjects, newUrl } = await page.evaluate(callback, ...args);
                
        
                this.productObjects.push(...productObjects);
                
                if(newUrl)  {
    
                    await getProductObjects(page, newUrl);
                }
            }
                
            await getProductObjects(page, url);
    
            this.runningBrowsers = this.runningBrowsers.filter(runningBrowser => runningBrowser.browserId !== browserId);
            
            io.emit("list-evaluator-finished", {
                message : `We have scraped the data from the starting point url...`,
                status : `processing`,
                totalProducts :  this.productObjects.length,
                data : this.productObjects,
                type : "list",
                scriptId : this.scriptId,
                phase : "initial-scraping"
            });

            browser.close();
    
        }
    
    
        async evaluateProductsList(evaluatorObject)  {
    
            let browser = await puppeteer.launch(this.browserOptions),
                page = await browser.newPage(),
                { args } = this.evaluatorArgs.find(item => item.evaluatorIndex === this.evaluatorIndex),
                { url } = this.productsListEvaluatorUris.find(item => item.evaluatorIndex === this.evaluatorIndex),
                { callback, waitMethods } = evaluatorObject,
                browserId = crypto.randomBytes(4).toString("hex");
            
            this.runningBrowsers.push({browser, browserId});
    
            await page.setViewport(this.pageOptions);
            await page.goto(url, {waitUntil : "networkidle0", timeout : 0});
            if(waitMethods.length)  {
                for(let i = 0; i < waitMethods.length; i++)    {
                    let waitMethod = waitMethods[i];
                    await page[waitMethod.name](waitMethod.args);
                }
            }
    
            let productObjects = await page.evaluate(callback, ...args);
    
            this.runningBrowsers = this.runningBrowsers.filter(runningBrowser => runningBrowser.browserId !== browserId);
    
            browser.close();
            
            this.productObjects.push(...productObjects);
            
            io.emit("list-evaluator-finished", {
                message : `We have scraped the data from the starting point url...`,
                status : `processing`,
                totalProducts :  this.productObjects.length,
                data : this.productObjects,
                type : "list",
                scriptId : this.scriptId,
                phase : "initial-scraping"
            });

        }
    
    
        async productsListEvaluator(evaluatorObject)   {
            let { paginated } = evaluatorObject;
    
            if(paginated)  {
                await this.evaluateProductsListPaginated(evaluatorObject);
            } else  {
                await this.evaluateProductsList(evaluatorObject);
            }     
        }
    
    
        async evaluateSingleProductPage(page, productObject, evaluatorObject)   {
            let {callback, waitMethods, objPropArgs, productUrlProp} = evaluatorObject,
                args = function()   {
                    let args = [];
    
                    for(let prop of objPropArgs)    {
                        args.push(productObject[prop]);
                    }
    
                    return args;
                }();
    
            await page.setViewport(this.pageOptions);
            await page.goto(productObject[productUrlProp], {waitUntil : "networkidle0", timeout : 0});
            if(waitMethods.length)  {
                for(let waitMethod of waitMethods)    {
                    await page[waitMethod.name](waitMethod.args);
                }
            }
    
            let productObjectProps = await page.evaluate(callback, ...args),
                keys = Object.keys(productObject);

            console.log(productObjectProps);

            for(let key in productObjectProps)    {
                if(keys.includes(key))  {
                    productObject[key] = productObjectProps[key];
                }
            }
        }
    
    
        async scrapeProductDetailsByBulk(productObjects, evaluatorObject, bulkCount = 5, i = 0) {
            let pageInstances = [],
                browserInstances = [],
                browserIds = [];
    
            await new Promise(async resolve => {
                let min = bulkCount < productObjects.length ? bulkCount : productObjects.length;
    
                for(let i = 0; i < min; i++)  {
                    let browser = await puppeteer.launch(this.browserOptions),
                        page = await browser.newPage(),
                        browserId = crypto.randomBytes(4).toString("hex");
    
                    this.runningBrowsers.push({browser, browserId});
                    browserIds.push(browserId);
    
                    pageInstances.push(page);
                    browserInstances.push(browser);
                }
                resolve();
            });
            
    
            const getProductDetailsByBulk = async (bulkCount, i) => {
                let promises = [],
                    counter = bulkCount + i < productObjects.length ? bulkCount + i : productObjects.length;
    
                // logging the current event happening
                this.currentCount += counter < productObjects.length ? bulkCount : productObjects.length - i;
    
                if(this.rescraping) {
                    io.emit("data-rescraping", {
                        message : `Rescraping ${this.unscrapedData.length} unscraped data in ${this.bulkScrapingOptions.timeDelay}. `,
                        type : `single`,
                        phase : "data-rescraping",
                        scriptId : this.scriptId,
                        totalScrapedData : this.currentCount,
                        totalUnscrapedData : this.unscrapedData.length,
                    });
                } else  {
                    io.emit("data-scraping", {
                        message : `Current Scraped product`,
                        type : `single`,
                        totalScrapedData : this.currentCount,
                        phase : "data-scraping",
                        scriptId : this.scriptId,
                    });
                }
    
                while(i < counter)  {
                    
                    let pageCounter = i - (counter - bulkCount),
                        page = pageInstances[pageCounter];
                    
                    console.log({pageCounter, counter, i, total : productObjects.length});
                    promises.push(await this.evaluateSingleProductPage.bind(this, page, productObjects[i], evaluatorObject));
    
                    i++;
                }
    
                await Promise.all(promises.map(async (item, index) => {
                    let currentIndex = (counter + index) - promises.length;
                    try {
                        await item();
                        // this.showEvents();
                    } catch (err)   {
                        // this.showEvents();
                        this.unscrapedData.push(productObjects[currentIndex]);
                    }
                }));
                
                if(i < productObjects.length)    {
                    await getProductDetailsByBulk(bulkCount, i);
                } 
    
            }
    
            await getProductDetailsByBulk(bulkCount, i);
    
    
            // closing page and browser instances;
            for(let page of pageInstances)  {
                await page.close();
            }
    
            for(let browser of browserInstances)    {
    
                this.runningBrowsers = this.runningBrowsers.filter(runningBrowser => !browserIds.includes(runningBrowser.browserId));
    
                await browser.close();
            }
    
        }
    
    
        async controlledBulkProductDetailsScraping(evaluatorObject, productObjects = null, bulkCount = 5, i = 0)    {
            let max = this.bulkScrapingOptions.maxBatchCount,
                objCount = this.productObjects.length,
                allProducts = productObjects ? productObjects : this.productObjects;
    
            if(objCount < max)  {
                await this.scrapeProductDetailsByBulk(allProducts, evaluatorObject, bulkCount, i);
        
                
            } else  {
        
                let divisions = Math.ceil(objCount / max),
                    count = 0;
        
                while(count < divisions)    {
                    let firstIndex = count * max,
                        lastIndex = (count + 1) * max < objCount ? (count + 1) * max : objCount;
    
                    await this.scrapeProductDetailsByBulk(allProducts.slice(firstIndex, lastIndex), evaluatorObject, bulkCount, i);
                    
                    count++;
                }
            }
        
        }
    
    
        async scrapeAllData(evaluatorObject, recursive = false)   {
    
            let recursionTimes = 0;
    
            const getAllProducts = async (productObjects) => {
    
                this.currentCount = 0;
    
                await this.controlledBulkProductDetailsScraping(evaluatorObject, productObjects, this.bulkScrapingOptions.bulkCount, 0);
    
                recursionTimes++;
    
                if(recursive && (this.unscrapedData.length > 5 && recursionTimes < this.bulkScrapingOptions.recursionTimes))   {
                    
                    this.rescraping = true;
                    
                    this.currentCount = 0;

                    io.emit("set-rescraping", {
                        message : `Rescraping ${this.unscrapedData.length} unscraped data in ${this.bulkScrapingOptions.timeDelay}. `,
                        type : `single`,
                        phase : "set-rescraping",
                        scriptId : this.scriptId,
                        totalScrapedData : this.currentCount,
                        totalUnscrapedData : this.unscrapedData.length,
                    });
    
                    let unscrapedDataCopy = [...this.unscrapedData];
                    this.unscrapedData = [];
    
                    await new Promise(resolve => {
                        setTimeout(async () => {
                            await getAllProducts(unscrapedDataCopy);
                            resolve();
                        }, this.bulkScrapingOptions.timeDelay);
                    });
                }
            }
            
            await getAllProducts(this.productObjects);
    
        }
    
    
        async executeEvaluators()   {
            
            this.scriptRunning = true;

            io.emit("initializing", {
                message : `We have started the scraping process`,
                status : `initializing`,
                phase : 'initializing',
                scriptId : this.scriptId,
            });
    
            for(let i = 0; i < this.evaluatorObjects.length; i++) {
                let evaluatorObject = this.evaluatorObjects[i];
                this.evaluatorIndex = i;
    
                if(evaluatorObject.type === "list")    {
                    await this.productsListEvaluator(evaluatorObject);
                } else  {
                    await this.scrapeAllData(evaluatorObject, this.bulkScrapingOptions.recursive);
                }   
    
            }
    
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
                    
                    io.emit("image-downloading", {
                        message : `Currently downloading the images for the scraped products.`,
                        status : `success`,
                        type : `single`,
                        data : {imageUri, imagePath, fileName},
                        phase : "image-downloading",
                        scriptId : this.scriptId,
                    });

                } catch(err)    {
                    imageNames.push("NO IMAGE DOWNLOADED.");

                    io.emit("image-downloading", {
                        message : "we couldn't download the image: " + err.message,
                        status : `success`,
                        type : `single`,
                        data : {imageUri},
                        phase : "image-downloading",
                        scriptId : this.scriptId,
                    });
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
    
    
            io.emit("finished-scraping", {
                message : `We have successfully scraped the data...`,
                status : `success`,
                type : `list`,
                phase : "finished-scraping",
                data : this.productObjects,
                unscrapedData : this.unscrapedData,
                scriptId : this.scriptId,
            });
        }
    
        async cancelScraper()    {
            for(let browser of this.runningBrowsers)    {
                browser.close();
            }
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

