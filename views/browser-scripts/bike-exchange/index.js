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
                                                    url : `https://www.bikeexchange.com/?cc-unique-url=${generateUuid()}`,
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
                                            url : `https://www.bikeexchange.com/?cc-unique-url=${generateUuid()}`,
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
                callback : async () => {
                    let productObjects = [],
                        categorizedSets = await categorizedSetsOfflineDb.getAll();

                    async function getProductsByCursor(label, endCursor = null)    {
                        
                        let graphRequest = {
                                url : "https://www.bikeexchange.com/graphql",
                                method : "POST",
                                body : [
                                    {
                                        "operationName": "AdvertListQuery",
                                        "variables": {
                                            "taxonSlug": `${label}`,
                                            "cursor" : `${endCursor}`,
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
                                            "searchDistance": 10,
                                            "width": 400,
                                            "height": 300,
                                            "fit": "fillmax",
                                            "logoHeight": 24
                                        },
                                        "query": "query AdvertListQuery($taxonSlug: String, $brandSlugs: [String!], $regionSlug: String, $locationSlug: String, $keywordQuery: String, $postcode: String, $sellerIds: [ID!], $optionValueIds: [ID!], $minPrice: Float, $maxPrice: Float, $sortBy: AdvertSearchSortByEnum, $cursor: String, $maxAdverts: Int, $width: Int, $height: Int, $fit: ImageFitEnum, $logoHeight: Int, $gender: [AdvertGenderEnum!], $condition: [AdvertConditionEnum!], $availability: [AdvertAvailabilityEnum!], $modelSlug: String, $ratings: [String!], $searchDistance: Int) {\n  advertSearch(\n    attributes: {taxonSlug: $taxonSlug, brandSlugs: $brandSlugs, regionSlug: $regionSlug, locationSlug: $locationSlug, keywordQuery: $keywordQuery, postcode: $postcode, sellerIds: $sellerIds, optionValueIds: $optionValueIds, sortBy: $sortBy, minPrice: $minPrice, maxPrice: $maxPrice, genders: $gender, conditions: $condition, availability: $availability, modelSlug: $modelSlug, ratings: $ratings, searchDistance: $searchDistance}\n  ) {\n    adverts: esAdverts(first: $maxAdverts, after: $cursor) {\n      edges {\n        node {\n          id\n          brand {\n            name\n            logo {\n              url: url(fit: crop, height: $logoHeight)\n              __typename\n            }\n            __typename\n          }\n          availability\n          cityDisplay\n          displayImage {\n            url: url(fit: $fit, width: $width, height: $height)\n            __typename\n          }\n          lowestPrice: lowestPriceInSessionCurrency\n          lowestOriginalPrice: lowestOriginalPriceInSessionCurrency\n          lowestFormattedPrice: salePriceFormatted\n          lowestOriginalFormattedPrice: originalPriceFormatted\n          isFeatured\n          isPromoted\n          pagePath\n          promotionText\n          promotionStartTime\n          promotionEndTime\n          seller {\n            businessName\n            shopAdvertSearchPath\n            isPrivate\n            managedMultiStore {\n              showParentInfo\n              __typename\n            }\n            __typename\n          }\n          taxon {\n            displayName\n            __typename\n          }\n          fullTitle\n          legacyId\n          rating {\n            count\n            stars\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        __typename\n      }\n      totalCount\n      __typename\n    }\n    __typename\n  }\n  siteConfig {\n    id\n    advertBrandLogoVisible\n    hideAdvertTileSellerName\n    wishlistEnabled\n    advertSettings {\n      id\n      showLocationOnAdvertTile\n      permitsCartQuickView\n      __typename\n    }\n    yotpoSettings {\n      id\n      displayWidgetSearchPageEnabled\n      storeId\n      __typename\n    }\n    __typename\n  }\n}\n"
                                    }
                                ]
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
                            scrapedProducts = getValidatedPropValues(graphResponse, ["data", "advertSearch", "adverts", "edges"]),
                            hasNextPage = getValidatedPropValues(graphResponse, ["data", "advertSearch", "adverts", "pageInfo", "hasNextPage"]),
                            newCursor = hasNextPage ? getValidatedPropValues(graphResponse, ["data", "advertSearch", "adverts", "pageInfo", "endCursor"]) : null;
                        
                        console.log({graphResponse,scrapedProducts, newCursor});
                        
                        return {scrapedProducts, newCursor};    

                    }

                    async function recursiveApiCall(categorizedSet) {

                        let {label, setData} = categorizedSet,
                            allProductObjects = [];

                        async function getAllProductObjects(label, endCursor)   {
                            let {scrapedProducts, newCursor} = await getProductsByCursor(label, endCursor);

                            scrapedProducts = scrapedProducts.map(item => {
                                let url = "https://www.bikeexchange.com"
                                return {
                                    productUri : `${url}${item.pagePath}`,
                                    ...setData,
                                }
                            });
                            console.log({scrapedProducts, newCursor});
                            allProductObjects.push(...scrapedProducts);

                            if(newCursor)   {
                                await getAllProductObjects(label, newCursor);
                            }
                        }
                        
                        await getAllProductObjects(label, null);

                        return allProductObjects;

                    }


                    await moderator(categorizedSets.slice(0, 1), async (slicedArr) => {

                        let promises = slicedArr.map(categorizedSet => {
                            return async function() {
                                let categorizedProducts = await recursiveApiCall(categorizedSet);

                                productObjects.push(...categorizedProducts);
                            }
                        });

                        await Promise.all(promises.map(item => item()));


                    }, 1);    

                    return {
                        productObjects,
                        newUrl : null,
                    }
                
                },
                dataSource : "api",
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




    window.___cc__CcScraperGlobalObject.initialize = async function() {

        console.log({
            message : "Hello there, Michael Norward!",
            source : "scraper-application-test-scripts"
        })

        if(!currentProcess)  {
            console.log(getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]));


            CcBrowserWindow.maxOpenedWindows = 5


            let categorizedSetsScraperObject = new CategorizedSetsScraper({
                evaluatorObject : getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]), 
                executeMultiProductsSetsInitializer : true, 
                executeMultiSingleProductInitializer : false, 
                addSetDataToProductProps : true,
                uniqueProductObjProp : "productUri",
                productUrlPropName : "productUri",
                removeProductsWithoutUriPropName : true,
                callbacksOnDone : [],
                downloadZippedData : false,
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
}())