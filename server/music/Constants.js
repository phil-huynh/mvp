const sharp = '#';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E';
const dim = '\u00B0';

const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const clockwise = [
  'G',
  'D',
  'A',
  'E',
  'B',
  `F${sharp}`,
  `C${sharp}`,
  `G${sharp}`,
  `D${sharp}`,
  `A${sharp}`,
  `E${sharp}`,
  `B${sharp}`,
  `F${dblSharp}`,
  `C${dblSharp}`,
  `G${dblSharp}`,
  `D${dblSharp}`,
  `A${dblSharp}`,
  `E${dblSharp}`,
  `B${dblSharp}`,
  `F${dblSharp}${sharp}`
];

const counterClockwise = [
  "F",
  `B${flat}`,
  `E${flat}`,
  `A${flat}`,
  `D${flat}`,
  `G${flat}`,
  `C${flat}`,
  `F${flat}`,
  `B${dblFlat}`,
  `E${dblFlat}`,
  `A${dblFlat}`,
  `D${dblFlat}`,
  `G${dblFlat}`,
  `C${dblFlat}`,
  `F${dblFlat}`,
  `B${dblFlat}${flat}`,
  `E${dblFlat}${flat}`,
  `A${dblFlat}${flat}`,
  `D${dblFlat}${flat}`
];

const chromaticScale = [
  ['C', `B${sharp}`, `D${dblFlat}`],
  [`C${sharp}`, `D${flat}`, `B${dblSharp}`],
  ["D", `C${dblSharp}`, `E${dblFlat}`],
  [`D${sharp}`, `E${flat}`, `F${dblFlat}`],
  ["E", `F${flat}`, `D${dblSharp}`],
  ["F", `E${sharp}`, `G${dblFlat}`],
  [`F${sharp}`, `G${flat}`, `E${dblSharp}`],
  ["G", `F${dblSharp}`, `A${dblFlat}`],
  [`G${sharp}`, `A${flat}`, `F${dblSharp}${sharp}`],
  ["A", `G${dblSharp}`, `B${dblFlat}`],
  [`A${sharp}`, `B${flat}`, `C${dblFlat}`],
  ["B", `C${flat}`, `A${dblSharp}`]
];

const chromaticScaleSimple = [
  "C",
  [`C${sharp}`, `D${flat}`],
  "D",
  [`D${sharp}`, `E${flat}`],
  "E",
  "F",
  [`F${sharp}`, `G${flat}`],
  "G",
  [`G${sharp}`, `A${flat}`],
  "A",
  [`A${sharp}`, `B${flat}`],
  "B"
];

const tonicsToUse = [
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B',
  `F${sharp}`,
  `C${sharp}`,
  `G${sharp}`,
  `D${sharp}`,
  `A${sharp}`,
  `B${flat}`,
  `E${flat}`,
  `A${flat}`,
  `D${flat}`,
  `G${flat}`,
  `C${flat}`,
  `F${flat}`,
  `E${sharp}`,
  `B${sharp}`
];

const solfege = {
  one: 'Do',
  sharpOne: 'Di',
  flatTwo: 'Ra',
  two: 'Re',
  sharpTwo: 'Ri',
  flatThree: 'Me',
  three: 'Mi',
  four: 'Fa',
  sharpFour: 'Fi',
  flatFive: 'Se',
  five: 'sol',
  sharpFive: 'Si',
  flatSix: 'Le',
  six: 'La',
  sharpSix: 'Li',
  flatSeven: 'Te',
  seven: 'Ti'
};

const scaleDegrees = {
  one: '1',
  sharpOne: `${sharp}1`,
  flatTwo: `${flat}2`,
  two: '2',
  sharpTwo: `${sharp}2`,
  flatThree: `${flat}3`,
  three: '3',
  four: '4',
  sharpFour: `${sharp}4`,
  flatFive: `${flat}5`,
  five: '5',
  sharpFive: `${sharp}5`,
  flatSix: `${flat}6`,
  six: '6',
  sharpSix: `${sharp}6`,
  dblFlatSeven: `${dblFlat}7`,
  flatSeven: `${flat}7`,
  seven: '7'
};

const chordDegrees = {
  one: 'R',
  sharpOne: `${sharp}1`,
  flatTwo: `${flat}2`,
  two: '2',
  sharpTwo: `${sharp}2`,
  flatThree: `${flat}3`,
  three: '3rd',
  four: '4',
  sharpFour: `${sharp}4`,
  flatFive: `${flat}5`,
  five: '5th',
  sharpFive: `${sharp}5`,
  flatSix: `${flat}6`,
  six: '6',
  sharpSix: `${sharp}6`,
  dblFlatSeven: `${dblFlat}7th`,
  flatSeven: `${flat}7`,
  seven: '7'
};

