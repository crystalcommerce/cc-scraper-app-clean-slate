const callback = (multiFaced, cardName) => {

    function toCapitalize(str)  {
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    }

    function toCamelCase(str, url=false, initialCap=false)  {
        let separator = url ? "-" : " ";
        return str.toLowerCase().split(`${separator}`).map((item, index) => index === 0 && !initialCap ? item : toCapitalize(item)).join("");
    }

    function getObject(item)    {
        let object = {},
            key = item.querySelector("strong").innerText.trim().replace(/:/g, ""),
            value = item.querySelector("span").innerText.trim().replace(/\n/g, " <br />");

        if(key !== "Flavor Text") {
            if(key === "Number")    {
                key = "Card Number";
            }

            object[toCamelCase(key)] = value;
        }
        
        return object;
    }

    function getProductName(multiFaced, cardName)   {
        if(multiFaced)  {
            let spotlight = document.querySelector(".spotlight__condition");
            return cardName.split(" // ").map(item => {
                return spotlight && spotlight.innerText.trim() !== "" ? `${item} ${spotlight.innerText.trim().replace("Near Mint", "").trim()}` : `${item} - 1st Edition`;
            }).join(` // `);
        } else  {
            let spotlight = document.querySelector(".spotlight__condition");
            
            return spotlight ? `${cardName} ${spotlight.innerText.trim().replace("Near Mint", "").trim()}` : `${cardName} - 1st Edition`;
        }
    }

    function getImages()    {
        return Array.from(document.querySelectorAll(".image-set__grid .image-set__main .progressive-image")).map(item => {
            let imageUri = item.getAttribute("style").split("--placeholder:url(").pop().split(");").shift();
                return imageUri.replace(/"/g, "").replace("/filters:quality(10)", "");
            });
    }


    let additionalCardObject = {},
        detailsList = Array.from(document.querySelectorAll(".pd-description__attributes > li"));
    
    
    for(let list of detailsList)    {
        Object.assign(additionalCardObject, getObject(list));
    }

    additionalCardObject.productName = getProductName(multiFaced, cardName);
    additionalCardObject.imageUris = getImages();
    additionalCardObject.finish = function()    {
        let spotlight = document.querySelector(".spotlight__condition");
        return spotlight && spotlight.innerText.trim() !== "" ? spotlight.innerText.trim().replace("Near Mint", "").trim() : `1st Edition`;
    }();
    additionalCardObject.cardEffect = function()    {
        
        if(multiFaced)  {
            let [cardName1, cardName2] = cardName.split(" // ");
            return document.querySelector(".pd-description__description").innerText.trim().split(cardName2).map(item => item.trim().replace(/\n+/g, " <br />")).join(` // ${cardName2} <br />`);
        } else  {
            return document.querySelector(".pd-description__description").innerText.trim().replace(/\n+/g, " <br />");
        }
    }();

    

    return additionalCardObject;

};


const waitMethods = [
];


const type = "single";


const objPropArgs = [
	"multiFaced",
	"cardName",
];


const productUrlProp = "cardUri";


module.exports = {callback, waitMethods, type, objPropArgs, productUrlProp}