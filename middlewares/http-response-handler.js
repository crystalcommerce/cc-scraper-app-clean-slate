const { getRequestResult } = require("../utilities")

module.exports = function()  {
    return function(req, res, next) {
        if(req.requestResult) {
            let { status, message, data } = req.requestResult,
                response = data ? getRequestResult(data, status) : getRequestResult({data, status, message}, status);
                
            res.setHeader("Content-Type", response.contentType).status(response.status).send(response.data);
        } else  {

            next();

        }
    }
}