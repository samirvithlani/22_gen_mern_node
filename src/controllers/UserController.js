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

const addUser = async (req, res) => {
  // console.log("user data...",req.body)
  // res.json("ok")

  const objectToSubmit = {
    name: req.body.name.toLowerCase(),
    age: req.body.age,
    email: req.body.email.trim().toLowerCase(),
    password: req.body.password,
  }

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

  const id = req.params.id
  const user  = await userSchema.findById(id)
  if(user){
    res.status(200).json({
      data: user,
      message: "User fetched successfully",
    })
  }
  else{
    res.status(404).json({
      message: "User not found",
    })
  }


}

module.exports = {
  getAllUsers,
  getUsersFromDB,
  addUser,
  getuserById
};
