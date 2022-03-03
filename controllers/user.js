const { usersDb } = require("../models/index");
const getFileUpload = require("./file-upload");

module.exports = function(req, res, next)   {
    // read data controllers
    async function getAll(req, res, next)  {

        req.requestResult = {
            contentType : "application/json",
            status : 200,
        };

        console.log("getALl");
        
        try {
            let result = await usersDb.getAll();
            req.requestResult.data = JSON.stringify(result, null, 4);
            next();
        } catch(err)    {
            req.requestResult.data = JSON.stringify({status : 404, message : err.message}, null, 4);

            next();
        }

    }

    async function getOneById(req, res, next)  {

        req.requestResult = {
            contentType : "application/json",
            status : 200,
        };

        console.log("getOneById");

        try {
            let result = await usersDb.getById(req.params.id);
            if(!result) throw Error("User not found");
            req.requestResult.data = JSON.stringify(result, null, 4);
            next();
        } catch(err)    {
            req.requestResult.data = JSON.stringify({status : 404, message : err.message}, null, 4);
            req.requestResult.status = 404;
            next();
        }
        
    }

    async function getByUrl(req, res, next) {

        req.requestResult = {
            contentType : "application/json",
            status : 200,
        };

        console.log("getByUrl");

        try {
            let result = await usersDb.getOneByFilter({friendlyUrl : req.params.friendlyUrl});
            if(!result) throw Error("User not found");
            req.requestResult.data = JSON.stringify(result, null, 4);
            next();
        } catch(err)    {
            req.requestResult.data = JSON.stringify({status : 404, message : err.message}, null, 4);
            req.requestResult.status = 404;
            next();
        }
        
    }

    async function getAllFiltered(req, res, next)  {

        let filter = req.query;

        req.requestResult = {
            contentType : "application/json",
            status : 200,
        };

        console.log("getByUrl");

        try {
            let result = await usersDb.getAllFilteredData(filter);
            req.requestResult.data = JSON.stringify(result, null, 4);
            next();
        } catch(err)    {
            req.requestResult.data = JSON.stringify({status : 404, message : err.message}, null, 4);
            req.requestResult.status = 404;
            next();
        }

        
        
    }

    async function getOneByFilter(req, res, next)  {

        let filter = req.query;
    
        req.requestResult = {
            contentType : "application/json",
            status : 200,
        };

        console.log("getOneByFilter");

        try {
            let result = await usersDb.getOneByFilter(filter);
            if(!result) throw Error("User not found");
            req.requestResult.data = JSON.stringify(result, null, 4);
            next();
        } catch(err)    {
            req.requestResult.data = JSON.stringify({status : 404, message : err.message}, null, 4);
            req.requestResult.status = 404;
            next();
        }


    }


    async function getAllManagedUsers(req, res, next) {
        
        req.requestResult = {
            contentType : "application/json",
            status : 200,
        };

        console.log("getOneByFilter");

        try {
            let { userId, permissionLevel } = req.authUserDetails,
                result = await usersDb.getAllFilteredData({permissionLevel : { "$lte": permissionLevel - 1 }});
            req.requestResult.data = JSON.stringify(result, null, 4);
            next();
        } catch(err)    {
            req.requestResult.data = JSON.stringify({status : 401, message : err.message}, null, 4);
            req.requestResult.status = 401;
            next();
        }

    }


    async function getMangedUserById(req, res, next)    {
        let { userId, permissionLevel } = req.authUserDetails;

        console.log("getMangedUserById");


        res.setHeader("Content-type", "application/json");
        usersDb.getById(req.params.id)
            .then(result => {
                if(!result) throw Error("User not found");
                if(result.permissionLevel >= permissionLevel)   {
                    throw Error("Permission Denied : you are trying to access user's information with higher access level than that of yours.")
                }
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
            });

    }


    // create data controllers
    async function create(req, res, next)   {

        console.log("create");
        

        res.setHeader("Content-type", "application/json");
        try{
            let { userId, permissionLevel } = req.authUserDetails,
                file = req.file;

            req.body.permissionLevel = req.body.permissionLevel < permissionLevel ? req.body.permissionLevel : permissionLevel - 1;
            res.setHeader("Content-type", "application/json");

            
            usersDb.create({...req.body, username : req.body.username.toLowerCase()}).
                then(result => {
                    res.send(JSON.stringify(result, null, 4));
                })
                .catch(err => {
                    res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
                });
        }
        catch(err)  {
            res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
        }
    }


    async function createMultiple(req, res, next)  {
        let {userId, permissionLevel} = req.authUserDetails;

        console.log("createMultiple");


        res.setHeader("Content-type", "application/json");

        req.body.forEach(user => {
            user.permissionLevel = permissionLevel < 5 && permissionLevel > 1 ? permissionLevel - 1 : 1;
        });

        usersDb.createMultiple(req.body).
            then(result => {
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
            })
    }


    // update data controllers
    async function update(req, res, next)   {

        res.setHeader("Content-type", "application/json");

        console.log("update");


        let { userId, permissionLevel } = req.authUserDetails;

        let foundUser =  await usersDb.getById(req.params.id);
        if(foundUser)   {
            // console.log({permissionLevel, userId, foundUserPermissionLevel : foundUser.permissionLevel});
            if(foundUser.permissionLevel < permissionLevel && userId !== foundUser._id) {
                usersDb.update(req.params.id, req.body).
                    then(result => {
                        res.send(JSON.stringify(result, null, 4));
                    })
                    .catch(err => {
                        res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
                    });
            } else if(userId === foundUser.id) {
                usersDb.update(req.params.id, req.body).
                    then(result => {
                        res.send(JSON.stringify(result, null, 4));
                    })
                    .catch(err => {
                        res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
                    });
            }   else    {
                res.status(404).send(JSON.stringify({status : 404, message : `You are not permitted to update this user's data.`}, null, 4));
            }   
        }   else    {
            res.status(404).send(JSON.stringify({status : 404, message : `No user was found.`}, null, 4));
        }
    }


    // delete data controllers
    async function deleteById(req, res, next)   {
        res.setHeader("Content-type", "application/json");

        console.log("deleteById");

        
        let {userId, permissionLevel} = req.authUserDetails,
            foundUser =  await usersDb.getById(req.params.id);

        if(foundUser)   {
            if(foundUser.permissionLevel < permissionLevel) {
                usersDb.delete(req.params.id)
                    .then(result => res.send(JSON.stringify(result)))
                    .catch(err => res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4)));
            } else  {
                res.status(404).send(JSON.stringify({status : 404, message : `You are not permitted to delete this user's data.`}, null, 4));
            }
        } else  {
            res.status(404).send(JSON.stringify({status : 404, message : `No user was found.`}, null, 4));
        }
    }

    function deleteMultiple(req, res, next)  {
        let filter = req.query;


        console.log("deleteMultiple");

        res.setHeader("Content-type", "application/json");

        usersDb.deleteMultiple(filter)
            .then(result => res.send(JSON.stringify(result, null, 4)))
            .catch(err => res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4)));
    }


    // image upload
    const fileUpload = getFileUpload(process.cwd(), "views", "uploads", "images", "users");

    return { 
        getAll, 
        getOneById, 
        getOneByFilter, 
        getAllFiltered, 
        getAllManagedUsers, 
        getMangedUserById,
        getByUrl, 
        create, 
        update, 
        deleteById,
        deleteMultiple,
        createMultiple,
        fileUpload,
    };
}

