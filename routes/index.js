const router = require("express").Router();

// routers
const usersApiRouter = require("./user");
const collectionsApiRouter = require("./collection");
const siteResourcesApiRouter = require("./site-resource");
const imagesApiRouter = require("./image");
const scrapersApiRouter = require("./scraper");
const executeScriptRouter = require("./execute-script");
const dynamicApiRouter = require("./dynamic");
const productSetApiRouter = require("./product-set");
const error404 = require('./error404');


// router middlewares
router.use("/api", usersApiRouter);
router.use("/api", collectionsApiRouter);
router.use("/api", siteResourcesApiRouter);
router.use("/api", imagesApiRouter);
router.use("/api", scrapersApiRouter);
router.use("/api", executeScriptRouter);
router.use("/api", productSetApiRouter);


// dynamically created routes; dynamic reading of routes objects
router.use("/api", dynamicApiRouter);


// 404 handler route
router.use(error404);


module.exports = router;