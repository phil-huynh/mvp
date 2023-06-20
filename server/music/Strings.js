const { chromaticScale, shiftNotes } = require('./Constants.js');

module.exports.stringGroups = (() => {
  const strings = {}, stringsLeft = {}

  chromaticScale.forEach((note) => {
    let firstOctave = shiftNotes(note, chromaticScale);
    let extraNotes = firstOctave.slice(0,6);

    strings[note] = [...firstOctave, ...extraNotes];
    stringsLeft[note] = [...firstOctave, ...extraNotes].reverse();
  })
  return {
    right: strings,
    left: stringsLeft
  };
})()

