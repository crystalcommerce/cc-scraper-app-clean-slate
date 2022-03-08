const getScraper = require("./standard-scraper");
const fileDownloader = require("./file-downloader");
const fileZipper = require("./file-zipper");
const csvDataWriter = require("./csv-data-writer");
const csvToObject = require("./csv-to-object")


module.exports = { getScraper, fileDownloader, fileZipper, csvDataWriter, csvToObject };



