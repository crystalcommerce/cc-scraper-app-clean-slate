let callback = async () => {

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
    
}

(async function(){
    await callback();
}())
