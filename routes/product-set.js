const express = require("express");
const router = express.Router();
const productSetControllers = require("../controllers/generic.js");
const productSetsDb = require('../models/product-set');


module.exports = function(io)   {

    const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById, deleteAllFiltered } = productSetControllers(io, productSetsDb, "Product Set");


    // getAll Handler
    router.get("/product-sets/", getAll);


    // getOneByFilter hanlder
    router.get("/product-sets/single?", getOneByFilter);


    // getAllFiltered hanlder
    router.get("/product-sets/all?", getAllFiltered);


    // getOneById handler
    router.get("/product-sets/:id", getOneById);


    // create
    router.post("/product-sets/", create);


    // updateHandler
    router.put("/product-sets/:id", update);


    // deleteAllFilteredHandler
	router.delete("/product-sets/all?", deleteAllFiltered);


    // deleteHandler
    router.delete("/product-sets/:id", deleteById);


    return router;
    
}