const chordDegreesUpper = {
  one: 'R',
  sharpOne: `${sharp}1`,
  flatTwo: `${flat}9`,
  two: '9',
  sharpTwo: `${sharp}9`,
  flatThree: `${flat}3`,
  three: '3rd',
  four: '11',
  sharpFour: `${sharp}11`,
  flatFive: `${flat}5`,
  five: '5th',
  sharpFive: `${sharp}5`,
  flatSix: `${flat}13`,
  six: '13',
  sharpSix: `${sharp}13`,
  dblFlatSeven: `${dblFlat}7th`,
  flatSeven: `${flat}7`,
  seven: '7'
};

const sharpNote = (note) => {
  if (note.length === 1 || note.slice(note.length - 2) === `${dblSharp}`) {
    note = `${note}${sharp}`;
  } else if (note[note.length - 1] === `${sharp}`) {
    note = note.replace(`${sharp}`, `${dblSharp}`);
  }
  if (note.slice(note.length - 2) === `${dblFlat}`) {
      note = note.substring(0, note.length - 2);
      note = `${note}${flat}`;
  } else if (note[note.length - 1] === `${flat}`) {
    note = note.substring(0, note.length - 1);
  }
  return note;
}

const flatNote = (note) => {
  if (note.length === 1 || note.slice(note.length - 2) === `${dblFlat}`) {
      note = `${note}${flat}`;
  } else if (note[note.length - 1] === `${flat}`) {
      note = note.replace(`${flat}`, `${dblFlat}`);
  }
  if (note.slice(note.length - 2) === `${dblSharp}`) {
      note = note.substring(0, note.length - 2);
      note = `${note}${sharp}`;
  } else if (note[note.length - 1] === `${sharp}`) {
      note = note.substring(0, note.length - 1);
  }
  return note;
}

