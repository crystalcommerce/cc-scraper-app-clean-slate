const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {

    args : [ "startingPointUrl" ],

    async getSingleProduct(productObject)  { // having a productObject as an argument is required...
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

        
        let { productId, set } = productObject
            url = getApiUrl(productId);


        try {
            
            let { data } = await axios({url});

            if(!data)   {
                throw Error("We had some problems getting the data.");
            }
            

            return {    
                data : {
                    imageUris : getImageUris(data.productId, data.imageCount),
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
                    productUrl : url,
                    productId,
                },
                statusOk : true,
                
            };
        } catch(err) {
            
            return {
                data : {
                    productId,
                    setName : set,
                    productUrl : url, 
                    imageUris : getImageUris(data.productId, data.imageCount),
                    message : err.message
                },
                statusOk : false,
            };
        }
    },

    async getAllProducts(startingPointUrl)  {
        // we can pretty much write anything here.

        let {data : htmlString} = await axios({
                url : startingPointUrl,
                method : "GET"
            }),
            productObjects = [],
            unscrapedData = [],
            $ = cheerio.load(htmlString),
            set = $("select#set").find("option[selected]").text();

        $(".priceGuideTable tbody tr").map((item, el) => {
            let href = $(el).find('.productDetail a').attr("href"),
                startingIndex = href.indexOf("product/") + "product/".length,
                productId = href.slice(startingIndex).split("/").shift();

            productObjects.push({productId, set});
        });

        productObjects = await Promise.all(productObjects.map(async productObject => {

            let result = await this.getSingleProduct(productObject);
        
            if(!result.statusOk) {
                unscrapedData.push(result.data);
            }

            return result.data;
            
        }))

        // we have to return an array of objects representing the product objects;
        return {
            productObjects,
            unscrapedData,
            productSet : set,
        }
    }

}