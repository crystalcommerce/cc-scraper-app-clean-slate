const fileSystemUtilities = require("./file-system");
const objectsArrayUtilities = require("./objects-array");
const stringUtilities = require("./string");
const urlUtilities = require("./url");
const createJsonFileObject = require("./json");

function getRequestResult(result, status = 200, contentType = "application/json") {
    let obj = {
        contentType,
        status : status,
        data : contentType === "application/json" ? JSON.stringify(result, null, 4) : result,
    };
    return obj;
}

function filterObjectsByMethodName(postMiddleWare, ...middleWares)  {

    let middleWaresArr = Array.from(middleWares);
    
    return function(callbackName)   {
        let callback =  middleWaresArr.filter(obj => {
            return Object.keys(obj).find(key => key === callbackName);
        }).map(item => item[callbackName]);

        return [...callback, postMiddleWare];
    }
    
}

function dynamicRequire(filePath)   {
    let module = require(filePath);
    delete require.cache[filePath];
    return module;
}

module.exports = {
    ...fileSystemUtilities,
    ...objectsArrayUtilities,
    ...stringUtilities,
    ...urlUtilities,
    createJsonFileObject,
    getRequestResult, 
    filterObjectsByMethodName, 
    dynamicRequire 
};