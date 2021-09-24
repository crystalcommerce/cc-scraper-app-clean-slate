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
            initialKeys = item.querySelector("strong").innerText.trim().split("/").map(item => toCamelCase(item.trim().replace(/:/, ""))),
            keys,
            values;

        let [key] = initialKeys;

        if(key === "number-Rarity")   {
            keys = item.querySelector("strong").innerText.trim().split(" - ").map(item => toCamelCase(item.trim().replace(/:/, "")));
            values = item.querySelector("span").innerText.trim().split(" - ").map(item => item.trim().replace(/\n/g, " <br />"));
        } else  {
            keys = initialKeys;
            values = item.querySelector("span").innerText.trim().split("/").map(item => item.trim().replace(/\n/g, " <br />"));
        }

        for(let i = 0; i < keys.length; i++)    {
            let objKey = keys[i] === "number" ? "cardNumber" : keys[i];
            object[objKey] = values[i];
        }

        

        return object;
    }

    function getImages()    {
        return Array.from(document.querySelectorAll(".image-set__grid .image-set__main .progressive-image")).map(item => {
            let imageUri = item.getAttribute("style").split("--placeholder:url(").pop().split(");").shift();
                return imageUri.replace(/"/g, "").replace("/filters:quality(10)", "");
            });
    }

    function findFinish() {
        let foiledFinish = Array.from(document.querySelectorAll(".search-layout .listing-item")).map(item => {
                return item.querySelector(".listing-item__condition").innerText.trim();
            }).find(item => item.includes("Foil") === ""),
            priceHeader = document.querySelector(".price-points__header");
    
        if(cardName.toLowerCase().includes("foil") || priceHeader.innerText.toLowerCase().includes("foil"))   {
            return "Foil";
        } else  {
            return foiledFinish ? foiledFinish : "Regular";
        }
    }


    let cardEffect = function()    {
            if(multiFaced)  {
                let [cardName1, cardName2] = cardName.split(" // ");
                return document.querySelector(".pd-description__description").innerText.trim().split(`${cardName2}\n`).map(item => item.trim().replace(/\n+/g, " <br />")).join(` // ${cardName2} <br />`);
            } else  {
                return document.querySelector(".pd-description__description").innerText.trim().replace(/\n+/g, " <br />");
            }
        }(),
        detailsList = Array.from(document.querySelectorAll(".pd-description__attributes > li")),
        additionalCardObject = {};

    for(let list of detailsList)    {
        Object.assign(additionalCardObject, getObject(list));
    }

    additionalCardObject.cardEffect = cardEffect;
    additionalCardObject.imageUris = getImages();

    additionalCardObject.finish = findFinish();

    return additionalCardObject;

}



const waitMethods = [
	{
		name : "waitForSelector",
		args : ".product-details__listings-container",
	},
];


const type = "single";


const objPropArgs = [
	"multiFaced",
	"cardName",
];


const productUrlProp = "cardUri";


module.exports = {callback, waitMethods, type, objPropArgs, productUrlProp}