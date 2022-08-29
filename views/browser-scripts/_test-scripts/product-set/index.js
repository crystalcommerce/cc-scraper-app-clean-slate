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
                    let categorizedSets = Array.from(document.querySelectorAll(".categories-list .set-link")).map(item => {

                        let url = item.href,
                            category = item.innerText.trim();

                        return {
                            url,
                            setData : {
                                category
                            },
                        }
                    })

                    return categorizedSets; // array of objects
                },
                dataSource : "on-page",
                waitForSelectors : [
                    ".categories-list .set-link",
                ],
            }
        ],
        set : [
            {
                callback : async () => {

                    await scrollToBottom();

                    await slowDown(2525);

                    await scrollToTop();

                    await slowDown(2525);

                    let productObjects = Array.from(document.querySelectorAll(".products-list-container .product-item .product-container")).map(item => {

                            let productName = item.querySelector(".product-title").innerText.trim(),
                                price = item.querySelector(".price").innerText.trim(),
                                productUri = item.querySelector(".product-url").href,
                                originalUri = item.querySelector(".product-url").getAttribute("data-original-uri"),
                                imageUris = Array.from(item.querySelectorAll(".product-image")).map(item => item.src);

                            return {
                                productName,
                                originalUri,
                                productUri,
                            };


                        }),
                        newUrl = document.querySelector(".next-page") ? document.querySelector(".next-page").href : null;
                    console.log({productObjects, newUrl});
                    
                    
                    console.table(productObjects);

                    
                    console.log(decodedProcessFromUrl);
                    

                    return {productObjects, newUrl}
                },
                dataSource : "on-page",
                waitForSelectors : [
                    ".product-item .product-image",
                ],
            },
            {
                callback : async () => {
                    console.log({
                        message : "getting data from api"
                    })
                    await slowDown(2525);

                    

                    let productObjects = Array.isArray(window.apiProductObjects) ? window.apiProductObjects.map(item => {
                        
                        return {
                            price : item.priceRange,
                            originalUri : item.productUri
                        }
                    }) : [];

                    return { productObjects, newUrl : null }
                },
                dataSource : "api",
                waitForSelectors : [],
            }
        ],
        single : [
            {
                callback : async () => {
                    

                    await scrollToBottom();

                    await slowDown(2525);

                    await scrollToTop();

                    await slowDown(2525);
                    
                    let productDescription = document.querySelector(".product-description").innerText.trim(),
                        imageUris = Array.from(document.querySelectorAll(".product-image")).map(item => item.src);
                    
                    return {
                        productDescription,
                        imageUris,
                    }
                },
                dataSource : "on-page",
                waitForSelectors : [
                    ".single-product-container .product-image"
                ],
            }
        ]
    };
    


    window.___cc__CcScraperGlobalObject.initialize = async function() {

        console.log({
            message : "Hello there, Michael Norward!",
            source : "scraper-application-test-scripts"
        })

        if(!currentProcess)  {
            console.log(getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]));


            let categorizedSetsScraperObject = new CategorizedSetsScraper({
                evaluatorObject : getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]), 
                executeMultiProductsSetsInitializer : true, 
                executeMultiSingleProductInitializer : true, 
                addSetDataToProductProps : true,
                uniqueProductObjProp : "originalUri",
                productUrlPropName : "productUri",
                removeProductsWithoutUriPropName : true,
                callbacksOnDone : [],
                downloadZippedData : true,
            });

            console.log(categorizedSetsScraperObject.categorizedSetsEvaluatorDone);
            
            await categorizedSetsScraperObject.getCategorizedSets();
            
            await categorizedSetsScraperObject.checkScraperDone();
            
        }
    }

    if(currentProcess)  {
        await initializeScraping(currentProcess);
        let scraperObject = currentProcess.scraperObject;

        window.___cc__scraperObject = scraperObject;
        if(currentProcess.type === "set" && scraperObject.allProductsSetEvaluatorsDone)    {
            console.table(scraperObject.productObjects);
        }
        
    }
    
    

    
}());

