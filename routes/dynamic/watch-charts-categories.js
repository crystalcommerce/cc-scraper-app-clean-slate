const { Router } = require("express");
const router = Router();
const watchChartsCategoriessDb = require('../../models/dynamic/watch-charts-categories');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(watchChartsCategoriessDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/watch-charts-categories/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/watch-charts-categories/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/watch-charts-categories/all?", getMiddleWaresByName("getAllFiltered"));


	// getOneById handler
	router.get("/watch-charts-categories/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/watch-charts-categories/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/watch-charts-categories/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/watch-charts-categories/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/watch-charts-categories/:id", getMiddleWaresByName("deleteById"));


	return router;

}