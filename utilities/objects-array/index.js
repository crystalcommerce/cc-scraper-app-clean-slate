const { toNormalString } = require("../string");


function getAllObjectKeys(objects) {
    return objects.reduce((a, b) => {
        for(let key of Object.keys(b))  {
            if(!a.includes(key))    {
                a.push(key);
            }
        }
        return a;
    }, []);
}

function sortObjectsByDate(arr)  {
    arr.sort((a, b) => {
        let date1 = new Date(a.releasedDate).getTime(),
            date2 = new Date(a.releasedDate).getTime();
        return date1 < date2 ? -1 : date1 > date2 ? 1 : 0; 
    })
}


function isObjectInArray(object, array = []) {
    return array.some(item => {
        let results = [];
        for(let key in object)    {
            results.push(object[key] === item[key]);
        }
        return results.every(res => res);
    });
}


function objectToString(object, delimiter=", ") {
    let output = [];
    for(let key in object)  {
        output.push(`${toNormalString(key)} : ${toNormalString(object[key]).toUpperCase()}`);
    }
    return output.join(delimiter);
}

function isObjectUnique(obj, objectsArray, keys=[])   {   
    let overAllResults = []; 
    for(let object of objectsArray)  {
        let results = [];
        if(keys.length) {
            for(let key of keys)    {
                results.push(obj[key] !== object[key]);
            }
        } else  {
            for(let key in obj) {
                results.push(obj[key] !== object[key]);
            }
        }
        
        overAllResults.push(results.every(res => res));
    }
    return overAllResults.every(res => res);
}

function filterUnlistedObjects(localObjects, allObjects, keys=[])    {
    return allObjects.filter(obj => isObjectUnique(obj, localObjects, keys));
}

module.exports = { getAllObjectKeys, sortObjectsByDate, objectToString, isObjectUnique, filterUnlistedObjects, isObjectInArray };