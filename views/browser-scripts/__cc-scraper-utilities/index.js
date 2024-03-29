function __cc_getUtilities(authToken)  {
    
    async function apiRequest(url, options = {}, accessLocalHost = false)   {
        let headers = {
                "Content-Type" : "application/json",
                "x-auth-token" : authToken,
            },
            requestOptions = accessLocalHost ? {...options, headers} : options,
            res = await fetch(url, requestOptions),
            data = await res.json();
    
        return data;
    }
    
    async function postDataArray(url, data, options = {})   {
        let requestPromises = data.map(item => {
            return async function() {
                try {
                    let createResult = await apiRequest(url, {
                        method : "POST",
                        body : JSON.stringify(item, null, 4),
                        ...options
                    });
    
                    console.log(createResult);
                    return createResult.data;
                } catch(err)    {
                    return item;
                }
            }
        });
    
        return await Promise.all(requestPromises.map(item => item()));
    }
    
    async function scrollToBottom()  {
        let totalHeight = document.body.offsetHeight - window.innerHeight,
            currentScroll = 0;
    
        function scroll()   {
            currentScroll = window.scrollY;
        }
        
        window.addEventListener("scroll", scroll);
    
        await new Promise(resolve => {
            let interval = setInterval(() => {
                window.scrollTo(0, currentScroll + 100);
                if(currentScroll >= totalHeight) {
    
                    console.log({currentScroll, totalHeight})
                    clearInterval(interval);
                    window.removeEventListener("scroll", scroll);
                    resolve();
                }
            }, 25);
        });
        
    }
    
    function isObjectInArray(object, array = [], keysToBeChecked = []) {
        return array.some(item => {
            let results = [];
            if(keysToBeChecked.length)  {
                for(let key of keysToBeChecked)    {
                    results.push(object[key] === item[key]);
                }
            } else  {
                for(let key in object)    {
                    results.push(object[key] === item[key]);
                }
            }
            
            return results.every(res => res);
        });
    }
    
    async function scrollToTop()   {
        let totalHeight = document.body.offsetHeight - window.innerHeight,
            currentScroll = window.scrollY;
    
        function scroll()   {
            currentScroll = window.scrollY;
        }
        
        window.addEventListener("scroll", scroll);
    
        await new Promise(resolve => {
            let interval = setInterval(() => {
                window.scrollTo(0, currentScroll - 100);
                if(currentScroll <= 0) {
    
                    console.log({currentScroll, totalHeight})
                    clearInterval(interval);
                    window.removeEventListener("scroll", scroll);
                    resolve();
                }
            }, 25);
        });
    }
    
    function generateUuid(){
        let dt = new Date().getTime();
            
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
    }
    
    function isInArray(arr, data)    {
        return arr.find(item => {
            let result = [],
                dataKeys = Object.keys(data),
                itemKeys = Object.keys(item);
    
            for(let props in data)    {
                result.push(item[props] === data[props]);
            } 
    
            return result.every(res => res) && dataKeys.length === itemKeys.length;
        });
    }
    
    async function waitForSelector(selector, numberOfWaits = 140)  {
        await new Promise(resolve => {
            if(selector)    {
                resolve();
            }
            let i = 0,
                interval = setInterval(function(){
                    if(selector || i >= numberOfWaits)    {
                        clearInterval(interval);
                        resolve();
                    }
                    i++;
                }, 500);
    
        });
        return selector;
    }
    
    function toUrl(str) {
        return Array.from(str.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, " ").split(" ")).reduce((a, b) => {
            if(b.trim() !== "") {
                a.push(b);
            }
            return a;
        }, []).join("-");
    }
    
    function toCapitalize(str) {
        return str.split("").map((char, index) =>  index === 0 ? char.toUpperCase() : char).join("").trim();
    }
    
    function toCapitalizeAll(str)   {
        return str.split(" ").map(item => toCapitalize(item)).join(" ");
    }
    
    function objectToQueryString(object) {
    
        return Object.keys(object).reduce((a, b) => {
    
            if(object[b])   {
                a.push(`${encodeURIComponent(b)}=${encodeURIComponent(object[b])}`)
            }
    
            return a;
        }, []).join("&");
        
    }
    
    function queryStringToObject(urlString, trailingSlash = true)   {
        let url = new URL(urlString),
            queryString = url.search.length ? url.search.slice(1) : "",
            origin = url.origin.charAt(url.origin.length - 1) === "/" ? url.origin.slice(0, -1) : url.origin,
            urlPath = url.pathname.split("/").filter(item => item.length > 0).join("/"),
            pathname = trailingSlash ? `${urlPath}/` : urlPath,
            queryArr = queryString.length ? queryString.split("&") : [];
    
        return {
            queryObject : queryArr.reduce((a,b) => {
                let [key, val] = b.split("=");
                a[decodeURIComponent(key)] = decodeURIComponent(val);
                return a;
            }, {}),
            originalUrl : urlString,
            origin,
            pathname : pathname,
            urlWithoutQueryString : [origin, pathname].join("/"),
        };
    }
    
    function ccEncodeObject(obj)   {
        return encodeURIComponent(btoa(JSON.stringify(obj)));
    }
    
    function ccDecodeObject(str)    {
        return JSON.parse(atob(decodeURIComponent(str)));
    }
    
    async function moderator(arr, callback, bulkCount = 5) {
    
        let firstIndex = 0,
            lastIndex = bulkCount;
        
        async function execute(...args)   {
    
            let i = 0;
    
            while(i < arr.length)   {
    
                let slicedArr = arr.slice(firstIndex, lastIndex);
                
                
                await callback(slicedArr, firstIndex, lastIndex);
    
                if(i + bulkCount < arr.length)  {
                    i += bulkCount;
                    firstIndex = i;
                    lastIndex = i + bulkCount;
                } else {
                    i += arr.length - i;
                    firstIndex = i;
                    lastIndex = arr.length;
                }
    
                // console.log(firstIndex, lastIndex);
    
            }
    
        }
    
        await execute();
        
        
    }
    
    async function slowDown(timeDelay = false)  {
        let delay = timeDelay ? timeDelay : 7747;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    async function downloadEncodedText(productObjects, productProps)   {
        let element = document.createElement("a"),
            fileName = `${toUrl("enc" + " " + Object.keys(productProps).reduce((a, b) => {
                if(productProps[b] && productProps[b].trim().length)   {
                    a.push(productProps[b].trim());
                }
                return a;
            }, []).join(" ") + ` __dt-${Date.now()}` + ` __total-${productObjects.length}`)}.txt`;
    
        element.style.display = "none";
        element.setAttribute("href", `data:text/plain;charset=utf-8, ${btoa(encodeURIComponent(JSON.stringify(productObjects)))}`);
        element.setAttribute("target", "_blank");
        element.setAttribute("download", fileName);
        element.setAttribute("class", "__cc_download-encoded-text");
    
        document.body.appendChild(element);
        
        await waitForSelector(document.querySelector(".__cc_download-encoded-text"));
        element.click();
        await slowDown(3434);
    }
    
    function getValidatedPropValues(obj, propNames = [], callback = (value) => {})    {
    
        if(!obj)    {
            return null;
        }
            
        let objValue = null;
        propNames.reduce((object, key) => {
        
            if(object[key]) {
                object = object[key];
                objValue = object;
            } else  {
                object = {};
                objValue = null;
            }
    
            callback(objValue);
            
            return object;
    
        }, obj);
    
        return objValue;
    
    }
    
    function toNormalString(str, previousFormat = "camel-case")    {
        if(previousFormat === "camel-case") {
            str = str.replace(/([A-Z])/g, (char) => ` ${char.toUpperCase()}`);
        } else if(previousFormat === "underscored") {
            str = str.split("_").map(item => toCapitalize(item)).join(" ");
        } else  {
            str = str.split("-").map(item => toCapitalize(item)).join(" ");
        }
        return toCapitalize(str);
    }
    
    function getInitials(str)  {
        return typeof str === "string" && str.length ? toNormalString(str.trim()).split(" ").map(word => word.charAt(0).toUpperCase()).join("") : null;
    }
    
    function toCamelCase(str, url=false, initialCap=false)  {
        let separator = url ? "-" : " ";
        return str.toLowerCase().split(`${separator}`).map((item, index) => index === 0 && !initialCap ? item : toCapitalize(item)).join("");
    }



    return  {
        apiRequest,
        postDataArray,
        scrollToBottom,
        isInArray,
        waitForSelector,
        toUrl,
        toCapitalize,
        toCapitalizeAll,
        objectToQueryString,
        queryStringToObject,
        scrollToTop,
        moderator,
        slowDown,
        isObjectInArray,
        downloadEncodedText,
        getValidatedPropValues,
        ccEncodeObject,
        ccDecodeObject,
        generateUuid,
        getInitials,
        toNormalString,
        toCamelCase
    }

}
