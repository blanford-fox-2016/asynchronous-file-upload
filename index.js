const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
// var fileUpload = require('express-fileupload');

/* tambahan */

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(`test`);
    cb(null, __dirname + '/public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()) + '-' + file.originalname
  }
})

app.use(express.static(path.join(__dirname, 'public')))
// app.use(fileUpload())

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

/* upload */
// app.post('/upload', function(req, res) {
//     var sampleFile;
//
//     if (!req.files) {
//         res.send('No files were uploaded.');
//         return;
//     }
//
//     sampleFile = req.files.sampleFile;
//     console.log(sampleFile);
//     sampleFile.mv(path.join(__dirname, './public/' + sampleFile.name), function(err) {
//       console.log("masuk pindahan");
//         if (err) {
//             res.status(500).send(err);
//         }
//         else {
//             res.send('File uploaded!');
//         }
//     });
// });

var upload = multer({ storage: storage }).single('photo')
// var upload = multer({dest: 'public/uploads/'})

/* test upload */
// app.post('/', upload.any() ,(req, res) => {
//   console.log(req.files);
//   res.send(req.files)
// })

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
});

const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
  if(err) console.log(err)
  console.log(`Server is running on ${hostname}:${port}!`);
})
