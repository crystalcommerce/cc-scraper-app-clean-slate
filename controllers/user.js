const { usersDb } = require("../models/index");
const getFileUpload = require("./file-upload");

// read data controllers
function getAllUsers(req, res)  {

    res.setHeader("Content-type", "application/json");

    usersDb.getAll()
        .then(result => {
            // if(!result.length) throw Error("No user was found.");
            res.send(JSON.stringify(result, null, 4));
        })
        .catch(err => {
            let result = JSON.stringify({
                message : err.message,
                status : 404,
            }, null, 4);
            res.status(404).send(result);
        });
}

function getUserById(req, res)  {
    res.setHeader("Content-type", "application/json");

    usersDb.getById(req.params.id)
        .then(result => {
            if(!result) throw Error("User not found");
            res.send(JSON.stringify(result, null, 4));
        })
        .catch(err => {
            res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
        });
}

function getByUrl(req, res) {
    res.setHeader("Content-type", "application/json");

    usersDb.getOneByFilter({friendlyUrl : req.params.friendlyUrl})
        .then(result => {
            res.send(JSON.stringify(result, null, 4));
        })
        .catch(err => {
            res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
        });
}

function getAllFilteredUsers(req, res)  {
    let filter = req.query;
    res.setHeader("Content-type", "application/json");

    usersDb.getAllFilteredData(filter)
        .then(result => {
            res.send(JSON.stringify(result, null, 4));
        })
        .catch(err => {
            res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
        });
}

function getAllManagedUsers(req, res) {
    let {userId, permissionLevel} = req.authUserDetails;

    res.setHeader("Content-type", "application/json");
    usersDb.getAllFilteredData({permissionLevel : { "$lte": permissionLevel - 1 }})
        .then(result => {
            res.send(JSON.stringify(result, null, 4));
        })
        .catch(err => {
            res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
        });
}


// create data controllers
function createUser(req, res)   {
    res.setHeader("Content-type", "application/json");
    try{
        let {userId, permissionLevel} = req.authUserDetails,
        file = req.file;

        req.body.permissionLevel = permissionLevel < 5 && permissionLevel > 1 ? permissionLevel - 1 : 1;
        res.setHeader("Content-type", "application/json");

        

        usersDb.create(req.body).
            then(result => {
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
            });
    }
    catch(err)  {

    }
    

    
}


function createMultipleUsers(req, res)  {
    let {userId, permissionLevel} = req.authUserDetails;

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
async function updateUser(req, res)   {

    res.setHeader("Content-type", "application/json");

    let {userId, permissionLevel} = req.authUserDetails;

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
async function deleteUser(req, res)   {
    res.setHeader("Content-type", "application/json");
    
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

function deleteMultipleUsers(req, res)  {
    let filter = req.query;
    res.setHeader("Content-type", "application/json");

    usersDb.deleteMultiple(filter)
        .then(result => res.send(JSON.stringify(result)))
        .catch(err => res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4)));
}


// image upload
const fileUpload = getFileUpload(process.cwd(), "views", "uploads", "images", "users");

module.exports = { 
    getAllUsers,
    getUserById,
    getByUrl,
    getAllFilteredUsers,
    getAllManagedUsers,
    createUser,
    createMultipleUsers,
    updateUser,
    deleteUser,
    deleteMultipleUsers,
    fileUpload,
};