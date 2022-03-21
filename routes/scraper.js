const router = require("express").Router();
const { controllers : { scraper } } = require("../controllers")();
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...scraper.map(item => item()));


module.exports = function()   {

    /* +++++++ READ ++++++++ */
    router.get("/", getMiddleWaresByName("getAll"));

    router.get("/single?", getMiddleWaresByName("getOneByFilter"));


    // scraperRewriteALl
    router.get("/rewrite-all/", getMiddleWaresByName("scraperRewriteAll"));

    // rewriteScraper
    router.get("/rewrite/:id", getMiddleWaresByName("scraperRewrite"));

    router.get("/:id", getMiddleWaresByName("getOneById"));



    /* +++++++ Create a Scraper ++++++++ */
    router.post("/", getMiddleWaresByName("create"));



    /* +++++++ Update a Scraper ++++++++ */
    // update everything;
    router.put("/:id", getMiddleWaresByName("update"));


    /* +++++++ delete a Scraper ++++++++ */

    router.delete("/delete-script/:id", getMiddleWaresByName("deleteScript"));

    router.delete("/:id", getMiddleWaresByName("deleteScraperScript")); // delete all files and db data

    return router;
}

