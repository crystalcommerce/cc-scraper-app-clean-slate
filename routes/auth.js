const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const {login, logout} = authController();

module.exports = function(...middleWares) {

    router.post("/login", login, ...middleWares);

    router.get("/logout", logout, ...middleWares);

    return router;

};