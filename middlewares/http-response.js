module.exports = function(req, res, next)  {
    return function(req, res, next) {
        if(req.requestResult) {
            let { contentType, status, data } = req.requestResult;
            console.log("This is coming from the middleware... httpResponse handler")
            res.setHeader("Content-Type", contentType).status(status).send(data);
        } else  {

            next();

        }
    }

}