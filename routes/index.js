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
const filesRouter = require("./files");

// usersRouter
const usersRouter = require("./user");

// collections
const collectionsRouter = require("./collection");

// imagesRouter
const imagesRouter = require("./image");

// siteResources
const siteResourcesRouter = require("./site-resource");

// productSetRouter
const productSetRouter = require("./product-set");

// dynamicRouter
const dynamicRouter = require("./dynamic");

// scrapersRouter
const scrapersRouter = require("./scraper");

// executeScriptRouter
const executeScriptRouter = require("./execute-script");

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
        userAuth,
        filesRouter
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
        "/api/site-resources",
        userAuth,
        siteResourcesRouter()
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
        "/api/script",
        userAuth,
        executeScriptRouter()
    );

    // dynamically created routes; dynamic reading of routes objects
    router.use(
        "/api",
        userAuth,
        dynamicRouter()
    );


    // 404 handler route
    router.use("/api", error404());


    return router;

}




