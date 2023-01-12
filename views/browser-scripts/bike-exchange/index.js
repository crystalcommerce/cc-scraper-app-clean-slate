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

                    async function getCategories(categoryLablel)    {
                        let graphRequest = {
                                url : "https://www.bikeexchange.com/graphql",
                                body : [
                                    {
                                        "operationName": "CategoryFilterQuery",
                                        "variables": {
                                            "taxonSlug": `${categoryLablel}`,
                                            "brandSlugs": [
                                            ""
                                            ],
                                            "regionSlug": "",
                                            "locationSlug": "",
                                            "postcode": "",
                                            "keywordQuery": "",
                                            "sellerIds": [
                                            ""
                                            ],
                                            "sortBy": "DEFAULT",
                                            "gender": [],
                                            "condition": [],
                                            "availability": [],
                                            "modelSlug": "-",
                                            "optionValueIds": [
                                            ""
                                            ],
                                            "maxAdverts": 24,
                                            "ratings": [
                                            ""
                                            ],
                                            "searchDistance": 10
                                        },
                                        "query": "query CategoryFilterQuery($taxonSlug: String, $brandSlugs: [String!], $regionSlug: String, $locationSlug: String, $keywordQuery: String, $postcode: String, $sellerIds: [ID!], $optionValueIds: [ID!], $sortBy: AdvertSearchSortByEnum, $minPrice: Float, $maxPrice: Float, $gender: [AdvertGenderEnum!], $condition: [AdvertConditionEnum!], $availability: [AdvertAvailabilityEnum!], $modelSlug: String) {\n  advertSearch(\n    attributes: {taxonSlug: $taxonSlug, brandSlugs: $brandSlugs, regionSlug: $regionSlug, locationSlug: $locationSlug, keywordQuery: $keywordQuery, postcode: $postcode, sellerIds: $sellerIds, optionValueIds: $optionValueIds, sortBy: $sortBy, minPrice: $minPrice, maxPrice: $maxPrice, genders: $gender, conditions: $condition, availability: $availability, modelSlug: $modelSlug}\n  ) {\n    applicableFilters {\n      taxonFilterOptions {\n        id\n        label: displayName\n        value: urlSlug\n        parentId\n        count\n        hasChildren\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
                                    }
                                ],
                                method : "POST",
                            },
                            response = await fetch(graphRequest.url, {
                                    method : graphRequest.method,
                                    headers : {
                                        "Content-Type" : "application/json",
                                    },
                                    body : JSON.stringify(graphRequest.body)
                                }),
                            data = await response.json(),
                            [graphResponse] = data,
                            categories = getValidatedPropValues(graphResponse, ["data", "advertSearch", "applicableFilters", "taxonFilterOptions"]);

                        return categories;
                    }
                    async function getAllCategorizedSets()  {
                        let categorizedSets = [],
                            index = 0,
                            categories = await getCategories("-");

                        console.log(categories);

                        await moderator(categories, async (slicedArr) => {

                            let promises = slicedArr.map(category => {
                                return async function() {
                                    if(category.hasChildren)    {
                                        let subcategories = await getCategories(category.value),
                                            categoryName = category.label;
                                        
                                        console.log({categoryName, subcategories});
        
                                        subcategories.forEach(sub => {
                                            if(sub.value !== category.value)    {
                                                categorizedSets.push({
                                                    url : `https://www.bikeexchange.com/?cc-unique-url=${sub.value}`,
                                                    label : sub.value,
                                                    setData : {
                                                        category : categoryName,
                                                        subcategory : sub.label,
                                                    }
                                                })
                                            }
                                            
                                        })
                                    } else  {
                                        categorizedSets.push({
                                            url : `https://www.bikeexchange.com/?cc-unique-url=${category.value}`,
                                            label : category.value,
                                            setData : {
                                                category : category.label
                                            }
                                        })
                                    }
                                }
                            });

                            await Promise.all(promises.map(item => item()));

                            index++;

                        }, 1);

                        
                        return categorizedSets;
                    }
                    
                    let categorizedSets = await getAllCategorizedSets();

                    console.table(categorizedSets);

                    return categorizedSets;

                },
                dataSource : "api",
                waitForSelectors : [],
            }
        ],
        set : [
            {
                callback : async (categorizedSet, saveProductObjectsToStorageByChunk) => {
                    let productObjects = [];

                    async function getProductsByCursor(label, endCursor = null)    {
                        
                        await slowDown();

                        let graphRequest = {
                                url : "https://www.bikeexchange.com/graphql",
                                method : "POST",
                                headers : {
                                    "Content-Type" : "application/json",
                                },
                                body : [
                                    {
                                        "operationName": "AdvertListQuery",
                                        "variables": {
                                            "taxonSlug": label,
                                            "cursor" : endCursor,
                                            "maxAdverts": 24,
                                            "fit": "fillmax"
                                        },
                                        "query": "query AdvertListQuery(\n  $taxonSlug: String\n  $cursor: String\n  $maxAdverts: Int\n  $fit: ImageFitEnum\n) {\n  advertSearch(\n    attributes: {\n      taxonSlug: $taxonSlug\n    }\n  ) {\n    adverts: esAdverts(first: $maxAdverts, after: $cursor) {\n      edges {\n        node {\n          id\n          brand {\n            name\n          }\n          displayImage {\n            url: url(fit: $fit)\n          }\n          lowestPrice: lowestPriceInSessionCurrency\n          pagePath\n          fullTitle\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      totalCount\n    }\n  }\n}"
                                    }
                                ]
                            },
                            response = await fetch(graphRequest.url, {
                                method : graphRequest.method,
                                headers : graphRequest.headers,
                                body : JSON.stringify(graphRequest.body)
                            }),
                            data = await response.json();
                            

                            // ccScrapingEventInstance.log(data);
                        let [graphResponse] = data,
                            scrapedProducts = getValidatedPropValues(graphResponse, ["data", "advertSearch", "adverts", "edges"]),
                            hasNextPage = getValidatedPropValues(graphResponse, ["data", "advertSearch", "adverts", "pageInfo", "hasNextPage"]),
                            totalProducts = getValidatedPropValues(graphResponse, ["data", "advertSearch", "adverts", "totalCount"]),
                            newCursor = hasNextPage ? getValidatedPropValues(graphResponse, ["data", "advertSearch", "adverts", "pageInfo", "endCursor"]) : null;
                        
                        // ccScrapingEventInstance.log({graphResponse, scrapedProducts, newCursor});
                        
                        return {scrapedProducts, newCursor, totalProducts};    

                    }
                    // await getProductsByCursor(categorizedSet.label, null);

                    async function recursiveApiCall(categorizedSet) {

                        let {label, setData, setId} = categorizedSet,
                            currentScrapedProducts = 0,
                            page = 1,
                            productsTotal = 0;

                        async function getAllProductObjects(label, endCursor)   {

                            try {
                                let {scrapedProducts, newCursor, totalProducts} = await getProductsByCursor(label, endCursor);

                                productsTotal = productsTotal ? productsTotal : totalProducts

                                currentScrapedProducts = currentScrapedProducts + scrapedProducts.length;

                                scrapedProducts = scrapedProducts.map(item => {
                                    let url = "https://www.bikeexchange.com",
                                        productUri = `${url}${getValidatedPropValues(item, ["node", "pagePath"])}`,
                                        productName = getValidatedPropValues(item, ["node", "fullTitle"]),
                                        brandName = getValidatedPropValues(item, ["node", "brand", "name"]),
                                        imageUris = [getValidatedPropValues(item, ["node", "displayImage", "url"])].filter(item => item && item !== "");

                                    return {
                                        // remember to add this when using saveProductObjectsToStorageByChunk
                                        setId,
                                        ...setData,

                                        productUri,
                                        productName,
                                        brandName,
                                        imageUris,
                                    }
                                });
                                // ccScrapingEventInstance.table(scrapedProducts);
                                // ccScrapingEventInstance.log({scrapedProducts, newCursor, currentScrapedProducts, productsTotal, page});

                                // make sure setId and setData is already present 
                                // on each of the scraped products
                                await saveProductObjectsToStorageByChunk(scrapedProducts);

                                page++;
                                if(newCursor)   {
                                    await getAllProductObjects(label, newCursor);
                                }
                            } catch(err)    {
                                // ccScrapingEventInstance.log(err);
                            }
                            
                        }
                        
                        await getAllProductObjects(label, null);

                        return {currentScrapedProducts, productsTotal, page};

                    }

                    let scrapingResult = await recursiveApiCall(categorizedSet),
                        {productsTotal, currentScrapedProducts, page} = scrapingResult;

                    // productObjects = allProductObjects;

                    // ccScrapingEventInstance.log({categorizedSet, productsTotal, currentScrapedProducts, page});
                    await slowDown();

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

                    // await scrollToBottom();

                    await slowDown(2525);

                    // await scrollToTop();


                    let descriptionContainer = document.querySelector(".PageProduct-details .MRevealText .MAccordionContent-inner"),
                        productDescription = descriptionContainer ? descriptionContainer.textContent.trim() : null,
                        additionalProductDetailsContainer = document.querySelector(".PageProduct-details > div:first-child > p"),
                        additionalProductDetails = function(){
                            let productDetailsObject = {},
                                excludedKeys = ["Brand", "Type", "Availability", "ID", "Item Condition", "Item condition", "item condition", "id", "Id"];
                            if(additionalProductDetailsContainer) {
                                let arr = additionalProductDetailsContainer.innerText.trim().split("\n").filter(item => item !== "").map(item => {
                                    let [key, val] = item.split(":").map(item => item.trim());
                                    return {key, val};
                                });
                                productDetailsObject = arr.reduce((a, b) => {
                                    let {key, val} = b;
                                    if(!excludedKeys.includes(key)) {
                                        a[toCamelCase(key)] = val;
                                    }
                                    
                                    return a;
                                }, {});
                            }

                            return productDetailsObject;
                        }();

                    await slowDown(5252);

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
                filteredCategorizedSetsIndices : [1],

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


