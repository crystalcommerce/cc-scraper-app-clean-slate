const puppeteer = require("puppeteer");

module.exports = async function(url, evaluator)    {

    let browser = await puppeteer.launch({headless : false}),
        page = await browser.newPage(),
        {callback, args, waitMethods} = evaluator;
        
    await page.setViewport({height : 3000, width : 1440});
    await page.goto(url, {waitUntil : "networkidle0", timeout : 0});
    if(waitMethods.length)  {
        for(let i = 0; i < waitMethods.length; i++)    {
            let waitMethod = waitMethods[i];
            await page[waitMethod.name](waitMethod.args);
        }
    }

    let productObjects = await page.evaluate(callback, ...args);

    browser.close();
    
    return productObjects;

}