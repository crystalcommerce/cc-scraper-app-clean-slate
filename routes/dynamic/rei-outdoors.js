const { Router } = require("express");
const router = Router();
const reiOutdoorssDb = require('../../models/dynamic/rei-outdoors');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(reiOutdoorssDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/rei-outdoors/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/rei-outdoors/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/rei-outdoors/all?", getMiddleWaresByName("getAllFiltered"));


	// getOneById handler
	router.get("/rei-outdoors/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/rei-outdoors/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/rei-outdoors/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/rei-outdoors/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/rei-outdoors/:id", getMiddleWaresByName("deleteById"));


	return router;

}