module.exports = function(io)   {

    return function(req, res, next) {
        if(!req.io)  {
            req.io = io;
        }
        next();
    }
    
}