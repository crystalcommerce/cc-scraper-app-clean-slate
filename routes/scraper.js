const router = require("express").Router();
const { controllers : { scraper } } = require("../controllers")();
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...scraper.map(item => item()));


module.exports = function()   {

    /* +++++++ READ ++++++++ */
    router.get("/", getMiddleWaresByName("getAll"));

    router.get("/single?", getMiddleWaresByName("getOneByFilter"));

    router.get("/:id", getMiddleWaresByName("getOneById"));



    /* +++++++ Create a Scraper ++++++++ */
    router.post("/", getMiddleWaresByName("create"));



    /* +++++++ Update a Scraper ++++++++ */
    // Note : this only allows updating the evaluator functions;
    router.put("/:id", getMiddleWaresByName("update"));

    router.put("/data/:id", getMiddleWaresByName("updateScraperDetails"));

    // scraperRewriteALl
    router.post("/rewriteAll", getMiddleWaresByName("scraperRewriteAll"));

    // rewriteScraper
    router.post("/:id", getMiddleWaresByName("scraperRewrite"));


    /* +++++++ delete a Scraper ++++++++ */

    router.delete("/smr/:id", getMiddleWaresByName("deleteSMR"));

    router.delete("/:id", getMiddleWaresByName("deleteOne"));

    return router;
}

