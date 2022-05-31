console.log("We are firing it up");
let linkObjectsUnparsed = [
    {
        "url": "https://www.lowes.com/pl/Welding-soldering-Tools/4294607707"
    },
    {
        "url": "https://www.lowes.com/pl/Shop-vacuums-accessories-Tools/4294857473"
    },
    {
        "url": "https://www.lowes.com/pl/Tool-sets-Hand-tools-Tools/4294607612"
    },
    {
        "url": "https://www.lowes.com/pl/Levels-measuring-tools-Tools/4294607864"
    },
    {
        "url": "https://www.lowes.com/pl/Flashlights-flashlight-bulbs-Tools/2018528687"
    },
    {
        "url": "https://www.lowes.com/pl/Clothing-work-apparel/1621060592225"
    },
    {
        "url": "https://www.lowes.com/pl/Power-tool-accessories-Tools/4294526429"
    },
    {
        "url": "https://www.lowes.com/pl/Tool-storage-work-benches-Tools/4294857661"
    },
    {
        "url": "https://www.lowes.com/pl/Ladders-scaffolding-Tools/4294607607"
    },
    {
        "url": "https://www.lowes.com/pl/Air-compressors-Air-tools-compressors-Tools/2911831268"
    },
    {
        "url": "https://www.lowes.com/pl/Hand-tools-Tools/4294857647"
    },
    {
        "url": "https://www.lowes.com/pl/Safety/4294644968"
    },
    {
        "url": "https://www.lowes.com/pl/Power-tools-Tools/4294607842"

    },
    {
        "url" : "https://www.lowes.com/pl/Air-tools-Air-tools-compressors-Tools/3112153496"
    }
],
categoryLinkObjects = [],
uncategorizedObjects = [];


linkObjectsUnparsed = [
    {
        "url": "https://www.lowes.com/pl/Garage-storage-systems-Garage-cabinets-storage-systems-Garage-organization-Storage-organization/4294415653"
    },
    {
        "url": "https://www.lowes.com/pl/Garage-cabinets-Garage-cabinets-storage-systems-Garage-organization-Storage-organization/4294415652"
    },
    {
        "url": "https://www.lowes.com/pl/Shelves-shelving-Storage-organization/4294936608"
    },
    {
        "url": "https://www.lowes.com/pl/Slatwall-rail-storage-systems-Garage-organization-Storage-organization/292514718"
    },
    {
        "url": "https://www.lowes.com/pl/Pegboard-accessories-Garage-organization-Storage-organization/3466516079"
    },
    {
        "url": "https://www.lowes.com/pl/Overhead-garage-storage-Garage-organization-Storage-organization/4294415650"
    },
    {
        "url": "https://www.lowes.com/pl/Garage-storage-hooks-Garage-organization-Storage-organization/4294415648"
    },
    {
        "url": "https://www.lowes.com/pl/Bike-racks-storage-Garage-organization-Storage-organization/4294857689"
    },
    {
        "url": "https://www.lowes.com/pl/Small-parts-organizers-Storage-organization/4211758077"
    },
    {
        "url": "https://www.lowes.com/pl/Garage-floor-paint-Exterior-stains-floor-coatings-Paint/4022877346"
    },
    {
        "url" : "https://www.lowes.com/pl/Baskets-storage-containers-Storage-organization/4294936623"
    },
    {
        "url" : "https://www.lowes.com/pl/Tool-storage-work-benches-Tools/4294857661"
    },
    {
        "url": "https://www.lowes.com/pl/Saw-blades-Power-tool-accessories-Tools/4294607793"
    },
    {
        "url": "https://www.lowes.com/pl/Drill-bits-Power-tool-accessories-Tools/4294607757"
    },
    {
        "url": "https://www.lowes.com/pl/Safety-accessories-Safety/4294644945"
    },
    {
        "url": "https://www.lowes.com/pl/Saw-blades-Power-tool-accessories-Tools/4294607793"
    },
    {
        "url": "https://www.lowes.com/pl/Sockets-socket-adapters-Hand-tools-Tools/2419313453"
    },
    {
        "url": "https://www.lowes.com/pl/Cutting-crimping-tools-Hand-tools-Tools/4294857588"
    },
    {
        "url": "https://www.lowes.com/pl/Clothing-Clothing-work-apparel/15211541027983"
    },
    {
        "url": "https://www.lowes.com/pl/Workwear-Clothing-work-apparel/2220616391790"
    }
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


function getLinkObjects(linkObjectsUnparsed, linkObjectsKey) {

    if(window.localStorage.getItem(linkObjectsKey)) {
        return JSON.parse(window.localStorage.getItem(linkObjectsKey));
    } else  {
        window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjectsUnparsed));

        return linkObjectsUnparsed;
    }
}

