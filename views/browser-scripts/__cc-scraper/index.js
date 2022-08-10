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

        constructor({evaluatorObjects, apiRoute, imageNameObject, imagePropName, csvExcludedProps, resultsDirPath, linkObjectsKey, timeDelay, getResultsBy, deleteCookiesPerCategory})   {

            // currentProcess object;
            this.currentProcess = {
                type : null, // single || list
                dataSource : null, // api || on-page
                paginated : null,
                currentPage : null,
                scraperRunning : false,

                
                currentLinkObject : null, // list
                currentProductObject : null, // single
            }

            // user input
            this.evaluatorObjects = evaluatorObjects;
            this.apiRoute = apiRoute;
            this.imageNameObject = Object.keys(imageNameObject).length ? imageNameObject : {shared : ["productName"], split : []},
            this.imagePropName = imagePropName ? imagePropName : "productImage",
            this.csvExcludedProps = csvExcludedProps.length ? csvExcludedProps : [
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
            this.timeDelay = timeDelay;
            this.getResultsBy = getResultsBy;
            this.deleteCookiesPerCategory = deleteCookiesPerCategory;


            // keys
            this.ccScraperQueryKey = "__cc-scraper-data";
            this.linkObjectsKey = linkObjectsKey;
            this.scraperObjectKey = null;

            // saved in localStorage
            this.productObjects = [];
            

        }

        // getCurrentProcess from URL;
        getCurrentProcess() {
            let url = window.location.href,
                object = queryStringToObject(url),
                includedKeys = [
                    "type", 
                    "dataSource", 
                    "paginated", 
                    "currentPage", 
                    "scraperRunning", 
                    "currentLinkObject", 
                    "currentProductObject"
                ];

            Object.keys(object).forEach(key => {
                if(includedKeys.includes(key)) {
                    this.currentProcess[key] = object[key];
                }
            });
        }


        // API
        // scraper running for list of products;
        productsListScraping() {
            
        }

        // scraper running for single product;
        singleProductScraping() {

        }

        // ON PAGE
        // scraper running for list of products;

        // scraper running for single product;


        scrapeByCurrentProcess()    {

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
        
        

    }

    

    return CcScraper;

}