const { Router } = require("express");
const router = Router();
const seedssDb = require('../../models/dynamic/seeds');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(seedssDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/seeds/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/seeds/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/seeds/all?", getMiddleWaresByName("getAllFiltered"));


	// getOneById handler
	router.get("/seeds/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/seeds/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/seeds/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/seeds/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/seeds/:id", getMiddleWaresByName("deleteById"));


	return router;

}