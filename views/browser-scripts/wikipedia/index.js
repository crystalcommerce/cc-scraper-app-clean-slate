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
        generateUuid, 
        toUrl,
        toCamelCase, 
        slowDown,
        moderator,
        queryStringToObject,
        objectToQueryString,
        urlProcessInitializer, 
        getValidatedPropValues,
        ccScrapingEventInstance,
        ThirdPartyWebsiteDataScraper,
        wrapUp,
    } = window.___cc__CcScraperGlobalObject,
    { decodedProcessFromUrl, currentProcess, initializeScraping } = urlProcessInitializer();


    window.___cc__CcScraperGlobalObject.evaluatorObject = {
        thirdPartyWebsiteDataScraper : {
            "search-data" : [
                {
                    callback : async () => {

                    },
                    dataSource : "on-page",
                    waitForSelectors : [".site-pagination", ".plant-info-block"],
                    args : ["categorizedSet"]
                }
            ],
            "select-data" : [
                {
                    callback : async () => {

                    },
                    dataSource : "on-page",
                    waitForSelectors : [".site-pagination", ".plant-info-block"],
                    args : ["categorizedSet"]
                }
            ],
            "get-data-from-page" : [
                {
                    callback : async () => {

                    },
                    dataSource : "on-page",
                    waitForSelectors : [".site-pagination", ".plant-info-block"],
                    args : ["categorizedSet"]
                }
            ],
            "pass-data-to-site-origin" : [
                {
                    callback : async () => {

                    },
                    dataSource : "on-page",
                    waitForSelectors : [".site-pagination", ".plant-info-block"],
                    args : ["categorizedSet"]
                }
            ],
        },
    }

    window.___cc__CcScraperGlobalObject.ccScrapingEventInstance.showConsoleLogs = true;

    window.___cc__CcScraperGlobalObject.initialize = async function() {

        if(!currentProcess)  {
            console.log(getValidatedPropValues(window, ["___cc__CcScraperGlobalObject", "evaluatorObject"]));

            window.addEventListener("cc-scraping-event", (e) => {
                let scrapedData = e.detail.eventData.scrapedData; getValidatedPropValues(e, ["detail", "eventData", "scrapedData"]);
                if(e.detail.dataType === "scraped-data" && scrapedData)    {
                    ccScrapingEventInstance.table(scrapedData);
                }
                ccScrapingEventInstance.log(e.detail);
            });


            let thirdPartyWebsiteDataScraper = new ThirdPartyWebsiteDataScraper({
                
            });
            
            await thirdPartyWebsiteDataScraper.getCategorizedSets();
            
        }

        
    }


    if(currentProcess)  {
        await initializeScraping(currentProcess);
        let scraperObject = currentProcess.scraperObject;

        window.___cc__scraperObject = scraperObject;
        console.log(scraperObject);
    }
}());