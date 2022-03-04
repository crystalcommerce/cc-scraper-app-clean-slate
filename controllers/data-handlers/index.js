// these controllers are responsible for getting the data from DB, then passing to the next handler.

const collection = require("./collection");
const image = require("./image");
const user = require("./user");
const scraperScript = require("./scraper-script");
const scraper = require("./scraper");
const generic = require("./generic");

module.exports = {
    collection,
    image,
    user,
    scraper,
    scraperScript,
    generic
}