async function awaitGlobal({condition}) {
    await new Promise(resolve => {
        let interval = setInterval(() => {
                if(condition())   {
                    clearInterval(interval);
                    resolve();
                }
            }, 10);
    });
}


(async function(){
    await awaitGlobal({condition : () => window.hasOwnProperty("___cc__CcScraperGlobalObject")});


    let {
        waitForSelector, 
        scrollToBottom, 
        scrollToTop, 
        urlProcessInitializer, 
        generateUuid, 
        toUrl,
        toCamelCase, 
        slowDown,
        getValidatedPropValues,
        zipData,
        
        SingleProductScraper,
        ProductsSetScraper,
        MultiSingleProductInitializer,
        MultiProductsSetInitializer,
        CategorizedSetsScraper,
        UrlProcess,
        Results,
        CcBrowserWindow,
        CcScraperChannel,
    } = window.___cc__CcScraperGlobalObject,
    { decodedProcessFromUrl, currentProcess, initializeScraping } = urlProcessInitializer();

    window.___cc__CcScraperGlobalObject.evaluatorObject = {
        categorizedSets : [
            {
                callback : () => {




                }
            }
        ],
        set : [
            {
                callback : () => {
                    // the products api is sending a cursor position key;
                    // then the api's response will send back another new cursor position key together with the data -- which can then be used to 
                },
                dataSource : "on-page",
                waitForSelectors : [
                    // ".product-item .product-image",
                ],
            },
        ],
        single : [
            {
                callback : async () => {

                },
                dataSource : "on-page",
                waitForSelectors : [
                    // ".single-product-container .product-image"
                ],
            }
        ]
    }
}())