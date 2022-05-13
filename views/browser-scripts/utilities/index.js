function __cc_getUtilities(authToken)  {
    
    async function apiRequest(url, options = {})   {
        let headers = {
                "Content-type" : "application/json",
                "x-auth-token" : authToken,
            },
            res = await fetch(url, {...options, headers}),
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
    
    async function waitForSelector(selector)  {
        await new Promise(resolve => {
            if(selector)    {
                resolve();
            }
            let interval = setInterval(function(){
                if(selector)    {
                    clearInterval(interval);
                    resolve();
                }
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

            let encoded = btoa(object[b]);
    
            a.push(`${encodeURIComponent(b)}=${encodeURIComponent(encoded)}`)
    
            return a;
        }, []).join("&");
        
    }
    
    function queryStringToObject(urlString)   {
        let url = new URL(urlString),
            queryString = url.search.length ? url.search.slice(1) : "",
            queryArr = queryString.length ? queryString.split("&") : [],
            queryObject = queryArr.reduce((a,b) => {
                let [key, val] = b.split("="),
                    decoded = atob(decodeURIComponent(val));


                a[decodeURIComponent(key)] = decoded;
                return a;
            }, {});
    
        return Object.keys(queryObject).length ? queryObject : null;
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
    }

}
