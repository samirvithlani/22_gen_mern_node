const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  qty: {
    type: Number,
  },
  availableColors: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model("Product", productSchema);
