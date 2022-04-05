const { Router } = require("express");
const router = Router();

// middlewares
const { userAuth } = require("../middlewares");


/**********************
 * 
 *  All Routes
 * 
***********************/

const authRouter = require("./auth");

// files-router
const filesRouter = require("./file");

// usersRouter
const usersRouter = require("./user");

// collections
const collectionsRouter = require("./collection");

// imagesRouter
const imagesRouter = require("./image");

// siteResources
const productSetMetaRouter = require("./product-set-meta");

// productSetRouter
const productSetRouter = require("./product-set");

// dynamicRouter
const dynamicRouter = require("./dynamic.js");

// scrapersRouter
const scrapersRouter = require("./scraper");

// executeScriptRouter
const scraperScriptExecutionRouter = require("./scraper-script-execution");


// public-csv-printer
const publicCsvPrinterRouter = require("./public-csv-printer");

// Error 404 Router
const error404 = require('./error404');



module.exports = function()   {
    
    // auth
    router.use(
        "/auth",
        authRouter()
    );

    // files
    router.use(
        "/cc-files",
        // userAuth,
        filesRouter(),
    );
    
    // users
    router.use(
        "/api/users",
        userAuth,
        usersRouter()
    );

    // collections
    router.use(
        "/api/collections",
        userAuth,
        collectionsRouter()
    );

    // site-resources
    router.use(
        "/api/product-set-meta",
        userAuth,
        productSetMetaRouter()
    );

    // images
    router.use(
        "/api/images",
        userAuth,
        imagesRouter()
    );

    // product-sets
    router.use(
        "/api/product-sets",
        userAuth,
        productSetRouter()
    );

    // scrapers
    router.use(
        "/api/scrapers",
        userAuth,
        scrapersRouter()
    );

    // script
    router.use(
        "/api/script/",
        // userAuth,
        scraperScriptExecutionRouter()
    );

    // dynamically created routes; dynamic reading of routes objects
    router.use(
        "/api",
        userAuth,
        dynamicRouter()
    );

    
    // temporary public csv printer;
    router.use("/api", publicCsvPrinterRouter());


    // 404 handler route
    router.use("/api", error404());


    return router;

}




