var mongoose = require('mongoose');

// create a schema
var customerSchema = new mongoose.Schema({
    name: String,
    memberId: String,
    address: String,
    zip: String,
    phone: String

});

var Customer = mongoose.model('customers', customerSchema)

module.exports = Customer