async function getCategoryObjects(apiRequest, url)   {

    let {categories, productCount, pagination} = await apiRequest(url);

   
    if(categories.length)   {

        console.table({url, message : "this url HAS categories", hasCategories : true, hasSubCategories : "checking..."});

        for(let category of categories)   {
            let {subCategories, name : categoryName, productCount : totalProductCount, url : categoryUrl} = category;
    
            if(subCategories.length)    {
                console.table({url : categoryUrl, message : "this url HAS categories and subCategories", hasCategories : true, hasSubCategories : true});

                for(let subcategory of subCategories)   {

                    let {productCount : subcatProductCount, name : subCatName, url : subcategoryUrl} = subcategory;


                    if(subcatProductCount > 744)  {
                        uncategorizedObjects.push({
                            category : categoryName,
                            categoryTotalProductCount : totalProductCount ? totalProductCount : "undetermined",
                            subcategory : subCatName,
                            url : subcategoryUrl + "/products",
                            subcategoryProductCount : subcatProductCount ? subcatProductCount : "undetermined",
                        })
                    } else  {
                        // categoryLinkObjects.push({
                        //     category : categoryName,
                        //     categoryTotalProductCount : totalProductCount ? totalProductCount : "undetermined",
                        //     subcategory : subCatName,
                        //     url : subcategoryUrl + "/products",
                        //     subcategoryProductCount : productCount ? productCount : "undetermined",
                        // })
                    }
                    

                }



            }  else {
                uncategorizedObjects.push({
                    category : categoryName,
                    categoryTotalProductCount : totalProductCount ? totalProductCount : "undetermined",
                    subcategory : "no given subcategory",
                    url : categoryUrl + "/products",
                });
            }
    
        }
    } else  {
        console.table({url, message : "this url HAS NO categories and subcategories", hasCategories : false, hasSubCategories : false});

        uncategorizedObjects.push({
            category : "uncategorized",
            categoryTotalProductCount : productCount ? productCount : "undetermined",
            subcategory : "no given subcategory",
            url : url + "/products",
        });
    }
    
}

async function getCategoryLinkObjects(categoryLinkObjectsKey, ccUtilities) {

    let {apiRequest, moderator} = ccUtilities;

    if(window.localStorage.getItem(categoryLinkObjectsKey))    {
        console.log("we already have the category link objects");

        categoryLinkObjects = JSON.parse(window.localStorage.getItem(categoryLinkObjectsKey));

        console.table(categoryLinkObjects);

        return;
    } else  {
        await moderator(linkObjectsUnparsed, async (slicedArr) => {


            let promises = slicedArr.map(item => {
    
                return async function() {
    
                    let {url} = item;
    
                    await getCategoryObjects(apiRequest, url + "/products");
                }
    
    
            });
    
            await Promise.all(promises.map(item => item()));
    
    
        }, 1);
        
        console.log("we have just obtained and stored the category link objects");
        console.table(categoryLinkObjects);

        window.localStorage.setItem(categoryLinkObjectsKey, JSON.stringify(categoryLinkObjects));
    }

}

