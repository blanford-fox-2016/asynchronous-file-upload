const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()) + '-' + file.originalname
  }
})

var upload = multer({ storage: storage }).single('photo')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`)
})

app.post('/api/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err) {
      console.log('Error Occured');
      return;
    }
    console.log(req.files);
    res.end('Your File Uploaded');
    console.log('Photo Uploaded');
  })
  console.log(`test`);
});



const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
  if(err) console.log(err)
  console.log(`Server is running on ${hostname}:${port}!`);
})
