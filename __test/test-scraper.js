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

const scriptObject = {
    args : ["startingPointUrl"],
    callback : async (startingPointUrl) =>  {

        // we can pretty much write anything here.
    
        let {data : htmlString} = await axios({
                url : startingPointUrl,
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
        

        // functions to get the details of the product
        let checkMultiFaced = imageCount => imageCount > 1,
            getApiUrl = productId => `https://mpapi.tcgplayer.com/v2/product/${productId}/details`,
            getImageUris = function(productId, imageCount)   {
                let imageUris = [];
                for(let i = 0; i < imageCount; i++) {
                    let imageId = i === 0 ? productId : `${productId}_${i}`;
                    imageUris.push(`https://product-images.tcgplayer.com/${imageId}.jpg`);
                }
                return imageUris;
            },
            getFinish = function(data)  {
                let { normalOnly, foilOnly } = data
                if((!normalOnly && !foilOnly) || foilOnly)    {
                    return "Foil";
                } else {
                    return "Normal";
                }
            },
            getDescription = (data) => {
                let {customAttributes, imageCount, productName} = data,
                    { Description } = customAttributes,
                    multiFaced = checkMultiFaced(imageCount)
                if(!Description)    {
                    return "";
                }
                if(multiFaced)  {
                    let [productName1, productName2] = productName.split(" // ");
                    return `${productName1} <br />` + Description.replace(/\r\n+/g, " <br />").replace(/<br>/g, "").split(`${productName2}`).join(`  //  ${productName2} <br />`);
                } else  {
                    return Description.replace(/\r\n+/g, " <br />").replace(/<br>/g, "");
                }
            },
            getAttribute = (data, attr) => {
                try {
                    let { customAttributes } = data;
                    return customAttributes[attr];
                } catch(err)    {
                    return null;
                }
            };


    
        productObjects = await Promise.all(productIds.map(async item => {

            let url = getApiUrl(item);

            try {
                let { data } = await axios({url});
        
                if(!data)   {
                    throw Error("We had some problems getting the data.");
                }
                
        
                return {    
                    imagePaths : [], // this has to be an array always.
                    productName : data.productName,
                    productImage : '', // this will be handled by the image downloader,
                    cardEffect : getDescription(data),
                    cardName : data.productName,
                    cardNumber : getAttribute(data, "Number"),
                    cardType : getAttribute(data, "Card Type"),
                    cardSubtype : getAttribute(data, "Card SubType"),
                    class : getAttribute(data, "Class"),
                    cost : getAttribute(data, "Cost"),
                    defenseValue : getAttribute(data, "Defense Value"),
                    finish : getFinish(data),
                    intellect : getAttribute(data, "Intellect"),
                    life : getAttribute(data, "Life"),
                    pitchValue : getAttribute(data, "Pitch Value"),
                    power : getAttribute(data, "Power"),
                    rarity : getAttribute(data, "Rarity"),
                    setName : set,
                    
                    multiFaced : checkMultiFaced(data.imageCount),
                    imageUris : getImageUris(data.productId, data.imageCount),
                };
            } catch(err) {
                unscrapedData.push({productId : item, apiUrl : url, reason : err.message});

                return {productId : item, apiUrl : url, reason : err.message};
            }
            
        }))
    
        // console.log(productObjects);
    
    
        // we have to return an array of objects representing the product objects;
        return {
            productObjects,
            unscrapedData,
            productSet : set,
        }
    }
};



// we invoke an instance of the new StandardScraperScript class here

const scraperScript = new StandardScraperScript({
    
    siteName : "TCG Player",
    siteUrl : "https://www.tcg-player.com/",
    productBrand : "Flesh and Blood",
    // productBrand : "Dragon Ball Super CCG",
    imageNameObject : {
        split : ["cardName", "cardNumber"],
        shared : ["rarity"]
    },
    imagePropName : "productImage",
    csvExcludedProps : ["imageUris", "cardUri"],
    scriptObject, // this will have to be an async function
    startingPointUrl : "https://prices.tcgplayer.com/price-guide/flesh-and-blood-tcg/hero-deck-dorinthea",
    // startingPointUrl : "https://prices.tcgplayer.com/price-guide/dragon-ball-super-ccg/special-anniversary-set-2021",
});

console.log();


(async () => {
    // we then have to execute the uploaded script by calling this method of the instance.

    await scraperScript.executeScript(); // we get the data first,

    await scraperScript.createDataDirPath(); // order matters... we are setting the setname after scraping, so creating a path must come after

    await scraperScript.downloadImagesByBulk();

    await scraperScript.writeProductObjectsToCsv();

    // we can then log the productObjects (array) and the unscraped data (also an array);
    console.table(scraperScript.productObjects);
    console.table(scraperScript.unScrapedData);
})();

