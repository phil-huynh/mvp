const Constants = require('./Constants.js');

const { chromaticScale, shiftNotes } = Constants;

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
