const express = require("express");
const router = express.Router();
const imagesControllers = require("../controllers/image.js");

module.exports = function()   {
    const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById } = imagesControllers();


    // getAll Handler
    router.get("/images/", getAll);


    // getOneByFilter hanlder
    router.get("/images/single?", getOneByFilter);


    // getAllFiltered hanlder
    router.get("/images/all?", getAllFiltered);


    // getOneById handler
    router.get("/images/:id", getOneById);


    // create
    router.post("/images/", create);


    // updateHandler
    router.put("/images/:id", update);


    // deleteHandler
    router.delete("/images/:id", deleteById);


    return router;
}

