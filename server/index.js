const express = require('express');
const app = express();
const path = require('path');
const port = 3000
const morgan = require('morgan');
const Music = require('./music/music_Main.js')

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
      let capital = objKey[i].slice(0, 1)
      let rest = objKey[i].slice(1)
      capital = capital.toUpperCase();
      objKey[i] = `${capital}${rest}`
    }
    objKey = objKey.join('')
  } else {
    objKey = scale;
  }
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
  obj.chordDegreesUpper = Music.chordDegreesUpper
  res.json(obj)
})

app.get('/chord', (req, res) => {
  let obj = {};
  let root = req.query.root;
  let type = req.query.type;
  let noteRefs = Music.noteRefs[root].degsToNotes;
  let degs = Music.chordTypes[type].degrees;
  let chordNotes = []
  for(var i = 0; i < degs.length; i++) {
    let note = noteRefs[degs[i]];
    chordNotes.push(note)
  }
  obj.chordNotes = chordNotes
  obj.noteRefs = Music.noteRefs[root]
  obj.type = Music.chordTypes[type]
  res.json(obj)
})

app.get('/beginner', (req, res) => {
  console.log('beginner route in server')
})


app.get('/choices', (req, res) => {
  res.json(Music.scaleChoices)
})


