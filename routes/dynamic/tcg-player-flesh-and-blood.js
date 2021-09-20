const express = require("express");
const router = express.Router();
const tcgPlayerFleshAndBloodControllers = require("../../controllers/generic.js");
const tcgPlayerFleshAndBloodsDb = require('../../models/dynamic/tcg-player-flesh-and-blood');


module.exports = function(io)   {

	const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById } = tcgPlayerFleshAndBloodControllers(io, tcgPlayerFleshAndBloodsDb, "Flesh And Blood");


// getAll Handler
	router.get("/tcg-player-flesh-and-blood/", getAll);


// getOneByFilter hanlder
	router.get("/tcg-player-flesh-and-blood/single?", getOneByFilter);


// getAllFiltered hanlder
	router.get("/tcg-player-flesh-and-blood/all?", getAllFiltered);


// getOneById handler
	router.get("/tcg-player-flesh-and-blood/:id", getOneById);


// create
	router.post("/tcg-player-flesh-and-blood/", create);


// updateHandler
	router.put("/tcg-player-flesh-and-blood/:id", update);


// deleteHandler
	router.delete("/tcg-player-flesh-and-blood/:id", deleteById);


	return router;

}