const express = require("express");
const router = express.Router();
const collectionsController = require("../controllers/collection")


module.exports = function()   {

    const { create, getOneByName, getAll, update, deleteOne } = collectionsController();

    /* +++++++ READ ++++++++ */
    router.get("/collections/", getAll);


    router.get("/collections/:modelName", getOneByName);


    /* +++++++ Create a collection ++++++++ */
    router.post("/collections/", create);


    /* +++++++ Update a collection ++++++++ */
    router.put("/collections/:collectionName", update);


    /* +++++++ delete a collection ++++++++ */
    router.delete("/collections/:collectionName", deleteOne);


    return router;
    
}       


