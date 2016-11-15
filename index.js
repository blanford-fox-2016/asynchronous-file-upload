const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/file_upload')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`)
})

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, `public/photos`)
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage }).single('photo')


app.post('/photos/upload', function (req, res) {
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


const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
  if(err) console.log(err)
  console.log(`Server is running on ${hostname}:${port}!`);
})
