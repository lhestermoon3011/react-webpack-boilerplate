const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Products = new Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String
    },
    quantity: {
      type: Number
    },
    price: {
      type: Number
    }
  },
  {
    collection: "products"
  }
);

module.exports = mongoose.model("products", Products);
