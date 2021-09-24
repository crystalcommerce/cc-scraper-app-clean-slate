const express = require("express");
const router = express.Router();
const scrapersController = require("../controllers/scraper");

module.exports = function(io)   {

    const { create, getOneById, getOneByFilter, getAll, update, deleteOne, updateScraperDetails } = scrapersController(io);

    /* +++++++ READ ++++++++ */
    router.get("/scrapers/", getAll);

    router.get("/scrapers/single?", getOneByFilter);

    router.get("/scrapers/:id", getOneById);



    /* +++++++ Create a Scraper ++++++++ */
    router.post("/scrapers/", create);



    /* +++++++ Update a Scraper ++++++++ */
    // Note : this only allows updating the evaluator functions;
    router.put("/scrapers/:id", update);

    router.put("/scrapers/data/:id", updateScraperDetails);


    /* +++++++ delete a Scraper ++++++++ */
    router.delete("/scrapers/:id", deleteOne);


    return router;
}

