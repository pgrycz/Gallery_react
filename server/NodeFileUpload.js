const express = require('express');
const axios = require('axios');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 9090;

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

let filesDir = path.resolve(__dirname, '..', 'files');
app.get('/files', (req, res) => {
  fs.readdir(filesDir, (err, files) => {
    res.send(JSON.stringify(files));
  })
});

app.get('/file/:fileName', (req, res) => {
  res.sendFile( filesDir + "/" + req.params.fileName );
});

const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/file', upload.single('file'), (req, res) => {
 console.log("/files " + res);
 res.header('Access-Control-Allow-Origin',null);
 res.send('OK');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
