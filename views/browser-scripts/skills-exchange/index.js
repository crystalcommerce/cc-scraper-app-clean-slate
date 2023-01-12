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
    } = window.___cc__CcScraperGlobalObject,
    { decodedProcessFromUrl, currentProcess, initializeScraping } = urlProcessInitializer();


    categorizedSetsOfflineDb.addProps("validDataProps", "label");

    window.___cc__CcScraperGlobalObject.evaluatorObject = {
        categorizedSets : [
            {
                callback : async () => {

                    let categorizedSets = [];

                    async function getAllSubcategories(item)    {

                        await new Promise((resolve) => {

                            setTimeout(resolve, 2000);

                        });

                        let category = item.innerText.trim().replace(/s+/, " "),
                            jobTitlesUri = Array.from(document.querySelectorAll("#majorTree .containerobjdiv:nth-child(2) a")).map(item => {
                                let jobTitles = item.innerText.trim(),
                                    skillUri = item.href;

                                return {
                                    category,
                                    jobTitlesUri,
                                    jobTitles,
                                }
                            });
                        
                        categorizedSets.push(...jobTitlesUri);

                    }

                    await moderator(Array.from(document.querySelectorAll("#majorTree .containerobj div:nth-child(1) a.hasChildMenu")), async (slicedArr) => {
                        let [item] = slicedArr;
                    
                        await new Promise((resolve, reject) => {
                           setTimeout(() => {
                                item.click();
                                resolve();
                           }, 1500); 
                        });

                        await getAllSubcategories();


                    }, 1);

                    return categorizedSets;

                },
                dataSource : "api",
                waitForSelectors : [],
            }
        ],
        set : [
            {
                callback : async (categorizedSet, saveProductObjectsToStorageByChunk) => {
                    let productObjects = [],
                        newUrl = null;

                    

                    return {
                        productObjects,
                        newUrl : null,
                    }
                
                },
                dataSource : "api",
                waitForSelectors : [
                    // ".product-item .product-image",
                ],
                args : [
                    "categorizedSet",
                    "saveProductObjectsToStorageByChunk"
                ]
            },
        ],
        single : [
            {
                callback : async () => {

                    

                    return {
                        productDescription,
                        ...additionalProductDetails
                    }
                },
                dataSource : "on-page",
                waitForSelectors : [
                    // ".single-product-container .product-image"
                    ".PageProduct-details"
                ],
            }
        ]
    }




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

            setTimeout(() => {

                console.clear();


            }, 300000);


            let categorizedSetsScraperObject = new CategorizedSetsScraper({
                evaluatorObject : getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]), 
                executeCategorizedSetScraping : true,
                executeMultiProductsSetsInitializer : true, 
                executeMultiSingleProductInitializer : true, 
                addSetDataToProductProps : true,
                uniqueProductObjProp : "productUri",
                productUriPropName : "productUri",
                removeProductsWithoutUriPropName : true,
                callbacksOnDone : [],
                downloadZippedData : true,
                // this can be used to slice the array of categorized sets
                // categorizedSetsIndices : {
                //     startingIndex : 10,
                //     lastIndex : 12,
                // },
                csvRowsLimit : 500,
                completeSingleScrapingEverySet : true,
                maxOpenedWindows : 5,
                continuousScraping : true,
                // filteredCategorizedSetsIndices : [8],
                // filteredCategorizedSetsIndices : [8, 10, 11],

                // filteredCategorizedSetsIndices : [113],
            });

            // console.log(categorizedSetsScraperObject.categorizedSetsEvaluatorDone);
            
            await categorizedSetsScraperObject.getCategorizedSets();
            
            // await categorizedSetsScraperObject.checkScraperDone();

            // await wrapUp();

            let relatedEvents = await ccScrapingEventInstance.groupRelatedEvents();

            console.log(relatedEvents);
            

            /*

                These code are used for testing purposes only.
            
            */
            // let productsSet = await categorizedSetsOfflineDb.getOneById(`50529102-711d-4770-8d5a-5cf853f08b86`),
            //     productObjects = await productsOfflineDb.getAllFilteredData({category : "Bikes", subcategory : "BMX Bikes"}),
            //     multiSingleProductScraper = new MultiSingleProductInitializer({
            //         setData : productsSet.setData, 
            //         evaluatorObject : getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]), 
            //         setId : productsSet.setId,
            //         productObjects,
            //         uniqueProductObjProp : "productUri",
            //         productUrlPropName : "productUri",
            //         addSetDataToProductProps : true, 
            //     });

            // console.log(multiSingleProductScraper);
            // await multiSingleProductScraper.getSingleProductData();

            // await multiSingleProductScraper.checkScraperDone();
            
        }

        
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


