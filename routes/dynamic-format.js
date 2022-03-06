const router = require("express").Router();
const { productSetsDb } = require("../models");
const getControllers = require("../controllers");
const { controllers : { dynamic } } = getControllers(productSetsDb);
const { httpResponseHandler } = require("../middlewares");
const { filterObjectsByMethodName } = require("../utilities");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);

module.exports = function()   {

    // getAll Handler
    router.get("/", getMiddleWaresByName("getAll"));


    // getOneByFilter hanlder
    router.get("/single?", getMiddleWaresByName("getOneByFilter"));


    // getAllFiltered hanlder
    router.get("/all?", getMiddleWaresByName("getAllFiltered"));


    // getOneById handler
    router.get("/:id", getMiddleWaresByName("getOneById"));


    // create
    router.post("/", getMiddleWaresByName("create"));


    // updateHandler
    router.put("/:id", getMiddleWaresByName("update"));


    // deleteAllFilteredHandler
	router.delete("/all?", getMiddleWaresByName("deleteAllFiltered"));


    // deleteHandler
    router.delete("/:id", getMiddleWaresByName("deleteById"));


    return router;
    
}

