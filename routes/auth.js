const router = require("express").Router();
const { controllers : { auth } } = require("../controllers")();
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...auth.map(item => item()));


module.exports = function() {
    
    router.post("/login", getMiddleWaresByName("login"));

    router.get("/logout", getMiddleWaresByName("logout"));

    return router;

};