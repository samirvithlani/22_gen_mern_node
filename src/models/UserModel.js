const mongoose = require("mongoose");
const Schema = mongoose.Schema; //class

const userSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  role:{
    type:Schema.Types.ObjectId,
    ref:"Role"
  }
});

// mongoose.model("User", userSchema); //users
// module.exports = userSchema;

module.exports = mongoose.model("User", userSchema); //users