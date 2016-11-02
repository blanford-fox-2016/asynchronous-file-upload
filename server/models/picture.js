var mongoose = require('mongoose');

// create a schema
var pictureSchema = new mongoose.Schema({
    picture: Image
});

var Picture = mongoose.model('customers', pictureSchema)

module.exports = Picture