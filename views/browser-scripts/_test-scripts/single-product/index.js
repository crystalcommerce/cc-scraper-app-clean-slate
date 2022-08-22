const {generateUuid, toUrl, toCamelCase, slowDown, getValidatedPropValues} = require("../../utilities");


window.singleEvaluatorObject = {
    callback : async () => {
        let productName = document.querySelector(".product-details__name").innerText.trim(),
            productImage = document.querySelector("img").src,
            productDescription = document.querySelector(".product__item-details__description").innerText.trim(),
            additionalProductDetailsObject = Array.from(document.querySelectorAll(".product__item-details__attributes li")).reduce((a, b) => {
                let key = toCamelCase(b.querySelector("strong").innerText.trim()),
                    value = b.querySelector("span").innerText.trim();
                a[key] = value;

                return a;
            }, {}),
            productObject = {
                productName,
                productImage,
                productDescription,
                ...additionalProductDetailsObject,
            };
        
        console.log(productObject);
        // await slowDown(15000);

        return productObject;
    },
    waitForSelectors : [],
};


module.exports = async function(){


    let { SingleProductScraper, ProductsSetScraper, UrlProcess, urlprocessExecutor } = window.___cc__CcScraperGlobalObject,
        {currentProcess, decodedProcessFromUrl, initializeScraping} = urlprocessExecutor();

    

    if(!currentProcess)  {
        console.log(currentProcess);
        console.log(urlprocessExecutor());
        console.log("No current Process");

        if(!window.location.href.includes("single-product"))    {
        // if(!window.location.href.includes("/268142/"))    {

            document.body.innerHTML = "<h3>Welcome to the jungle</h3>";
            // encode the process then navigate to the url with the process;

            async function writeIt(data) {
                document.body.innerHTML += "\n";
                document.body.innerHTML += "\n";
                document.body.innerHTML += "<pre>" + JSON.stringify(data, null, 4) + "</pre>";

            }
            window.writeIt = writeIt;

            let parentChannelId = generateUuid(),
                parentChannelName = toUrl(["New Awakening", parentChannelId].join(" ")),
                bc = new BroadcastChannel(parentChannelName),
                currentProcess = new UrlProcess({
                    type : "single",
                    dataSource : "on-page",
                    scraperRunning : true,
                    originalUrl : window.location.href,
                    scraperOptions : {
                        productObject : {
                            productSet : "New Awakening",
                        },
                        parentChannelId, 
                        parentChannelName,
                        callbacksOnDone : [
                            // {
                            //     callback : "alert",
                            //     async : false,
                            // },
                            {
                                callback : "writeIt",
                                async : true,
                            }
                        ]
                    },
                    // we can execute it by writing the method names here... or execute it by mannually calling execute by parent channel
                    callbacks : [
                        // "awaitSelectors",
                        // "scrapeData",
                        // "closeWindowTab",
                    ],
                }),
                newUrl = currentProcess.encodeProcessToUrl(window.location.origin + "/assets/single-product", false);

                console.log("we are navigating to the next url");
                console.log(newUrl);
                await slowDown();
                window.open(newUrl, "_blank" ,"width=1400, height=900, menubar=no, resizable=no");
            
                
                bc.onmessage = async function(e)  {
                    console.log(e.data);
                    if(getValidatedPropValues(e.data, ["callback"])) {
                        console.table(e.data.data)
                    }
                    let {type, callbacksOnDone, data} = e.data;
                    if(type === "callback") {
                        for(let obj of callbacksOnDone)    {
                            if(obj.async)  {
                                console.log(obj.callback);
                                await window[obj.callback](data);
                            } else  {
                                // console.log(obj.callback);
                                window[obj.callback](data);
                            }
                        }
                    }
                }
    
        }

    } else  {
        // initializeScraping(currentProcess);
        currentProcess.scraperOptions.evaluator = window.singleEvaluatorObject;

        await initializeScraping(currentProcess);
        console.log({currentProcess, message: "here it is"});
    }

};