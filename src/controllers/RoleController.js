const roleSchema = require("../models/RoleModel");

const createRole = async (req, res) => {
  try {
    const savedRole = await roleSchema.create(req.body);
    res.status(201).json({
      message: "Role created successfully",
      data: savedRole,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getAllRoles = async (req, res) => {
  try {
    const roles = await roleSchema.find();
    if (roles && roles.length > 0) {
      res.status(200).json({
        message: "Roles retrieved successfully",
        data: roles,
      });
    } else {
      res.status(404).json({
        message: "No roles found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

module.exports = {
    createRole,
    getAllRoles
}
