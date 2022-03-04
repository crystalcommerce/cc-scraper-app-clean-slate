const jwt = require("jsonwebtoken");
const { usersDb } = require("../models/index");
const crypto = require("crypto");
const { getRequestResult } = require("../utilities");

module.exports = function() {
    async function login(req, res, next) {

        try {
            let { username : enteredUsername, password : enteredPassword } = req.body,
                foundUser = await usersDb.getOneByFilter({username : enteredUsername.toLowerCase()});
    
            if(!foundUser)  {
                throw Error(`Access Denied : Username / Password Invalid`);
            }
    
            let passwordVerified = await usersDb.hashCompare(enteredPassword, foundUser.password),
                {firstName, lastName, username, } = foundUser;
            
            if(!passwordVerified)   {
                throw Error(`Access Denied : Username / Password Invalid`);
            }
    
            
    
            let timeCount = 60 * 60 * 24 * 7,
                authToken = jwt.sign({
                        userId : foundUser._id,
                        permissionLevel : foundUser.permissionLevel,
                    }, 
                    process.env.JWT_SECRET_KEY, 
                    { expiresIn: timeCount }
                ),
                fileToken = jwt.sign({
                        tempToken : crypto.randomBytes(4).toString("hex"),
                    },
                    process.env.JWT_SECRET_KEY, 
                    { expiresIn: timeCount }
                );
            
            req.requestResult = getRequestResult({
                    statusOk : true, 
                    status : 200, 
                    message : `You have successfully logged in.`, 
                    authToken,
                    fileToken,
                    tokenExpiration : new Date().getTime() + (timeCount * 1000),
                    userInfo : { firstName, lastName, username, permissionLevel : foundUser.permissionLevel }
                },
                200
            );


            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 404, message : err.message}, 404);
            next();
        }
    
    }

    async function logout(req, res, next)    {
        delete(req.session.user);
        next();
    }

    return {login, logout};

}


