const router = require("express").Router();
const { controllers : { collection } } = require("../controllers");
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...collection.map(item => item()));

module.exports = function()   {

    /* +++++++ READ ++++++++ */
    router.get("/", getMiddleWaresByName("getAll"));


    router.get("/:modelName", getMiddleWaresByName("getOneByName"));


    /* +++++++ Create a collection ++++++++ */
    router.post("/", getMiddleWaresByName("create"));


    /* +++++++ Update a collection ++++++++ */
    router.put("/:collectionName", getMiddleWaresByName("update"));


    /* +++++++ delete a collection ++++++++ */
    router.delete("/:collectionName", getMiddleWaresByName("deleteOne"));


    return router;
    
}       


