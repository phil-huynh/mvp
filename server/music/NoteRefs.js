const Constants = require('./Constants.js');
const AddScales = require('./AddScales.js');

const { tonicsToUse } = Constants;
const { allScales } = AddScales;

module.exports.noteRefs = (() => {
  let noteRefs = {};
  for (let tonic in allScales) {
    if (tonicsToUse.includes(tonic)) {
      noteRefs[tonic] = {};
      noteRefs[tonic].degsToNotes = allScales[tonic].scaleDegrees;
      noteRefs[tonic].notesToDegs = allScales[tonic].major.notesToDegrees;
    }
  }
  return noteRefs;
})();