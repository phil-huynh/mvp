const Constants = require('./Constants.js');
const ScaleChords = require('./BuildScaleChords.js');

const { tonicsToUse,  allScales } = Constants;
const { makeChordsFor7NoteScale } = ScaleChords;

const add7NoteScale = (name, degrees, makeChords) => {
  let objKey = name.split(' ');
  if (objKey.length > 1) {
    for (let i = 1; i < objKey.length; i++) {
      let capital = objKey[i].slice(0, 1);
      let rest = objKey[i].slice(1);
      capital = capital.toUpperCase();
      objKey[i] = `${capital}${rest}`;
    }
    objKey = objKey.join('');
  } else {
    objKey = name;
  }

  let checker = {};
  tonicsToUse.forEach((note) => { checker[note] = true });

  for (let tonic in allScales) {
    if (checker[tonic]) {
      allScales[tonic][objKey] = {};
      allScales[tonic][objKey].tonic = tonic;
      allScales[tonic][objKey].type = name;
      allScales[tonic][objKey].tonicScaleDegrees = allScales[tonic].scaleDegrees;
      allScales[tonic][objKey].scaleDegrees = [];
      allScales[tonic][objKey].notesToDegrees = {};
      allScales[tonic][objKey].scale = [];

      for (let key in allScales[tonic].scaleDegrees) {
        allScales[tonic][objKey].notesToDegrees[allScales[tonic].scaleDegrees[key]] = key;
      }
      for (let j = 0; j < degrees.length; j++) {
        let note = allScales[tonic].scaleDegrees[degrees[j]];
        allScales[tonic][objKey].scale.push(note);
        allScales[tonic][objKey].scaleDegrees.push(degrees[j]);
      }
      if (makeChords){
        allScales[tonic][objKey].chords = makeChordsFor7NoteScale(allScales[tonic][objKey].scale, tonic);
      }
    }
  };
};
module.exports.add7NoteScale = add7NoteScale