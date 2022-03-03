const express = require("express");
const router = express.Router();
const siteResourceControllers = require("../controllers/generic.js");
const siteResourcesDb = require('../models/site-resource');
const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById } = siteResourceControllers(siteResourcesDb, "Site Resource");

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


    // deleteHandler
    router.delete("/:id", deleteById, ...middleWares);


    return router;
}

