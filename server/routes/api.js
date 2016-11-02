var express = require('express');
var router = express.Router();

var multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, `public/images`)
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage }).single('gambar')


router.post('/photos/upload', function (req, res) {
    // console.log(req.file)
    upload(req, res, function (err) {
        if (err) {
            return res.end('Error uploading file!', err)
        }
        else if (req.file.filename) {
            res.end(`${req.file.filename}`)
        }
        else {
            res.end('Error no file!', err)
        }

    })
})

module.exports = router;