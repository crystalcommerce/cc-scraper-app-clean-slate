module.exports = async function(page, productObject, evaluatorObject, productUrlProp)    {

    let {callback, waitMethods, objPropArgs} = evaluatorObject,
        args = function()   {
            let args = [];

            for(let prop of objPropArgs)    {
                args.push(productObject[prop]);
            }

            return args;
        }();

    await page.setViewport({height : 900, width : 1440});
    await page.goto(productObject[productUrlProp], {waitUntil : "networkidle0", timeout : 0});
    if(waitMethods.length)  {
        for(let waitMethod of waitMethods)    {
            await page[waitMethod.name](waitMethod.args);
        }
    }

    let productObjectProps = await page.evaluate(callback, ...args);

    for(let key in productObjectProps)    {
        productObject[key] = productObjectProps[key];
    }

    // console.log(productObject);

}