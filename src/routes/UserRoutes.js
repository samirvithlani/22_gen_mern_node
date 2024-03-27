const router = require("express").Router();
const userController = require("../controllers/UserController");
//router.get("/user", userController.getAllUsers);
router.get("/user",userController.getUsersFromDB)
router.post("/user",userController.addUser)
router.get("/user/:id",userController.getuserById)
router.delete("/user/:id",userController.deleteUserById)
router.put("/user/:id",userController.updateUserById)
router.put("/user/softdelete/:id",userController.softDeleteById)
router.post("/user/upload",userController.uploadFile)
module.exports = router;
