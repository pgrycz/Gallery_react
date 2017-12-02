const express = require('express');
const axios = require('axios');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const persistence = require('node-persist');
const util = require('util');

const app = express();

persistence.init({
  logging: true
})

const PORT = process.env.PORT || 9090;

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

let filesDir = path.resolve(__dirname, '..', 'files');
app.get('/files', (req, res) => {
  res.send(persistence.values());
});

app.get('/file/:fileName', (req, res) => {
  res.sendFile( filesDir + "/" + req.params.fileName );
});

const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  }
});

const upload = multer({ storage });

app.post('/file', upload.single('file'), (req, res) => {
  persistence.setItemSync(req.file.filename, {
    "filename": req.file.filename,
    "description": req.body.description,
    "tags": req.body.tags != null ? req.body.tags.split(",") : []
  });
  res.header('Access-Control-Allow-Origin','*');
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
