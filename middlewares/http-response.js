module.exports = function(req, res, next)  {
    return function(req, res, next) {

        if(req.requestResult) {
            let { contentType, status, data } = req.requestResult;
            
            console.log("this is the http response module...")

            res.setHeader("Content-Type", contentType).status(status).send(data);
        } else  {

            next();

        }
    }

}