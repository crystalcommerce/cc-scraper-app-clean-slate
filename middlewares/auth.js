const jwt = require("jsonwebtoken");
const {usersDb} = require("../models");

module.exports = async function(req, res, next)   {

    try {
        let authToken = req.header("x-auth-token");


        if(req.session.user)    {

            let {userId, permissionLevel} = req.session.user;
            req.user = req.session.user;
            req.authUserDetails = {userId, permissionLevel};

        } else if(!req.session.user && authToken)    {

            let {userId, permissionLevel} = jwt.verify(authToken, process.env.JWT_SECRET_KEY),
                foundUser = await usersDb.getById(userId);

            req.session.user = foundUser;
            req.user = req.session.user;

            req.authUserDetails = {userId, permissionLevel};

        } else  {
            throw Error("Please log in.")
        } 

        next();
        

    } catch(err)    {

        res.setHeader("Content-type", "application/json");
        res.status(401).send(JSON.stringify({message : `Access Denied : ${err.message}`, status : 401, statusOk : false,}, null, 4));
    }
    
}