var express = require("express");
var multer = require('multer');
var app = express();

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'public/uploads');
    },
    filename: function(req, file, callback) {
        console.log(file);
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({
    storage: storage
}).single('userPhoto');

app.use('/', express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end(`${req.file.filename}`);
    });
});

app.listen(3000, function() {
    console.log("Working on port 3000");
});
