const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage }).single('upload-pic')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.post('/upload', function(request, response) {
  upload(request, response, function(err) {
  if(err) {
    console.log('Error Occured');
    return;
  }
  console.log(request.file);
  response.end('Your File Uploaded');
  console.log('Photo Uploaded');
  })
});




const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
  if(err) console.log(err)
  console.log(`Server is running on ${hostname}:${port}!`);
})
