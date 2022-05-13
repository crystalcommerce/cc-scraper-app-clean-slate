const { Router } = require("express");
const router = Router();
const sweetwaterMusicianssDb = require('../../models/dynamic/sweetwater-musicians');
const getControllers = require("../../controllers");
const { controllers : { dynamic } } = getControllers(sweetwaterMusicianssDb);
const { httpResponseHandler } = require("../../middlewares");
const { filterObjectsByMethodName } = require("../../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);


module.exports = function()   {


	// getAll Handler
	router.get("/sweetwater-musicians/", getMiddleWaresByName("getAll"));


	// getOneByFilter hanlder
	router.get("/sweetwater-musicians/single?", getMiddleWaresByName("getOneByFilter"));


	// getAllFiltered hanlder
	router.get("/sweetwater-musicians/all?", getMiddleWaresByName("getAllFiltered"));


	// getOneById handler
	router.get("/sweetwater-musicians/:id", getMiddleWaresByName("getOneById"));


	// create
	router.post("/sweetwater-musicians/", getMiddleWaresByName("create"));


	// updateHandler
	router.put("/sweetwater-musicians/:id", getMiddleWaresByName("update"));


	// deleteAllFilteredHandler
	router.delete("/sweetwater-musicians/all?", getMiddleWaresByName("deleteAllFiltered"));


	// deleteHandler
	router.delete("/sweetwater-musicians/:id", getMiddleWaresByName("deleteById"));


	return router;

}