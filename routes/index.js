const { Router } = require("express");
const router = Router();

// middlewares
const { userAuth, httpResponse } = require("../middlewares");


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

// siteResources
const siteResourcesRouter = require("./site-resource");

// imagesRouter
const imagesRouter = require("./image");

// scrapersRouter
const scrapersRouter = require("./scraper");

// executeScriptRouter
const executeScriptRouter = require("./execute-script");

// dynamicRouter
const dynamicRouter = require("./dynamic");

// productSetRouter
const productSetRouter = require("./product-set");

// Error 404 Router
const error404 = require('./error404');




module.exports = function()   {

    // files
    router.use(
        "/cc-files",
        filesRouter
    );
    
    // protected static files
    // we're piping images and zipped files instead of serving static ones.
    // router.use("/data", express.static(path.join(__dirname, 'data')));

    
    // auth
    router.use(
        "/auth",
        authRouter(
            httpResponse()
        )
    );
    
    // users
    router.use(
        "/api/users",
        userAuth,
        usersRouter(
            httpResponse()
        )
    );

    // collections
    router.use(
        "/api/collections",
        userAuth,
        collectionsRouter(
            httpResponse()
        )
    );

    // site-resources
    router.use(
        "/api/site-resources",
        userAuth,
        siteResourcesRouter(
            httpResponse()
        )
    );

    // images
    router.use(
        "/api/images",
        userAuth,
        imagesRouter(
            httpResponse()
        )
    );

    // scrapers
    router.use(
        "/api/scrapers",
        userAuth,
        scrapersRouter(
            httpResponse()
        )
    );

    // script
    router.use(
        "/api/script",
        userAuth,
        executeScriptRouter(
            httpResponse()
        )
    );

    // product-sets
    router.use(
        "/api/product-sets",
        userAuth,
        productSetRouter(
            httpResponse()
        )
    );


    // dynamically created routes; dynamic reading of routes objects
    router.use(
        "/api",
        userAuth,
        dynamicRouter(
            
            httpResponse(),
        ),
        
    );


    // 404 handler route
    router.use("/api", error404());


    return router;

}




