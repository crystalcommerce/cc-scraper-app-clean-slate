const scriptObject = require("./flesh-and-blood-sample/sample-code");
const { getScraper } = require("../core");
const StandardScraperScript = getScraper(null);

(async () => {
    
    const siteResource = {
        siteName : "TCG Player",
        siteUrl : "https://www.tcg-player.com/"
    };

    const scrapersDbData = {
        productCategory : "Trading Card Game",
        productBrand : "Flesh and Blood",
        // productBrand : "Dragon Ball Super CCG",
        imageNameObject : {
            split : ["cardName", "cardNumber"],
            shared : ["rarity"],
            preferedExt : "jpg",
        },
        imagePropName : "productImage",
        csvExcludedProps : ["imageUris", "resourceUrl", "imagePaths"], // this could be saved in our 
    };
    const userInput = {
        startingPointUrl : "https://prices.tcgplayer.com/price-guide/flesh-and-blood-tcg/hero-deck-dorinthea",  
        // startingPointUrl : "https://prices.tcgplayer.com/price-guide/dragon-ball-super-ccg/art-series-kamigawa-neon-dynasty",  
        // startingPointUrl : "https://prices.tcgplayer.com/price-guide/dragon-ball-super-ccg/saiyan-showdown",  
    }
    const scraperOptions = {
        ...siteResource,
        ...scrapersDbData,
        ...userInput,
        scriptObject,
    }

    let scraperScript = new StandardScraperScript(scraperOptions);

    console.log(scraperScript);



    await scraperScript.executeScript(); // we get the data first,

    // await scraperScript.createProductsDirPath(); // order matters... we are setting the setname after scraping, so creating a path must come after

    // await scraperScript.downloadImagesByBulk();

    // await scraperScript.writeProductObjectsToCsv();

    // we can then log the productObjects (array) and the unscraped data (also an array);
    console.table(scraperScript.productObjects);
    // console.log(scraperScript.getDirNameArr());
    // console.table(scraperScript.unScrapedData);
    
})();





