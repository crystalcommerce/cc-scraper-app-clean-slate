const express = require("express");
const router = express.Router();
const imagesControllers = require("../controllers/image.js");
const { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById, deleteAllFiltered } = imagesControllers();


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

    // delete multiple handler;
    router.delete("/delete-filtered?", deleteAllFiltered, ...middleWares);


    return router;
}

