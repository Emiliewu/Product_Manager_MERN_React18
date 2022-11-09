const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {type: String},
  price: {type: Number},
  //price: {type: mongoose.Decimal128 },
  // price: {type: mongoose.Schema.Types.Decimal},
  description: {type: String}
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);