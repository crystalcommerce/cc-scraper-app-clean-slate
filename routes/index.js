const router = require("express").Router();

// middlewares
const { userAuth, httpResponse } = require("../middlewares");





// /* files router */
// app.use("/cc-files", filesRouter);


// // protected static files
// // we're piping images and zipped files instead of serving static ones.
// // app.use("/data", express.static(path.join(__dirname, 'data')));


// /* auth router */
// app.use(authRouter);


// /* api route middlewares */
// app.use(router());



/**********************
 * 
 *  All Routes
 * 
***********************/

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

    // routes

    // files
    router.use(
        "/cc-files",
        filesRouter
    );
    
    // users
    router.use(
        "/api/users",
        usersRouter(
            httpResponse()
        )
    );

    // collections
    router.use(
        "/api/collections",
        collectionsRouter(
            httpResponse()
        )
    );

    // site-resources
    router.use(
        "/api/site-resources",
        siteResourcesRouter(
            httpResponse()
        )
    );

    // images
    router.use(
        "/api/images",
        imagesRouter(
            httpResponse()
        )
    );

    // scrapers
    router.use(
        "/api/scrapers",
        scrapersRouter(
            httpResponse()
        )
    );

    // script
    router.use(
        "/api/script",
        executeScriptRouter(
            httpResponse()
        )
    );

    // product-sets
    router.use(
        "/api/product-sets",
        productSetRouter(
            httpResponse()
        )
    );


    // dynamically created routes; dynamic reading of routes objects
    router.use(
        "/api",
        dynamicRouter(
            httpResponse()
        ),
        
    );


    // 404 handler route
    router.use("/api", error404);


    return router;
}




