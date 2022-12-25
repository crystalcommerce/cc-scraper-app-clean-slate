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

                    let categorizedSets = [
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=1",
                            "setData": {
                                "category": "Alpines & Rock Gardens"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=2",
                            "setData": {
                                "category": "Annuals"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=3",
                            "setData": {
                                "category": "Biennials"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=4",
                            "setData": {
                                "category": "Bulbs"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=5",
                            "setData": {
                                "category": "Edible Fruits & Nuts"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=6",
                            "setData": {
                                "category": "Vegetables"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=7",
                            "setData": {
                                "category": "Groundcovers"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=8",
                            "setData": {
                                "category": "Herbs"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=9",
                            "setData": {
                                "category": "Ornamental Grasses & Bamboo"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=10",
                            "setData": {
                                "category": "Perennials"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=11",
                            "setData": {
                                "category": "Ponds & Aquatics"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=12",
                            "setData": {
                                "category": "Shrubs"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=13",
                            "setData": {
                                "category": "Trees"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=14",
                            "setData": {
                                "category": "Tropicals & Tender Perennials"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=15",
                            "setData": {
                                "category": "Vines & Climbers"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=16",
                            "setData": {
                                "category": "Cactus & Succulents"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=17",
                            "setData": {
                                "category": "Ferns"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=18",
                            "setData": {
                                "category": "Palms"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=19",
                            "setData": {
                                "category": "Cycads"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=20",
                            "setData": {
                                "category": "Conifers"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=21",
                            "setData": {
                                "category": "Carnivorous & Insectivorous"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=22",
                            "setData": {
                                "category": "Epiphytes"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=23",
                            "setData": {
                                "category": "Parasites & Hemiparasites"
                            }
                        },
                        {
                            "url": "https://davesgarden.com/guides/pf/search/results.php?categ=24",
                            "setData": {
                                "category": "Mosses & Liverworts"
                            }
                        }
                    ];

                    return categorizedSets;

                },
                dataSource : "on-page",
                waitForSelectors : [],
            }
        ],
        set : [
            {
                callback : async () => {

                    await scrollToBottom(700);

                    // await scrollToTop();

                    await slowDown(2525);

                    ccScrapingEventInstance.clear();

                    let productObjects = Array.from(document.querySelectorAll(".plant-info-block")).map(item => {
                            let productName = item.querySelector(".plant-info-title a") ? item.querySelector(".plant-info-title a").innerText.trim() : null,
                                scientificName = item.querySelector(".plant-info-title p") ? item.querySelector(".plant-info-title p").innerText.trim() : null,
                                imageUris = function(){
                                    return Array.from(item.querySelectorAll(".plant-info-block-img")).map(div => {
                                        let queryObject = queryStringToObject(`https://davesgarden.com${div.getAttribute("style").slice(div.getAttribute("style").indexOf("url(") + 4, -2)}`);
                        
                                        return queryObject.image ? `https://pics.davesgarden.com/pics/${queryObject.image}` : null;
                                    }).filter(item => item !== null);
                                }(),
                                additionalProps = function(){
        
                                    return Array.from(item.querySelectorAll(".plant-info table tr")).reduce((object, tr) => {
                                        let [key, value] = Array.from(tr.querySelectorAll("td")).map(td => td.innerText.trim());
        
                                        object[key.toLowerCase()] = value;
        
                                        return object;
                                    }, {});
        
                                }(),
                                productUri = item.querySelector(".plant-info-title a") ? item.querySelector(".plant-info-title a").href : null;
                        
                            return {
                                productName,
                                scientificName,
                                imageUris,
                                ...additionalProps,
                                productUri,
                            }
                        }),
                        newUrl = document.querySelector(".site-pagination-step-next") ? document.querySelector(".site-pagination-step-next").href : null;
        
                    console.log({
                        productObjects, newUrl
                    })
        
                    return { productObjects, newUrl };

                },
                dataSource : "on-page",
                waitForSelectors : [".site-pagination", ".plant-info-block"],
                args : []
            },
        ],
        single : []
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
                executeMultiProductsSetsInitializer : true, 
                executeMultiSingleProductInitializer : true, 
                addSetDataToProductProps : true,
                uniqueProductObjProp : "productUri",
                productUriPropName : "productUri",
                removeProductsWithoutUriPropName : true,
                callbacksOnDone : [],
                downloadZippedData : true,
                
                csvRowsLimit : 500,
                completeSingleScrapingEverySet : false,
                maxOpenedWindows : 5,
                continuousScraping : true,
                // completeSingleScrapingEverySet : true,
                // verifySingleProductUrl : false,
                // verifyProductSetUrl : false,


                // this can be used to slice the array of categorized sets || filter them by categorized set index in the offline db;

                // filteredCategorizedSetsIndices : [6, 12, 15],
                // filteredCategorizedSetsIndices : [3, 10, 13],
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


    if(currentProcess)  {
        await initializeScraping(currentProcess);
        let scraperObject = currentProcess.scraperObject;

        window.___cc__scraperObject = scraperObject;
        if(currentProcess.type === "set" && scraperObject.allProductsSetEvaluatorsDone)    {
            // console.table(scraperObject.productObjects);
        }
    }
}())