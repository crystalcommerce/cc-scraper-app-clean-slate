/*
    
*/


function __cc_getScraperFactory(getCcUtilities, authToken)    {

    let {
        apiRequest,
        postDataArray,
        scrollToBottom,
        isInArray,
        waitForSelector,
        toUrl,
        toCapitalize,
        toCapitalizeAll,
        objectToQueryString,
        queryStringToObject,
        scrollToTop,
        moderator,
        slowDown,
        isObjectInArray,
        downloadEncodedText,
        getValidatedPropValues,
        ccEncodeObject,
        ccDecodeObject,
    } = getCcUtilities(authToken);

    class CcScraper {

        constructor({categoryLinkObjects, evaluatorObjects, apiRoute, imageNameObject, imagePropName, csvExcludedProps, resultsDirPath, timeDelay, getResultsBy, deleteCookiesPerCategory, executeSingleProductEvaluator})   {

            // currentProcess object;
            this.currentProcess = {
                type : null, // single || list
                dataSource : null, // api || on-page
                scraperRunning : false,

                currentUrl : null,
                nextPage : false,
                currentLinkObject : null, // list
                currentProductObject : null, // single
            }

            // user input
            this.categoryLinkObjects = Array.isArray(categoryLinkObjects) ? categoryLinkObjects : [];
            this.evaluatorObjects = evaluatorObjects;
            this.apiRoute = apiRoute;
            this.imageNameObject = imageNameObject && Object.keys(imageNameObject).length ? imageNameObject : {shared : ["productName"], split : []},
            this.imagePropName = imagePropName ? imagePropName : "productImage",
            this.csvExcludedProps = Array.isArray(csvExcludedProps) && csvExcludedProps.length ? csvExcludedProps : [
                "dateCreated", 
                "_id", 
                "__v", 
                "imagePaths", 
                "imageUris", 
                "multiFaced", 
                "productUri"
            ];
            this.resultsDirPath = resultsDirPath;


            // additional options;
            this.executeSingleProductEvaluator = executeSingleProductEvaluator;
            this.timeDelay = timeDelay || 7747;
            this.getResultsBy = getResultsBy;
            this.deleteCookiesPerCategory = deleteCookiesPerCategory;


            // keys
            this.ccScraperQueryKey = "__cc-scraper-data";
            this.scraperObjectKey = null;

            // saved in localStorage
            this.productObjects = [];
            this.processedSingleProductUrls = [];
            this.processedCategoryLinkUrls = [];
            this.totalNumberOfProducts = 0;
            this.linkObjectIndex = 0;
            this.productsPerCategory = 0;
            this.productObjectIndex = 0;

            this.localStorageKeys =  ["productObjects", "processedCategoryLinkUrls", "processedSingleProductUrls", "totalNumberOfProducts", "linkObjectIndex", "productsPerCategory", "productObjectIndex"];


            
        }

        // initialization and storing updated items;
        saveToLocalStorage()    {
            Object.keys(this).map(item => {
                return {localStorageKey : `___cc-${toUrl(item)}`, key : item, value : this[item]};
            })
                .filter(item => this.localStorageKeys.includes(item.key))
                .forEach(item => {
                    window.localStorage.setItem(item.localStorageKey, JSON.stringify(item.value));
                });
        }   

        getLocallyStoredProps()  {
            Object.keys(this).map(item => {
                return {localStorageKey : `___cc-${toUrl(item)}`, key : item, value : this[item]};
            })
                .filter(item => this.localStorageKeys.includes(item.key))
                .forEach(item => {
                    this[item.key] = JSON.parse(window.localStorage.getItem(item.localStorageKey));
                });
        }

        deleteAllLocallyStoredProps()  {
            Object.keys(this).map(item => {
                return {localStorageKey : `___cc-${toUrl(item)}`, key : item, value : this[item]};
            })
                .filter(item => this.localStorageKeys.includes(item.key))
                .forEach(item => {
                    window.localStorage.removeItem(item.localStorageKey);
                });

            this.productObjects = [];
            this.processedSingleProductUrls = [];
            this.processedCategoryLinkUrls = [];
            this.totalNumberOfProducts = 0;
            this.linkObjectIndex = 0;
            this.productsPerCategory = 0;
            this.productObjectIndex = 0;

            this.saveToLocalStorage();
        }


        // getCurrentProcess from URL;
        getCurrentProcessFromUrl(url, trailingSlash = true) {
            let { queryObject } = queryStringToObject(url, trailingSlash),
                encodedCurrentProcessData = queryObject[this.ccScraperQueryKey],
                decodedCurrentProcessData = encodedCurrentProcessData ? ccDecodeObject(encodedCurrentProcessData) : {};

            return decodedCurrentProcessData;
        }


        getCurrentProcess(trailingSlash = true) {
            let decodedCurrentProcessData = this.getCurrentProcessFromUrl(window.location.href, trailingSlash = true),
                includedKeys = [
                    "type", 
                    "dataSource",
                    "scraperRunning", 
                    "currentUrl",
                    "nextPage",
                    "currentLinkObject", 
                    "currentProductObject"
                ];

            Object.keys(decodedCurrentProcessData).forEach(key => {
                if(includedKeys.includes(key)) {
                    this.currentProcess[key] = decodedCurrentProcessData[key];
                }
            });
        }


        checkCorrectUrl(trailingSlash = true)   {

            let { urlWithoutQueryString, queryObject } = queryStringToObject(window.location.href, trailingSlash),
                originalObject = Object.keys(queryObject).filter(item => {
                    return item !== this.ccScraperQueryKey;
                }).reduce((a,b) => {

                    a[b] = queryObject[b];

                    return a;
                }, {}),
                originalUrl = [urlWithoutQueryString, objectToQueryString(originalObject)].join("?");

            return originalUrl === this.currentProcess.currentLinkObject.url || this.currentProcess.nextPage;
        }


        // API
        // scraper running for list of products;
        async productsListScraping() {
            let evaluator = this.evaluatorObjects.find(item => {
                    return item.type === this.currentProcess.type && item.dataSource === this.currentProcess.dataSource;
                });
            
            if(!evaluator)  {
                return;
            }

            // we await all selectors from the waitSelectors property of the evaluator;
            await moderator(evaluator.waitForSelectors, async (slicedArr) => {

                let promises = slicedArr.map(item => {
                    return async function() {
                        await waitForSelector(document.querySelector(item));
                    }
                });

                await Promise.all(promises.map(item => item()));

            }, 5);

            // we execute the callback from the evaluator;
            let {productObjects, newUrl} = await evaluator.callback();

            // we add the productObjects to the productObjects property of this scraper object;
            this.productObjects.push(...productObjects);

            console.log({productObjects, newUrl});
            
            if(newUrl) {

                this.currentProcess.nextPage = true;

                let nextUrl = this.getNexCategoryLinkUrl(newUrl);

                this.processedCategoryLinkUrls.push(this.currentProcess.currentLinkObject.url);

                this.saveToLocalStorage();

                window.location = nextUrl;

            }

            
            
        }


        // scraper running for single product;
        async singleProductScraping() {

            console.log("we are firing the singleProductsLinks");

            // we have to at least open 5 browsers;

            // each product must have something that completes the process;

            // so we have to wait for all to complete before opening new tabs for new sets of 5 products;

            // we also have to go back to the currentLinkObject


            // await moderator(this.productObjects, (slicedArr) => {

            // }, 5);
        }

        // ON PAGE
        // scraper running for list of products;

        // scraper running for single product;


        async scrapeByCurrentProcess()    {

            if(!this.currentProcess.scraperRunning)  {
                return;
            }

            if(this.currentProcess.dataSource === "api")    {

                if(this.currentPocess.type === "single")    {

                } else if(this.currentProcess.type === "list")   {

                }

            } else if(this.currentProcess.dataSource === "on-page") {

                if(this.currentPocess.type === "single")    {

                } else if(this.currentProcess.type === "list")   {

                }

            }
        }

        findNewCategoryLinkObject()    {
            return this.categoryLinkObjects.find(item => {
                return !this.processedCategoryLinkUrls.includes(item.url);
            });
        }

        // we set the next process so the url can use it.
        // set currentProcess
        setCurrentProcess({type, dataSource}) {

            if(type === "list")    {

                let currentLinkObject = this.findNewCategoryLinkObject();

                if(currentLinkObject)   {
                    this.currentProcess = {
                        type,
                        dataSource,
                        currentUrl : getValidatedPropValues(currentLinkObject, ["url"]),
                        scraperRunning : true,
                        nextPage : false,
                        
                        currentLinkObject,
                    }
                }
                
            } else if(type === "single")   {
                this.currentProcess = {
                    type,
                    dataSource,
                    scraperRunning : true,
                    currentUrl,

                    currentProductObject,
                }
            }
            
        }
        

        // we then navigate to the next process;
        getNexCategoryLinkUrl(url = null, trailingSlash = true) {

            let nextUrl = url ? url : getValidatedPropValues(this.currentProcess.currentLinkObject, ["url"]);
            if(nextUrl) {
                let { queryObject, urlWithoutQueryString } = queryStringToObject(nextUrl, trailingSlash),
                    queryString = objectToQueryString({...queryObject, [this.ccScraperQueryKey] : ccEncodeObject(this.currentProcess)});

                return `${urlWithoutQueryString}?${queryString}`;
            } else  {
                return null;
            }
            
        }


        async initialize({type, dataSource, currentLinkObject, currentProductObject})    {

            // initialize currentProcess;

                // type, dataSource, scraperRunning, currentLinkObject, currentProductObject;

            // await scrapeByCurrentProcess();

        }
        
        

    }

    

    return CcScraper;

}