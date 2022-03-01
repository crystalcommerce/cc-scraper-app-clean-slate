const getStandardScraperScript = require("../core/");
const { StandardScraperScript } = getStandardScraperScript(null);



// we will have our script writer to automatically include these lines where we are requiring the axios and cheerio and htmlparser2 automatically...
// for now on this test file, we are just hardcoding it.
const axios = require("axios"); 
const cheerio = require("cheerio");



/*
    TODO: 
    we have to remove multifaced property as we do not have to rely on that part anymore, all scripts are executed on one uploaded file only.
*/




// the goal of this script is to return two arrays... one for the productObjects array and one for the unscrapedData (which is also an array).
const uploadedScript = async function()   {

    // we can pretty much write anything here.

    let getApiUrl = function(productId)    {
            return `https://mpapi.tcgplayer.com/v2/product/${productId}/details`;
        },
        {data : htmlString} = await axios({
            url : "https://prices.tcgplayer.com/price-guide/flesh-and-blood-tcg/hero-deck-dorinthea",
        }),
        
        $ = cheerio.load(htmlString),
        productIds = [],
        productObjects = [],
        unscrapedData = [],
        set = $("select#set").find("option[selected]").text();

    $(".priceGuideTable tbody tr").map((item, el) => {
        let href = $(el).find('.productDetail a').attr("href"),
            startingIndex = href.indexOf("product/") + "product/".length,
            productId = href.slice(startingIndex).split("/").shift();

        productIds.push(productId);
    });

    productObjects = await Promise.all(productIds.map(async item => {
        console.log(getApiUrl(item));
        let url = getApiUrl(item),
            { data } = await axios({url});


        // we will create helper functions here for transforming the data the way we want.

        function imageUris()    {

        }
        console.log(set);
        // console.log(data.customAttributes);


        // from here we can transform the object into another object with properties that we want;
        

        return {    
            // imagePaths : null, // this will be supplied lated,
            // productName : data.productName,
            // productImage : '', // this will be handled by the image downloader,
            // cardEffect : null,  
            // // cardName,
            // cardNumber : null,
            // cardType : null,
            // cardSubtype : null,
            // class : null,
            // cost : null,
            // defenseValue : null,
            // // finish : "Regular",
            // intellect : null,
            // life : null,
            // pitchValue : null,
            // power : null,
            // rarity : null,
            // setName : set,

            // imageUris : [],
        };
    }))

    // console.log(productObjects);


    // we have to return an array of objects representing the product objects;
    return {
        productObjects,
        unscrapedData : [{name : "third product"}],
    }
}


// we invoke an instance of the new StandardScraperScript class here

const scraperScript = new StandardScraperScript({
    
    siteName : "TCG Player",
    siteUrl : "https://www.tcg-player.com/",
    productBrand : "Flesh and Blood",
    imageNameObject : {
        split : ["cardName", "cardNumber"],
        shared : ["rarity"]
    },
    imagePropName : "productImage",
    csvExcludedProps : ["imageUris", "cardUri"],
    uploadedScript, // this will have to be an async function
    startingPointUrl : "https://prices.tcgplayer.com/price-guide/flesh-and-blood-tcg/hero-deck-dorinthea",
});

console.log(scraperScript);


(async () => {
    // we then have to execute the uploaded script by calling this method of the instance.
    await scraperScript.executeScript();

    // we can then log the productObjects (array) and the unscraped data (also an array);
    console.log(scraperScript.productObjects, scraperScript.unscrapedData);
})();

