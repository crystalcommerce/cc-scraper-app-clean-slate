const { Router } = require("express");
const router = Router();
const watchChartssDb = require('../../models/dynamic/watch-charts');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(watchChartssDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/watch-charts/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/watch-charts/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/watch-charts/all?", getMiddleWaresByName("getAllFiltered"));


	// getPaginatedResults
	router.get("/watch-charts/paginated?", getMiddleWaresByName("getPaginatedResults"));


	// getOneById handler
	router.get("/watch-charts/:id", getMiddleWaresByName("getOneById"));



	// create
	router.post("/watch-charts/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/watch-charts/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/watch-charts/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/watch-charts/:id", getMiddleWaresByName("deleteById"));


	return router;

}