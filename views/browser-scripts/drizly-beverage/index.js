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
        moderator,
        getValidatedPropValues,
        zipData,
        apiRequest,
        SingleProductScraper,
        ProductsSetScraper,
        MultiSingleProductInitializer,
        MultiProductsSetInitializer,
        CategorizedSetsScraper,
        UrlProcess,
        Results,
        CcBrowserWindow,
        CcScraperChannel,
        categorizedSetsOfflineDb,
        productsOfflineDb,
        ccScrapingEventInstance,
        wrapUp,
        queryStringToObject,
        objectToQueryString,
    } = window.___cc__CcScraperGlobalObject,
    { decodedProcessFromUrl, currentProcess, initializeScraping } = urlProcessInitializer();


    categorizedSetsOfflineDb.addProps("validDataProps", "label");

    window.___cc__CcScraperGlobalObject.evaluatorObject = {
        categorizedSets : [
            {
                callback : async () => {

                    await scrollToBottom(700);

                    // await scrollToTop();

                    await slowDown(2525);

                    ccScrapingEventInstance.clear();

                    let categorizedSets = Array.from(document.querySelectorAll("[class^='top_category_item-module__CategoryNavListItem']")).slice(0, 3).map(item => {


                        let category = item.innerText.trim().replace(/\r\n+/g, ' <br />'),
                            firstSection = item.querySelector("section:nth-child(1)"),
                            categorizedLinks = Array.from(firstSection.querySelectorAll("[class^='top_category_item-module__MenuList'] a[class^='top_category_item-module__MenuListItem']"));


                        return categorizedLinks.map(link => {

                            let url = link.href,
                                setData = {
                                    category,
                                    subcategory : link.innerText.trim(),
                                }

                            return {
                                url,
                                setData,
                            }
                        });

                    }).reduce((a, b) => {
                        a.push(...b);
                        return a;
                    }, []);

                    return categorizedSets;

                },
                dataSource : "on-page",
                waitForSelectors : ["[class^='top_category_item-module__CategoryNavListItem']", "[class^='header-module__NavSection']"],
            }
        ],
        set : [
            {
                callback : async (categorizedSet) => {

                    await scrollToBottom(700);

                    // await scrollToTop();

                    await slowDown();

                    ccScrapingEventInstance.clear();

                    let {setData, setId} = categorizedSet,
                        newUrl = function(){
                            let nextUrl = document.querySelector("a[class^='Pagination-module__Pagination__chevron__right']");

                            if(!nextUrl)    {
                                return null;
                            }
                            let {urlWithoutQueryString} = queryStringToObject(nextUrl.href);
                            return urlWithoutQueryString;
                            
                        }(),
                        productObjects = Array.from(document.querySelectorAll("[class^='CatalogGrid-module__CatalogListItem']")).map(container => {
                            let imageUris = Array.from(container.querySelectorAll("img[class^='catalog_app_page']")).map(img => {
                                    let src = img.src,
                                        [imageUri] = src.split('?');

                                    return imageUri;
                                }),
                                productName = container.querySelector("div > p[class^='catalog_app_page']") ? container.querySelector("div > p[class^='catalog_app_page']").innerText.trim() : null,
                                productUri = container.querySelector("div[class^='catalog_app_page'] a") ? container.querySelector("div[class^='catalog_app_page'] a").href : null;

                            return {
                                setId,
                                ...setData,
                                imageUris,
                                productName,
                                productUri,
                            }
                        });

                    return {
                        productObjects,
                        newUrl,
                    }

                },
                dataSource : "on-page",
                waitForSelectors : ["img[class^='catalog_app_page']", "[class^='CatalogGrid-module__CatalogListItem']"],
                args : [
                    "categorizedSet",
                    "saveProductObjectsToStorageByChunk"
                ]
            },
        ],
        single : [
            {
                callback : async () => {

                    await scrollToBottom(700);

                    // await scrollToTop();

                    await slowDown();

                    ccScrapingEventInstance.clear();

                    /*
                    
                        product description :
                        let h2 = Array.from(document.querySelectorAll("h2")).find(item => item.innerText.trim().toLowerCase() === "product description");
                        h2.parentElement.querySelector("p").innerText.trim().replace(/[\n\r]/gi, "<br />");

                        let h2ProductDetails = Array.from(document.querySelectorAll("h2")).find(item => item.innerText.trim().toLowerCase().includes("product details")),
                            sectionContainer = h2ProductDetails.parentElement;
                    */

                    
                    let h2ProductDetails = Array.from(document.querySelectorAll("h2")).find(item => item.innerText.trim().toLowerCase().includes("product details")),
                        detailsSectionContainer = h2ProductDetails.parentElement,
                        productName = function(){

                            let length = "Product details - ".length,
                                productName = h2ProductDetails ? h2ProductDetails.innerText.slice(length) : null;

                            return productName;
                        }(),
                        additionalProductDetails = function(){
                            
                            let obj = {};
                            
                            Array.from(detailsSectionContainer.querySelectorAll("dl")).forEach(item => {
                                let keyContainer = item.querySelector("dt"),
                                    valContainer = item.querySelector("dd"),
                                    key = toCamelCase(keyContainer.innerText.trim()),
                                    val = valContainer.innerText.trim();

                                if(key === "category")  {
                                    key = toCamelCase("Additional Category Tags");
                                } else if(key === "abv")    {
                                    key = key.toUpperCase();
                                } else if(key === "ibu")    {
                                    key = key.toUpperCase();
                                }

                                obj[key] = val;
                            });

                            return obj;

                        }(),
                        h2ProductDescription = Array.from(document.querySelectorAll("h2")).find(item => item.innerText.trim().toLowerCase() === "product description"),
                        productDescription = h2ProductDescription ? h2ProductDescription.parentElement.querySelector("p").innerText.trim().replace(/[\n\r]/gi, "<br />") : null,

                        productDetails = {
                            productName,
                            productDescription,
                            ...additionalProductDetails
                        };

                    return productDetails
                },
                dataSource : "on-page",
                waitForSelectors : [
                    "img"
                ],
            }
        ]
    }

    window.___cc__CcScraperGlobalObject.ccScrapingEventInstance.showConsoleLogs = true;

    window.___cc__CcScraperGlobalObject.initialize = async function() {

        if(!currentProcess)  {
            // console.log(getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]));

            window.addEventListener("cc-scraping-event", (e) => {
                let scrapedData = e.detail.eventData.scrapedData; getValidatedPropValues(e, ["detail", "eventData", "scrapedData"]);
                if(e.detail.dataType === "scraped-data" && scrapedData)    {
                    ccScrapingEventInstance.table(scrapedData);
                }
                ccScrapingEventInstance.log(e.detail);
            });


            let categorizedSetsScraperObject = new CategorizedSetsScraper({
                evaluatorObject : getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]), 
                executeCategorizedSetScraping : true,
                executeMultiProductsSetsInitializer : false, 
                executeMultiSingleProductInitializer : true, 
                addSetDataToProductProps : true,
                uniqueProductObjProp : "productUri",
                productUriPropName : "productUri",
                removeProductsWithoutUriPropName : true,
                callbacksOnDone : [],
                downloadZippedData : true,
                
                csvRowsLimit : 500,
                // completeSingleScrapingEverySet : false,
                maxOpenedWindows : 2,
                // continuousScraping : true,
                completeSingleScrapingEverySet : true,
                // verifySingleProductUrl : false,
                // verifyProductSetUrl : false,


                // this can be used to slice the array of categorized sets || filter them by categorized set index in the offline db;

                // filteredCategorizedSetsIndices : [6, 12, 15],
                // filteredCategorizedSetsIndices : [10, 13, 16],
                // filteredCategorizedSetsIndices : [10],
                // categorizedSetsIndices : {
                //     startingIndex : 1,
                //     // lastIndex : 12,
                // },
            });
            
            await categorizedSetsScraperObject.getCategorizedSets();

            let relatedEvents = await ccScrapingEventInstance.groupRelatedEvents();

            console.log(relatedEvents);
            
        }

        
    }

    window.___cc__CcScraperGlobalObject.customFunction = async function() {
        let arr = await productsOfflineDb.getAllFilteredData({unscraped : true})

            // console.log(arr);

        let filtered = arr.filter(item => item["ABV"]);

        console.table(filtered);

        filtered.forEach(item => {
            item.unscraped = false;
        });

        filtered = filtered.map(item => {
            return {id : item.id, data : {...item}};
        });
        
        


        let results = await productsOfflineDb.updateMany(filtered);

        console.log(results);
            
            // window.___cc__CcScraperGlobalObject.productsOfflineDb.updateMany(filtered).then(results => {
            //     console.log("\n");
            //     console.log("\n");
            //     console.log("\n");
            //     console.log("\n");
            //     console.log(results);
            //     // results.forEach(item => console.log(item));
            //     console.log("\n");
            //     console.log("\n");
            //     console.log("\n");
            //     console.log("\n");
            // });
        
    }


    if(currentProcess)  {
        await initializeScraping(currentProcess);
        let scraperObject = currentProcess.scraperObject;

        window.___cc__scraperObject = scraperObject;
        if(currentProcess.type === "set" && scraperObject.allProductsSetEvaluatorsDone)    {
            // console.table(scraperObject.productObjects);
        }
    }
}())