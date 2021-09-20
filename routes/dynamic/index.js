const express = require("express");
const router = express.Router();

module.exports = function(io)   {
    router.use(async function(req, res, next) {

        if(typeof req.foundApiRoute !== "undefined")  {
            
            router.use(req.foundApiRoute(io));
        }
        
        next();
    });
    
    
    return router;
}


