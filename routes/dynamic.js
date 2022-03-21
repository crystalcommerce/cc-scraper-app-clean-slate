const express = require("express");
const router = express.Router();

module.exports = function()   {
    router.use(async function(req, res, next) {

        if(typeof req.dynamicRouteHandler !== "undefined")  {

            // we capture the previous stack here.
            req.previousStack = [...router.stack]; // this has to be a clone of the stack array
            // we set the dynamic router here.
            req.dynamicRouter = router;
            
            router.use(req.dynamicRouteHandler());

        }
        
        next();
    });
    
    
    return router;
}