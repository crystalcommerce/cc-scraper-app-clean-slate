/*
    
    This browser scraper class creates an object that will allow us to have multiple instances of the same class which means multiple tabs of a browser can use and instantiate objects of this class. Thus scraping more efficiently depending on the users' computers' memory.

    Procedural flow:
        * Instead of Instatiating, we would want to instantiate through the static methods available in this class;
            - CcScraper.getScraperObject(scraperOptions), instead of new CcScraper(scraperOptions);
                - this will check if an existing object through the scrapingOptions and the queryString from the current URL you're at.
            - If it detects that it has previously instantiated the object with the same options; it will use it, otherwise it will instantiate a new object out of this class;
        * After instantiation we can then reinitialize scraping, it will pick up where it left off, if this has been previously instantiated, or it will initialize new scraping if this is a new set, group or category;
        * This needs an evaluator function much like what we had on our previous scraper. Evaluator functions are specific to the page that needs to be scraped. As of now we only have at least three types of evaluators
            - ProductsListEvaluator - where products are displayed in a single page, but the entirety of the products available are already there. Only limited data from the products are displayed on pages like this.

            - PaginatedProductsListEvaluator - where limited number of products are displayed, and we would need to retrieve the next url to get the rest of the products - most of the time, the products only display limited properties of the products listed on this page.

            - SingleProductEvaluator - where this evaluator function can only get a single product, as there is only one product displayed on this page -- we can get more details about the product using this type.


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
        getValidatedPropValues
    } = getCcUtilities(authToken);

    class CcScraper {

        constructor({evaluatorObjects, apiRoute, imageNameObject, imagePropName, csvExcludedProps, resultsDirPath, linkObjectsKey, timeDelay, getScrapingResultsBy, getNextSetBy, deleteCookiesPerCategory})   {

            // prerequisites
            this.currentLinkObject = null;
            this.productObjects = [];
            this.scraperObjectKey = null;
            this.linkObjectsKey = linkObjectsKey; // used for getting the array of linkObjects;

            // scraping specific properties;
            this.evaluatorObjects = evaluatorObjects;
            this.apiRoute = apiRoute;
            this.imageNameObject = imageNameObject;
            this.imagePropName = imagePropName;
            this.csvExcludedProps = Array.isArray(csvExcludedProps) && csvExcludedProps.length > 0 ? csvExcludedProps : [
                "dateCreated", 
                "_id", 
                "__v", 
                "imagePaths", 
                "imageUris", 
                "multiFaced", 
                "productUri"
            ];
            this.resultsDirPath = resultsDirPath;
            
            // get last page of the url;
            this.nextUrl = null;
            this.startingPointUrl = null;
            // this.urlQueryKeySeparator = `__${toUrl("CC Scraper Object key")}`;
            this.urlQueryKeyPrefix = `___cc_`;
            this.scraperObjectKeySeparator = " __CC__scraper__CC__ ";
            
            this.scraperObjectQueryKey = `${this.urlQueryKeyPrefix}${toUrl("CC Scraper Object key")}`;

            // replace query string on every page
            this.addedUrlQueryObject = {};
            this.timeDelay = timeDelay ? timeDelay : 7747;

            // scraping technique;
            this.productsPerRound = 5;


            this.scriptClassName = "___cc_scraper";

            // this.resultMethod;
            this.finalActions = finalActions;


            // we make sure that the object knows if this has been initialized;
            window.localStorage.setItem(`${this.urlQueryKeyPrefix}hasInitialized`, "yes");

            this.getNextSetBy = getNextSetBy ? getNextSetBy : "same-tab";

            this.deleteCookiesPerCategory = deleteCookiesPerCategory;

            this.excludedLocalStorageKeys = [
                this.linkObjectsKey,
                this.scraperObjectKey,
                `${this.urlQueryKeyPrefix}hasInitialized`,
                `cc-link-objects-page`,
            ];

        }

        

    }

    

    return CcScraper;

}