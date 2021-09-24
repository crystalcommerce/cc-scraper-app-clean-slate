const express = require("express");
const router = express.Router();
const tcgPlayerCardfightVanguardControllers = require("../../controllers/generic.js");
const tcgPlayerCardfightVanguardsDb = require('../../models/dynamic/tcg-player-cardfight-vanguard');


module.exports = function(io)   {

	const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById } = tcgPlayerCardfightVanguardControllers(io, tcgPlayerCardfightVanguardsDb, "Cardfight Vanguard");


// getAll Handler
	router.get("/tcg-player-cardfight-vanguard/", getAll);


// getOneByFilter hanlder
	router.get("/tcg-player-cardfight-vanguard/single?", getOneByFilter);


// getAllFiltered hanlder
	router.get("/tcg-player-cardfight-vanguard/all?", getAllFiltered);


// getOneById handler
	router.get("/tcg-player-cardfight-vanguard/:id", getOneById);


// create
	router.post("/tcg-player-cardfight-vanguard/", create);


// updateHandler
	router.put("/tcg-player-cardfight-vanguard/:id", update);


// deleteHandler
	router.delete("/tcg-player-cardfight-vanguard/:id", deleteById);


	return router;

}