const Constants = require('./Constants.js');
const ChordTypes = require('./ChordTypes.js');
const ScaleChords = require('./BuildScaleChords.js');
const AddScales = require('./AddScales.js');
const Strings = require('./Strings.js');
const NoteRefs = require('./NoteRefs.js');

const { tonicsToUse, solfege, scaleDegrees, chordDegrees, chordDegreesUpper, intervals } = Constants;
const { chordTypes } = ChordTypes;
const { allScales } = AddScales;
const { strings, stringsLeft } = Strings;
const { noteRefs } = NoteRefs;


module.exports.scales = allScales;
module.exports.strings = strings;
module.exports.stringsLeft = stringsLeft;
module.exports.intervals = intervals;
module.exports.solfege = solfege;
module.exports.scaleDegrees = scaleDegrees;
module.exports.chordDegrees = chordDegrees;
module.exports.chordDegreesUpper = chordDegreesUpper;
module.exports.chordTypes = chordTypes;
module.exports.noteRefs = noteRefs;
module.exports.tonicsToUse =tonicsToUse;








