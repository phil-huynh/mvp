const { tonicsToUse } = require('./Constants.js');
const { allScales } = require('./AddScales.js');

module.exports.noteRefs = (() => {
  const noteRefs = {};
  for (let tonic in allScales) {
    if (tonicsToUse.includes(tonic)) {
      noteRefs[tonic] = {
        degsToNotes: allScales[tonic].scaleDegrees,
        notesToDegs: allScales[tonic].major.notesToDegrees,
      };
    }
  }
  return noteRefs;
})();