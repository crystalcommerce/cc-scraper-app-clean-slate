// const { ProductsSetScraper } = require("../../scraper");
// const {generateUuid, toUrl, toCamelCase, slowDown, getValidatedPropValues} = require("../../utilities");





// we set the evaluatorObject 
// and we add it as part of the property of the cc scraper global object;



(async function(){

    await waitForSelector(window.___cc__CcScraperGlobalObject);


    let { SingleProductScraper, waitForSelector, ProductsSetScraper, UrlProcess, scrollToBottom, urlprocessExecutor, generateUuid, toUrl, toCamelCase, slowDown, getValidatedPropValues } = window.___cc__CcScraperGlobalObject,
        { currentProcess, decodedProcessFromUrl, initializeScraping } = urlprocessExecutor();

    
    window.___cc__CcScraperGlobalObject.evaluatorObject = {
        set : [
            {
                callback : async () => {
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
                    

                    await slowDown(2525);

                    return {productObjects, newUrl}
                },
                dataSource : "on-page",
                waitForSelectors : [
                    {
                        selector : ".product-item .product-image",
                        type : "node-list",
                    }
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

                    await slowDown(3434);
                    
                    let productDescription = document.querySelector(".product-description").innerText.trim(),
                        imageUris = Array.from(document.querySelectorAll(".product-image")).map(item => item.src);
                    
                    return {
                        productDescription,
                        imageUris,
                    }
                },
                dataSource : "on-page",
                waitForSelectors : [
                    {
                        selector : ".single-product-container .product-image",
                        type : "single-node",
                    }
                ],
            }
        ]
    };
    


    window.___cc__CcScraperGlobalObject.initialize = function() {
        if(!currentProcess)  {
            console.log(getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]));
    
            let productSetScraperObject = new ProductsSetScraper({
                setData : {setName : "2021 US Stamps"},
                evaluatorObject : getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]),
                executeSingleProductEvaluators : true,
                parentChannelId : null,
                parentChannelName : null,
                uniqueProductObjProp : "originalUri",
                productUrlPropName : "productUri",
                removeProductsWithoutUriPropName : true,
                callbacksOnDone : [],
            });
    
            console.log(productSetScraperObject);
            window.productSetScraperObject = productSetScraperObject;
    
            // console.log(window.___cc__CcScraperGlobalObject.evaluatorObject);
            await productSetScraperObject.getProductObjects();
        } else  {
            await initializeScraping(currentProcess);
            let scraperObject = currentProcess.scraperObject;
    
            window.scraperObject= currentProcess.scraperObject;
            if(currentProcess.type === "set" && scraperObject.allProductsSetEvaluatorsDone)    {
                console.table(productSetScraperObject.productObjects);
    
                // productSetScraperObject.sendToChildren({
                //     messsage : "Hello there"
                // })
            }
            
        }
    }
    
    

    
}());

