const router = require("express").Router();
const { controllers : { user } } = require("../controllers");
const { filterObjectsByMethodName } = require("../utilities");
const { httpResponseHandler } = require("../middlewares");
const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...user.map(item => item()));

module.exports = function()   {

    /* +++++++ READ ++++++++ */
    // get all users
    router.get("/", getMiddleWaresByName("getAll"));

    // get single filtered
    router.get("/single?", getMiddleWaresByName("getOneByFilter"));

    // get all by filter
    router.get("/all?", getMiddleWaresByName("getAllFiltered")); // uses req.query for filtering data

    // get all managed users
    router.get("/managed-users", getMiddleWaresByName("getAllManagedUsers"));

    // get all managed users
    router.get("/managed-users/:id", getMiddleWaresByName("getMangedUserById"));

    // get by friendly url
    router.get("/url/:friendlyUrl", getMiddleWaresByName("getByUrl"));

    // get by id
    router.get("/:id", getMiddleWaresByName("getOneById"));



    /* +++++++ CREATE ++++++++ */
    // creating user
    router.post("/", getMiddleWaresByName("create"));

    //  create multiple users
    router.post("/multiple", getMiddleWaresByName("createMultiple"));



    /* +++++++ UPDATE ++++++++ */
    // update user data
    router.put("/:id", getMiddleWaresByName("update"));



    /* +++++++ DELETE ++++++++ */

    // delete multiple users data;
    router.delete("/delete-filtered?", getMiddleWaresByName("deleteMultiple"));

    // delete single user data
    router.delete("/:id", getMiddleWaresByName("deleteById"));



    return router;
}

