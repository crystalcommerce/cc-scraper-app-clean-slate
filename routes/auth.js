const express = require("express");
const router = express.Router();
const getControllers = require("../controllers");
const { httpResponseHandler } = require("../middlewares/");
const { userAuthHandler } = getControllers();
const { login, logout } = userAuthHandler();


module.exports = function() {
    
    router.post("/login", login, httpResponseHandler());

    router.get("/logout", logout, httpResponseHandler());

    return router;

};