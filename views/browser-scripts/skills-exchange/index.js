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
        ccDecodeObject,
        ccEncodeObject,
        objectToQueryString,
        queryStringToObject,
        wrapUp,
    } = window.___cc__CcScraperGlobalObject,
    { decodedProcessFromUrl, currentProcess, initializeScraping } = urlProcessInitializer();


    categorizedSetsOfflineDb.addProps("validDataProps", "label");

    window.___cc__CcScraperGlobalObject.evaluatorObject = {
        categorizedSets : [
            {
                callback : async () => {

                    if(window.location.href !== "https://www.mymajors.com/career-list/") {
                        return [];
                    }

                    let categorizedSets = Array.from(document.querySelectorAll("#majorTree .containerobj div:nth-child(1) a.hasChildMenu")).map(item => {
                        let category = item.innerText.trim().replace(/s+/, " ");
                        return {
                            setData : {
                                category,
                            },
                            url : `${window.location.href}?cc-unique-url=${toUrl(category)}`,
                        };
                    });

                    return categorizedSets;
                },
                dataSource : "api",
                waitForSelectors : [
                    "#majorTree .containerobj div:nth-child(1) a.hasChildMenu",
                ],
                args : []
            }
        ],
        set : [
            {
                callback : async (categorizedSet, saveProductObjectsToStorageByChunk) => {
                    let productObjects = [],
                        newUrl = null;

                    async function getAllSubcategories(matchedCategorizedset)    {

                        await new Promise((resolve) => {

                            setTimeout(resolve, 2000);

                        });

                        let category = matchedCategorizedset.innerText.trim().replace(/s+/, " "),
                            jobTitlesUris = Array.from(document.querySelectorAll("#majorTree .containerobj div:nth-child(2) a")).map(item => {
                                let jobTitles = item.innerText.trim(),
                                    skillUri = item.href;

                                return {
                                    skillUri,
                                    category,
                                    jobTitles,
                                }
                            });

                            // console.log(jobTitlesUri);
                        
                        return jobTitlesUris

                    }

                    let categories = Array.from(document.querySelectorAll("#majorTree .containerobj div:nth-child(1) a.hasChildMenu")), 
                        matchedCategorizedset = categories.find(item => {
                            return item.innerText.trim().replace(/s+/, " ") === categorizedSet.setData.category;
                        });
                        
                    
                    console.log({matchedCategorizedset})

                    matchedCategorizedset.click();

                    productObjects = await getAllSubcategories(matchedCategorizedset);

                    console.table(productObjects);

                    await slowDown(2525);

                    return {
                        productObjects,
                        newUrl : null,
                    }
                
                },
                dataSource : "api",
                waitForSelectors : [
                    "#majorTree .containerobj div:nth-child(1) a.hasChildMenu",
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

                    let {queryObject, urlWithoutQueryString, pathName} = queryStringToObject(window.location.href),
                        queryKey = "__cc-encoded-product-details",
                        encodedProductDetails = queryObject[queryKey],
                        decodedProductDetails = ccDecodeObject(encodedProductDetails) ? ccDecodeObject(encodedProductDetails) : {};

                    async function getDetails({pathNamesArr, matchedUrl}) {

                        let {name} = matchedUrl;

                        await matchedUrl.method({pathNamesArr, name});

                    }

                    function getNextUrl({pathNamesArr, name})    {
                        
                        let index = pathNamesArr.findIndex(item => item.name === name),
                            urlWithPath = `${urlWithoutQueryString}${pathNamesArr[index + 1]}`;

                        queryObject[queryKey] = ccEncodeObject(decodedProductDetails);

                        let queryString = objectToQueryString(queryObject);

                        return `${urlWithPath}?${queryString}`;
                    }

                    async function getOverview({pathNamesArr, name})  {
                        
                        let jobDescription = function(){
                                return Array.from(document.querySelector(".lead").childNodes).find(item => item.nodeType == 3 && item.nodeValue.replace(/\n+/gi, "").trim() !== "") ? Array.from(document.querySelector(".lead").childNodes).find(item => item.nodeType == 3 && item.nodeValue.replace(/\n+/, "").trim() !== "").nodeValue.replace(/\t+/gi, "").replace(/\n+/gi, "").trim() : ""
                            }(),
                            [mainTasksDiv, importantWorkActivitiesDiv] = Array.from(document.querySelectorAll("#posts .panel-primary")),
                            mainTasks = Array.from(mainTasksDiv.querySelectorAll(".panel-body > ul > li")).map(item => item.innerText.trim()).join("<br />"),
                            importantWorkActivies = Array.from(importantWorkActivitiesDiv.querySelectorAll("table > tbody > tr  > td:nth-child(2)")).map(item => item.innerText.trim()).join("<br />");

                        decodedProductDetails = {...decodedProductDetails, jobDescription, mainTasks, importantWorkActivies};
                            
                        console.log(decodedProductDetails);

                        let nextUrl = getNextUrl({pathNamesArr, name});

                        window.location = nextUrl;

                    }

                    async function getEducation({pathNamesArr, name})  {

                    }

                    async function getSkills({pathNamesArr, name})  {

                    }

                    async function getSalary({pathNamesArr, name})  {

                    }


                    let pathNamesArr = [
                            { 
                                name : "overview",
                                method : getOverview,
                                pathName : ""
                            },
                            { 
                                name : "education",
                                method : getEducation,
                                pathName : "education/"
                            },
                            { 
                                name : "skills",
                                method : getSkills,
                                pathName : "skills/"
                            },
                            { 
                                name : "salary",
                                method : getSalary,
                                pathName : "salary/"
                            }
                        ],
                        matchedUrl = pathNamesArr.find(item => pathName.includes(item.pathName));

                    

                    console.log(matchedUrl);

                    await getDetails({pathNamesArr, matchedUrl});

                    

                    
                    



                    // this will only be returned if the pathname has 
                    return {
                        ...decodedProductDetails
                    };
                },
                dataSource : "on-page",
                args : [
                    "categorizedSet",
                    "saveProductObjectsToStorageByChunk"
                ],
                waitForSelectors : [
                    // ".single-product-container .product-image"
                    // ".PageProduct-details"
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
                executeMultiSingleProductInitializer : false, 
                // executeMultiSingleProductInitializer : false, 
                addSetDataToProductProps : true,
                uniqueProductObjProp : "skillUri",
                productUriPropName : "skillUri",
                removeProductsWithoutUriPropName : true,
                callbacksOnDone : [],
                // downloadZippedData : true,
                downloadZippedData : false,
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


