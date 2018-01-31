const mongoose = require('mongoose');
const Product = require('../model/Product');
var productController = {};

productController.list = function(req, res) {
  let category = req.query.category;
  let filter = {};
  if (category) filter.category = category;
  Product.find(filter).exec(function (err, products) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      let productsSize = products.length;
      if (productsSize == 0) {
        res.statusCode = 404;
      }
      res.send({ products:products,
                 amount: productsSize})
    }
  });
};

module.exports = productController;
