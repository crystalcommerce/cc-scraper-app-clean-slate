const express = require("express");
const router = express.Router();
const { create, getOneById, getOneByFilter, getAll, update, deleteOne } = require("../controllers/scraper");


/* +++++++ READ ++++++++ */
router.get("/scrapers/", getAll);

router.get("/scrapers/single?", getOneByFilter);

router.get("/scrapers/:id", getOneById);



/* +++++++ Create a Scraper ++++++++ */
router.post("/scrapers/", create);



/* +++++++ Update a Scraper ++++++++ */
// Note : this only allows updating the evaluator functions;
router.put("/scrapers/:id", update);


/* +++++++ delete a Scraper ++++++++ */
router.delete("/scrapers/:id", deleteOne);


module.exports = router;