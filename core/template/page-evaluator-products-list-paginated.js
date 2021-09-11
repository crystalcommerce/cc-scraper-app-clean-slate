const puppeteer = require("puppeteer");

module.exports = async function(url, evaluator)    {

    let browser = await puppeteer.launch({headless : false}),
        page = await browser.newPage(),
        {callback, args, waitMethods} = evaluator,
        allProductObjects = [];


    async function getProductObjects(page, url, allProductObjects) {
        
        await page.setViewport({height : 3000, width : 1440});
        await page.goto(url, {waitUntil : "networkidle0", timeout : 0});
        if(waitMethods.length)  {
            for(let waitMethod of waitMethods)    {
                await page[waitMethod.name](waitMethod.args);
            }
        }


        let { productObjects, newUrl } = await page.evaluate(callback, url, ...args);
        

        allProductObjects.push(...productObjects);
        
        if(newUrl)  {
            await getProductObjects(page, newUrl, allProductObjects);
        }
    }
    
    await getProductObjects(page, url, allProductObjects);

    browser.close();

    return allProductObjects;

}