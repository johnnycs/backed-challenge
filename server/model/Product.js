const mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
  category: String,
  name: String
});
module.exports = mongoose.model('Product', ProductSchema);
