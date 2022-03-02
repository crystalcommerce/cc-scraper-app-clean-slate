module.exports = function(socketInstance)   {

    return function(req, res, next) {
        if(!req.socketInstance)  {
            req.socketInstance = socketInstance;
        }
        next();
    }
    
}