/*
    
    This browser scraper class creates an object that will allow us to have multiple instances of the same class which means multiple tabs of a browser can use and instantiate objects of this class. Thus scraping more efficiently depending on the users' computers' memory.

    Procedural flow:
        * Instead of Instatiating, we would want to instantiate through the static methods available in this class;
            - CcScraper.getScraperObject(scraperOptions), instead of new CcScraper(scraperOptions);
                - this will check if an existing object through the scrapingOptions and the queryString from the current URL you're at.
            - If it detects that it has previously instantiated the object with the same options; it will use it, otherwise it will instantiate a new object out of this class;
        * After instantiation we can then reinitialize scraping, it will pick up where it left off, if this has been previously instantiated, or it will initialize new scraping if this is a new set, group or category;
        * This needs an evaluator function much like what we had on our previous scraper. Evaluator functions are specific to the page that needs to be scraped. As of now we only have at least three types of evaluators
            - ProductsListEvaluator - where products are displayed in a single page, but the entirety of the products available are already there. Only limited data from the products are displayed on pages like this.

            - PaginatedProductsListEvaluator - where limited number of products are displayed, and we would need to retrieve the next url to get the rest of the products - most of the time, the products only display limited properties of the products listed on this page.

            - SingleProductEvaluator - where this evaluator function can only get a single product, as there is only one product displayed on this page -- we can get more details about the product using this type.


*/


