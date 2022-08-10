/*


    We need to create a new scraper that scrapes through data from pages (products-list and single-product page), and scrapes data from their api (products-list and single-product page);


    we also need to create a UI part where we will just initialize the scraper based on either list or single;

        if we need a list;
            - we can feed the UI with a json to get the linkObjects;
            - the ui must also allow us to test if we would get to have an authToken;



    
    
    ScraperOptions :


    # scraping specific properties
        evaluatorObjects : 
            - an Array of evaluator objects that can be used to scrape single or a list of products;
            [
                {
                    dataSource : "on-page" || "api",
                    type : "single" || "list",
                    paginated : true || false,
                    callback : () => {

                        dataSource : "on-page",
                            return {productObjects, newUrl} // for productsList;
                            return {additionalProductProperties} // for singleProduct;

                        dataSource : "api",
                            - call back must be able to scrape data from url alone;

                            returns {productObjects, then uses the singleProduct evaluator} // for productsList;
                            returns additionalProductDetails or full productDetails; // for singleProduct;
                            

                    },
                    waitForSelectors : [], 
                        - this will only be used on "on-page" dataSource;
                    timeDelay : 7747 - default || can be set;
                        - this can be used as part of the scraper options object;
                        - or just part of the evaluatorObject as the default time that will be used for api requests;
                }
            ],
        csvExcludedProps : 
            - an array of objects' property keys that will be excluded from their csv fies when printed
            [
                "dateCreated", 
                "_id", 
                "__v", 
                "imagePaths", 
                "imageUris", 
                "multiFaced", 
                "productUri"
            ],
        imageNameObject : {shared : ["productName"], split : []} 
            - this was taken from our puppeteer scraper
        imagePropName : "productImage"
            - this was taken from our puppeteer scraper;


    # properties that define which part of the scraping process we're at, which will be stored in the __cc-scraper-data in url;
        currentProcess: 
            currentLinkObject,
            type : single || list
            dataSource : "api" || "on-page",
            paginated : true || false,
            currentPage,

        
    Things we save in memory || localStorage;
        current productObjects;
    
    object properties that we will set in the url;
        stopping, firing, resetting mechanism
           - __cc-scraper-reset;
           - __cc-scraper-stop;
           - __cc-scraper-pause;
        data-source;
            - "api" 
            - "on-page"
        current process;
            single-product scraping;
            products-list scraping;
        finding new category link object;
        still scraping other products from the category link objects;
        where we are at in the process;
        this would allow us to use multiple browsers to scrape;
        
    

*/