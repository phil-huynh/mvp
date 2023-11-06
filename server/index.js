const express = require('express');
const app = express();
const path = require('path');
const port = 80;
// const morgan = require('morgan');
const Music = require('./music/music_Main.js');

app.listen(port, () => {
  console.log(`Music App server listening on: ${port}`);
})

app.use(express.json());
// app.use(morgan("dev"));
app.use('/', express.static(path.join(__dirname, '../dist')));



app.get('/scales', (req, res) => {
  let key = req.query.key
  let scale = req.query.scale
  let scaleObject = Music.getScale(key, scale)
  res.json(scaleObject)
})

app.get('/chord', (req, res) => {
  const root = req.query.root;
  const type = req.query.type;
  const chord = Music.getChord(root, type)
  res.json(chord);
})

app.get('/strings', (req, res) => res.json(Music.stringGroups))

app.get('/degrees', (req, res) =>  res.json(Music.degrees))





