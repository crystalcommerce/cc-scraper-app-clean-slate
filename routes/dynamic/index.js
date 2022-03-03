const express = require("express");
const router = express.Router();

module.exports = function(...middleWares)   {
    router.use(async function(req, res, next) {

        if(typeof req.foundApiRoute !== "undefined")  {
            
            router.use(req.foundApiRoute(...middleWares));
        }
        
        next();
    });
    
    
    return router;
}


