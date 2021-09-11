const express = require("express");
const router = express.Router();
const { create, getOneByName, getAll, update, deleteOne } = require("../controllers/collection");


/* +++++++ READ ++++++++ */
router.get("/collections/", getAll);


router.get("/collections/:modelName", getOneByName);


/* +++++++ Create a collection ++++++++ */
router.post("/collections/", create);


/* +++++++ Update a collection ++++++++ */
router.put("/collections/:collectionName", update);


/* +++++++ delete a collection ++++++++ */
router.delete("/collections/:collectionName", deleteOne);


module.exports = router;