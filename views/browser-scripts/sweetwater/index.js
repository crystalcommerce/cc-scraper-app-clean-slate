console.log({
    message : "Initializing scraping procedure...",
    author : "Michael Norward"
});

let linkObjects;

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

};

let evaluatorObjects = [
    {
        callback : async () => {

            async function waitForSelector(selector)  {
                await new Promise(resolve => {
                    if(selector)    {
                        resolve();
                    }
                    let interval = setInterval(function(){
                        if(selector)    {
                            clearInterval(interval);
                            resolve();
                        }
                    }, 500);
            
                });
                return selector;
            }

            async function scrollToBottom()  {
                let totalHeight = document.body.offsetHeight - window.innerHeight,
                    currentScroll = 0;
            
                function scroll()   {
                    currentScroll = window.scrollY;
                }
                
                window.addEventListener("scroll", scroll);
            
                await new Promise(resolve => {
                    let interval = setInterval(() => {
                        window.scrollTo(0, function(){
                            totalHeight = document.body.offsetHeight - window.innerHeight;
                            
                            if(currentScroll + 100 < totalHeight)   {
                                return currentScroll + 100;
                            } else  {
                                return currentScroll + (totalHeight - currentScroll);
                            }
                        }());

                        if(currentScroll >= totalHeight - 200) {
            
                            console.log({currentScroll, totalHeight})
                            clearInterval(interval);
                            window.removeEventListener("scroll", scroll);
                            resolve();
                        }
                    }, 52);
                });
                
            }
        
            async function scrollToTop()   {
                let totalHeight = document.body.offsetHeight - window.innerHeight,
                    currentScroll = window.scrollY;
            
                function scroll()   {
                    currentScroll = window.scrollY;
                }
                
                window.addEventListener("scroll", scroll);
            
                await new Promise(resolve => {
                    let interval = setInterval(() => {
                        window.scrollTo(0, currentScroll - 100);
                        if(currentScroll <= 0) {
            
                            console.log({currentScroll, totalHeight})
                            clearInterval(interval);
                            window.removeEventListener("scroll", scroll);
                            resolve();
                        }
                    }, 25);
                });
            }


            function getLargeImageSrc(imageSrc) {

                if(!imageSrc)    {
                    return null;
                }

                let mediaUri = `https://media.sweetwater.com/api/i/`,
                    largeImageSrc = null;

                if(!imageSrc.includes("image_not_available.gif.auto.webp")) {
                    let imagePathName = imageSrc.replace(mediaUri, ""),
                        imageSrcMeta = imagePathName.split("/"),
                        metadata = imageSrcMeta[0],
                        fileName = imageSrcMeta[imageSrcMeta.length - 1],
                        size = imageSrcMeta[imageSrcMeta.length - 2],
                        metaObject = metadata.split("__").map(item => {
                            let obj = {},
                                [key, val] = item.split("-");
                            obj[key] = val;

                            return obj;
                        }).reduce((a, b) => {
                            let [key] = Object.keys(b);
                            if(key !== "w" && key !== "h" && (key !== "b" && b[key] !== "pricedrop"))  {
                                a = {...a, ...b};
                            }
                            return a;
                        }, {});

                    // metadata
                    metadata = Object.keys(metaObject).reduce((a, b) => {

                        a.push(`${b}-${metaObject[b]}`);

                        return a;
                    }, []).join("__");
                    imageSrcMeta[0] = metadata;

                    
                    // replace the image with large one..    
                    let fileNameArr = fileName.split(".");
                    if(!fileNameArr[0].includes("-large"))  {
                        fileNameArr[0] = `${fileNameArr[0]}-large`;
                        fileName = fileNameArr.join(".");

                        imageSrcMeta[imageSrcMeta.length - 1] = fileName;
                    }
                    


                    
                    
                    // replace the size
                    if(!isNaN(Number(size)) && !fileName.includes(size))    {
                        imageSrcMeta[imageSrcMeta.length - 2] = 750;
                    }

                    largeImageSrc = mediaUri + imageSrcMeta.join("/");
                }

                return largeImageSrc;
            }


            await new Promise(resolve => setTimeout(resolve, 3434));

            await scrollToBottom();
            await scrollToTop();


            let productObjects = Array.from(document.querySelectorAll(".product-card:not(.candy--card)")).map(item =>{
                    let productName = item.querySelector(".product-card__name") ? item.querySelector(".product-card__name").innerText.trim() : null,
                        productUri = item.querySelector(".product-card__name a") ? item.querySelector(".product-card__name a").href : null,
                        imageUris = function(){
                            let imageSrc = item.querySelector(".product-card__img img") ? item.querySelector(".product-card__img img").src : null,
                                imageUris = [],
                                largeImageSrc = getLargeImageSrc(imageSrc);
                            if(largeImageSrc)   {
                                imageUris.push(largeImageSrc);
                            }
                            return imageUris;
                        }();

                    return {
                        productName,
                        productUri,
                        imageUris,
                    }
                }),
                newUrl = document.querySelector(".bottomPagination a.paginate-next") ? document.querySelector(".bottomPagination a.paginate-next").href : null;
                   

            return {productObjects, newUrl};

        },
        type : "list",
        paginated : true,
        awaitSelectors : [
            `script[src='/p2TBVNJZ/init.js']`,
            `.product-card:not(.candy--card)`
        ],
    }
];


