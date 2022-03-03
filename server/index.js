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
  let scale = req.query.scale
  var objKey = scale.split(' ')
  if (objKey.length > 1) {
    for (var i = 1; i < objKey.length; i++) {
      var capital = objKey[i].slice(0, 1)
      var rest = objKey[i].slice(1)
      capital = capital.toUpperCase();
      objKey[i] = `${capital}${rest}`
    }
    objKey = objKey.join('')
  } else {
    objKey = scale;
  }
  // console.log(Music.scales[key][objKey])
  res.json(Music.scales[key][objKey])

})

app.get('/strings', (req, res) => {
  let obj = {};
  obj.right = Music.strings;
  obj.left = Music.stringsLeft
  res.json(obj)
})

app.get('/degrees', (req, res) => {
  let obj = {};
  obj.solfege = Music.solfege;
  obj.scaleDegrees = Music.scaleDegrees
  obj.chordDegrees = Music.chordDegrees
  res.json(obj)
})

app.get('/choices', (req, res) => {
  res.json(Music.scaleChoices)
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