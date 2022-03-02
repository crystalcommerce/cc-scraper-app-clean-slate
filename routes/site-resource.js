const express = require("express");
const router = express.Router();
const siteResourceControllers = require("../controllers/generic.js");
const siteResourcesDb = require('../models/site-resource');


module.exports = function()   {
    const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById } = siteResourceControllers(io, siteResourcesDb, "Site Resource");


    // getAll Handler
    router.get("/site-resources/", getAll);


    // getOneByFilter hanlder
    router.get("/site-resources/single?", getOneByFilter);


    // getAllFiltered hanlder
    router.get("/site-resources/all?", getAllFiltered);


    // getOneById handler
    router.get("/site-resources/:id", getOneById);


    // create
    router.post("/site-resources/", create);


    // updateHandler
    router.put("/site-resources/:id", update);


    // deleteHandler
    router.delete("/site-resources/:id", deleteById);


    return router;
}

