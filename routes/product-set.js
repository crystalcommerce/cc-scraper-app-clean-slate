const express = require("express");
const router = express.Router();
const productSetControllers = require("../controllers/generic.js");
const productSetsDb = require('../models/product-set');
const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById, deleteAllFiltered } = productSetControllers(productSetsDb, "Product Set");

module.exports = function(...middleWares)   {

    // getAll Handler
    router.get("/", getAll, ...middleWares);


    // getOneByFilter hanlder
    router.get("/single?", getOneByFilter, ...middleWares);


    // getAllFiltered hanlder
    router.get("/all?", getAllFiltered, ...middleWares);


    // getOneById handler
    router.get("/:id", getOneById, ...middleWares);


    // create
    router.post("/", create, ...middleWares);


    // updateHandler
    router.put("/:id", update, ...middleWares);


    // deleteAllFilteredHandler
	router.delete("/all?", deleteAllFiltered, ...middleWares);


    // deleteHandler
    router.delete("/:id", deleteById, ...middleWares);


    return router;
    
}

