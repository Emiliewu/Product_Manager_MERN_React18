const { Product } = require("../models/product.model");

module.exports = {
  index(req, res) {
    res.json({message: "Hello Product Manager"});
  },
  createProduct(req, res) {
    Product.create(req.body)
      .then(product => res.json(product))
      .catch(err => res.json(err));
  },
  findAllProduct(req, res) {
    Product.find({})
      .then(products => res.json(products))
      .catch(err => res.json({message: 'Cannot find all product', error: err}));
  },
  getProduct(req, res) {
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.json({message: 'Cannot find the product', error: err}));
  },
  updateProduct(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    .then(product => res.json(product))
    .catch(err => res.json({message: 'Cannot update the product', error: err}));
  },
  deleteProduct(req, res) {
    console.log(req.params.id);
    Product.findByIdAndDelete(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.json({message: 'Cannot delete the product', error: err}));
  }
};