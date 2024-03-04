const router = require("express").Router();
const userController = require("../controllers/UserController");
router.get("/user", userController.getAllUsers);
router.get("/users",userController.getUsersFromDB)
module.exports = router;
