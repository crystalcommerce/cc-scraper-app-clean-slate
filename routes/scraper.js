const express = require("express");
const router = express.Router();
const scrapersController = require("../controllers/scraper");
const { create, getOneById, getOneByFilter, getAll, update, deleteOne, updateScraperDetails, scraperRewrite, scraperRewriteAll, deleteSMR } = scrapersController();


module.exports = function(...middleWares)   {

    

    /* +++++++ READ ++++++++ */
    router.get("/", getAll, ...middleWares);

    router.get("/single?", getOneByFilter, ...middleWares);

    router.get("/:id", getOneById, ...middleWares);



    /* +++++++ Create a Scraper ++++++++ */
    router.post("/", create, ...middleWares);



    /* +++++++ Update a Scraper ++++++++ */
    // Note : this only allows updating the evaluator functions;
    router.put("/:id", update, ...middleWares);

    router.put("/data/:id", updateScraperDetails, ...middleWares);

    // scraperRewriteALl
    router.post("/rewriteAll", scraperRewriteAll, ...middleWares);

    // rewriteScraper
    router.post("/:id", scraperRewrite, ...middleWares);


    /* +++++++ delete a Scraper ++++++++ */

    router.delete("/smr/:id", deleteSMR, ...middleWares);

    router.delete("/:id", deleteOne, ...middleWares);



    return router;
}

