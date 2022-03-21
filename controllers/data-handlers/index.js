// these controllers are responsible for getting the data from DB, then passing to the next handler.

const auth = require("./auth");
const collection = require("./collection");
const image = require("./image");
const user = require("./user");
const scraperScript = require("./scraper-script-copy");
const scraperScriptExecution = require("./scraper-script-execution");
const productSet = require("./product-set");
const scraper = require("./scraper");
const file = require("./file");
const dynamic = require("./dynamic");


module.exports = {
    auth,
    collection,
    productSet,
    image,
    user,
    scraper,
    scraperScript,
    scraperScriptExecution,
    file,
    dynamic,
}