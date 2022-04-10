const { Router } = require("express");
const router = Router();
const sampleCollectionsDb = require('../../models/dynamic/sample-collection');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(sampleCollectionsDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/sample-collection/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/sample-collection/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/sample-collection/all?", getMiddleWaresByName("getAllFiltered"));


	// getOneById handler
	router.get("/sample-collection/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/sample-collection/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/sample-collection/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/sample-collection/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/sample-collection/:id", getMiddleWaresByName("deleteById"));


	return router;

}