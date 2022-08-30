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
            getValidatedPropValues,
            zipData,

            SingleProductScraper,
            ProductsSetScraper,
            MultiSingleProductInitializer,
            MultiProductsSetInitializer,
            CategorizedSetsScraper,
            UrlProcess,
            Results,
            CcBrowserWindow,
            CcScraperChannel,
        } = window.___cc__CcScraperGlobalObject,
        { decodedProcessFromUrl, currentProcess, initializeScraping } = urlProcessInitializer();

    
    window.___cc__CcScraperGlobalObject.evaluatorObject = {
        categorizedSets : [
            {
                callback : async () => {

                    await slowDown();

                    let setObjects = categoryLinkObjects = [
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
                        ].slice(0, 1),
                        categorizedSets = setObjects.map(item => {
                            let obj = {};
                            obj.setData = {};

                            for(let key in item)    {
                                if(key === "url")   {
                                    obj[key] = item[key];
                                } else  {
                                    obj.setData[key] = item[key];
                                }
                            }

                            return obj;
                        });

                    console.table(categorizedSets);

                    return categorizedSets; // array of objects
                },
                dataSource : "on-page",
                waitForSelectors : [],
            }
        ],
        set : [
            {
                callback : async () => {
                    await slowDown();

                    async function getProductObjects(total){

                        let nodeList = document.querySelectorAll(".products.list.items.product-items .item.product.product-item");

                        if(nodeList.length < total) {
                            await scrollToBottom();

                            await slowDown();

                            await getProductObjects(total);
                        }


                        return Array.from(document.querySelectorAll(".products.list.items.product-items .item.product.product-item")).map(item => {
                            return {
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
                dataSource : "on-page",
                waitForSelectors : [
                    ".products.list.items.product-items .item.product.product-item",
                ],
            }
        ],
        single : [
            {
                callback : async () => {

                    await slowDown();

                    await scrollToBottom();

                    await scrollToTop();
                    
                    // need object with just the additional properties;
                    let productNameContainer = document.querySelector(".product-info-main .page-title span"),
                        productName = productNameContainer ? productNameContainer.textContent.trim() : null,
                        imageUris = Array.from(document.querySelectorAll(".product.media .fotorama__stage__frame[data-active=true] img[aria-hidden=false]")).map(item => item.src),
                        priceContainer = document.querySelector(".price-container .price"),
                        price = priceContainer ? priceContainer.textContent.trim() : null,
                        descriptionContainer = document.querySelector(".product.attribute.description .value p"),
                        description = descriptionContainer ? descriptionContainer.textContent.trim() : null;
                        

                    return {
                        productName,
                        imageUris,
                        price,
                        description,
                    }

                },
                dataSource : "on-page",
                waitForSelectors : [
                    ".product.media .fotorama__stage__frame[data-active=true] img[aria-hidden=false]"
                ],
            }
        ]
    };
    


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
                executeMultiSingleProductInitializer : true, 
                addSetDataToProductProps : true,
                uniqueProductObjProp : "productUri",
                productUrlPropName : "productUri",
                removeProductsWithoutUriPropName : true,
                callbacksOnDone : [],
                downloadZippedData : true,
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
    
    
    
    
}());

