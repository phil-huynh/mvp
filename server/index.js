const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = 3000
const db = require('../database')
const model = require('../database/model.js')
const Music = require('./music.js')

app.listen(port, () => {
  console.log(`Music App server listening on: ${port}`);
})

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(morgan("dev"));


app.get('/scales', (req, res) => {
  let key = req.query.key
    if(key.substring(1) === 'flat') {
      key = `${key[0]}\u266D`
    }
    if(key.substring(1) === 'sharp') {
      key = `${key[0]}\u266F`
    }
  let scale = req.query.scale
  res.json(Music.scales[key][scale])
})

app.get('/strings', (req, res) => {
  res.json(Music.strings)
})

app.post('/notes', (req, res) => {
  const { user, notes } = req.body
  model.addNotes(user, notes)
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
    console.log("🚀 ~ file: index.js ~ line 42 ~ app.post ~ err", err)
    })
})