const findEnharmonicEquivalent = (note) => {
  let [noteBase, distanceToMove, enharmonicEquivalent] = [note[0], 0, ''];
  let indexOfNoteBase = chromaticScaleSimple.indexOf(noteBase);
  for (var i = 1; i < note.length; i++) {
      if (note[i] === `${flat}`) {
          distanceToMove--;
      } else if (note[i] === `${sharp}`) {
          distanceToMove++;
      } else if ((note[i] + note[i + 1]) === `${dblSharp}`) {
          distanceToMove += 2;
      } else if ((note[i] + note[i + 1]) === `${dblFlat}`) {
          distanceToMove -= 2;
      } else if ((note[i - 1] + note[i]) === `${dblSharp}`) {
          continue;
      } else if ((note[i - 1] + note[i]) === `${dblFlat}`) {
          continue;
      }
  }
  var newIndex = indexOfNoteBase + distanceToMove;
  if (newIndex >= chromaticScaleSimple.length) {
      newIndex = indexOfNoteBase - (12 - distanceToMove);
  } else if (newIndex < 0) {
      newIndex = indexOfNoteBase + (distanceToMove + 12);
  }
  if (distanceToMove === 0) {
      enharmonicEquivalent = noteBase;
  } else if (note.length > 1 && (note[1] === `${sharp}` || note.includes(`${dblSharp}`))) {
      if (distanceToMove === 1 && chromaticScaleSimple[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScaleSimple[newIndex][1];
      } else if (chromaticScaleSimple[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScaleSimple[newIndex][0];
      } else {
          enharmonicEquivalent = chromaticScaleSimple[newIndex];
      }
  } else if (note.length > 1 && note[1] === `${flat}` || note.includes(`${dblFlat}`)) {
      if (distanceToMove === -1 && chromaticScaleSimple[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScaleSimple[newIndex][0];
      } else if (chromaticScaleSimple[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScaleSimple[newIndex][1];
      } else {
          enharmonicEquivalent = chromaticScaleSimple[newIndex];
      }
  }
  return enharmonicEquivalent;
}

const shiftNotes = (note, scale) => {
  if(!scale.includes(note)) {
    throw (`Note ${note} not in scale ${scale}!`)
  }
  let shiftedScale = [];
  if (scale[0] === note) {
    return scale;
  }
  for (var i = 0; i < scale.length; i++) {
    if (scale[i] === note) {
      var newStartIndex = i;
    } else if (Array.isArray(scale[i]) && scale[i].length >= 2) {
      for (var j = 0; j < scale[i].length; j++) {
        if (scale[i][j] === note) {
          newStartIndex = i;
        }
      }
    } else { continue; }
  }
  var back = scale.slice(0, newStartIndex);
  var front = scale.slice(newStartIndex);
  shiftedScale = front.concat(back);

  return shiftedScale;
}

const allScales = (() => {

  let allScales = {};

  allScales.C = {};
  allScales.C.tonic = "C";
  allScales.C.natScaleDegrees = whiteNotes;
  allScales.C.scaleDegrees = {};

  let sd = allScales.C.scaleDegrees;
  let scaleDegree = allScales.C.natScaleDegrees;

  sd.one = scaleDegree[0];
  sd.sharpOne = sharpNote(scaleDegree[0]);
  sd.flatTwo = flatNote(scaleDegree[1]);
  sd.two = scaleDegree[1];
  sd.sharpTwo = sharpNote(scaleDegree[1]);
  sd.flatThree = flatNote(scaleDegree[2]);
  sd.three = scaleDegree[2];
  sd.flatFour = flatNote(scaleDegree[3]);
  sd.four = scaleDegree[3];
  sd.sharpFour = sharpNote(scaleDegree[3]);
  sd.flatFive = flatNote(scaleDegree[4]);
  sd.five = scaleDegree[4];
  sd.sharpFive = sharpNote(scaleDegree[4]);
  sd.flatSix = flatNote(scaleDegree[5]);
  sd.six = scaleDegree[5];
  sd.sharpSix = sharpNote(scaleDegree[5]);
  sd.dblFlatSeven = flatNote(flatNote(scaleDegree[6]));
  sd.flatSeven = flatNote(scaleDegree[6]);
  sd.seven = scaleDegree[6];

  let clockwiseScale = whiteNotes.slice();
  for (var i = 0; i < clockwise.length; i++) {
    clockwiseScale = shiftNotes(clockwise[i], clockwiseScale);
    clockwiseScale[6] = sharpNote(clockwiseScale[6]);
    allScales[`${clockwise[i]}`] = {};
    allScales[`${clockwise[i]}`].tonic = `${clockwise[i]}`;
    allScales[`${clockwise[i]}`].scaleDegrees = {};
    allScales[`${clockwise[i]}`].natScaleDegrees = clockwiseScale;

    let currentSD = allScales[`${clockwise[i]}`].scaleDegrees
    let scaleDegree = allScales[`${clockwise[i]}`].natScaleDegrees;

    currentSD.one = scaleDegree[0];
    currentSD.sharpOne = sharpNote(scaleDegree[0]);
    currentSD.flatTwo = flatNote(scaleDegree[1]);
    currentSD.two = scaleDegree[1];
    currentSD.sharpTwo = sharpNote(scaleDegree[1]);
    currentSD.flatThree = flatNote(scaleDegree[2]);
    currentSD.three = scaleDegree[2];
    currentSD.flatFour = flatNote(scaleDegree[3])
    currentSD.four = scaleDegree[3];
    currentSD.sharpFour = sharpNote(scaleDegree[3]);
    currentSD.flatFive = flatNote(scaleDegree[4]);
    currentSD.five = scaleDegree[4];
    currentSD.sharpFive = sharpNote(scaleDegree[4]);
    currentSD.flatSix = flatNote(scaleDegree[5]);
    currentSD.six = scaleDegree[5];
    currentSD.sharpSix = sharpNote(scaleDegree[5]);
    currentSD.dblFlatSeven = flatNote(flatNote(scaleDegree[6]))
    currentSD.flatSeven = flatNote(scaleDegree[6]);
    currentSD.seven = scaleDegree[6];
  }

  let counterClockwiseScale = whiteNotes.slice();
  for (var i = 0; i < counterClockwise.length; i++) {
    counterClockwiseScale = shiftNotes(counterClockwise[i], counterClockwiseScale);
    counterClockwiseScale[3] = flatNote(counterClockwiseScale[3]);
    allScales[`${counterClockwise[i]}`] = {};
    allScales[`${counterClockwise[i]}`].tonic = `${counterClockwise[i]}`;
    allScales[`${counterClockwise[i]}`].scaleDegrees = {};
    allScales[`${counterClockwise[i]}`].natScaleDegrees = counterClockwiseScale;

    let currentSD = allScales[`${counterClockwise[i]}`].scaleDegrees
    let scaleDegree = allScales[`${counterClockwise[i]}`].natScaleDegrees;

    currentSD.one = scaleDegree[0];
    currentSD.sharpOne = sharpNote(scaleDegree[0]);
    currentSD.flatTwo = flatNote(scaleDegree[1]);
    currentSD.two = scaleDegree[1];
    currentSD.sharpTwo = sharpNote(scaleDegree[1]);
    currentSD.flatThree = flatNote(scaleDegree[2]);
    currentSD.three = scaleDegree[2];
    currentSD.flatFour = flatNote(scaleDegree[3])
    currentSD.four = scaleDegree[3];
    currentSD.sharpFour = sharpNote(scaleDegree[3]);
    currentSD.flatFive = flatNote(scaleDegree[4]);
    currentSD.five = scaleDegree[4];
    currentSD.sharpFive = sharpNote(scaleDegree[4]);
    currentSD.flatSix = flatNote(scaleDegree[5]);
    currentSD.six = scaleDegree[5];
    currentSD.sharpSix = sharpNote(scaleDegree[5]);
    currentSD.dblFlatSeven = flatNote(flatNote(scaleDegree[6]))
    currentSD.flatSeven = flatNote(scaleDegree[6]);
    currentSD.seven = scaleDegree[6];

  }
  return allScales;
})()


const intervals = (() => {
    let intervals = {};

    intervals.aug1 = {};
    intervals.min2 = {};
    intervals.maj2 = {};
    intervals.aug2 = {};
    intervals.min3 = {};
    intervals.maj3 = {};
    intervals.p4 = {};
    intervals.aug4 = {};
    intervals.dim5 = {};
    intervals.p5 = {};
    intervals.aug5 = {};
    intervals.min6 = {};
    intervals.maj6 = {};
    intervals.aug6 = {};
    intervals.min7 = {};
    intervals.maj7 = {};

    for (let key in allScales) {
    intervals.aug1[allScales[key].tonic] = allScales[key].scaleDegrees.sharpOne;
    intervals.min2[allScales[key].tonic] = allScales[key].scaleDegrees.flatTwo;
    intervals.maj2[allScales[key].tonic] = allScales[key].scaleDegrees.two;
    intervals.aug2[allScales[key].tonic] = allScales[key].scaleDegrees.sharpTwo;
    intervals.min3[allScales[key].tonic] = allScales[key].scaleDegrees.flatThree;
    intervals.maj3[allScales[key].tonic] = allScales[key].scaleDegrees.three;
    intervals.p4[allScales[key].tonic] = allScales[key].scaleDegrees.four;
    intervals.aug4[allScales[key].tonic] = allScales[key].scaleDegrees.sharpFour;
    intervals.dim5[allScales[key].tonic] = allScales[key].scaleDegrees.flatFive;
    intervals.p5[allScales[key].tonic] = allScales[key].scaleDegrees.five;
    intervals.aug5[allScales[key].tonic] = allScales[key].scaleDegrees.sharpFive;
    intervals.min6[allScales[key].tonic] = allScales[key].scaleDegrees.flatSix;
    intervals.maj6[allScales[key].tonic] = allScales[key].scaleDegrees.six;
    intervals.aug6[allScales[key].tonic] = allScales[key].scaleDegrees.sharpSix;
    intervals.min7[allScales[key].tonic] = allScales[key].scaleDegrees.flatSeven;
    intervals.maj7[allScales[key].tonic] = allScales[key].scaleDegrees.seven;
    }
    return intervals;
})()


module.exports.sharp = sharp;
module.exports.flat = flat;
module.exports.dblSharp = dblSharp;
module.exports.dblFlat = dblFlat;
module.exports.natural = natural;
module.exports.dim = dim;
module.exports.clockwise = clockwise;
module.exports.counterClockwise = counterClockwise;
module.exports.chromaticScale = chromaticScale;
module.exports.chromaticScaleSimple = chromaticScaleSimple;
module.exports.tonicsToUse = tonicsToUse;
module.exports.solfege = solfege;
module.exports.scaleDegrees = scaleDegrees;
module.exports.chordDegrees = chordDegrees;
module.exports.chordDegreesUpper = chordDegreesUpper;
module.exports.sharpNote = sharpNote;
module.exports.flatNote = flatNote;
module.exports.findEnharmonicEquivalent = findEnharmonicEquivalent;
module.exports.shiftNotes = shiftNotes;
module.exports.allScales = allScales;
module.exports.intervals = intervals;