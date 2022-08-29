(async function(){

    let siteUrl = "http://localhost:8080",
        jsonPath = "json/scripts.json",
        res = await fetch(`${siteUrl}/${jsonPath}`),
        scriptObjects = await res.json(),
        activeScripts = scriptObjects.filter(item => item.active && item.url.some(uri => window.location.href.includes(uri)));


    console.log({scriptObjects, activeScripts});

    async function checkLoadedScript(selector)   {
        await new Promise(resolve => {
            let i = 0,
                interval = setInterval(() => {

                    let scriptTag = document.querySelector(selector);
                    
                    if(scriptTag)   {
                        
                        console.log({
                            message : `script tag was successfully loaded.`,
                            scriptTagSelector : selector,
                            scriptTag
                        });
                        clearInterval(interval);
                        resolve();

                    }
                    if(i === 500)   {
                        console.log("Loading script...")
                        i = 0;
                    }
                    i++;
                }, 10);
        });
    }

    async function awaitCondition({conditionCallback, messageCallback, onTrueCallback}) {
        await new Promise(resolve => {
            
            let i = 0,
                interval = setInterval(() => {
                    if(conditionCallback)   {
                        onTrueCallback();
                        clearInterval(interval);
                        resolve();
                    }
                    if(i === 500)   {
                        messageCallback();
                        i = 0;
                    }
                    i++;
                }, 10);
        });
    }

    async function loadScripts(scriptObjects){
        let promises = scriptObjects.map((scriptObject, index) => {
            return {
                htmlTagPosition : scriptObject.htmlTagPosition,
                callback : async function() {
                    try {
                                                        
                        let script = document.createElement("script"),
                            method = scriptObject.method ? scriptObject.method : "append";
    
                        script.classList.add("__cc-scraper-script");
                        script.classList.add(`__cc-scraper-script-${index}`)
                        script.src = scriptObject.src;
                        // script.setAttribute("crossorigin","anonymous");

                        scriptObject.attributes.forEach(item => {
                            script.setAttribute(item.key, item.val);
                        })

                        document[scriptObject.htmlTagPosition][method](script);

                        await checkLoadedScript(`.__cc-scraper-script-${index}`);

                    } catch(err)    {
                        console.log({
                            message : err.message,
                            type : "script-loading-err",
                        });
                        console.log(err);
                    }
                      
                    
                }
            }
        });

        await Promise.all(promises.filter(item => item.htmlTagPosition === "head").map(item => item.callback()));

        await awaitCondition({
            conditionCallback : () => this.hasOwnProperty("___cc__CcScraperGlobalObject"),
            messageCallback : () => {
                console.log({ message : "Currently loading the Core Scraper Script...", window : this});
                console.log(this.hasOwnProperty("___cc__CcScraperGlobalObject"));
            }, 
            onTrueCallback : () => {
                console.log({ message : `cc-core-scraper-script tag was successfully loaded.`,});
            }
        });


        promises.filter(item => item.htmlTagPosition === "body").forEach(async item => await item.callback());

        // await Promise.all();

    }
    
    await loadScripts(activeScripts);

}());