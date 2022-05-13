async function apiRequest(url, options = {})   {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNlMzM1NTE3YThhNTUzYzRkZGM4ZWQiLCJwZXJtaXNzaW9uTGV2ZWwiOjQsImlhdCI6MTY1MDgzMDQzOCwiZXhwIjoxNjUxNDM1MjM4fQ.9JLGbj6NAe_RmhDIKZ94tQniYDXfKAR7u3n3x1o6tKc",
        headers = {
            "Content-type" : "application/json",
            "x-auth-token" : authToken,
        }
        res = await fetch(url, {...options, headers}),
        data = await res.json();

    return data;
}

async function postDataArray(data)   {
    let requestPromises = data.map(item => {
        return async function() {
            try {
                let createResult = await apiRequest("http://localhost:8080/api/davesgarden-plants/", {
                    method : "POST",
                    body : JSON.stringify(item, null, 4),
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
        }, 100);
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

function storeData(key, data)  {
    if(!window.localStorage[key])   {
        window.localStorage.setItem(key, `[]`);
    }

    let arr = JSON.parse(window.localStorage.getItem(key));

    if(typeof data === "string" && !arr.includes(data))    {

    } else if(!isInArray(arr, data)) {
        arr.push(data);
    }
    

    window.localStorage.setItem(key, JSON.stringify(arr));

}

function getDataFromStorage(key)    {
    return JSON.parse(window.localStorage.getItem(key));
}

function isInStorage(key, data) {
    if(!window.localStorage.getItem(key))   {
        window.localStorage.setItem(key, `[]`);
        return false;
    } 

    let arr = JSON.parse(window.localStorage.getItem(key));

    return isInArray(arr, data);
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

        a.push(`${encodeURIComponent(b)}=${encodeURIComponent(object[b])}`)

        return a;
    }, []).join("&");
    
}