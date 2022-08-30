console.log("We are firing it up");


async function ccLoadScripts(...globals)  {

    let promises = globals.map(item => {
        
        return async function() {
            await new Promise(resolve => {
                let interval = setInterval(function(){
        
                    if(typeof window[item] !== "undefined")   {
                        clearInterval(interval);
                        resolve();
                    }
        
                }, 100);
            });
        }
        
    });
    
    await Promise.all(promises.map(item => item()));

}


async function ccScraperInitialize({categoryLinkObjects, evaluatorObjects, processedUrls, weHaveLinkObjects, totalNumberOfProducts, linkObjectIndex, productsPerCategory})    {

    // controls the script to stop, reset, or reload by including this on the url;
    // - cc-scraper-reset;
    // - cc-scraper-reload;
    // - cc-scraper-stop;
    initializeControlMechanism();


    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTM4ZjNmOTU1YTA1NDJjZDhmNTJiMjciLCJwZXJtaXNzaW9uTGV2ZWwiOjMsImlhdCI6MTY1OTY2MDU0MSwiZXhwIjoxNjYwMjY1MzQxfQ.bXH_aeWDPU0J5x8YJ3_wLeeVB41Ilu_lJnEYS3lTXU0",
        CcScraper = __cc_getScraperFactory(__cc_getUtilities, authToken),
        {toUrl} = __cc_getUtilities(authToken),
        linkObjectsKey = `__cc_${toUrl("CC Colemans Survival objects")}`;



    console.log({CcScraper, linkObjectsKey});

}





// load the script and initialize;
(async function() {


    let { slowDown, scrollToBottom, queryStringToObject, objectToQueryString } = __cc_getUtilities(null),
        
        evaluatorObjects = [
            {
                callback : async () => {


                    async function getProductObjects(total){

                        let nodeList = document.querySelectorAll(".products.list.items.product-items .item.product.product-item");

                        if(nodeList.length < total) {
                            await scrollToBottom();

                            await slowDown();

                            await getProductObjects(total);
                        }


                        return Array.from(document.querySelectorAll(".products.list.items.product-items .item.product.product-item")).map(item => {
                            return {
                                productName : item.querySelector(".product-item-link") ? item.querySelector(".product-item-link").innerText.trim() : null,
                                productImage : null,
                                description : null,
                                price : null,
                                imageUris : [],
                                productUri : item.querySelector(".product-item-link") ? item.querySelector(".product-item-link").href : null,
                            }
                        });
                        
                    }
                    
                    let total = Number(document.querySelector(".toolbar-number").innerText.trim()),

                        productObjects = await getProductObjects(total),
                        newUrl = null;

                    console.log({productObjects, newUrl});


                    return {productObjects, newUrl}
                },

                callback : async () => {

                    let productObjects = Array.from(document.querySelectorAll(".search-results .search-result")).map(item => {
                            return {
                                productUri : item.querySelector(".search-result__content a").href,
                                productName : item.querySelector(".search-result__title").innerText.trim(),
                            }
                        }),
                        newUrl = function() {

                            let {queryObject, urlWithoutQueryString} = queryStringToObject(window.location.href),
                                {page} = queryObject,
                                nextPage = !document.querySelector("#nextButton").classList.contains("prev-next-button__disabled") ? true : false;

                            if(nextPage)    {
                                queryObject.page = Number(page) + 1;

                                return `${urlWithoutQueryString}?${objectToQueryString(queryObject)}`;
                            } else  {
                                return null;
                            }

                        }();


                    return {productObjects, newUrl};
                },
                // type : "list",
                // dataSource : "on-page",
                // // waitForSelectors : [".products.list.items.product-items"],
                // waitForSelectors : [".search-results"]
            },
            {
                callback : async () => {

                },
                type : "single",
                dataSource : "on-page",
                waitForSelectors : []
            }
        ];


    await ccLoadScripts("__cc_getUtilities", "__cc_getScraperFactory");
    

    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTM4ZjNmOTU1YTA1NDJjZDhmNTJiMjciLCJwZXJtaXNzaW9uTGV2ZWwiOjMsImlhdCI6MTY1OTY2MDU0MSwiZXhwIjoxNjYwMjY1MzQxfQ.bXH_aeWDPU0J5x8YJ3_wLeeVB41Ilu_lJnEYS3lTXU0",
        CcScraper = __cc_getScraperFactory(__cc_getUtilities, authToken),
        scraperObject = new CcScraper({
            categoryLinkObjects, 
            evaluatorObjects, 
            resultsDirPath : null, 
            timeDelay : null, 
            getResultsBy : null, 
            deleteCookiesPerCategory : null,
            executeSingleProductEvaluator : false,
        });

    window.__ccScraperObject = scraperObject;

    // part of the initialization process;

    scraperObject.getLocallyStoredProps();

    scraperObject.getCurrentProcess();


    console.log(scraperObject.currentProcess);

    if(!scraperObject.currentProcess.scraperRunning) {
        
        scraperObject.setCurrentProcess({type : "list", dataSource : "on-page"});


        let newUrl = scraperObject.getNexCategoryLinkUrl();


        console.log(newUrl);

        if(newUrl)  {
            window.location = newUrl;
        }


    } else {
        

        // check if the url is correct;
        if(scraperObject.checkCorrectUrl(false))   {
            console.log("We are at the correct url");

            await slowDown();

            await scraperObject.productsListScraping();

            if(scraperObject.executeSingleProductEvaluator) {
                await scraperObject.singleProductScraping();
            }

            // either download the products or save it to the apiRoute of our server;

            // once we have the products;

            // we can look for another 

        } else  {
            console.log({
                currentUrl : window.location.href,
                correctUrl : scraperObject.getNexCategoryLinkUrl(scraperObject.currentProcess.currentLinkObject.url),
            });

            console.log(window.location.href === scraperObject.getNexCategoryLinkUrl(scraperObject.currentProcess.currentLinkObject.url));
        }
    }
    

}());