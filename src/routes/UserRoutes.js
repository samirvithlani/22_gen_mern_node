const router = require("express").Router();
const userController = require("../controllers/UserController");
router.get("/user", userController.getAllUsers);
router.get("/users",userController.getUsersFromDB)
router.post("/user",userController.addUser)
router.get("/user/:id",userController.getuserById)
module.exports = router;
