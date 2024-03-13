const router = require("express").Router();
const roleController = require("../controllers/RoleController");
router.post("/role", roleController.createRole);
router.get("/role", roleController.getAllRoles);
module.exports = router;
