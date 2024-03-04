const userSchema = require("../models/UserModel");

const getAllUsers = (req, res) => {
  //db users...
  // var users = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //   },
  //   {
  //     id: 2,
  //     name: "Amit",
  //   },
  // ];

  res.status(200).json({
    data: users,
    message: "All users fetched successfully",
  });
};

const getUsersFromDB = async (req, res) => {
  const users = await userSchema.find();

  res.status(200).json({
    data: users,
    message: "All users fetched successfully",
  });
};

module.exports = {
  getAllUsers,
  getUsersFromDB,
};
