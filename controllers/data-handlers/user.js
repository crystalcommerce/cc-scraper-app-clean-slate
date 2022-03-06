const { usersDb } = require("../../models");
const getFileUpload = require("../file-upload");

module.exports = function()   {
    // read data controllers
    async function getAll(req, res, next)  {

        try {
            let result = await usersDb.getAll();
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }

    }

    async function getOneById(req, res, next)  {

        try {
            let result = await usersDb.getById(req.params.id);
            if(!result) throw Error("User not found");
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
        
    }

    async function getByUrl(req, res, next) {
        
        try {
            let result = await usersDb.getOneByFilter({friendlyUrl : req.params.friendlyUrl});
            if(!result) throw Error("User not found");
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
    }

    async function getAllFiltered(req, res, next)  {
        
        try {
            let filter = req.query,
                result = await usersDb.getAllFilteredData(filter);
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
        
        
    }

    async function getOneByFilter(req, res, next)  {
        try {
            let filter = req.query,
                result = await usersDb.getOneByFilter(filter);
            if(!result) throw Error("User not found");
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }

    }


    async function getAllManagedUsers(req, res, next) {

        try {
            if(!req.authUserDetails) throw Error("You must be logged in");
            let { userId, permissionLevel } = req.authUserDetails,
                result = await usersDb.getAllFilteredData({permissionLevel : { "$lte": permissionLevel - 1 }});
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }

    }


    async function getMangedUserById(req, res, next)    {

        try {
            if(!req.authUserDetails) throw Error("You must be logged in");
            let { userId, permissionLevel } = req.authUserDetails,
                result = await usersDb.getById(req.params.id);

            if(!result) throw Error("User not found");
            if(result.permissionLevel >= permissionLevel)   {
                throw Error("Permission Denied : you are trying to access user's information with higher access level than that of yours.")
            }

            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }

    }


    // create data controllers
    async function create(req, res, next)   {

        try {
            let { userId, permissionLevel } = req.authUserDetails,
                file = req.file;

            if(permissionLevel < 4) {
                throw Error(`You are not permitted to create a new user.`);
            }

            req.body.permissionLevel = req.body.permissionLevel < permissionLevel ? req.body.permissionLevel : permissionLevel - 1;

            let result = await usersDb.create({...req.body, username : req.body.username.trim().toLowerCase()});

            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }
    }


    async function createMultiple(req, res, next)  {
        
        try {
            let { userId, permissionLevel } = req.authUserDetails,
                file = req.file;


            if(permissionLevel < 4) {
                throw Error(`You are not permitted to create a new user.`);
            }

            req.body.forEach(user => {
                user.permissionLevel = permissionLevel < 5 && permissionLevel > 1 ? permissionLevel - 1 : 1;
                user.username = user.username.trim().toLowerCase();
            });


            let result = await usersDb.createMultiple(req.body);

            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }

    }


    // update data controllers
    async function update(req, res, next)   {

        try {
            let { userId, permissionLevel } = req.authUserDetails,
                foundUser =  await usersDb.getById(req.params.id),
                updateResult;
            
            if(!foundUser)  {
                throw Error(`No user was found.`);
            }

            if(permissionLevel < 4 && userId !== foundUser._id.toString()) {
                throw Error(`You are not permitted to update this user's data.`);
            }

            if(foundUser.permissionLevel < permissionLevel && userId !== foundUser._id.toString()) {
                updateResult = await usersDb.update(req.params.id, req.body);
            } else if(userId === foundUser._id.toString()) {
                delete(req.body.permissionLevel);
                updateResult = await usersDb.update(req.params.id, req.body)
            }   else    {
                throw Error(`You are not permitted to update this user's data.`);
            } 

            req.requestResult = {data : updateResult, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }

    }


    // delete data controllers
    async function deleteById(req, res, next)   {

        try {
            let {userId, permissionLevel} = req.authUserDetails,
                foundUser =  await usersDb.getById(req.params.id),
                deleteResult;
            
            if(!foundUser)  {
                throw Error(`No user was found.`);
            }

            if(userId === foundUser._id.toString()) {
                throw Error(`Please ask an admin to delete your user data.`);
            }

            if(permissionLevel < 4) {
                throw Error(`You are not permitted to delete this user's data.`);
            }

            if(foundUser.permissionLevel < permissionLevel && userId !== foundUser._id) {
                deleteResult = await usersDb.delete(req.params.id);
            }

            req.requestResult = {data : deleteResult, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }

    }

    async function deleteMultiple(req, res, next)  {

        try {
            let {userId, permissionLevel} = req.authUserDetails,
                foundUser = await usersDb.getById(userId);
                filter = req.query,
                filteredResult = await usersDb.getAllFilteredData(filter),
                promises = [];

            if(!foundUser)  {
                throw Error(`You do not have the permission to delete any of the data.`);
            }

            if(permissionLevel < 2) {
                throw Error(`You are not permitted to delete this user's data.`);
            }

            for(let foundUser of filteredResult) {
                promises.push(async () => {
                    try {
                        if(!foundUser)  {
                            throw Error(`No user was found.`);
                        }
            
                        if(userId === foundUser._id.toString()) {
                            throw Error(`Please ask an admin to delete your user data.`);
                        }
            
            
                        if(foundUser.permissionLevel < permissionLevel) {
                            deleteResult = await usersDb.delete(foundUser._id.toString());
                        }

                        return {data : deleteResult, status : 200};
                    } catch(err) {
                        return {status : 403, message : err.message}
                    }
                });
            }
            

            let multipleDeleteResult = await Promise.all(promises.map(async item => await item()));
            

            req.requestResult = {data : multipleDeleteResult, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }
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

