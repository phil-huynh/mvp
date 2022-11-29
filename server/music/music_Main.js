const Constants = require('./Constants.js');
const ChordTypes = require('./ChordTypes.js');
const ScaleChords = require('./BuildScaleChords.js');
const AddScales = require('./AddScales.js');
const Strings = require('./Strings.js');
const NoteRefs = require('./NoteRefs.js');

const { tonicsToUse, solfege, scaleDegrees, chordDegrees, chordDegreesUpper, intervals } = Constants;
const { chordTypes } = ChordTypes;
const { allScales } = AddScales;
const { stringGroups } = Strings;
const { noteRefs } = NoteRefs;


const degrees ={
  solfege: solfege,
  scaleDegrees: scaleDegrees,
  chordDegrees: chordDegrees,
  chordDegreesUpper: chordDegreesUpper
}


const getScale = (key, scale) => {
  let scaleName = scale.split(' ');
  if (scaleName.length > 1) {
    scaleName.forEach((word, i, scaleName) => {
      let capital = word.slice(0, 1);
      let rest = word.slice(1);
      capital = capital.toUpperCase();
      scaleName[i] = `${capital}${rest}`;
    })
    scaleName = scaleName.join('');
  } else {
    scaleName = scale;
  }
  return allScales[key][scaleName]
}


const getChord = (root, type) => {
  const obj = {};
  let refs = noteRefs[root].degsToNotes;
  let degs = chordTypes[type].degrees;
  let chordNotes = [];

  degs.forEach((chordDegree) => { chordNotes.push(refs[chordDegree]); })

  obj.chordNotes = chordNotes;
  obj.noteRefs = noteRefs[root];
  obj.type = chordTypes[type];
  return obj
}


module.exports.scales = allScales;
module.exports.stringGroups = stringGroups
module.exports.intervals = intervals;
module.exports.degrees = degrees;
module.exports.chordTypes = chordTypes;
module.exports.noteRefs = noteRefs;
module.exports.tonicsToUse =tonicsToUse;
module.exports.getScale = getScale
module.exports.getChord = getChord;








