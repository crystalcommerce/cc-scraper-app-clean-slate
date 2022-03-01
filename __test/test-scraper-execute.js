const getScraperObject = require("../scripts/tcg-player/flesh-and-blood");

(async () => {
    const siteResource = {
        siteName : "TCG Player",
        siteUrl : "https://www.tcg-player.com/"
    };

    const scrapersDbData = {
        siteName : "TCG Player",
        siteUrl : "https://www.tcg-player.com/",
        productBrand : "Flesh and Blood",
        imageNameObject : {
            split : ["cardName", "cardNumber"],
            shared : ["rarity"]
        },
        imagePropName : "productImage",
        csvExcludedProps : ["imageUris", "cardUri"],
    };
    const userInput = {
        productsListEvaluatorUris : [
            {
                url : "https://prices.tcgplayer.com/price-guide/flesh-and-blood-tcg/hero-deck-dorinthea",
                evaluatorIndex : 0,
            },
            // {
            //     url : "https://www.tcgplayer.com/search/flesh-and-blood-tcg/hero-deck-dorinthea?productLineName=flesh-and-blood-tcg&setName=hero-deck-dorinthea&page=1&view=grid",
            //     evaluatorIndex : 2,
            // }
        ],
        productSet : "Hero Deck: Dorinthea",
        evaluatorArgs : [
            {   
                evaluatorIndex : 0,
                args : ["Hero Deck: Dorinthea"],
            },
            // {   
            //     evaluatorIndex : 2,
            //     args : ["Hero Deck: Dorinthea 2"],
            // }
        ],
        
    }
    const scraperOptions = {
        ...siteResource,
        ...scrapersDbData,
        ...userInput,
    }

    let scraperScript = getScraperObject(scraperOptions);

    console.log(scraperScript);


    // CREATE THE DIRPATH
    await scraperScript.createDataDirPath();

    // executeEvaluatorsAll
    await scraperScript.executeEvaluators();

        
    // console.log(`We have ${scraperScript.unscrapedData.length} rows of unscraped data.`)
    console.table(scraperScript.productObjects);
    console.table(scraperScript.unscrapedData);

    // bulk image downloading...
    await scraperScript.downloadImagesByBulk();
    console.table(scraperScript.productObjects);
    console.table(scraperScript.unscrapedData);

    // writing data to csv;
    await scraperScript.writeProductObjectsToCsv();
    
})();






(multiFaced, cardName) => {

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
                return document.querySelector(".product__item-details__description").innerText.trim().split(`${cardName2}\n`).map(item => item.trim().replace(/\n+/g, " <br />")).join(` // ${cardName2} <br />`);
            } else  {
                return document.querySelector(".product__item-details__description").innerText.trim().replace(/\n+/g, " <br />");
            }
        }(),
        detailsList = Array.from(document.querySelectorAll(".product__item-details__attributes > li")),
        additionalCardObject = {};

    for(let list of detailsList)    {
        Object.assign(additionalCardObject, getObject(list));
    }

    additionalCardObject[`Grade / Skill`] = function()  {
        let {grade, skill} = additionalCardObject;
        return `${grade} / ${skill}`;
    }();
    additionalCardObject.cardEffect = cardEffect;
    additionalCardObject.imageUris = getImages();

    additionalCardObject.finish = findFinish();

    delete(additionalCardObject.grade);
    delete(additionalCardObject.skill);

    return additionalCardObject;

}


(multiFaced, cardName) => {

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
        
        if(key === "Number")    {
            key = "Card Number";
        } else if(key === "Card Type")  {
            key = "Type";
        } else if(key === "Energy(Color Cost)") {
            key = "Energy Color Cost";
        }
        object[toCamelCase(key)] = value;

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

    let additionalCardObject = {},
        detailsList = Array.from(document.querySelectorAll(".product__item-details__attributes > li"));
    
    
    for(let list of detailsList)    {
        Object.assign(additionalCardObject, getObject(list));
    }

    additionalCardObject.imageUris = getImages();
    additionalCardObject.skill = function()    {
        if(multiFaced)  {
            let [name1, name2] = cardName.split(" // ");
            return `${name1} <br />${document.querySelector(".product__item-details__description").innerText.trim().split(name2).map(item => item.trim().replace(/\n+/g, " <br />")).join(` // ${name2} <br />`)}`;
        } else  {
            return document.querySelector(".product__item-details__description").innerText.trim().replace(/\n+/g, " <br />");
        }
    }();
    additionalCardObject.finish = findFinish();

    
    return additionalCardObject;

}