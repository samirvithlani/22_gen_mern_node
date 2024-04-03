const router = require("express").Router();
const userController = require("../controllers/UserController");
//router.get("/user", userController.getAllUsers);
const authMiddleware = require("../middlewar/AuthMiddleware");
router.get("/user",authMiddleware.verifyToken,userController.getUsersFromDB)
router.post("/user",userController.addUser)
router.get("/user/:id",userController.getuserById)
router.delete("/user/:id",userController.deleteUserById)
router.put("/user/:id",userController.updateUserById)
router.put("/user/softdelete/:id",userController.softDeleteById)
router.post("/user/upload",userController.uploadFile)
router.post("/user/login",userController.loginUser)
module.exports = router;
