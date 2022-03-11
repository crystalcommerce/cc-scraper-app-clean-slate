// these controllers are responsible for getting the data from DB, then passing to the next handler.

const collection = require("./collection");
const image = require("./image");
const user = require("./user");
const scraperScript = require("./scraper-script");
const productSet = require("./product-set");
const scraper = require("./scraper");
const dynamic = require("./dynamic");


module.exports = {
    collection,
    productSet,
    image,
    user,
    scraper,
    scraperScript,
    dynamic
}