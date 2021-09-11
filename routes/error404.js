const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    if(req.url.indexOf("/api") === 0)   {
        res.setHeader("Content-Type", "application/json")
        .status(404)
        .send({
            statusOk : false,
            status : 404,
            message : "We couldn't find the resource you're looking for."
        })
    } else  {
        next();
    }
})

module.exports = router;