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

                    let categorizedSets = Array.from(document.querySelectorAll(".bc-sf-filter-option-block-style .bc-sf-filter-option-multiple-list li > a")).map(item => {
                        let url = item.href.trim(),
                            productsTotal = item.querySelector(".bc-sf-filter-option-amount") ? Number(item.querySelector(".bc-sf-filter-option-amount").innerText.trim().replace(/[^\w\s]/gi, "")) : null,
                            setData = {
                                category : "Bags",
                                subcategory : item.querySelector(".bc-sf-filter-option-value") ? item.querySelector(".bc-sf-filter-option-value").innerText.trim() : null,
                            };

                        return {
                            url,
                            productsTotal,
                            setData,
                        }
                    });

                    return categorizedSets;

                },
                dataSource : "on-page",
                waitForSelectors : [".bc-sf-filter-option-block-style .bc-sf-filter-option-multiple-list", ".product-view-details"],
            }
        ],
        set : [
            {
                callback : async (categorizedSet) => {

                    await scrollToBottom(700);

                    // await scrollToTop();

                    await slowDown(2525);

                    ccScrapingEventInstance.clear();

                    let {setData, setId, url} = categorizedSet,
                        newUrl = function(){
                            let nextUrl = document.querySelector(".pagination a[rel=next]");

                            if(!nextUrl)    {
                                return null;
                            }
                            let nextUrlQueryObj = queryStringToObject(nextUrl.href),
                                { page } = nextUrlQueryObj.queryObject,
                                urlQueryObject = queryStringToObject(url),
                                {urlWithoutQueryString, queryObject} = urlQueryObject;

                            queryObject.page = page;

                            let queryString = objectToQueryString(queryObject);

                            return `${urlWithoutQueryString}?${queryString}`;
                            
                        }(),
                        productObjects = Array.from(document.querySelectorAll(".plp-product")).map(container => {
                            let imageUris = Array.from(container.querySelectorAll(".product-image-wrap img")).map(img => {
                                    let src = img.src,
                                        largeImage = function(){
                                            let urlObj = new URL(src),
                                                pathNameArr = urlObj.pathname.split("/"),
                                                file = pathNameArr.pop(),
                                                fileExt = file.split(".").pop(),
                                                fileName = file.split(".").shift().split("/").pop(),
                                                fileSize = fileName.split("_");

                                            fileSize.pop();

                                            
                                            let newFileName = `${fileSize.join("_")}.${fileExt}`;

                                            pathNameArr.push(newFileName);

                                            return `${urlObj.origin}${pathNameArr.join("/")}${urlObj.search}`;

                                        }();

                                    return largeImage;
                                }),
                                productUri = container.querySelector("a") ? container.querySelector("a").href : null,
                                productBrand = container.querySelector(".product-vendor") ? container.querySelector(".product-vendor").innerText.trim("").replace(/\r\n+/g, ' <br />') : null,
                                productName = productBrand && container.querySelector(".product-title") ?`${productBrand} - ${container.querySelector(".product-title").innerText.trim("").replace(/\r\n+/g, ' <br />')}` : productBrand ? productBrand : null,
                                productCondition = container.querySelector(".product-condition") ? container.querySelector(".product-condition").innerText.trim("").replace(/\r\n+/g, ' <br />') : null,
                                originalPrice = container.querySelector(".product-price .bc-sf-filter-product-item-original-price") ? container.querySelector(".product-price .bc-sf-filter-product-item-original-price").innerText.trim("").replace(/\r\n+/g, ' <br />') : null,
                                regularPrice = container.querySelector(".product-price .bc-sf-filter-product-item-regular-price") ? container.querySelector(".product-price .bc-sf-filter-product-item-regular-price").innerText.trim("").replace(/\r\n+/g, ' <br />') : null;

                            return {
                                setId,
                                ...setData,
                                productName,
                                productBrand,
                                imageUris,
                                productUri,
                                originalPrice,
                                regularPrice
                            }
                        });

                    return {
                        productObjects,
                        newUrl,
                    }

                },
                dataSource : "on-page",
                waitForSelectors : [".bc-sf-filter-option-block-style .bc-sf-filter-option-multiple-list", ".product-view-details"],
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

                    await slowDown(2525);

                    ccScrapingEventInstance.clear();

                    let container = document.querySelector(".pdp__section--overview"),
                        excludedKeys = ["Store Location", "store location"],
                        additionalProductDetails = function(){
                            let productObject = {};

                            if(container)   {

                                Array.from(container.querySelectorAll(".pdp__section-content .pdp__section-group")).forEach(section => {

                                    let key = section.querySelector(".pdp__group-title") ? section.querySelector(".pdp__group-title").innerText.trim().replace(/\r\n+/g, ' <br />') : null,
                                        val = function(){
                                            let res = Array.from(section.querySelectorAll(".pdp__group-item .pdp__group-item"));

                                            if(res.length)  {
                                                return res.map(item => item.innerText.trim().replace(/\r\n+/g, ' <br />')).join(" <br />");
                                            } else  {
                                                return section.querySelector(".pdp__group-item") ? section.querySelector(".pdp__group-item").innerText.trim().replace(/\r\n+/g, ' <br />') : null;
                                            }
                                        }();
                                    
                                    if(key && val && !excludedKeys.includes(key)) {
                                        productObject[key] = val;
                                    }
                                })


                            }

                            return productObject;
                        }();

                    return additionalProductDetails
                },
                dataSource : "on-page",
                waitForSelectors : [
                    ".pdp__section--overview"
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
                filteredCategorizedSetsIndices : [3, 10, 13],
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