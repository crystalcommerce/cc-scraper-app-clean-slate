const router = require("express").Router();
const { controllers : { file } } = require("../controllers")();
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler, ...file.map(item => item()));


module.exports = function() {

    router.get("/image?", getMiddleWaresByName("showJpegImage"));

    // future works, could include reading entire html pages, css, scripts, images and internal links from that html page.


    return router;
}