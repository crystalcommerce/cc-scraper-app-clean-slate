const router = require("express").Router();
const { controllers : { image } } = require("../controllers");
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...image.map(item => item()));


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


    // deleteHandler
    router.delete("/:id", getMiddleWaresByName("deleteById"));

    // delete multiple handler;
    router.delete("/delete-filtered?", getMiddleWaresByName("deleteAllFiltered"));

    return router;

}

