const router = require("express").Router();
const usersController = require("../controllers/user");

let { getAll, getOneById, getOneByFilter, getAllFiltered, getAllManagedUsers, getMangedUserById, getByUrl, create, update, deleteById, deleteMultiple, createMultiple, fileUpload } = usersController;


/* +++++++ READ ++++++++ */
// get all users
router.get("/users", getAll);

// get single filtered
router.get("/users/single?", getOneByFilter);

// get all by filter
router.get("/users/all?", getAllFiltered); // uses req.query for filtering data

// get all managed users
router.get("/users/managed-users", getAllManagedUsers);

// get all managed users
router.get("/users/managed-users/:id", getMangedUserById);

// get by friendly url
router.get("/users/url/:friendlyUrl", getByUrl);

// get by id
router.get("/users/:id", getOneById);



/* +++++++ CREATE ++++++++ */
// creating user
router.post("/users/", fileUpload.single("image"), create);

//  create multiple users
router.post("/users/multiple", fileUpload.single("image"), createMultiple);



/* +++++++ UPDATE ++++++++ */
// update user data
router.put("/users/:id", update);



/* +++++++ DELETE ++++++++ */

// delete multiple users data;
router.delete("/users/delete-filtered?", deleteMultiple);

// delete single user data
router.delete("/users/:id", deleteById);



module.exports = router;