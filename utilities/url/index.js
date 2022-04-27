const axios = require("axios");


function queryStringToObject(urlString)   {
    let url = new URL(urlString),
        queryString = url.search.length ? url.search.slice(1) : "",
        queryArr = queryString.length ? queryString.split("&") : [],
        queryObject = queryArr.reduce((a,b) => {
            let [key, val] = b.split("=");
            a[decodeURIComponent(key)] = decodeURIComponent(val);
            return a;
        }, {});

    return Object.keys(queryObject).length ? queryObject : null;
}

function objectToQueryString(object) {

    return Object.keys(object).reduce((a, b) => {

        a.push(`${encodeURIComponent(b)}=${encodeURIComponent(object[b])}`)

        return a;
    }, []).join("&");
    
}

async function apiRequest(authToken, url, options = {}) {
    try {
        let method = options.method ? options.method : "GET",
        data = function()   {
            if(!options.body) {
                options.body = {};
            };
            return options.body;
        }(),
        headers = options.headers ? options.headers : null,
        result = await axios({
            method,
            url,
            data,
            headers: {
                "Content-Type" : "application/json",
                "x-auth-token" : authToken,
                ...headers,
            }
        });

        return result.data;
    } catch(err)    {
        return {
            data : [],
            statusOk : false,
            message : err.message,
        };
    }
    
}

module.exports = {
    apiRequest,
    objectToQueryString,
    queryStringToObject,
}