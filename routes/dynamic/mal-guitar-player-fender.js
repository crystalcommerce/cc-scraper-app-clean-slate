const { Router } = require("express");
const router = Router();
const malGuitarPlayerFendersDb = require('../../models/dynamic/mal-guitar-player-fender');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(malGuitarPlayerFendersDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/mal-guitar-player-fender/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/mal-guitar-player-fender/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/mal-guitar-player-fender/all?", getMiddleWaresByName("getAllFiltered"));


	// getOneById handler
	router.get("/mal-guitar-player-fender/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/mal-guitar-player-fender/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/mal-guitar-player-fender/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/mal-guitar-player-fender/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/mal-guitar-player-fender/:id", getMiddleWaresByName("deleteById"));


	return router;

}