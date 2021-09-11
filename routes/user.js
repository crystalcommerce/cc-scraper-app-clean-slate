const router = require("express").Router();
const usersController = require("../controllers/user");

let { getAllUsers, getUserById, getByUrl, getAllFilteredUsers, getAllManagedUsers, createUser, createMultipleUsers, updateUser, deleteUser, deleteMultipleUsers, fileUpload} = usersController;


/* +++++++ READ ++++++++ */
// get all users
router.get("/users", getAllUsers);

// get all by filter
router.get("/users/search?", getAllFilteredUsers); // uses req.query for filtering data

// get all managed users
router.get("/users/managed-users", getAllManagedUsers);

// get by friendly url
router.get("/users/url/:friendlyUrl", getByUrl);

// get by id
router.get("/users/:id", getUserById);



/* +++++++ CREATE ++++++++ */
// creating user
router.post("/users/", fileUpload.single("image"), createUser);

//  create multiple users
router.post("/users/multiple", fileUpload.single("image"), createMultipleUsers);



/* +++++++ UPDATE ++++++++ */
// update user data
router.put("/users/:id", updateUser);



/* +++++++ DELETE ++++++++ */

// delete multiple users data;
router.delete("/users/delete-filtered?", deleteMultipleUsers);

// delete single user data
router.delete("/users/:id", deleteUser);



module.exports = router;