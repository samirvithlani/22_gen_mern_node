const userSchema = require("../models/UserModel");
const multer = require("multer");

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
  console.log("flag...", flag);
  if (flag === undefined) {
    flag = true;
  }
  const users = await userSchema.find({ status: flag }).populate("role");

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
    role: req.body.role,
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
  const updatedUser = await userSchema.findByIdAndUpdate(id, { status: false });
  if (updatedUser) {
    res.status(200).json({
      message: "User deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

//store

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
}).single("myFile");

const uploadFile = async (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) {
        res.status(500).json({
          message: "File upload failed",
        });
      } else {
        if (req.file !== undefined) {
          res.status(200).json({
            message: "File uploaded successfully",
            fileData: req.file.originalname,
            // fileData:req.file.originalname + "-" + Date.now() +
            // req.file.originalname.slice(req.file.originalname.lastIndexOf("."))
          });
        } else {
          res.status(500).json({
            message: "File upload failed",
            error:"file must be in jpeg or png format"
          });
        }
      }
    });
  } catch (err) {
    res.status(500).json({
      message: "File upload failed",
      error: err.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUsersFromDB,
  addUser,
  getuserById,
  deleteUserById,
  updateUserById,
  softDeleteById,
  uploadFile,
};
