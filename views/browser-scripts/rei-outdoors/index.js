console.log("We are firing it up");
let linkObjectsUnparsed = [
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Jackets"
    //     },
    //     "url": "https://www.rei.com/c/mens-jackets?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Pants"
    //     },
    //     "url": "https://www.rei.com/c/mens-pants?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Shorts"
    //     },
    //     "url": "https://www.rei.com/c/mens-shorts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Shirts"
    //     },
    //     "url": "https://www.rei.com/c/mens-shirts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Sweaters and Sweatshirts"
    //     },
    //     "url": "https://www.rei.com/c/mens-sweaters-and-sweatshirts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Vests"
    //     },
    //     "url": "https://www.rei.com/c/mens-vests?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Swimwear"
    //     },
    //     "url": "https://www.rei.com/c/mens-swimwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Underwear"
    //     },
    //     "url": "https://www.rei.com/c/mens-underwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Clothing Accessories"
    //     },
    //     "url": "https://www.rei.com/c/mens-clothing-accessories?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Sleepwear"
    //     },
    //     "url": "https://www.rei.com/c/mens-sleepwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Tops"
    //     },
    //     "url": "https://www.rei.com/c/mens-tops?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Men's Clothing",
    //         "subcategory": "Men's Bottoms"
    //     },
    //     "url": "https://www.rei.com/c/mens-bottoms?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Jackets"
    //     },
    //     "url": "https://www.rei.com/c/womens-jackets?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Pants"
    //     },
    //     "url": "https://www.rei.com/c/womens-pants?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Shorts"
    //     },
    //     "url": "https://www.rei.com/c/womens-shorts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Skirts and Dresses"
    //     },
    //     "url": "https://www.rei.com/c/womens-skirts-and-dresses?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Shirts"
    //     },
    //     "url": "https://www.rei.com/c/womens-shirts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Sweaters and Sweatshirts"
    //     },
    //     "url": "https://www.rei.com/c/womens-sweaters-and-sweatshirts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Vests"
    //     },
    //     "url": "https://www.rei.com/c/womens-vests?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Swimwear"
    //     },
    //     "url": "https://www.rei.com/c/womens-swimwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Underwear"
    //     },
    //     "url": "https://www.rei.com/c/womens-underwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Clothing Accessories"
    //     },
    //     "url": "https://www.rei.com/c/womens-clothing-accessories?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Sleepwear"
    //     },
    //     "url": "https://www.rei.com/c/womens-sleepwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Tops"
    //     },
    //     "url": "https://www.rei.com/c/womens-tops?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Women's Clothing",
    //         "subcategory": "Women's Bottoms"
    //     },
    //     "url": "https://www.rei.com/c/womens-bottoms?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Jackets"
    //     },
    //     "url": "https://www.rei.com/c/kids-jackets?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Pants"
    //     },
    //     "url": "https://www.rei.com/c/kids-pants?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Shorts"
    //     },
    //     "url": "https://www.rei.com/c/kids-shorts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Shirts"
    //     },
    //     "url": "https://www.rei.com/c/kids-shirts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Sweaters and Sweatshirts"
    //     },
    //     "url": "https://www.rei.com/c/kids-sweaters-and-sweatshirts?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Girls' Skirts and Dresses"
    //     },
    //     "url": "https://www.rei.com/c/girls-skirts-and-dresses?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Vests"
    //     },
    //     "url": "https://www.rei.com/c/kids-vests?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Swimwear"
    //     },
    //     "url": "https://www.rei.com/c/kids-swimwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Underwear"
    //     },
    //     "url": "https://www.rei.com/c/kids-underwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Snowsuits, Rain Suits and Buntings"
    //     },
    //     "url": "https://www.rei.com/c/kids-snowsuits-rain-suits-and-buntings?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Clothing Accessories"
    //     },
    //     "url": "https://www.rei.com/c/kids-clothing-accessories?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Kids' Clothing",
    //         "subcategory": "Kids' Sleepwear"
    //     },
    //     "url": "https://www.rei.com/c/kids-sleepwear?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Cycling",
    //         "subcategory": "Cycling Clothing"
    //     },
    //     "url": "https://www.rei.com/c/cycling-clothing?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Watersports",
    //         "subcategory": "Paddling Clothing"
    //     },
    //     "url": "https://www.rei.com/c/paddling-clothing?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Watersports",
    //         "subcategory": "Beach Gear, Clothing and Accessories"
    //     },
    //     "url": "https://www.rei.com/c/beach-gear-clothing-and-accessories?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Skiing",
    //         "subcategory": "Ski Clothing"
    //     },
    //     "url": "https://www.rei.com/c/ski-clothing?pagesize=90"
    // },
    // {
    //     "productProps": {
    //         "category": "Snowboarding",
    //         "subcategory": "Snowboard Clothing"
    //     },
    //     "url": "https://www.rei.com/c/snowboard-clothing?pagesize=90"
    // }
];

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



