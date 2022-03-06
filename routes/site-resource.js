const router = require("express").Router();
const { controllers : { siteResource } } = require("../controllers")();
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...siteResource.map(item => item()));

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


    return router;
}

