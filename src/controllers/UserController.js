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
  //const flag = req.params.flag;
  var flag = req.query.flag;
  console.log("flag...",flag);
  if(flag === undefined){
    flag = true;
  }
  const users = await userSchema.find({status:flag});

  res.status(200).json({
    data: users,
    message: "All users fetched successfully",
  });
};

const addUser = async (req, res) => {
  // console.log("user data...",req.body)
  // res.json("ok")

  const objectToSubmit = {
    name: req.body.name.toLowerCase(),
    age: req.body.age,
    email: req.body.email.trim().toLowerCase(),
    password: req.body.password,
  };

  //const savedUser = await userSchema.create(req.body);
  const savedUser = await userSchema.create(objectToSubmit);
  //201 CREATED
  //200 OK
  res.status(201).json({
    data: savedUser,
    message: "User added successfully",
  });
};

const getuserById = async (req, res) => {
  const id = req.params.id;
  const user = await userSchema.findById(id);
  if (user) {
    res.status(200).json({
      data: user,
      message: "User fetched successfully",
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;

  const deletedUser = await userSchema.findByIdAndDelete(id);
  if (deletedUser) {
    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser,
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const updatedUser = await userSchema.findByIdAndUpdate(id, req.body);
  if (updatedUser) {
    res.status(200).json({
      message: "User updated successfully",
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

const softDeleteById = async (req, res) => {

  const id = req.params.id;
  const updatedUser = await userSchema.findByIdAndUpdate(id, {status:false});
  if(updatedUser){
    res.status(200).json({
      message: "User deleted successfully",
    });
  }else{
    res.status(404).json({
      message: "User not found",
    });
  }

}



module.exports = {
  getAllUsers,
  getUsersFromDB,
  addUser,
  getuserById,
  deleteUserById,
  updateUserById,
  softDeleteById
};
