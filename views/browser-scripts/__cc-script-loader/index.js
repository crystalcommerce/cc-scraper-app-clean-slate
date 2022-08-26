const scriptObjects = [
    // do not put other script objects here

    /* prod core script */
    // {
    //     src : "http://localhost:8080/browser-scripts/__cc-scraper-core/index.js",
    //     url : [
    //         "",
    //     ],
    //     htmlTagPosition : "head",
    // },

    /* dev core script */
    {
        src : "http://localhost:7747/index.js",
        url : [
            ""
        ],
        htmlTagPosition : "head",
    },


    // scraper scripts must be placed here
    {
        src : "http://localhost:8080/browser-scripts/_test-scripts/product-set/index.js",
        url : [
            "localhost:5500/",
            "http://127.0.0.1:5500/",
        ],
        htmlTagPosition : "body"
    },
    {
        src : "http://localhost:8080/browser-scripts/amiami-toys/index.js",
        url : [
            "amiami.com/"
        ],
        htmlTagPosition : "body"
    }


    // UI scripts must be placed here.
];

(async function(){

    async function loadScripts(scriptObjects){
        let promises = scriptObjects.map((scriptObject, index) => {
            return {
                htmlTagPosition : scriptObject.htmlTagPosition,
                callback : async function() {

                    if(scriptObject.url.some(item => window.location.href.includes(item))) {
                        let script = document.createElement("script"),
                            method = scriptObject.htmlTagPosition === "head" ? "prepend" : "append";
    
                        script.classList.add("__cc-scraper-script");
                        script.classList.add(`__cc-scraper-script-${index}`)
                        script.src = scriptObject.src;
                        

                        document[scriptObject.htmlTagPosition][method](script);
    
                        await new Promise(resolve => {
    
                            let i = 0,
                                interval = setInterval(() => {
    
                                    let scriptTag = document.querySelector(`.__cc-scraper-script-${index}`);
                                    
                                    if(scriptTag)   {
                                        
                                        console.log({
                                            message : `script tag was successfully loaded.`,
                                            scriptTagSelector : `.__cc-scraper-script-${index}`,
                                            scriptTag
                                        })
                                        clearInterval(interval);
                                        resolve();
    
                                    }
    
                                    if(i === 500)   {
                                        console.log("Loading script...")
                                        i = 0;
                                    }
    
                                    i++
    
                                }, 10);
    
                        });
    
                    }       
                    
                }
            }
        });

        await Promise.all(promises.filter(item => item.htmlTagPosition === "head").map(item => item.callback()));

        await new Promise(resolve => {
            let i = 0,
                interval = setInterval(() => {
                    
                    if(window.___cc__CcScraperGlobalObject)   {
                        
                        console.log({
                            message : `cc-core-scraper-script tag was successfully loaded.`,
                        })
                        clearInterval(interval);
                        resolve();

                    }

                    if(i === 500)   {
                        console.log("Loading script...")
                        i = 0;
                    }

                    i++

                }, 10);
        });

        await Promise.all(promises.filter(item => item.htmlTagPosition === "body").map(item => item.callback()));

    }
    
    await loadScripts(scriptObjects);

}());