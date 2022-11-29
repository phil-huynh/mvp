const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const morgan = require('morgan');
const Music = require('./music/music_Main.js');

app.listen(port, () => {
  console.log(`Music App server listening on: ${port}`);
})

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(morgan("dev"));



app.get('/scales', (req, res) => {
  const key = req.query.key;
  const scaleName = req.query.scale;
  const scale = Music.getScale(key, scaleName)
  res.json(scale);
})

app.get('/chord', (req, res) => {
  const root = req.query.root;
  const type = req.query.type;
  const chord = Music.getChord(root, type)
  res.json(chord);
})

app.get('/strings', (req, res) => { res.json(Music.stringGroups); })

app.get('/degrees', (req, res) => { res.json(Music.degrees); })





