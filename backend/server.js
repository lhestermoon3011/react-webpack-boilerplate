const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config.js");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    config.database,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database.");
  })
  .catch(err => {
    console.log("Can't connect to database.", err);
  });

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const productRoute = require("./productRoute");
app.use("/products", productRoute);

app.listen(port, err => {
  if (err) {
    console.log(err);
  }

  console.log(`Server is now open at port ${port}`);
});
