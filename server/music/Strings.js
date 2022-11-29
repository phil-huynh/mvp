const Constants = require('./Constants.js');
const ChordTypes = require('./ChordTypes.js');
const ScaleChords = require('./BuildScaleChords.js');
const AddScales = require('./AddScales.js');

const { chromaticScale, shiftNotes } = Constants;

const {chordTypes} = ChordTypes;
const {allScales} = AddScales;


const stringGroups = (() => {
  let [stringGroups, strings, stringsLeft] = [{}, {}, {}];

  for (var i = 0; i < chromaticScale.length; i++) {
    let firstOctave = shiftNotes(chromaticScale[i], chromaticScale);
    let extraNotes = firstOctave.slice(0,6);

    strings[chromaticScale[i]] = firstOctave.concat(extraNotes);
    stringsLeft[chromaticScale[i]] = firstOctave.concat(extraNotes).reverse();
  }
  stringGroups.strings = strings;
  stringGroups.stringsLeft = stringsLeft;
  return stringGroups;
})();

const { strings, stringsLeft } = stringGroups;

module.exports.strings = strings;
module.exports.stringsLeft = stringsLeft;