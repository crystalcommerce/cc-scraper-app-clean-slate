console.log("We are firing it up");

let linkObjectsUnparsed = [];


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


function getProductObjects(itemList, categoryTags)  {

    return itemList.map(item => {
        let {brand, description, modelId, pdURL, marketingBullets, imageUrl} = item.product,
            category = categoryTags[0],
            subcategory = categoryTags[1];

        categoryTags = categoryTags.slice(2);
        return {
            productBrand : brand,
            productName : `${brand} - ${modelId} - ${description}`,
            modelId,
            productUri : `https://www.lowes.com${pdURL}`,
            category, 
            subcategory,
            additionalCategoryTags : categoryTags,
            description : marketingBullets && marketingBullets.length ? marketingBullets.map(item => item.value).join("<br />") : null,
            imageUris : [`https://mobileimages.lowes.com${imageUrl}`],
        }

    });

}


async function getProductsByCategoryLinks(ccUtilities, categoryLinkObject) {
    let { apiRequest, toUrl, waitForSelector, queryStringToObject, objectToQueryString, moderator, slowDown, downloadEncodedText } = ccUtilities,
        {categoryTags, url : originalUrl} = categoryLinkObject,
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
        productObjects.push(...getProductObjects(itemList, categoryTags));


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