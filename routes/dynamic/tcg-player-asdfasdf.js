const express = require("express");
const router = express.Router();
const tcgPlayerAsdfasdfControllers = require("../../controllers/generic.js");
const tcgPlayerAsdfasdfsDb = require('../../models/dynamic/tcg-player-asdfasdf');


const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById } = tcgPlayerAsdfasdfControllers(tcgPlayerAsdfasdfsDb, "Asdfasdf");


// getAll Handler
router.get("/tcg-player-asdfasdf/", getAll);


// getOneByFilter hanlder
router.get("/tcg-player-asdfasdf/single?", getOneByFilter);


// getAllFiltered hanlder
router.get("/tcg-player-asdfasdf/all?", getAllFiltered);


// getOneById handler
router.get("/tcg-player-asdfasdf/:id", getOneById);


// create
router.post("/tcg-player-asdfasdf/", create);


// updateHandler
router.put("/tcg-player-asdfasdf/:id", update);


// deleteHandler
router.delete("/tcg-player-asdfasdf/:id", deleteById);


module.exports = router;