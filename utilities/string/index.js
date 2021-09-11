// some non-db related helper functions


function toUrl(str) {
    return Array.from(str.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, " ").split(" ")).reduce((a, b) => {
        if(b.trim() !== "") {
            a.push(b);
        }
        return a;
    }, []).join("-");
}

function enumerate(arr, and = false)  {
    arr = [...arr];
    if(arr.length > 1)  {
        let lastIndex = arr.pop();
        return `${arr.join(", ")}, ${and ? "and" : "or"} ${lastIndex}`;  
    } else  {
        return arr[0];
    }
}

function toCamelCase(str, url=false, initialCap=false)  {
    let separator = url ? "-" : " ";
    return str.toLowerCase().split(`${separator}`).map((item, index) => index === 0 && !initialCap ? item : toCapitalize(item)).join("");
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

function toCapitalize(str) {
    return str.split("").map((char, index) =>  index === 0 ? char.toUpperCase() : char).join("").trim();
}

function toCapitalizeAll(str)   {
    return str.split(" ").map(item => toCapitalize(item)).join(" ");
}

module.exports = { toUrl, enumerate, toCamelCase, toNormalString, toCapitalize, toCapitalizeAll }
    

    



     