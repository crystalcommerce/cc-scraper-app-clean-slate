const puppeteer = require("puppeteer");

async function scrapeProductDetailsByBulk(allProducts, pageEvaluatorSingleProduct, evaluatorObject, productUrlProp, bulkCount = 5, i = 0) {

    let unscrapedData = [],
        pageInstances = [],
        browserInstances = [];

    await new Promise(async resolve => {
        let min = bulkCount < allProducts.length ? bulkCount : allProducts.length;

        for(let i = 0; i < min; i++)  {
            let browser = await puppeteer.launch({headless : false}),
                page = await browser.newPage();
            pageInstances.push(page);
            browserInstances.push(browser);
        }
        resolve();
    });
    

    async function getProductDetailsByBulk(allProducts, bulkCount, i) {
        let promises = [],
            counter = bulkCount + i < allProducts.length ? bulkCount + i : allProducts.length;
        
        while(i < counter)  {
            
            let pageCounter = i - (counter - bulkCount),
                page = pageInstances[pageCounter];
            
            console.log({pageCounter, counter, i, total : allProducts.length});
            promises.push(await pageEvaluatorSingleProduct.bind(null, page, allProducts[i], evaluatorObject, productUrlProp));
            i++;
        }

        await Promise.all(promises.map(async (item, index) => {
            let currentIndex = (counter + index) - promises.length;
            try {
                await item();
                console.log(currentIndex)
            } catch (err)   {
                console.log({
                    err,
                    currentIndex,
                });
                unscrapedData.push(allProducts[currentIndex]);
            }
        }));
        

        if(i < allProducts.length)    {
            await getProductDetailsByBulk(allProducts, bulkCount, i);
        }
    }

    await getProductDetailsByBulk(allProducts, bulkCount, i);


    // closing page and browser instances;
    for(let page of pageInstances)  {
        await page.close();
    }

    for(let browser of browserInstances)    {
        await browser.close();
    }

    return unscrapedData;

}


module.exports = async function(allProducts, pageEvaluatorSingleProduct, evaluatorObject, productUrlProp, bulkCount = 5, i = 0) {

    let max = 100,
        objCount = allProducts.length,
        unscrapedObjects = [];
    
    console.log({objCount});

    if(objCount < max)  {
        let unscrapedData = await scrapeProductDetailsByBulk(allProducts, pageEvaluatorSingleProduct, evaluatorObject, productUrlProp, bulkCount, i);

        unscrapedObjects.push(...unscrapedData);
    } else  {

        let divisions = Math.ceil(objCount / max),
            count = 0;

        while(count < divisions)    {

            let firstIndex = count * max,
                lastIndex = (count + 1) * max < objCount ? (count + 1) * max : objCount,
                unscrapedData = await scrapeProductDetailsByBulk(allProducts.slice(firstIndex, lastIndex), pageEvaluatorSingleProduct, evaluatorObject, productUrlProp, bulkCount, i);

            
            unscrapedObjects.push(...unscrapedData);

            count++;
        }
    }

    return unscrapedObjects;
}
