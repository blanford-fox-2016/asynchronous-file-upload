var mongoose = require('mongoose');

// create a schema
var itemSchema = new mongoose.Schema({
    itemCode: String,
    name: String,
    description: String,
    price: Number,
    stock: Number

});

var Item = mongoose.model('items', itemSchema)

module.exports = Item