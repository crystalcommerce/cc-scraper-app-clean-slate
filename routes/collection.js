const express = require("express");
const router = express.Router();
const collectionsController = require("../controllers/collection")
const { create, getOneByName, getAll, update, deleteOne } = collectionsController();

module.exports = function(...middleWares)   {

    /* +++++++ READ ++++++++ */
    router.get("/", getAll, ...middleWares);


    router.get("/:modelName", getOneByName, ...middleWares);


    /* +++++++ Create a collection ++++++++ */
    router.post("/", create, ...middleWares);


    /* +++++++ Update a collection ++++++++ */
    router.put("/:collectionName", update, ...middleWares);


    /* +++++++ delete a collection ++++++++ */
    router.delete("/:collectionName", deleteOne, ...middleWares);


    return router;
    
}       


