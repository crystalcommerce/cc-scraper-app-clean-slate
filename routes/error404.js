const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    return function(req, res, next) {

        res.setHeader("Content-Type", "application/json");

        res.status(404).send(JSON.stringify({
            statusOk : false,
            status : 404,
            message : `We could not find the resource you're looking for`,
        }, null, 4));

    }
})

module.exports = router;