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


const simpleChrm = [
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

const addAccidental = (note, single, dble, opp, dblOpp) => {
  if (note.length === 1 || note.slice(note.length - 2) === dble) {
    return `${note}${single}`;
  }
  if (note[note.length - 1] === single) {
    return note.replace(single, dble);
  }
  if (note.slice(note.length - 2) === dblOpp) {
    return `${note.slice(0, note.length - 2)}${opp}`;
  }
  if (note[note.length - 1] === `${opp}`) {
    return  note.slice(0, note.length - 1);
  }
}

const sharpNote = (note) => addAccidental(note, sharp, dblSharp, flat, dblFlat)
const flatNote = (note) => addAccidental(note, flat, dblFlat, sharp, dblSharp)


const findEnharmonicEquivalent = (note) => {
  let [noteBase, distance] = [note[0], 0];
  let baseNoteIdx = simpleChrm.indexOf(noteBase);
  for (var i = 1; i < note.length; i++) {
    if (note[i] === `${flat}`) { distance--; }
    else if (note[i] === `${sharp}`) { distance++; }
    else if ((note[i] + note[i + 1]) === `${dblSharp}`) { distance += 2; }
    else if ((note[i] + note[i + 1]) === `${dblFlat}`) { distance -= 2; }
  }

  let newIndex = baseNoteIdx + distance;
  if (newIndex >= simpleChrm.length) { newIndex = baseNoteIdx - (12 - distance); }
  else if (newIndex < 0) { newIndex = baseNoteIdx + (distance + 12); }

  if (distance === 0) {
    return noteBase;
  }
  if (note.length > 1 && (note[1] === `${sharp}` || note.includes(`${dblSharp}`))) {
    if (distance === 1 && simpleChrm[newIndex].length === 2) {
      return simpleChrm[newIndex][1];
    }
    if (simpleChrm[newIndex].length === 2) {
      return simpleChrm[newIndex][0];
    }
    return simpleChrm[newIndex];
  }
  if (note.length > 1 && note[1] === `${flat}` || note.includes(`${dblFlat}`)) {
    if (distance === -1 && simpleChrm[newIndex].length === 2) {
      return simpleChrm[newIndex][0];
    }
    if (simpleChrm[newIndex].length === 2) {
      return simpleChrm[newIndex][1];
    }
    return simpleChrm[newIndex];
  }
}


const shiftNotes = (note, scale) => {
  let index = scale.indexOf(note)
  if (index === -1) {
    for (let i = 0; i < scale.length; i++) {
      if (Array.isArray(scale[i]) && scale[i].includes(note)) {
        index = i;
        break;
      }
    }
  }
  return [...scale.slice(index), ...scale.slice(0, index)]
}


const getScaleDegrees = (scaleDegree) => (
  {
    one: scaleDegree[0],
    sharpOne: sharpNote(scaleDegree[0]),
    flatTwo: flatNote(scaleDegree[1]),
    two: scaleDegree[1],
    sharpTwo: sharpNote(scaleDegree[1]),
    flatThree: flatNote(scaleDegree[2]),
    three: scaleDegree[2],
    flatFour: flatNote(scaleDegree[3]),
    four: scaleDegree[3],
    sharpFour: sharpNote(scaleDegree[3]),
    flatFive: flatNote(scaleDegree[4]),
    five: scaleDegree[4],
    sharpFive: sharpNote(scaleDegree[4]),
    flatSix: flatNote(scaleDegree[5]),
    six: scaleDegree[5],
    sharpSix: sharpNote(scaleDegree[5]),
    dblFlatSeven: flatNote(flatNote(scaleDegree[6])),
    flatSeven: flatNote(scaleDegree[6]),
    seven: scaleDegree[6]
  }
)


const allScales = (() => {

  const scales = {};
  const addTonic = (tonic, scale) => {
    scales[tonic] = {
      tonic: tonic,
      natScaleDegrees: scale,
      scaleDegrees: getScaleDegrees(scale)
    };
  }
  addTonic('C', whiteNotes)

  let clockwiseScale = whiteNotes.slice();
  for (var i = 0; i < clockwise.length; i++) {
    clockwiseScale = shiftNotes(clockwise[i], clockwiseScale);
    clockwiseScale[6] = sharpNote(clockwiseScale[6]);
    addTonic(clockwise[i], clockwiseScale)
  }

  let counterClockwiseScale = whiteNotes.slice();
  for (var i = 0; i < counterClockwise.length; i++) {
    counterClockwiseScale = shiftNotes(counterClockwise[i], counterClockwiseScale);
    counterClockwiseScale[3] = flatNote(counterClockwiseScale[3]);
    addTonic(counterClockwise[i], counterClockwiseScale)
  }
  return scales;
})()


const intervals = (() => {
  const i = {
    aug1: {},
    min2: {},
    maj2: {},
    aug2: {},
    min3: {},
    maj3: {},
    p4: {},
    aug4: {},
    dim5: {},
    p5: {},
    aug5: {},
    min6: {},
    maj6: {},
    aug6: {},
    dim7: {},
    min7: {},
    maj7: {}
  };


    for (let key in allScales) {
      let tonic = allScales[key].tonic
      let interval = allScales[key].scaleDegrees
      i.aug1[tonic] = interval.sharpOne;
      i.min2[tonic] = interval.flatTwo;
      i.maj2[tonic] = interval.two;
      i.aug2[tonic] = interval.sharpTwo;
      i.min3[tonic] = interval.flatThree;
      i.maj3[tonic] = interval.three;
      i.p4[tonic] = interval.four;
      i.aug4[tonic] = interval.sharpFour;
      i.dim5[tonic] = interval.flatFive;
      i.p5[tonic] = interval.five;
      i.aug5[tonic] = interval.sharpFive;
      i.min6[tonic] = interval.flatSix;
      i.maj6[tonic] = interval.six;
      i.aug6[tonic] = interval.sharpSix;
      i.dim7[tonic] = interval.dblFlatSeven;
      i.min7[tonic] = interval.flatSeven;
      i.maj7[tonic] = interval.seven;
    }
    return i;
})()


module.exports = {
  sharp: sharp,
  flat: flat,
  dblSharp: dblSharp,
  dblFlat: dblFlat,
  natural: natural,
  dim: dim,
  clockwise: clockwise,
  counterClockwise: counterClockwise,
  chromaticScale: chromaticScale,
  simpleChrm: simpleChrm,
  tonicsToUse: tonicsToUse,
  solfege: solfege,
  scaleDegrees: scaleDegrees,
  chordDegrees: chordDegrees,
  chordDegreesUpper: chordDegreesUpper,
  sharpNote: sharpNote,
  flatNote: flatNote,
  findEnharmonicEquivalent: findEnharmonicEquivalent,
  shiftNotes: shiftNotes,
  allScales: allScales,
  intervals: intervals,
}