let evaluatorObjects = [
    {
        callback : async () => {

            let allProductObjects = [], 
                categoryTimeStart = Date.now(),
                getTimeDifference = (timeStart, timeEnd, minutes = false) => {
                    let diff = minutes ? (timeEnd - timeStart) / 1000 / 60 : (timeEnd - timeStart) / 1000;
        
                    return {
                        message : `This process took about ${diff} seconds`,
                    }
                };
        
            async function SPAScraper() {
                async function scrollToBottom()  {
                    let totalHeight = document.body.offsetHeight - window.innerHeight,
                        currentScroll = 0;
                
                    function scroll()   {
                        currentScroll = window.scrollY;
                    }
                    
                    window.addEventListener("scroll", scroll);
                
                    await new Promise(resolve => {
                        let interval = setInterval(() => {
                            window.scrollTo(0, currentScroll + 100);
                            if(currentScroll >= totalHeight) {
                
                                console.log({currentScroll, totalHeight})
                                clearInterval(interval);
                                window.removeEventListener("scroll", scroll);
                                resolve();
                            }
                        }, 25);
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
            
                if(typeof scrollToTop === "undefined")  {
                    let { scrollToTop, scrollToBottom } = __cc_getUtilities();
                }
            
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
            
            
                
            
                function queryStringToObject(urlString)   {
                    let url = new URL(urlString),
                        queryString = url.search.length ? url.search.slice(1) : "",
                        queryArr = queryString.length ? queryString.split("&") : [],
                        queryObject = queryArr.reduce((a, b) => {
                            let [key, val] = b.split("=");
                            a[decodeURIComponent(key)] = decodeURIComponent(val);
                            return a;
                        }, {});
                
                    return Object.keys(queryObject).length ? queryObject : null;
                }
            
                function objectToQueryString(object) {
            
                    return Object.keys(object).reduce((a, b) => {
                
                        a.push(`${encodeURIComponent(b)}=${encodeURIComponent(object[b])}`)
                
                        return a;
                    }, []).join("&");
                    
                }
            
                async function getSingleProductInfo(productContainer, imageUris) {
        
                    productContainer.style.backgroundColor = "rgb(249 214 220)";
                    productContainer.style.padding = "1.5rem";
                    window.scroll(0, productContainer.offsetTop - 50);
                    await new Promise(resolve => setTimeout(resolve, 100));
        
                    let { productBrand, productName } = function(){
                        let container = productContainer.querySelector("a > h2"),
                            productBrandCont = container.querySelector("span[data-ui='product-brand']"),
                            productBrand = productBrandCont && productBrandCont.innerText.trim().length > 0 ? productBrandCont.innerText.trim() : null,
                            productTitleCont = container.querySelector("span[data-ui='product-title']"),
                            productTitle = productTitleCont && productTitleCont.innerText.trim().length > 0 ? productTitleCont.innerText.trim() : null,
                            productName;
            
                        if(productBrand && productTitle) {
                            productName = `${productBrand} - ${productTitle}`;
                        } else if(!productBrand && productTitle)    {
                            productName = productTitle;
                        } else if(productBrand && !productTitle)    {
                            productName = productBrand;
                        }
                            
                        return {productBrand, productName};
                    }(),
                    productUrl = productContainer.querySelector("a") ? productContainer.querySelector("a").href : null,
                    product = {
                        productImage : null,
                        productName,
                        productBrand,
                        productUri : productUrl,
                        imageUris
                    };
            
                    return product;
                }
            
                async function getVariantDetails(productDetails, productContainer, variantButton) {
                    let { productName } = productDetails,
                        thumbnail = await waitForSelector(variantButton.querySelector("img")),
                        id = thumbnail.id,
                        color = id.split("-").shift(),
                        prodName = `${productName} - ${color}`,
                        imageContainer =  await waitForSelector(productContainer.querySelector("a:first-child ul[aria-label='Gallery'] img")),
                        imageURI = imageContainer ? imageContainer.src : null,
                        imgUris = imageURI ? [imageURI] : [],
                        productUriContainer = await waitForSelector(productContainer.querySelector("a")),
                        prodUri = productUriContainer.href,
                        product = {
                            ...productDetails,
                            productName : prodName,
                            productUri : prodUri,
                            imageUris : imgUris,
                        };
                    return product;
                }
            
                async function getVariant(productDetails, productContainer, variantButton, prevProduct, index) {
                    let product = null;
            
            
                    variantButton.click();
                    if(index > 0)   {
                        await new Promise(resolve => {
                            let interval = setInterval(() => {
                                let productUriContainer = productContainer.querySelector("a"),
                                    imageContainer = productContainer.querySelector("a:first-child ul[aria-label='Gallery'] img");
                                if(productUriContainer.href !== prevProduct.productUri && prevProduct.imageUris[0] !== imageContainer.src)  {
            
                                    clearInterval(interval);
                                    resolve();
                                }
                            }, 10);
                        });
                    }
                    product = await getVariantDetails(productDetails, productContainer, variantButton);
                    
                    await new Promise(resolve => setTimeout(resolve, 100));
            
                    return product;
                }
            
                async function getVariants(productDetails, productContainer, productsArr, variants, i = 0)  {
                    let variantButton = variants[i],
                        prevProduct = i > 0 ? await getVariantDetails(productDetails, productContainer, variants[i-1]) : null,
                        product = await getVariant(productDetails, productContainer, variantButton, prevProduct, i);
            
                        productsArr.push(product);
            
                        i++;
            
                    if(i < variants.length) {
                        await getVariants(productDetails, productContainer, productsArr, variants, i);
                    }
                }
            
                async function getProductVariants(productContainer)    {
                    let variants = Array.from(productContainer.querySelectorAll("div > div > button[title]")).filter(button => button.className !== ""),
                        imageContainer = await waitForSelector(productContainer.querySelector("a:first-child ul[aria-label='Gallery'] img")),
                        imageUris = imageContainer ? [imageContainer.src] : [];
                    
                    productContainer.style.backgroundColor = "rgb(249 214 220)";
                    productContainer.style.padding = "1.5rem";
                    window.scroll(0, productContainer.offsetTop - 50);
                    
                    let productDetails = await getSingleProductInfo(productContainer, imageUris),
                        products;
                    
            
                    
                    if(variants.length) {
            
                        let productsArr = [];
                        
                        await getVariants(productDetails, productContainer, productsArr, variants);
            
            
                        // console.table(productsArr);
            
                        products = productsArr;
                    } else  {
                        products = [productDetails];
                    }
            
                    productContainer.removeAttribute("style");
            
                    return products;
                }
            
                await scrollToBottom();
                await scrollToTop();
            
                let object = Array.from(document.querySelectorAll("#search-results > ul > li")).reduce((a, b) => {
            
                        let key = b.className;
                    
                        if(!Array.isArray(a[key])) {
                            a[key] = [];
                        }
                    
                        a[key].push(b);
                    
                        return a;
                        
                    }, {}),
                    productObjects = [],
                    productContainers = Object.keys(object).reduce((a, b) => {
                        a = a.length > object[b].length ? a : object[b];
                        
                        return a;
                    }, []),
                    pageLinks = Array.from(document.querySelector("#search-results").parentElement.querySelectorAll("nav > a")),
                    nextLink = pageLinks.find(item => item.innerText.includes("next page")),
                    newUrl = nextLink ? nextLink.href : null,
                    timeStart = Date.now(),
                    timeEnd;
                    
                    
                    
                /* This is a much faster approach, though it distorts the arrangement of the array */
            
                // let promises = productContainers.map(productContainer => {
                //     return async function() {
                //         let products = await getProductVariants(productContainer);
            
                //         productObjects.push(...products);
                //     }
                // });
            
                // await Promise.all(promises.map(item => item()));
                
            
                /* Working but too slow */
                async function getAllProducts(productContainers, index = 0) {
                    let productContainer = productContainers[index],
                        products = await getProductVariants(productContainer);
                    
            
                    console.table(products);
            
                    productObjects.push(...products);
            
                    index += 1;
                    if(index < productContainers.length)    {
                        await getAllProducts(productContainers, index);
                    }
                }
            
                await getAllProducts(productContainers);
            
                console.table(productObjects);
            
                
                timeEnd = new Date().getTime();
                console.log(getTimeDifference(timeStart, timeEnd));
                
                // await new Promise(resolve => setTimeout(resolve, 10));
                console.table(allProductObjects.length);
            
                allProductObjects.push(...productObjects);
        
                if(nextLink)    {
                    nextLink.click();
                    await scrollToTop();
                    await new Promise(resolve => {
                        let interval = setInterval(() => {
                            if(window.scrollY === 0)    {
                                clearInterval(interval);
                                resolve()
                            }
                        });
                    });
                    await new Promise(resolve => setTimeout(resolve, 3434));
                    console.clear();
                    await SPAScraper();
                }
            }
        
            await SPAScraper();
        
            console.table(allProductObjects);
        
            console.log(getTimeDifference(categoryTimeStart, Date.now(), true));
        
            return {productObjects : allProductObjects, newUrl : null};
            
        },
        type : "list",
        paginated : true,
        waitForSelector : ["#search-results"],
    }
];

function getLinkObjects(linkObjectsUnparsed, linkObjectsKey) {

    if(window.localStorage.getItem(linkObjectsKey)) {
        return JSON.parse(window.localStorage.getItem(linkObjectsKey));
    } else  {
        window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjectsUnparsed));

        return linkObjectsUnparsed;
    }
}

// initialization of the scraper object;

async function ccScraperInitialize() {

    // reset mechanism
    if(window.location.href.includes("scraper-reset"))  {
        Object.keys(window.localStorage).forEach(key => window.localStorage.removeItem(key));
        window.location = window.location.origin;
    }

    // true reload;
    if(window.location.href.includes("reload=true"))    {
        if(!window.localStorage.getItem("__cc_hasReloaded")) {
            window.localStorage.setItem("__cc_hasReloaded", "true");
            window.location.reload(true);
        } else  {
            window.localStorage.removeItem("__cc_hasReloaded");
        }
    }

    // stop
    if(window.location.href.includes("stop"))   {
        return;
    }



    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNlMzM1NTE3YThhNTUzYzRkZGM4ZWQiLCJwZXJtaXNzaW9uTGV2ZWwiOjQsImlhdCI6MTY1MTE2MzUyOSwiZXhwIjoxNjUxNzY4MzI5fQ.qOnz2JWDVA7q8v0vG0AxWaZCpu8V0hw7vGAp6n2Tmqk",
        CcScraper = __cc_getScraperFactory(__cc_getUtilities, authToken),
        {toUrl} = __cc_getUtilities(authToken),
        linkObjectsKey = `__cc_${toUrl("CC Rei Outdoors link objects")}`;

    // initialization of linkObjects;    
    getLinkObjects(linkObjectsUnparsed, linkObjectsKey);
    
    let scraperOptions = {
            evaluatorObjects, 
            apiRoute : "http://localhost:8080/api/rei-outdoors", 
            imageNameObject :  {shared : ["productName"], split : []}, 
            imagePropName : "productImage", 
            pathLocation : "C:/Users/Michael Norward/Google Drive/Crystal Commerce/sample-watch/", 
            linkObjectsKey,
            autoScrollToBottom : false,
            finalAction : "downloadEncodedText", // downloadJson || postProductObjectsToAPI || printProductObjectsOnPage || downloadEncodedText;
            getNextSetBy : "same-tab", // new-tab; click; same-tab;
        };
        
    await CcScraper.getScraperObject(scraperOptions);

    
    
    // Object.keys(window.localStorage).forEach(key => window.localStorage.removeItem(key));

    //https://www.rei.com/c/tents?pagesize=90&page=2

}



(async function() {

    await ccLoadScripts("__cc_getUtilities", "__cc_getScraperFactory");
    

    await ccScraperInitialize();

    // alert("Hello there Michael Norward.")

}());

