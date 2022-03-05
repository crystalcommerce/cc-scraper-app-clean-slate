const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const {login, logout} = authController();

module.exports = function() {

    router.post("/login", login);

    router.get("/logout", logout);

    return router;

};