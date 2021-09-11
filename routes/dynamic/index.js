const express = require("express");
const router = express.Router();


router.use(async function(req, res, next) {

    if(typeof req.foundApiRoute !== "undefined")  {
        
        router.use(req.foundApiRoute);
    }
    
    next();
});


module.exports = router;