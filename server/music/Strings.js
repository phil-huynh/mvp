const Constants = require('./Constants.js');
const ChordTypes = require('./ChordTypes.js');
const ScaleChords = require('./BuildScaleChords.js');
const AddScales = require('./AddScales.js');

const { chromaticScale, shiftNotes } = Constants;
const {chordTypes} = ChordTypes;
const {allScales} = AddScales;

const stringGroups = (() => {
  let [stringGroups, strings, stringsLeft] = [{}, {}, {}];

  chromaticScale.forEach((note) => {
    let firstOctave = shiftNotes(note, chromaticScale);
    let extraNotes = firstOctave.slice(0,6);

    strings[note] = firstOctave.concat(extraNotes);
    stringsLeft[note] = firstOctave.concat(extraNotes).reverse();
  })
  stringGroups.right = strings;
  stringGroups.left = stringsLeft;
  return stringGroups;
})();

module.exports.stringGroups = stringGroups;
