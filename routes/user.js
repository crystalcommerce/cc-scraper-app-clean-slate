const router = require("express").Router();
const usersController = require("../controllers/user");


module.exports = function(...middleWares)   {
    
    let { getAll, getOneById, getOneByFilter, getAllFiltered, getAllManagedUsers, getMangedUserById, getByUrl, create, update, deleteById, deleteMultiple, createMultiple, fileUpload } = usersController();


    /* +++++++ READ ++++++++ */
    // get all users
    router.get("/", getAll, ...middleWares);

    // get single filtered
    router.get("/single?", getOneByFilter, ...middleWares);

    // get all by filter
    router.get("/all?", getAllFiltered, ...middleWares); // uses req.query for filtering data

    // get all managed users
    router.get("/managed-users", getAllManagedUsers, ...middleWares);

    // get all managed users
    router.get("/managed-users/:id", getMangedUserById, ...middleWares);

    // get by friendly url
    router.get("/url/:friendlyUrl", getByUrl, ...middleWares);

    // get by id
    router.get("/:id", getOneById, ...middleWares);



    /* +++++++ CREATE ++++++++ */
    // creating user
    router.post("/", fileUpload.single("image"), create, ...middleWares);

    //  create multiple users
    router.post("/multiple", fileUpload.single("image"), createMultiple, ...middleWares);



    /* +++++++ UPDATE ++++++++ */
    // update user data
    router.put("/:id", update, ...middleWares);



    /* +++++++ DELETE ++++++++ */

    // delete multiple users data;
    router.delete("/delete-filtered?", deleteMultiple, ...middleWares);

    // delete single user data
    router.delete("/:id", deleteById, ...middleWares);



    return router;
}

