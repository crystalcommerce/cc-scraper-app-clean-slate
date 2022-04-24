const { Router } = require("express");
const router = Router();
const davesgardenPlantssDb = require('../../models/dynamic/davesgarden-plants');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(davesgardenPlantssDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/davesgarden-plants/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/davesgarden-plants/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/davesgarden-plants/all?", getMiddleWaresByName("getAllFiltered"));


	// getOneById handler
	router.get("/davesgarden-plants/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/davesgarden-plants/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/davesgarden-plants/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/davesgarden-plants/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/davesgarden-plants/:id", getMiddleWaresByName("deleteById"));


	return router;

}