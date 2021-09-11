const jwt = require("jsonwebtoken");

module.exports = async function(req, res, next)   {
    if(req.url.indexOf("/api") === 0)  {
        let authToken = req.header("x-auth-token");

        if(authToken)  {
            try {
            let {userId, permissionLevel} = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
                req.authUserDetails = {userId, permissionLevel};
                next();
            } catch (err) {
                res.setHeader("Content-type", "application/json");
                res.status(401).send(JSON.stringify({message : `Access Denied : ${err.message}`, status : 401, statusOk : false,}, null, 4));
            }
        } else  {
            res.setHeader("Content-type", "application/json");
            res.setHeader("loggedIn", false);
            res.status(401).send(JSON.stringify({message : `Access Denied : Please log in.`, status : 401, statusOk : false,}, null, 4));
        }
    } else  {
        next();
    }
}