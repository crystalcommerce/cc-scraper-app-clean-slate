const router = require("express").Router();

// routers
const usersApiRouter = require("./user");
const collectionsApiRouter = require("./collection");
const siteResourcesApiRouter = require("./site-resource");
const imagesApiRouter = require("./image");
const scrapersApiRouter = require("./scraper");
const executeScriptRouter = require("./execute-script");
const dynamicApiRouter = require("./dynamic")
const productSetApiRouter = require("./product-set");
const error404 = require('./error404');

module.exports = function(io)   {

    // router middlewares
    router.use("/api", usersApiRouter(io));
    router.use("/api", collectionsApiRouter(io));
    router.use("/api", siteResourcesApiRouter(io));
    router.use("/api", imagesApiRouter(io));
    router.use("/api", scrapersApiRouter(io));
    router.use("/api", executeScriptRouter(io));
    router.use("/api", productSetApiRouter(io));


    // dynamically created routes; dynamic reading of routes objects
    router.use("/api", dynamicApiRouter(io));


    // 404 handler route
    router.use(error404);


    return router;
}




