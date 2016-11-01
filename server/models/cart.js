var mongoose = require('mongoose');

// create a schema
var cartSchema = new mongoose.Schema({
    memberId: String,
    total: Number,
    transactionDate: Date,
    itemList: []

});

var Cart = mongoose.model('carts', cartSchema)

module.exports = Cart