function __cc_getScraperFactory(getCcUtilities, authToken)    {

    let {
        apiRequest,
        postDataArray,
        scrollToBottom,
        isInArray,
        waitForSelector,
        toUrl,
        toCapitalize,
        toCapitalizeAll,
        objectToQueryString,
        queryStringToObject,
    } = getCcUtilities(authToken);

    class CcScraper {

        constructor({evaluatorObjects, apiRoute, imageNameObject, imagePropName, csvExcludedProps, pathLocation, linkObjectsKey, autoScrollToBottom, timeDelay, finalActions, getNextSetBy, deleteCookiesPerCategory})   {

            // prerequisites
            this.currentLinkObject = null;
            this.productObjects = [];
            this.scraperObjectKey = null;
            this.linkObjectsKey = linkObjectsKey; // used for getting the array of linkObjects;

            // scraping specific properties;
            this.evaluatorObjects = evaluatorObjects;
            this.apiRoute = apiRoute;
            this.imageNameObject = imageNameObject;
            this.imagePropName = imagePropName;
            this.csvExcludedProps = Array.isArray(csvExcludedProps) && csvExcludedProps.length > 0 ? csvExcludedProps : [
                "dateCreated", 
                "_id", 
                "__v", 
                "imagePaths", 
                "imageUris", 
                "multiFaced", 
                "productUri"
            ];
            this.pathLocation = pathLocation;
            
            // get last page of the url;
            this.nextUrl = null;
            this.startingPointUrl = null;
            // this.urlQueryKeySeparator = `__${toUrl("CC Scraper Object key")}`;
            this.urlQueryKeyPrefix = `___cc_`;
            this.scraperObjectKeySeparator = " __CC__scraper__CC__ ";
            
            this.scraperObjectQueryKey = `${this.urlQueryKeyPrefix}${toUrl("CC Scraper Object key")}`;

            // replace query string on every page
            this.addedUrlQueryObject = {};
            this.timeDelay = timeDelay ? timeDelay : 7747;

            // scraping technique;
            this.autoScrollToBottom = autoScrollToBottom;


            this.scriptClassName = "___cc_scraper";

            // this.resultMethod;
            this.finalActions = finalActions;


            // we make sure that the object knows if this has been initialized;
            window.localStorage.setItem(`${this.urlQueryKeyPrefix}hasInitialized`, "yes");

            this.getNextSetBy = getNextSetBy ? getNextSetBy : "same-tab";

            this.deleteCookiesPerCategory = deleteCookiesPerCategory;

            this.excludedLocalStorageKeys = [
                this.linkObjectsKey,
                this.scraperObjectKey,
                `${this.urlQueryKeyPrefix}hasInitialized`,
                `cc-link-objects-page`,
            ];

        }

        static urlQueryKeyPrefix = `___cc_`;
        static scraperObjectQueryKey = `___cc_${toUrl("CC Scraper Object key")}`;
        static scraperObjectKeySeparator = " __CC__scraper__CC__ ";

        static getCcQueryObjects(url, encoded = false) {
            let urlObject = queryStringToObject(url),
                objectKeys = Object.keys(urlObject).filter(key => {
                    return key.indexOf(CcScraper.urlQueryKeyPrefix) === 0;
                });

            objectKeys.forEach(key => {
                urlObject[key] = encoded ? window.atob(decodeURIComponent(urlObject[key])) : decodeURIComponent(urlObject[key]);
            });

            return urlObject;

        }

        // find the current link object key;
        static getScraperKey(linkObjectsKey) {
            // get the referrer link;
            // see for each starting url that we will use, we will attach a key
            let currentUrl = window.location.href,
                lastUrl = document.referrer,
                queryObject = CcScraper.getCcQueryObjects(currentUrl),
                possibleScraperObjectKey = CcScraper.getPossibleScraperObjectKey(linkObjectsKey);

            console.log(queryObject);
            console.log(possibleScraperObjectKey);
            
            return (queryObject && Object.keys(queryObject).length > 0) && queryObject[CcScraper.scraperObjectQueryKey] ? queryObject[CcScraper.scraperObjectQueryKey] : possibleScraperObjectKey ? possibleScraperObjectKey : null;
        }

        static findNewLinkObject(linkObjectsKey)  {
            let linkObjects = JSON.parse(window.localStorage.getItem(linkObjectsKey)),
                foundLinkObject = linkObjects.find(item => !item.ongoingProgress && !item.finished);

            return foundLinkObject;
        }

        static getPossibleScraperObjectKey(linkObjectsKey)  {
            let newLinkObject = CcScraper.findNewLinkObject(linkObjectsKey),
                productProps = newLinkObject ? newLinkObject.productProps : null;

            return newLinkObject ? Object.keys(productProps).map(key => productProps[key]).join(CcScraper.scraperObjectKeySeparator) : null;
        }

        static resetLastLinkObject(linkObjectsKey)  {
            let linkObjects = JSON.parse(window.localStorage.getItem(linkObjectsKey)),
                foundLinkObject = linkObjects.find(item => item.finished === false && item.ongoingProgress === true);
            foundLinkObject.finished = null,
            foundLinkObject.ongoingProgress = null;

            window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjects));
        }

        static async getScraperObject(scraperOptions)   {

            let { linkObjectsKey } = scraperOptions,
                scraperKey = CcScraper.getScraperKey(linkObjectsKey),
                ccScraper;

            if(scraperKey && window.localStorage.getItem(scraperKey))    {
                let currentScraperObject = JSON.parse(window.localStorage.getItem(scraperKey)),
                    { 
                        currentLinkObject, 
                        scraperObjectKey, 
                        productObjects,
                        nextUrl,
                        startingPointUrl,
                        addedUrlQueryObject,
                    } = currentScraperObject;

                

                ccScraper = new CcScraper(scraperOptions);


                let queryObject = CcScraper.getCcQueryObjects(window.location.href);

                if(Object.keys(queryObject).includes("restart-category"))   {
                    Object.assign(ccScraper, {
                        currentLinkObject, 
                        scraperObjectKey, 
                        productObjects : [],
                        nextUrl : null,
                        startingPointUrl,
                        addedUrlQueryObject,
                    });

                    ccScraper.reinitialization = false;
                
                    console.table(ccScraper);
                    await ccScraper.deleteCookies();

                    await ccScraper.reinitialize();

                } else  {
                    Object.assign(ccScraper, {
                        currentLinkObject, 
                        scraperObjectKey, 
                        productObjects,
                        nextUrl,
                        startingPointUrl,
                        addedUrlQueryObject,
                    });
                    ccScraper.reinitialization = true;
                    console.log("reinitialization of the previous object");
                    
                    console.log(ccScraper);
    
                    // resume scraping
                    await ccScraper.reinitialize();
                }
                

            } else  {
                console.log("New Link Category");
            
                ccScraper = new CcScraper(scraperOptions);
                ccScraper.reinitialization = false;
                
                console.table(ccScraper);
                await ccScraper.deleteCookies();

                await ccScraper.initialize();
            }

            return ccScraper;

        }


        updateLinkObjects() {
            let linkObjects = JSON.parse(window.localStorage.getItem(this.linkObjectsKey)),
                foundLinkObject = linkObjects.find(item => item.url === this.currentLinkObject.url);

            foundLinkObject.ongoingProgress = true;
            foundLinkObject.finished = false;

            window.localStorage.setItem(this.linkObjectsKey, JSON.stringify(linkObjects));

        }

        async slowDown(timeDelay = false)  {
            let delay = timeDelay ? timeDelay : this.timeDelay;
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        save()  {
            window.localStorage.setItem(this.scraperObjectKey, JSON.stringify(this));
        }


        findNewLinkObject()   {
            let linkObjects = JSON.parse(window.localStorage.getItem(this.linkObjectsKey));

            this.currentLinkObject = linkObjects.find(item => !item.ongoingProgress && !item.finished);
        }

        setScraperObjectKey()   {
            this.scraperObjectKey = Object.keys(this.currentLinkObject.productProps).map(key => {
                return this.currentLinkObject.productProps[key]
            }).join(this.scraperObjectKeySeparator);
        }

        getCcQueryObjects(url, encoded = false) {
            let urlObject = queryStringToObject(url),
                objectKeys = Object.keys(urlObject).filter(key => {
                    return key.indexOf(this.urlQueryKeyPrefix) === 0;
                });
            objectKeys.forEach(key => {
                urlObject[key] = encoded ? window.atob(decodeURIComponent(urlObject[key])) : decodeURIComponent(urlObject[key]);
            });

            return urlObject;

        }

        getStartingPointUrl()   {
            let urlObject = this.getCcQueryObjects(this.currentLinkObject.url),
                originalUrl = this.currentLinkObject.url.split("?").shift(),
                queryString;

            this.addedUrlQueryObject[this.scraperObjectQueryKey] = this.scraperObjectKey;

            Object.keys(this.currentLinkObject.productProps).forEach(key => {
                this.addedUrlQueryObject[`${this.urlQueryKeyPrefix}${key}`] = this.currentLinkObject.productProps[key];
            });

            queryString = [objectToQueryString(urlObject), objectToQueryString(this.addedUrlQueryObject)].filter(item => item.length && item !== null).join("&");

            this.startingPointUrl = `${originalUrl}?${queryString}`;

        }

        getNextUrl(newUrl)    {
            let urlObject = {...this.getCcQueryObjects(newUrl)},
                originalUrl = newUrl.split("?").shift(),
                queryString;

            queryString = [objectToQueryString(urlObject), objectToQueryString(this.addedUrlQueryObject)].filter(item => item.length && item !== null).join("&");

            this.nextUrl = `${originalUrl}?${queryString}`;
        }

        async deleteCookies(initial = false) {
            if(this.deleteCookiesPerCategory || initial)   {
                let cookies = document.cookie.split(";");

                cookies.forEach(cookie => {
                    let name = cookie.split("=").shift();
                    console.log('currently deleting cookie : ' + name);
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                })

                
            }

            await this.slowDown(2525);
        }

        /* Main Scraping Processes */
        async scrapeData()  {

            if(this.autoScrollToBottom) {
                await scrollToBottom();
            }

            console.log("we are scraping data")

            await this.evaluate();

        }
        
        // get the next url to be scraped;
        async goToCorrectUrl()    {
            if(this.nextUrl && window.location.href !== this.nextUrl)    {
                console.log("next url");
                await this.slowDown(2525);

                window.location = this.nextUrl;

                return false;

            } else if(!this.nextUrl && !this.reinitialization && (this.startingPointUrl && window.location.href !== this.startingPointUrl))  {
                console.log("starting point url");
                console.log(this.startingPoinUrl);
                console.log(window.location.href);
            
                console.table({
                    startingPoinUrl : this.startingPointUrl,
                    currentUrl : window.location.href,
                    areTheyEqual : this.startingPointUrl === window.location.href,
                });

                await this.slowDown(2525);

                window.location = this.startingPointUrl;

                return false;
            }
            this.nextUrl = null;

            return true;
        }

        async downloadEncodedText()   {
            let currentLinkObject = this.currentLinkObject,
                element = document.createElement("a"),
                fileName = `${toUrl("encoded" + " " +Object.keys(currentLinkObject.productProps).reduce((a, b) => {
                    a += currentLinkObject.productProps[b] + " ";
                    return a;
                }, "") + ` __date-${Date.now()}` + ` __total-${this.productObjects.length}`)}.txt`;

            element.style.display = "none";
            element.setAttribute("href", `data:text/plain;charset=utf-8, ${btoa(encodeURIComponent(JSON.stringify(this.productObjects)))}`);
            element.setAttribute("target", "_blank");
            element.setAttribute("download", fileName);
            element.setAttribute("class", "__cc_download-encoded-text");

            document.body.appendChild(element);
            
            await waitForSelector(document.querySelector(".__cc_download-encoded-text"));
            element.click();
            await this.slowDown(3434);
        }

        async downloadJson()  {
            let currentLinkObject = this.currentLinkObject,
                element = document.createElement("a"),
                fileName = `${toUrl(Object.keys(currentLinkObject.productProps).reduce((a, b) => {
                    a += currentLinkObject.productProps[b] + " ";
                    return a;
                }, "") + ` __date-${Date.now()}` + ` __total-${this.productObjects.length}`)}.json`;

            element.style.display = "none";
            element.setAttribute("href", `data:application/json;charset=utf-8, ${JSON.stringify(this.productObjects)}`);
            element.setAttribute("target", "_blank");
            element.setAttribute("download", fileName);
            element.setAttribute("class", "__cc_downloadJson_button");

            document.body.appendChild(element);
            
            await waitForSelector(document.querySelector(".__cc_downloadJson_button"));
            element.click();

            await this.slowDown(3434);
        }

        async postProductObjectsToAPI()    {
            let postResult = await postDataArray(this.apiRoute, this.productObjects);
        }

        async printProductObjectsOnPage()   {
            let preTag = document.createElement("pre"),
                textContent = JSON.stringify(this.productObjects, null, 4);
            
            preTag.className = this.scriptClassName;
            document.body.innerHTML = "";
            document.body.append(preTag);
        }

        async clearLocalStorage()   {
            await this.slowDown(500);
            Object.keys(window.localStorage).map(key => {
                if(!this.excludedLocalStorageKeys.includes(key))    {
                    window.localStorage.removeItem(key);
                }
            });
        }

        async resetCategory()   {
            this.productObjects = [];
            this.nextUrl = null;
            await this.slowDown(2525);
            window.location = this.startingPointUrl;
        }

        async getNextSet()  {

            let nextFunction = null;

            switch(this.getNextSetBy)   {
                case "same-tab":
                    window.location = `${window.location.origin}`;
                    return;
                case "new-tab":
                    nextFunction = () => {

                    }
                    return;
                default : 
                    window.location = `${window.location.origin}`;
            }
            await this.slowDown(2525);

            nextFunction();
            

            await new Promise(resolve => {
                let interval = setInterval(() => {
                    if(nextFunction)    {
                        clearInterval(interval);
                        resolve();
                    }
                }, 10);
            })
        }

        async productsListEvaluatorPaginated(evaluatorObject)  {

            let { productObjects, newUrl } = await evaluatorObject.callback(),
                { productProps } = this.currentLinkObject; // need to be one method product list;
            

            this.productObjects.push(...productObjects.map(item => {
                return {...item, ...productProps};
            }));
            
            if(newUrl)  {
                this.getNextUrl(newUrl);
            }
            console.log("\n\n\n\n+++++++++++++++++++++++++++++++=============================+++++++++++++++++++++++++++++++\n\n\n");
            console.table(this.productObjects);
            console.log("\n\n\n+++++++++++++++++++++++++++++++=============================+++++++++++++++++++++++++++++++\n\n\n\n");
            console.table({
                previousCount : this.productObjects.length - productObjects.length,
                addedProductsCount : productObjects.length,
                totalCount : this.productObjects.length,
            })

            this.save();

            if(this.nextUrl)    {
                // navigate to the next url;
                console.log("we're navigating to the next url");

                await this.slowDown(2525);
                window.location = this.nextUrl;
                return;
            } else  {
                console.log("we're done scraping this category");


                await this.slowDown(2525);

                // either we post all result to database or we downlaod JSON file.
                for(let actions of this.finalActions)   {
                    await this[actions]();
                }
                

                this.allCategoriesScraped = false;

                this.markLinkObjects();

                await this.clearLocalStorage();

                await this.getNextSet();

            }

        }

        markLinkObjects()   {

            // mark the linkObject as finished = true and ongoingProcess = false;
            // remove the scraperObjectKey from the localStorage;

             // mark the link objects;
             let linkObjects = JSON.parse(window.localStorage.getItem(this.linkObjectsKey)),
                foundLinkObject = linkObjects.find(item => item.url === this.currentLinkObject.url);
         
            foundLinkObject.ongoingProgress = false;
            foundLinkObject.finished = true;

            // we save the links again;
            window.localStorage.setItem(this.linkObjectsKey, JSON.stringify(linkObjects));

            window.localStorage.removeItem(this.scraperObjectKey);

        }

        async productsListEvaluator(evaluatorObject)   {
            this.productObjects = await evaluatorObject.callback();
        }

        // evaluate the page;
        async evaluate()    {
            // select from three different evaluators
            for( let i = 0; i < this.evaluatorObjects.length; i++)    {
                let evaluatorObject = this.evaluatorObjects[i],
                    {paginated, type, awaitSelectors} = evaluatorObject;

                for(let selector of awaitSelectors) {
                    await waitForSelector(selector);
                }

                
                if(type === "list") {
                    if(paginated) {
                        await this.productsListEvaluatorPaginated(evaluatorObject);
                    } else  {
                        await this.productsListEvaluator(evaluatorObject);
                    }
                } else  {

                }
            }
        }


        async reinitialize()    {
            // update link objects array;
            this.updateLinkObjects();

            // save the instance in localStorage;
            this.save();

            // navigate to the startingpoin url or 
            let isUrlCorrect = await this.goToCorrectUrl();
            
            // resume scraping;
            if(isUrlCorrect)    {
                await this.scrapeData();
            }
        }
        
        async initialize()    {

            

            // find the new link object;
            this.findNewLinkObject();

            if(!this.currentLinkObject) {
                console.log("All Categories have been scraped");
                this.allCategoriesScraped = true;
                return;
            }


            // save the scraper key
            this.setScraperObjectKey();

            // get the starting point url;
            this.getStartingPointUrl();

            // update link objects array;
            this.updateLinkObjects();

            // save the instance in localStorage;
            this.save();

            // delete cookies
            await this.deleteCookies();

            // navigate to the startingpoin url or 
            let isUrlCorrect = await this.goToCorrectUrl();
            
            // resume scraping
            if(isUrlCorrect)    {
                await this.scrapeData();
            }
            

        }

    }

    

    return CcScraper;

}