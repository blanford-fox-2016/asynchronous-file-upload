var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'public/images/' })


/* GET users listing. */
router.post('/', upload.any(), function(req, res, next) {
  res.send(req.files);
});

module.exports = router;
