// these controllers are responsible for getting the data from DB, then passing to the next handler.

const collection = require("./collection");
const image = require("./image");
const user = require("./user");
const scraperScript = require("./scraper-script");
const scraper = require("./scraper");
const dynamic = require("./dynamic");
const productSet = require("./product-set");
const siteResource = require("./site-resource");

module.exports = {
    collection,
    productSet,
    image,
    user,
    scraper,
    scraperScript,
    siteResource,
    dynamic
}