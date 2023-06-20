const { tonicsToUse, solfege, scaleDegrees, chordDegrees, chordDegreesUpper, intervals } = require('./Constants.js');
const { chordTypes } = require('./ChordTypes.js');
const { allScales }  = require('./AddScales.js');
const { stringGroups } = require('./Strings.js');
const { noteRefs } = require('./NoteRefs.js');
const ScaleChords = require('./BuildScaleChords.js');


const degrees = {
  solfege: solfege,
  scaleDegrees: scaleDegrees,
  chordDegrees: chordDegrees,
  chordDegreesUpper: chordDegreesUpper
};

const getScale = (key, scale) => {
  var scaleName = scale.split(' ')
  if (scaleName.length > 1) {
    for (let i = 1; i < scaleName.length; i++) {
      let capital = scaleName[i].slice(0, 1)
      let rest = scaleName[i].slice(1)
      capital = capital.toUpperCase();
      scaleName[i] = `${capital}${rest}`
    }
    scaleName = scaleName.join('')
  } else {
    scaleName = scale;
  }
  return allScales[key][scaleName]
}

const getChord = (root, type) => {
  const refs = noteRefs[root].degsToNotes;
  const degs = chordTypes[type].degrees;
  const chordNotes = [];

  degs.forEach((chordDegree) => { chordNotes.push(refs[chordDegree]); })

  return (
    {
      chordNotes: chordNotes,
      noteRefs: noteRefs[root],
      type: chordTypes[type],
    }
  )
}


module.exports = {
  scales: allScales,
  stringGroups: stringGroups,
  intervals: intervals,
  degrees: degrees,
  chordTypes: chordTypes,
  noteRefs: noteRefs,
  tonicsToUse:tonicsToUse,
  getScale: getScale,
  getChord: getChord,
}