function getLinkObjects(linkObjects, linkObjectsKey) {

    if(window.localStorage.getItem(linkObjectsKey)) {
        return JSON.parse(window.localStorage.getItem(linkObjectsKey));
    } else  {
        window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjects));

        return linkObjects;
    }
}


// initialization of the scraper object;

async function ccScraperInitialize(linkObjectsKey, authToken) {

    let CcScraper = __cc_getScraperFactory(__cc_getUtilities, authToken),
        {toUrl} = __cc_getUtilities(authToken);
        
    
    let scraperOptions = {
        evaluatorObjects, 
        apiRoute : "http://localhost:8080/api/sweetwater-musicians", 
        imageNameObject :  {shared : ["productName"], split : []}, 
        imagePropName : "productImage", 
        pathLocation : "C:/Users/Michael Norward/Google Drive/Crystal Commerce/sweetwater-musicians/", 
        linkObjectsKey,
        autoScrollToBottom : false,
        deleteCookiesPerCategory : false,
        finalActions : ["postProductObjectsToAPI"], // downloadJson || postProductObjectsToAPI || printProductObjectsOnPage || downloadEncodedText;
        getNextSetBy : "same-tab", // new-tab; click; same-tab;
    };
        
    let ccScraper = await CcScraper.getScraperObject(scraperOptions);

    
    
    return ccScraper.allCategoriesScraped;

}



(async function() {

    await ccLoadScripts("__cc_getUtilities", "__cc_getScraperFactory");

    
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNlMzM1NTE3YThhNTUzYzRkZGM4ZWQiLCJwZXJtaXNzaW9uTGV2ZWwiOjQsImlhdCI6MTY1MjQzMzY0NiwiZXhwIjoxNjUzMDM4NDQ2fQ.BHfnjykoaOaUKWCmp63t-5ev20HWkTdobg2yCaLzwiI",
        {apiRequest, toUrl, waitForSelector} = __cc_getUtilities(authToken),
        pageTotal = 288,
        linkObjectsKey = `__cc_${toUrl("CC Sweetwater Musicians link objects")}`,
        limit = 25,
        page = window.localStorage.getItem("cc-link-objects-page") ? parseInt(window.localStorage.getItem("cc-link-objects-page")) : 1,
        CcScraper = __cc_getScraperFactory(__cc_getUtilities, authToken)
    
    // reset mechanism
    if(window.location.href.includes("scraper-reset"))  {
        Object.keys(window.localStorage).forEach(key => window.localStorage.removeItem(key));
        window.location = window.location.origin;
    }

    // stop
    if(window.location.href.includes("scraper-stop"))   {
        return;
    }

    // reset last link object
    if(window.location.href.includes("reset-last-link"))    {
        CcScraper.resetLastLinkObject(linkObjectsKey);
        window.location = window.location.origin;
    }

    async function recursiveScraping(authToken, pageTotal, page = 1)   {
        
        window.localStorage.setItem("cc-link-objects-page", `${page}`);

        let linkObjects,
            allCategoriesScraped;

        if(!window.localStorage.getItem(linkObjectsKey))    {

            console.log("this has been initialized...")
            let { data  } = await apiRequest(`http://localhost:8080/api/sweetwater-musicians-categories/paginated?page=${page}&limit=${limit}`);

            linkObjects = getLinkObjects(data.filter(item => item.type !== "single-product"), linkObjectsKey);
            
        } else  {
            console.log("We already have this data from the localStorage");

            linkObjects = JSON.parse(window.localStorage.getItem(linkObjectsKey));
        }

        

        console.table(JSON.parse(window.localStorage.getItem(linkObjectsKey)));
        
        allCategoriesScraped = await ccScraperInitialize(linkObjectsKey, authToken);

        
        console.log({currentLinkObjectsPage : page, linkObjectsPageTotal : pageTotal, allCategoriesScraped});

        page += 1;

        if(page <= pageTotal && allCategoriesScraped)   {
            window.localStorage.removeItem(linkObjectsKey);

            console.log("we are getting new set...");
            // setting the page number;

            console.log({nextPage : page, linkObjectsPageTotal : pageTotal, allCategoriesScraped});

        
            await new Promise(resolve => setTimeout(resolve, 3434));

            window.localStorage.setItem("cc-link-objects-page", `${page}`);

            await new Promise(resolve => setTimeout(resolve, 3434));

            await recursiveScraping(authToken, pageTotal, page);

        }

    }    


    await recursiveScraping(authToken, pageTotal, page);
    

}());