console.log({
    message : "Initializing scraping procedure...",
    author : "Michael Norward"
});

let linkObjectsUnparsed = [
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Al_Cass",
        "productProps": {
            "productBrand": "Al Cass"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Alfred_Music",
        "productProps": {
            "productBrand": "Alfred Music"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Audio_Sprockets",
        "productProps": {
            "productBrand": "Audio Sprockets"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Arobas_Music",
        "productProps": {
            "productBrand": "Arobas Music"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Adaptive_Technologies_Group",
        "productProps": {
            "productBrand": "Adaptive Technologies Group"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Band_Industries",
        "productProps": {
            "productBrand": "Band Industries"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Barcus_Berry",
        "productProps": {
            "productBrand": "Barcus Berry"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Blackmagic_Design",
        "productProps": {
            "productBrand": "Blackmagic Design"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Blue_Juice",
        "productProps": {
            "productBrand": "Blue Juice"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/CEM_Publishing",
        "productProps": {
            "productBrand": "CEM Publishing"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Drum_N_Bass",
        "productProps": {
            "productBrand": "Drum N Bass"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/DG_De_Gregorio",
        "productProps": {
            "productBrand": "DG De Gregorio"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Focal_Press",
        "productProps": {
            "productBrand": "Focal Press"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Fourth_Position_Academy",
        "productProps": {
            "productBrand": "Fourth Position Academy"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Future_Audio_Workshop",
        "productProps": {
            "productBrand": "Future Audio Workshop"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Gorilla_Snot",
        "productProps": {
            "productBrand": "Gorilla Snot"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Granelli_Audio_Labs",
        "productProps": {
            "productBrand": "Granelli Audio Labs"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Hornberg_Research",
        "productProps": {
            "productBrand": "Hornberg Research"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Hans_Hoyer",
        "productProps": {
            "productBrand": "Hans Hoyer"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/HW_Products",
        "productProps": {
            "productBrand": "HW Products"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/HarperCollins_Publishers",
        "productProps": {
            "productBrand": "HarperCollins Publishers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/J_and_D_Hite",
        "productProps": {
            "productBrand": "J&D Hite"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/JDK_Audio",
        "productProps": {
            "productBrand": "JDK Audio"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Klein_Tools",
        "productProps": {
            "productBrand": "Klein Tools"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Liberty_A_V",
        "productProps": {
            "productBrand": "Liberty A/V"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Nazca_Audio",
        "productProps": {
            "productBrand": "Nazca Audio"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Performance_Plus",
        "productProps": {
            "productBrand": "Performance Plus"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Pete_s_Place",
        "productProps": {
            "productBrand": "Pete's Place"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Paul_Jansen__and__Sons",
        "productProps": {
            "productBrand": "Paul Jansen & Sons"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Peachpit_Press",
        "productProps": {
            "productBrand": "Peachpit Press"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Qwik_Time",
        "productProps": {
            "productBrand": "Qwik Time"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Rising_Software",
        "productProps": {
            "productBrand": "Rising Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Reveal_Sound",
        "productProps": {
            "productBrand": "Reveal Sound"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Stewart_Audio",
        "productProps": {
            "productBrand": "Stewart Audio"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Simon_Systems",
        "productProps": {
            "productBrand": "Simon Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Studio_Lab_Percussion",
        "productProps": {
            "productBrand": "Studio Lab Percussion"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Stand_Outs",
        "productProps": {
            "productBrand": "Stand Outs"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/TP_Link",
        "productProps": {
            "productBrand": "TP Link"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Wave_Distribution",
        "productProps": {
            "productBrand": "Wave Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/X-Tempo_Designs",
        "productProps": {
            "productBrand": "X-Tempo Designs"
        }
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

};

let evaluatorObjects = [
    {
        callback : async () => {


            function queryStringToObject(urlString)   {
                let url = new URL(urlString),
                    queryString = url.search.length ? url.search.slice(1) : "",
                    queryArr = queryString.length ? queryString.split("&") : [],
                    queryObject = queryArr.reduce((a,b) => {
                        let [key, val] = b.split("="),
                            decoded = window.atob(decodeURIComponent(val));

                        a[decodeURIComponent(key)] = decoded;
                        return a;
                    }, {});
            
                return Object.keys(queryObject).length ? queryObject : null;
            }

            function objectToQueryString(object) {
    
                return Object.keys(object).reduce((a, b) => {
        
                    let encoded = encodeURIComponent(window.btoa( object[b] ));
                    
                    a.push(`${encodeURIComponent(b)}=${encoded}`)
            
                    return a;
                }, []).join("&");
                
            }

            let productObjects = null,
                newUrl = null,
                productSummaryContainer = document.querySelector(".product-summary"),
                paginatedProductsListContainer = document.querySelectorAll(".product-card:not(.candy--card)"),
                categories = Array.from(document.querySelectorAll(`ul[filtertype=category] > li > a`)).map(item => {

                    let category = item.querySelector(".name") ? item.querySelector(".name").innerText.trim() : null,
                        count = item.querySelector(".count") ? Number(item.querySelector(".count").innerText.trim().replace("(", "").replace(")", "")) : null,
                        uri = item.href;



                    return {
                        uri,
                        category,
                        count,
                    }
                });
            

            if(categories.length)   {
                productObjects = categories;
            } else if(productSummaryContainer)  {

                let object = queryStringToObject(window.location.href);

                delete(object["___cc_cc-scraper-object-key"]);
                delete(object["___cc_productBrand"]);

                let queryString = objectToQueryString(object),
                    url = queryString.length > 0 ? `${window.location.origin}${window.location.pathname}?${queryString}` : `${window.location.origin}${window.location.pathname}`;


                productObjects = [
                    {
                        uri : url,
                        category : null,
                        type : "single-product",
                        count : 1,
                    }
                ];
            } else {

                

                productObjects = [
                    {
                        uri, 
                        category : null, 
                        count : paginatedProductsListContainer ? paginatedProductsListContainer.length : 0,
                        type : "paginated-products-list"
                    }
                ];
            }
            
            console.log("these are the products...")
            console.table(productObjects)

            return {productObjects, newUrl};

        },
        type : "list",
        paginated : true,
        awaitSelector : `script[src='/p2TBVNJZ/init.js']`,
    }
];


function getLinkObjects(linkObjectsUnparsed, linkObjectsKey) {

    if(window.localStorage.getItem(linkObjectsKey)) {
        return JSON.parse(window.localStorage.getItem(linkObjectsKey));
    } else  {
        window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjectsUnparsed));

        return linkObjectsUnparsed;
    }
}


// initialization of the scraper object;

async function ccScraperInitialize() {

    // reset mechanism
    if(window.location.href.includes("scraper-reset"))  {
        Object.keys(window.localStorage).forEach(key => window.localStorage.removeItem(key));
        window.location = window.location.origin;
    }

    // stop
    if(window.location.href.includes("scraper-stop"))   {
        return;
    }



    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNlMzM1NTE3YThhNTUzYzRkZGM4ZWQiLCJwZXJtaXNzaW9uTGV2ZWwiOjQsImlhdCI6MTY1MjIzNTUwMSwiZXhwIjoxNjUyODQwMzAxfQ.EW4JuTSiRsJ8uTWoHXdm8UlTxSS9ZsW2VB703UVG7OI",
        CcScraper = __cc_getScraperFactory(__cc_getUtilities, authToken),
        {toUrl} = __cc_getUtilities(authToken),
        linkObjectsKey = `__cc_${toUrl("CC Sweet water category objects")}`;

    // initialization of linkObjects;    
    getLinkObjects(linkObjectsUnparsed, linkObjectsKey);
    
    let scraperOptions = {
            evaluatorObjects, 
            apiRoute : "http://localhost:8080/api/sweetwater-musicians", 
            imageNameObject :  {shared : ["productName"], split : []}, 
            imagePropName : "productImage", 
            pathLocation : "C:/Users/Michael Norward/Google Drive/Crystal Commerce/sample-musicians/", 
            linkObjectsKey,
            autoScrollToBottom : false,
            deleteCookiesPerCategory : false,
            finalActions : ["downloadEncodedText"], // downloadJson || postProductObjectsToAPI || printProductObjectsOnPage || downloadEncodedText;
            getNextSetBy : "same-tab", // new-tab; click; same-tab;
        };
        
    await CcScraper.getScraperObject(scraperOptions);

    
    
    // Object.keys(window.localStorage).forEach(key => window.localStorage.removeItem(key));

    //https://www.rei.com/c/tents?pagesize=90&page=2

}



(async function() {

    await ccLoadScripts("__cc_getUtilities", "__cc_getScraperFactory");
    

    await ccScraperInitialize();

    // alert("Hello there Michael Norward.")

}());