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
        categoryLinkObjects = [
            {
                "url" : "https://www.tcgplayer.com/search/digimon-card-game/x-record?view=grid&productLineName=digimon-card-game&setName=x-record&ProductTypeName=Cards&page=1"
            },
            {
                "url": "https://colemans.com/product-category/cold-weather-gear/",
                "category": "Extreme Cold Weather Gear",
                "subcategory": null
            },
            {
                "url": "https://colemans.com/product-category/camping-gear/campfire-essentials/",
                "category": "Camping Gear",
                "subcategory": "Campfire Essentials"
            },
            {
                "url": "https://colemans.com/product-category/camping-gear/food-cooking/",
                "category": "Camping Gear",
                "subcategory": "Food & Cooking"
            },
            {
                "url": "https://colemans.com/product-category/camping-gear/tents-accessories/",
                "category": "Camping Gear",
                "subcategory": "Tents & Accessories"
            },
            {
                "url": "https://colemans.com/product-category/camping-gear/camping-essentials/",
                "category": "Camping Gear",
                "subcategory": "Camping Essentials"
            },
            {
                "url": "https://colemans.com/product-category/camping-gear/bedding/",
                "category": "Camping Gear",
                "subcategory": "Bedding"
            },
            {
                "url": "https://colemans.com/product-category/clothing/head-gear/",
                "category": "Clothing",
                "subcategory": "Head Gear"
            },
            {
                "url": "https://colemans.com/product-category/clothing/coats/",
                "category": "Clothing",
                "subcategory": "Coats"
            },
            {
                "url": "https://colemans.com/product-category/clothing/trousers-accessories/",
                "category": "Clothing",
                "subcategory": "Trousers & Accessories"
            },
            {
                "url": "https://colemans.com/product-category/clothing/socks/",
                "category": "Clothing",
                "subcategory": "Socks"
            },
            {
                "url": "https://colemans.com/product-category/clothing/undergarments/",
                "category": "Clothing",
                "subcategory": "Military Undergarments"
            },
            {
                "url": "https://colemans.com/product-category/clothing/gloves/",
                "category": "Clothing",
                "subcategory": "Gloves"
            },
            {
                "url": "https://colemans.com/product-category/clothing/safety-apparel/",
                "category": "Clothing",
                "subcategory": "Safety Apparel"
            },
            {
                "url": "https://colemans.com/product-category/clothing/shirts/",
                "category": "Clothing",
                "subcategory": "Shirts"
            },
            {
                "url": "https://colemans.com/shop/product-category/clothing/cold-weather-gear",
                "category": "Clothing",
                "subcategory": "COLD WEATHER GEAR"
            },
            {
                "url": "https://colemans.com/shop/product-category/pouches-bags/",
                "category": "Pouches and Bags",
                "subcategory": null
            },
            {
                "url": "https://colemans.com/product-category/boots-and-footwear/",
                "category": "Boots and Footwear",
                "subcategory": null
            },
            {
                "url": "https://colemans.com/product-category/containers/",
                "category": "Military Storage Containers",
                "subcategory": null
            },
            {
                "url": "https://colemans.com/product-category/knives/",
                "category": "Military Machetes and Knives",
                "subcategory": null
            },
            {
                "url": "https://colemans.com/product-category/militaria/ordnance/",
                "category": "Militaria",
                "subcategory": "Ordnance and Artillery Shells"
            },
            {
                "url": "https://colemans.com/product-category/militaria/misc-militaria-gallery/",
                "category": "Militaria",
                "subcategory": "Misc Militaria Gallery"
            },
            {
                "url": "https://colemans.com/product-category/militaria/geiger-counters/",
                "category": "Militaria",
                "subcategory": "Geiger Counters For Sale"
            },
            {
                "url": "https://colemans.com/product-category/military-vehicles/",
                "category": "Military Tents",
                "subcategory": "Vehicles For Sale"
            },
            {
                "url": "https://colemans.com/product-category/security-tactical/",
                "category": "Military Tents",
                "subcategory": "Tactical Gear"
            },
            {
                "url": "https://colemans.com/product-category/shelving-racking/",
                "category": "Military Tents",
                "subcategory": "Shelving and Racking"
            },
            {
                "url": "https://colemans.com/product-category/sporting-goods/",
                "category": "Military Tents",
                "subcategory": "Sporting Goods"
            },
            {
                "url": "https://colemans.com/product-category/hunting-shooting/more-hunting-shooting/",
                "category": "Shooting and Hunting Gear",
                "subcategory": "More Hunting & Shooting"
            },
            {
                "url": "https://colemans.com/product-category/hunting-shooting/camo-gear/",
                "category": "Shooting and Hunting Gear",
                "subcategory": "Camo Gear"
            },
            {
                "url": "https://colemans.com/product-category/hunting-shooting/targets/",
                "category": "Shooting and Hunting Gear",
                "subcategory": "Targets"
            },
            {
                "url": "https://colemans.com/product-category/hunting-shooting/ammo-cans/",
                "category": "Shooting and Hunting Gear",
                "subcategory": "Ammo Cans"
            },
            {
                "url": "https://colemans.com/product-category/emergency-products/",
                "category": "Military Stretchers, Sand Bags and Surplus Emergency Products",
                "subcategory": null
            },
            {
                "url": "https://colemans.com/product-category/hardware/cables-ropes-and-tie-downs/",
                "category": "Hardware",
                "subcategory": "Cables, Ropes, and Tie-Downs"
            },
            {
                "url": "https://colemans.com/shop/product-category/hardware/product-category/tools/",
                "category": "Hardware",
                "subcategory": "Tools"
            },
            {
                "url": "https://colemans.com/product-category/hardware/miscellaneous-hardware/",
                "category": "Hardware",
                "subcategory": "Miscellaneous Hardware"
            },
            {
                "url": "https://colemans.com/product-category/hardware/electrical/",
                "category": "Hardware",
                "subcategory": "Electrical"
            },
            {
                "url": "https://colemans.com/shop/product-category/hardware/product-category/shop-stuff/",
                "category": "Hardware",
                "subcategory": "Shop Stuff"
            },
            {
                "url": "https://colemans.com/product-category/household/medical-supplies/",
                "category": "Household Products",
                "subcategory": "Medical Supplies"
            },
            {
                "url": "https://colemans.com/product-category/household/domestics/",
                "category": "Household Products",
                "subcategory": "Domestics"
            },
            {
                "url": "https://colemans.com/product-category/survival-kit/",
                "category": "Survival Kit",
                "subcategory": null
            },
            {
                "url": "https://colemans.com/shop/product-category-manuals-dvds/product-category/manuals-dvds/paper-digital-manuals/",
                "category": "Military Manuals",
                "subcategory": "Paper & Digital Manuals"
            },
            {
                "url": "https://colemans.com/shop/product-category-manuals-dvds/product-category/manuals-dvds/dvd-videos/",
                "category": "Military Manuals",
                "subcategory": "DVD Videos"
            },
            {
                "url": "https://colemans.com/product-category/material-handling/",
                "category": "Military Aircraft Landing Mats and Material Handling",
                "subcategory": null
            }
        ].filter(item => item.url === "https://www.tcgplayer.com/search/digimon-card-game/x-record?view=grid&productLineName=digimon-card-game&setName=x-record&ProductTypeName=Cards&page=1") //.filter(item => item.url === "https://colemans.com/product-category/clothing/head-gear/"),
        evaluatorObjects = [
            {
                // callback : async () => {


                //     async function getProductObjects(total){

                //         let nodeList = document.querySelectorAll(".products.list.items.product-items .item.product.product-item");

                //         if(nodeList.length < total) {
                //             await scrollToBottom();

                //             await slowDown();

                //             await getProductObjects(total);
                //         }


                //         return Array.from(document.querySelectorAll(".products.list.items.product-items .item.product.product-item")).map(item => {
                //             return {
                //                 productName : item.querySelector(".product-item-link") ? item.querySelector(".product-item-link").innerText.trim() : null,
                //                 productImage : null,
                //                 description : null,
                //                 price : null,
                //                 imageUris : [],
                //                 productUri : item.querySelector(".product-item-link") ? item.querySelector(".product-item-link").href : null,
                //             }
                //         });
                        
                //     }
                    
                //     let total = Number(document.querySelector(".toolbar-number").innerText.trim()),

                //         productObjects = await getProductObjects(total),
                //         newUrl = null;

                //     console.log({productObjects, newUrl});


                //     return {productObjects, newUrl}
                // },

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
                type : "list",
                dataSource : "on-page",
                // waitForSelectors : [".products.list.items.product-items"],
                waitForSelectors : [".search-results"]
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