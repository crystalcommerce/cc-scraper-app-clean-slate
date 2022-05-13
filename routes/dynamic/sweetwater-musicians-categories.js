const { Router } = require("express");
const router = Router();
const sweetwaterMusiciansCategoriessDb = require('../../models/dynamic/sweetwater-musicians-categories');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(sweetwaterMusiciansCategoriessDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/sweetwater-musicians-categories/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/sweetwater-musicians-categories/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/sweetwater-musicians-categories/all?", getMiddleWaresByName("getAllFiltered"));


	// getPaginatedResults
	router.get("/sweetwater-musicians-categories/paginated?", getMiddleWaresByName("getPaginatedResults"));


	// getOneById handler
	router.get("/sweetwater-musicians-categories/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/sweetwater-musicians-categories/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/sweetwater-musicians-categories/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/sweetwater-musicians-categories/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/sweetwater-musicians-categories/:id", getMiddleWaresByName("deleteById"));


	return router;

}