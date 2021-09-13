const jwt = require("jsonwebtoken");
const { usersDb } = require("../models/index");
const crypto = require("crypto")

module.exports = async function(req, res) {
    let { username, password } = req.body,
    foundUser = await usersDb.getOneByFilter({username : username.toLowerCase()});

    res.setHeader("Content-type", "application/json");
    if(!foundUser)  {
        res.status(401).send(JSON.stringify({statusOk : false, status : 401, message : `Access Denied : Username / Password Invalid`}));
    } else  {
        let passwordVerified = await usersDb.hashCompare(password, foundUser.password),
            {firstName, lastName, username, } = foundUser;
        if(passwordVerified)    {
            let timeCount = 60 * 60 * 24 * 7
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
                

            res.status(200).send(JSON.stringify({
                statusOk : true, 
                status : 200, 
                message : `You have successfully logged in.`, 
                authToken,
                fileToken,
                tokenExpiration : new Date().getTime() + (timeCount * 1000),
                userInfo : { firstName, lastName, username, permissionLevel : foundUser.permissionLevel }
            }, null, 4));
        } else  {
            res.status(401).send(JSON.stringify({
                statusOk : false, 
                status : 401, 
                message : `Access Denied : Username / Password Invalid`
            }, null, 4));
        }
    }
}