function getProductObjects(itemList, category, subcategory)  {

    return itemList.map(item => {
        let {brand, description, modelId, pdURL, marketingBullets, imageUrl} = item.product;
        return {
            productBrand : brand,
            productName : `${brand} - ${modelId} - ${description}`,
            modelId,
            productUri : `https://www.lowes.com${pdURL}`,
            category, 
            subcategory,
            description : marketingBullets && marketingBullets.length ? marketingBullets.map(item => item.value).join("<br />") : null,
            imageUris : [`https://mobileimages.lowes.com${imageUrl}`],
        }

    });

}


async function getProductsByCategoryLinks(ccUtilities, categoryLinkObject) {
    let { apiRequest, toUrl, waitForSelector, queryStringToObject, objectToQueryString, moderator, slowDown, downloadEncodedText } = ccUtilities,
        {category, subcategory, url : originalUrl} = categoryLinkObject,
        productObjects = [];
        

    
    async function getProductsPerApiEndpoint(url)    {
        let { itemList, itemCount, pagination, requestParams } = await apiRequest(url),
            { maxResults : productsPerPage } = requestParams,
            maxOffset = (Number(pagination.pageCount) * Number(productsPerPage)) - Number(productsPerPage),
            nextOffset,
            queryObject = queryStringToObject(url),
            currentOffset = Number(queryObject.offset) ? Number(queryObject.offset) : 0,
            queryString;

        

        console.log({currentOffset, maxOffset, itemCount, url});

        // we clean the productObject properties;
        productObjects.push(...getProductObjects(itemList, category, subcategory));


        // slowDown the request to make it more human-like;
        await slowDown();


        // we get the next request;
        if(pagination.pageCount > 1 && currentOffset < maxOffset && currentOffset < 720)    {
            nextOffset = Number(currentOffset) + Number(productsPerPage);

            queryObject.offset = nextOffset;

            queryString = objectToQueryString(queryObject);


            await getProductsPerApiEndpoint(`${url.split("?").shift()}?${queryString}`);
        } else if(maxOffset >= 720)  {
            uncategorizedObjects.push(categoryLinkObject);
        }
    }

    // slowDown the request to make it more human-like;
    await slowDown();

    // initialize productScraping;
    await getProductsPerApiEndpoint(`https://www.lowes.com${originalUrl}`);
    console.table(productObjects);


    // slowDown the request to make it more human-like;
    await slowDown();

    // downlaod the encoded text files.
    await downloadEncodedText(productObjects, {
        category, subcategory
    });

    

}

async function initializeScript() {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNlMzM1NTE3YThhNTUzYzRkZGM4ZWQiLCJwZXJtaXNzaW9uTGV2ZWwiOjQsImlhdCI6MTY1MjQzMzY0NiwiZXhwIjoxNjUzMDM4NDQ2fQ.BHfnjykoaOaUKWCmp63t-5ev20HWkTdobg2yCaLzwiI",
        ccUtilities = __cc_getUtilities(authToken),
        categoryLinkObjectsKey = "___cc_categoryLinkObjects",
        { moderator, slowDown } = ccUtilities


    // get the categorized links;

    await getCategoryLinkObjects(categoryLinkObjectsKey, ccUtilities);

    // // scrape the data through api;
    // // get the products through their api links
    await moderator(categoryLinkObjects, async (slicedArr) => {

        await slowDown();

        console.clear();

        let promises = slicedArr.map(categoryLinkObject => {
            return async function() {
                await getProductsByCategoryLinks(ccUtilities, categoryLinkObject);

            }
        });

        await Promise.all(promises.map(item => item()));

    }, 1);
    
    console.log("we have finished scraping the products...");

}

(async function(){


    console.log("hello there... Michael Norward");
    console.table(linkObjectsUnparsed);

    await initializeScript();

    // alert("Michael Norward");

}());