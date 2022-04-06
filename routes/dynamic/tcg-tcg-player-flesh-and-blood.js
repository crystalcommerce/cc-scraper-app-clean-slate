const { Router } = require("express");
const router = Router();
const tcgTcgPlayerFleshAndBloodsDb = require('../../models/dynamic/tcg-tcg-player-flesh-and-blood');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(tcgTcgPlayerFleshAndBloodsDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/tcg-tcg-player-flesh-and-blood/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/tcg-tcg-player-flesh-and-blood/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/tcg-tcg-player-flesh-and-blood/all?", getMiddleWaresByName("getAllFiltered"));


	// getOneById handler
	router.get("/tcg-tcg-player-flesh-and-blood/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/tcg-tcg-player-flesh-and-blood/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/tcg-tcg-player-flesh-and-blood/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/tcg-tcg-player-flesh-and-blood/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/tcg-tcg-player-flesh-and-blood/:id", getMiddleWaresByName("deleteById"));


	return router;

}