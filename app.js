const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json()); //convert json data to js object

const PORT = 3000;

//db connections....

mongoose.connect("mongodb://127.0.0.1/mernstack_23").then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})



//localhost:3000/user

//import all routes
const userRoutes = require("./src/routes/UserRoutes")

//localhost:3000/user/user
//use all routes
app.use("/user", userRoutes)


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
