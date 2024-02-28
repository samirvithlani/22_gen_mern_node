const express = require("express");
const app = express();

const PORT = 3000;

//localhost:3000/user

app.get("/user", (req, res) => {
  //console.log("user api called....")
  //res.send("user api called...")
  res.status(200).json({
    message: "user api called...",
  });
});

const users = [
  {
    id: 1,
    name: "ram",
    age: 23,
    isActive: true,
  },
  {
    id: 2,
    name: "amit",
    age: 24,
    isActive: true,
  },
];

app.get("/users", (req, res) => {
  res.status(200).json({
    data: users,
    message: "users fetch successfully...",
  });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  console.log("id is ", id);
  const user = users.find((user) => user.id == id);
  console.log("user is ", user);
  if (user == undefined) {
    res.status(404).json({
      message: "user not found...",
    });
  } else {
    res.status(200).json({
      data: user,
      message: "user fetch successfully...",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
