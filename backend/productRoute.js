const express = require("express");
const router = express.Router();

let Products = require("./productModel");

router.post("/add", (req, res) => {
  let product = new Products(req.body);
  product
    .save()
    .then(result => {
      res.status(200).json({ result: "Product has been added!" });
    })
    .catch(err => {
      res.status(400).send("Unable to save product.", err);
    });
});

router.get("/", (req, res) => {
  Products.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  Products.findById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/update/:id", (req, res) => {
  Products.findById(req.params.id, (err, result) => {
    if (!result) {
      res.status(400).send("Data not found");
    } else {
      result.name = req.body.name;
      result.description = req.body.description;
      result.quantity = req.body.quantity;
      result.amount = req.body.amount;

      result
        .save()
        .then(result => {
          res.json("Product has been updated");
        })
        .catch(err => {
          res.status(400).send("Unable to update product.");
        });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Products.findOneAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.status(err).send("Unable to delete product.");
    } else {
      res.json("Product has been deleted.");
    }
  });
});

module.exports = router;
