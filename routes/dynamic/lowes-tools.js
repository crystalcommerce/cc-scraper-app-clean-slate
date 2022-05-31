const { Router } = require("express");
const router = Router();
const lowesToolssDb = require('../../models/dynamic/lowes-tools');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(lowesToolssDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/lowes-tools/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/lowes-tools/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/lowes-tools/all?", getMiddleWaresByName("getAllFiltered"));


	// getPaginatedResults hanlder
	router.get("/lowes-tools/paginated?", getMiddleWaresByName("getPaginatedResults"));


	// getOneById handler
	router.get("/lowes-tools/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/lowes-tools/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/lowes-tools/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/lowes-tools/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/lowes-tools/:id", getMiddleWaresByName("deleteById"));


	return router;

}