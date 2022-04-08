const sharp = '#';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E'
const dim = '\u00B0'

const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const clockwise = ['G', 'D', 'A', 'E', 'B', `F${sharp}`, `C${sharp}`, `G${sharp}`, `D${sharp}`, `A${sharp}`, `E${sharp}`, `B${sharp}`, `F${dblSharp}`, `C${dblSharp}`, `G${dblSharp}`, `D${dblSharp}`, `A${dblSharp}`, `E${dblSharp}`, `B${dblSharp}`, `F${dblSharp}${sharp}`];

const counterClockwise = ["F", `B${flat}`, `E${flat}`, `A${flat}`, `D${flat}`, `G${flat}`, `C${flat}`, `F${flat}`, `B${dblFlat}`, `E${dblFlat}`, `A${dblFlat}`, `D${dblFlat}`, `G${dblFlat}`, `C${dblFlat}`, `F${dblFlat}`, `B${dblFlat}${flat}`, `E${dblFlat}${flat}`, `A${dblFlat}${flat}`, `D${dblFlat}${flat}`]

const chromaticScale = [['C', `B${sharp}`, `D${dblFlat}`], [`C${sharp}`, `D${flat}`, `B${dblSharp}`], ["D", `C${dblSharp}`, `E${dblFlat}`], [`D${sharp}`, `E${flat}`, `F${dblFlat}`], ["E", `F${flat}`, `D${dblSharp}`], ["F", `E${sharp}`, `G${dblFlat}`], [`F${sharp}`, `G${flat}`, `E${dblSharp}`], ["G", `F${dblSharp}`, `A${dblFlat}`], [`G${sharp}`, `A${flat}`, `F${dblSharp}${sharp}`], ["A", `G${dblSharp}`, `B${dblFlat}`], [`A${sharp}`, `B${flat}`, `C${dblFlat}`], ["B", `C${flat}`, `A${dblSharp}`]];

const chromaticScaleSimple = ["C", [`C${sharp}`, `D${flat}`], "D", [`D${sharp}`, `E${flat}`], "E", "F", [`F${sharp}`, `G${flat}`], "G", [`G${sharp}`, `A${flat}`], "A", [`A${sharp}`, `B${flat}`], "B"];

const tonicsToUse = ['C', 'D', 'E', 'F', 'G', 'A', 'B', `F${sharp}`, `C${sharp}`, `G${sharp}`, `D${sharp}`, `A${sharp}`, `B${flat}`, `E${flat}`, `A${flat}`, `D${flat}`, `G${flat}`, `C${flat}`, `F${flat}`, `E${sharp}`, `B${sharp}`]

var allScales = {};
var chordTypes = {};

var solfege = {
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
}

var scaleDegrees = {
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
}

var chordDegrees = {
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
}

var chordDegreesUpper = {
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
}

var chordTypes = {}

var addChordType = (key, degrees, label, useUpper)=> {
  chordTypes[key] = {}
  chordTypes[key].degrees = degrees
  chordTypes[key].label = label
  chordTypes[key].useUpper = useUpper
}

addChordType('maj', ['one', 'three', 'five'], '', false)
addChordType('maj7', ['one', 'three', 'five', 'seven'], 'maj7', false)
addChordType('7', ['one', 'three', 'five', 'flatSeven'], '7', false)
addChordType('min', ['one', 'flatThree', 'five'], 'm', false)
addChordType('m7', ['one', 'flatThree', 'five', 'flatSeven'], 'm7', false)
addChordType('m(maj7)', ['one', 'flatThree', 'five', 'seven'], 'm(maj7)', false)
addChordType(`m7(${flat}5)`, ['one', 'flatThree', 'flatFive', 'flatSeven'], `m7(${flat}5)`, false)
addChordType(`${dim}`, ['one', 'flatThree', 'flatFive'], `${dim}`, false)
addChordType(`${dim}7`, ['one', 'flatThree', 'flatFive', 'dblFlatSeven'], `${dim}7`, false)
addChordType(`${dim}(maj7)`, ['one', 'flatThree', 'flatFive', 'seven'], `${dim}(maj7)`, false)
addChordType('+', ['one', 'three', 'sharpFive'], '+', false)
addChordType('+(maj7)', ['one', 'three', 'sharpFive', 'seven'], '+(maj7)', false)
addChordType(`7(${sharp}5)`, ['one', 'three', 'sharpFive', 'flatSeven'], `7(${sharp}5)`, false)
addChordType(`maj(${flat}5)`, ['one', 'three', 'flatFive'], `maj(${flat}5)`, false)
addChordType(`maj7(${flat}5)`, ['one', 'three', 'flatFive', 'seven'], `maj7(${flat}5)`, false)
addChordType(`7(${flat}5)`, ['one', 'three', 'flatFive', 'flatSeven'], `7(${flat}5)`, false)
addChordType('sus2', ['one', 'two', 'five'], 'sus2', false)
addChordType('sus4', ['one', 'four', 'five'], 'sus4', false)
addChordType('add9', ['one', 'three','five', 'two'], 'add9', true)
addChordType(`add${sharp}11`, ['one', 'three','five', 'sharpFour'], `add${sharp}11`, true)
addChordType('6', ['one', 'three', 'five', 'six'], '6', false)
addChordType('m6', ['one', 'flatThree', 'five', 'six'], 'm6', false)
addChordType('7sus4', ['one', 'four', 'five', 'flatSeven'], `7sus4`, false)
addChordType('maj7(sus4)', ['one', 'four', 'five', 'seven'], `maj7(sus4)`, false)
addChordType('maj9', ['one', 'three', 'five', 'seven', 'two'], 'maj9', true)
addChordType(`maj7(${sharp}11)`,['one', 'three', 'five', 'seven', 'sharpFour'], `maj7(${sharp}11)`, true)
addChordType('maj7(13)', ['one', 'three', 'five', 'seven', 'six'], `maj7(13)`, true)
addChordType(`maj7(9, ${sharp}11)`, ['one', 'three', 'five', 'seven', 'two', 'sharpFour'], `maj7(9, ${sharp}11)`, true)
addChordType(`maj7(${sharp}11, 13)`, ['one', 'three', 'five', 'seven', 'sharpFour', 'six'], `maj7(${sharp}11, 13)`, true)
addChordType('maj7(9, 13)', ['one', 'three', 'five', 'seven', 'two', 'six'], `maj7(9, 13)`, true)
addChordType('maj13', ['one', 'three', 'five', 'seven', 'two', 'sharpFour', 'six'], 'maj13', true)
addChordType('m9', ['one', 'flatThree', 'five', 'flatSeven', 'two'], `m9`, true)
addChordType('m7(11)', ['one', 'flatThree', 'five', 'flatSeven', 'four'], `m7(11)`, true)
addChordType('m7(13)', ['one', 'flatThree', 'five', 'flatSeven', 'six'], `m7(13)`, true)
addChordType('m7(9, 11)', ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four'], `m7(9, 11)`, true)
addChordType('m7(9, 13)', ['one', 'flatThree', 'five', 'flatSeven', 'two', 'six'], `m7(9, 13)`, true)
addChordType('m7(11, 13)', ['one', 'flatThree', 'five', 'flatSeven', 'four', 'six'], `m7(11, 13)`, true)
addChordType('m7(9, 11, 13)', ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four', 'six'], `m7(9, 11, 13)`, true)
addChordType('7(9)', ['one', 'three', 'five', 'flatSeven', 'two'], `7(9)`, true)
addChordType(`7(${flat}9)`, ['one', 'three', 'five', 'flatSeven', 'flatTwo'], `7(${flat}9)`, true)
addChordType(`7(${sharp}9)`, ['one', 'three', 'five', 'flatSeven', 'sharpTwo'], `7(${sharp}9)`, true)
addChordType(`7(${sharp}11)`, ['one', 'three', 'five', 'flatSeven', 'sharpFour'], `7(${sharp}11)`, true)
addChordType(`7(9, ${sharp}11)`, ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour'], `7(9, ${sharp}11)`, true)
addChordType('7(13)', ['one', 'three', 'five', 'flatSeven', 'six'], `7(13)`, true)
addChordType(`7(${flat}13)`, ['one', 'three', 'five', 'flatSeven', 'flatSix'], `7(${flat}13)`, true)
addChordType(`7(9, ${sharp}11, 13)`, ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'six'], `7(9, ${sharp}11, 13)`, true)
addChordType(`7(9, ${sharp}11, ${flat}13)`, ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'flatSix'], `7(9, ${sharp}11, ${flat}13)`, true)
addChordType(`7(9, ${flat}13)`, ['one', 'three', 'five', 'flatSeven', 'two', 'flatSix'], `7(9, ${flat}13)`, true)
addChordType('7(9, 13)', ['one', 'three', 'five', 'flatSeven', 'two', 'six'], `7(9, 13)`, true)
addChordType(`7(${flat}9, ${flat}13)`, ['one', 'three', 'five', 'flatSeven', 'flatTwo', 'flatSix'], `7(${flat}9, ${flat}13)`, true)
addChordType('maj Pentatonic', ['one', 'two', 'three', 'five', 'six'], 'maj Pentatonic', false)
addChordType('min Pentatonic', ['one', 'flatThree', 'four', 'five', 'flatSeven'], 'min Pentatonic', false)
addChordType('Dominant Pentatonic', ['one', 'two', 'three', 'five', 'flatSeven'], 'Dominant Pentatonic')
addChordType(`Dominant ${sharp}4 Pentatonic`, ['one', 'two', 'three', 'sharpFour', 'flatSeven'], `Dominant ${sharp}4 Pentatonic`, false)
addChordType(`maj ${sharp}4 Pentatonic`, ['one', 'two', 'three', 'sharpFour', 'six'], `maj ${sharp}4 Pentatonic`, false)
addChordType('Altered Pentatonic', ['one', 'flatTwo', 'three', 'five', 'flatSeven'], `Altered Pentatonic`, false)
addChordType('m(maj7) Pentatonic', ['one', 'flatThree', 'four', 'five', 'seven'], 'm(maj7) Pentatonic', false)
addChordType('Egyptian Pentatonic', ['one', 'two', 'four', 'five', 'flatSeven'], 'Egyptian Pentatonic', false)
addChordType('Japanese Pentatonic', ['one', 'flatTwo', 'four', 'five', 'flatSix'], 'Japanese Pentatonic', false)
addChordType('Whole Tone Scale', ['one', 'two', 'three', 'sharpFour', 'sharpFive', 'sharpSix'], 'Whole Tone Scale', false)
addChordType('Whole/Half Scale', ['one', 'two', 'flatThree', 'four', 'flatFive', 'sharpFive', 'six', 'seven'], 'Whole/Half Scale', false)
addChordType('Half/Whole Scale', ['one', 'flatTwo', 'sharpTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'], 'Half Whole', false)
addChordType('Altered Scale', ['one', 'flatTwo', 'sharpTwo', 'three', 'flatFive', 'sharpFive', 'flatSeven'], 'Altered Scale', false)


var sharpNote = (note) => {
  if (note.length === 1 || note.slice(note.length -2) === `${dblSharp}`) {
    note = `${note}${sharp}`;
  } else if (note[note.length - 1] === `${sharp}`) {
    note = note.replace(`${sharp}`, `${dblSharp}`);
  }
  if (note[note.length - 1] === `${flat}`) {
    note = note.substring(0, note.length - 1);
  }
  if (note.slice(note.length - 2) === `${dblFlat}`) {
      note = note.substring(0, note.length - 2);
      note = `${note}${flat}`;
  }
  return note;
}

var flatNote = (note) => {
  if (note.length === 1 || note.slice(note.length - 2) === `${dblFlat}`) {
      note = `${note}${flat}`;
  } else if (note[note.length - 1] === `${flat}`) {
      note = note.replace(`${flat}`, `${dblFlat}`);
  }
  if (note[note.length - 1] === `${sharp}`) {
      note = note.substring(0, note.length - 1);
  }
  if (note.slice(note.length - 2) === `${dblSharp}`) {
      note = note.substring(0, note.length - 2);
      note = `${note}${sharp}`;
  }
  return note;
}

var findEnharmonicEquivalent = (note) => {
  var noteBase = note[0];
  var indexOfNoteBase = chromaticScaleSimple.indexOf(noteBase);
  var distanceToMove = 0;
  var enharmonicEquivalent = ""
  for (var i = 1; i < note.length; i++) {
      if (note[i] === `${flat}`) {
          distanceToMove--;
      } else if (note[i] === `${sharp}`) {
          distanceToMove++;
      } else if ((note[i] + note[i + 1]) === `${dblSharp}`) {
          distanceToMove += 2
      } else if ((note[i] + note[i + 1]) === `${dblFlat}`) {
          distanceToMove -= 2
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

var shiftNotes = (note, scale) => {
  var shiftedScale = [];
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
    } else {
      continue;
    }
  }
  var back = scale.slice(0, newStartIndex);
  var front = scale.slice(newStartIndex);
  shiftedScale = front.concat(back);

  return shiftedScale;
}

var initiateScaleObjects = () => {
  allScales.C = {}
  allScales.C.tonic = "C";
  allScales.C.natScaleDegrees = whiteNotes;
  allScales.C.scaleDegrees = {};
  var sd = allScales.C.scaleDegrees
  var scaleDegree = allScales.C.natScaleDegrees

  sd.one = scaleDegree[0];
  sd.sharpOne = sharpNote(scaleDegree[0]);
  sd.flatTwo = flatNote(scaleDegree[1]);
  sd.two = scaleDegree[1];
  sd.sharpTwo = sharpNote(scaleDegree[1]);
  sd.flatThree = flatNote(scaleDegree[2]);
  sd.three = scaleDegree[2];
  sd.flatFour = flatNote(scaleDegree[3])
  sd.four = scaleDegree[3];
  sd.sharpFour = sharpNote(scaleDegree[3]);
  sd.flatFive = flatNote(scaleDegree[4]);
  sd.five = scaleDegree[4];
  sd.sharpFive = sharpNote(scaleDegree[4]);
  sd.flatSix = flatNote(scaleDegree[5]);
  sd.six = scaleDegree[5];
  sd.sharpSix = sharpNote(scaleDegree[5]);
  sd.dblFlatSeven = flatNote(flatNote(scaleDegree[6]))
  sd.flatSeven = flatNote(scaleDegree[6]);
  sd.seven = scaleDegree[6];


  var clockwiseScale = whiteNotes.slice();
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

  var counterClockwiseScale = whiteNotes.slice();
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
}

var allScales = initiateScaleObjects()

var populateIntervalsObject = () => {
    var intervals = {};

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

    for (var key in allScales) {
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
}

var intervals = populateIntervalsObject()

var findLabels  = (root, tonic) => {
  labels = {}
  labels.root = root
  if (tonic === root) {
    labels.roman = 'I'
    labels.objKeyChord = 'oneChord'
    labels.scaleDegree = '1'
    labels.chordDegree = '1'
    labels.solfege = 'Do'
    labels.interval = 'Unison/Octave'
  }
  if (intervals.aug1[tonic] === root) {
    labels.roman = `${sharp}I`
    labels.objKeyChord = 'oneChord'
    labels.scaleDegree = `${sharp}1`
    labels.chordDegree = `${sharp}1`
    labels.solfege = 'Di'
    labels.interval = 'aug1'
  }
  if (intervals.min2[tonic] === root) {
    labels.roman = `${flat}II`
    labels.objKeyChord = 'twoChord'
    labels.scaleDegree = `${flat}2`
    labels.chordDegree = `${flat}9`
    labels.solfege = 'Ra'
    labels.interval = 'min2'
  }
  if (intervals.maj2[tonic] === root) {
    labels.roman = 'II'
    labels.objKeyChord = 'twoChord'
    labels.scaleDegree = '2'
    labels.chordDegree = '9'
    labels.solfege = 'Re'
    labels.interval = 'maj2'
  }
  if (intervals.aug2[tonic] === root) {
    labels.roman = `${sharp}II`
    labels.objKeyChord = 'twoChord'
    labels.scaleDegree = `${sharp}2`
    labels.chordDegree = `${sharp}9`
    labels.solfege = 'Ri'
    labels.interval = 'aug2'
  }
  if (intervals.min3[tonic] === root) {
    labels.roman = `${flat}III`
    labels.objKeyChord = 'threeChord'
    labels.scaleDegree = `${flat}3`
    labels.chordDegree = `${flat}3`
    labels.solfege = 'Me'
    labels.interval = 'min3'
    labels.chordQuality = 'min'
  }
  if (intervals.maj3[tonic] === root) {
    labels.roman = 'III'
    labels.objKeyChord = 'threeChord'
    labels.scaleDegree = '3'
    labels.chordDegree = '3'
    labels.solfege = 'Mi'
    labels.interval = 'maj3'
    labels.chordQuality = 'maj'
  }
  if (intervals.p4[tonic] === root) {
    labels.roman = 'IV'
    labels.objKeyChord = 'fourChord'
    labels.scaleDegree ='4'
    labels.chordDegree ='11'
    labels.solfege = 'Fa'
    labels.interval = 'p4'
  }
  if (intervals.aug4[tonic] === root) {
    labels.roman = `${sharp}IV`
    labels.objKeyChord = 'fourChord'
    labels.scaleDegree = `${sharp}4`
    labels.chordDegree = `${sharp}11`
    labels.solfege = 'Fi'
    labels.interval = 'aug4'
  }
  if (intervals.dim5[tonic] === root) {
    labels.roman = `${flat}V`
    labels.objKeyChord = 'fiveChord'
    labels.scaleDegree = `${flat}5`
    labels.chordDegree = `${flat}5`
    labels.interval = 'dim5'
    labels.solfege = 'Se'
    labels.chordQuality = 'dim'
  }
  if (intervals.p5[tonic] === root) {
    labels.roman = 'V'
    labels.objKeyChord = 'fiveChord'
    labels.scaleDegree = '5'
    labels.chordDegree = '5'
    labels.solfege = 'Sol'
    labels.interval = 'p5'
    labels.chordQuality = ['5', 'power chord' ]
  }
  if (intervals.aug5[tonic] === root) {
    labels.roman = `${sharp}V`
    labels.objKeyChord = 'fiveChord'
    labels.scaleDegree = `${sharp}5`
    labels.chordDegree = `${sharp}5`
    labels.solfege = 'Si'
    labels.interval = 'aug5'
    labels.chordQuality = 'aug'
  }
  if (intervals.min6[tonic] === root) {
    labels.roman = `${flat}VI`
    labels.objKeyChord = 'sixChord'
    labels.scaleDegree = `${flat}6`
    labels.chordDegree = `${flat}13`
    labels.solfege = 'Le'
    labels.interval = 'min6'
  }
  if (intervals.maj6[tonic] === root) {
    labels.roman = 'VI'
    labels.objKeyChord = 'sixChord'
    labels.scaleDegree = '6'
    labels.chordDegree = '13'
    labels.solfege = 'La'
    labels.interval = 'maj6'
  }
  if (intervals.aug6[tonic] === root) {
    labels.roman = `${sharp}VI`
    labels.objKeyChord = 'sixChord'
    labels.scaleDegree = `${sharp}6`
    labels.chordDegree = `${sharp}13`
    labels.solfege = 'Li'
    labels.interval = 'aug6'
  }
  if (intervals.min7[tonic] === root) {
    labels.roman = `${flat}VII`
    labels.objKeyChord = 'sevenChord'
    labels.scaleDegree = `${flat}7`
    labels.chordDegree = `${flat}7`
    labels.solfege = 'Te'
    labels.interval = 'min7'
    labels.seventhChordNotation = '7'
  }
  if (intervals.maj7[tonic] === root) {
    labels.roman = 'VII'
    labels.objKeyChord = 'sevenChord'
    labels.scaleDegree = '7'
    labels.chordDegree = '7'
    labels.solfege = 'Ti'
    labels.interval = 'maj7'
    labels.seventhChordNotation = 'maj7'
  }
  return labels;
}

var makeChordsFor7NoteScale = (scale, tonic) => {
  var chords = {};
  var failed = []
  for (var i = 0; i < scale.length; i++) {
    let mode = shiftNotes(scale[i], scale)

    let chordTones = [mode[0], mode[2], mode[4], mode[6]];
    let tensions = [mode[1], mode[3], mode[5]];
    let quartalVoicing = [mode[5], mode[1], mode[4], mode[0]]
    let fifthsVoicing = [mode[0], mode[4], mode[1]]

    let labelsOne = findLabels(chordTones[0], tonic)
    let key = labelsOne.objKeyChord

    chords[key] = {}
    if (allScales[chordTones[0]]){
      chords[key].relativeDegrees = allScales[chordTones[0]].scaleDegrees
      chords[key].notesToDegrees = {}
      for (var degr in chords[key].relativeDegrees) {
        chords[key].notesToDegrees[chords[key].relativeDegrees[degr]] = degr
      }

    } else {
      failed.push(chordTones[0])
    }

    let notesToDegrees = chords[key].notesToDegrees
    let modeObj = {}


    if (notesToDegrees) {
      var chordTonesRef = [notesToDegrees[mode[0]], notesToDegrees[mode[2]], notesToDegrees[mode[4]], notesToDegrees[mode[6]]];
      var tensionsRef = [notesToDegrees[mode[1]], notesToDegrees[mode[3]], notesToDegrees[mode[5]]];
      for (var j = 0; j < mode.length; j++) {
        modeObj[notesToDegrees[mode[j]]] = true
      }
    }

    let chordName = ''
    let chordLabel = ''
    let chordQ = ''
    let seventhName = ''
    let seventhLabel = ''
    let seventhChord = ''

    chords[key].chordTones = chordTones;

    chords[key].root = {}
    chords[key].root.note = chordTones[0]
    chords[key].root.chordDegree = 'root'
    chords[key].root.scaleDegree = labelsOne.scaleDegree
    chords[key].root.solfege = labelsOne.solfege
    chordName += chordTones[0]
    chordLabel += labelsOne.roman
    chName = chordName.slice()
    chLabel = chordLabel.slice()

    var labelsThree = findLabels(chordTones[1], chordTones[0])
    var labelsThreeTonic = findLabels(chordTones[1], tonic)
    chords[key].third = {}
    chords[key].third.note = chordTones[1]
    chords[key].third.chordDegree = labelsThree.chordDegree
    chords[key].third.scaleDegree = labelsThreeTonic.scaleDegree
    chords[key].third.solfege = labelsThreeTonic.solfege

    var labelsFive = findLabels(chordTones[2], chordTones[0])
    var labelsFiveTonic = findLabels(chordTones[2], tonic)
    chords[key].fifth = {}
    chords[key].fifth.note = chordTones[2]
    chords[key].fifth.chordDegree = labelsFive.chordDegree
    chords[key].fifth.scaleDegree = labelsFiveTonic.scaleDegree
    chords[key].fifth.solfege = labelsFiveTonic.solfege

    var labelsSeven = findLabels(chordTones[3], chordTones[0])
    var labelsSevenTonic = findLabels(chordTones[3], tonic)
    chords[key].seventh = {}
    chords[key].seventh.note = chordTones[3]
    chords[key].seventh.chordDegree = labelsSeven.chordDegree
    chords[key].seventh.scaleDegree = labelsSevenTonic.scaleDegree
    chords[key].seventh.solfege = labelsSevenTonic.solfege

    chords[key].options = {}
    chords[key].options.list = []
    chords[key].options.triad = {}
    chords[key].options.triad.notes = [chordTones[0], chordTones[1], chordTones[2]]
    chords[key].options.seventhChord = {}
    chords[key].options.seventhChord.notes = [chordTones[0], chordTones[1], chordTones[2], chordTones[3]]
    chords[key].options.shell = {}
    chords[key].options.shell.notes = [chordTones[0], chordTones[1], chordTones[3]]
    chords[key].options.octaves = {}
    chords[key].options.octaves.notes = [chordTones[0]]
    chords[key].options.octaves.name = `${chordName} Octaves`
    chords[key].options.octaves.label = `${chordLabel} Octaves`
    chords[key].options.list.push('  Octaves')

    var addVoicing = (voicing, objKey, listName, name, label, quality, useUpper) => {
      let notes = []
      var check = (voicing) => {
        for (var k = 0; k < voicing.length; k++) {
          if(chords[key].relativeDegrees) {
            let conversion = chords[key].relativeDegrees[voicing[k]]
            notes.push(conversion)
          }
          if (!modeObj[voicing[k]]) {
            return false
          }
        }
        return true
      }
      if(check(voicing)) {
        chords[key].options[objKey] = {}
        chords[key].options[objKey].notes = notes
        chords[key].options[objKey].voicingObjKey = objKey
        if (name == null) {chords[key].options[objKey].name = `${chName}${quality}`;}
        if (name != null) {chords[key].options[objKey].name = `${name}`;}
        if (label == null) {chords[key].options[objKey].label = `${chLabel}${quality}`;}
        if (label != null) {chords[key].options[objKey].label = `${label}`;}
        if (useUpper) {chords[key].options[objKey].useUpper = useUpper;}
        chords[key].options.list.push(`${listName}`)
      }
    }

    addVoicing(['one', 'five'], 'powerChord', '  Power Chord', null, null, '5');
    addVoicing(['one', 'flatFive'], 'tritone', '  Tritone', 'tritone', 'tritone', 'tritone');

    chordTonesRef= JSON.stringify(chordTonesRef)

    if (chordTonesRef === JSON.stringify(['one', 'three', 'five', 'seven'])) {
      chordQ = 'major'
      seventhName = `${chordName}maj7`
      seventhLabel = `${chordLabel}maj7`
      seventhChord = 'major 7'
      chords[key].options.list.push(' Triad')
      chords[key].options.list.push('maj7')
      chords[key].options.list.push('maj7 (shell)')
    } // maj7

    if (chordTonesRef === JSON.stringify(['one', 'three', 'five', 'flatSeven'])) {
      chordQ = 'major'
      seventhName = `${chordName}7`
      seventhLabel = `${chordLabel}7`
      seventhChord = 'dominant 7'
      chords[key].options.list.push(' Triad')
      chords[key].options.list.push('7')
      chords[key].options.list.push('7 (shell)')
    } //dom7

    if (chordTonesRef === JSON.stringify(['one', 'three', 'sharpFive', 'seven'])) {
      chordQ = 'augmented'
      chordName += '+'
      chordLabel += '+'
      seventhName = `${chordName}(maj7)`
      seventhLabel = `${chordLabel}(maj7)`
      seventhChord = ' augmented major 7'
      chords[key].options.list.push('+ Triad')
      chords[key].options.list.push('+(maj7)')
    } //aug(maj7)

    if (chordTonesRef === JSON.stringify(['one', 'three', 'sharpFive', 'flatSeven'])) {
      chordQ = 'augmented'
      chordName += '+'
      chordLabel += '+'
      seventhName = `${chordName}7(${sharp}5)`
      seventhLabel = `${chordLabel}7(${sharp}5)`
      seventhChord = `dominant 7(${sharp}5)`
      chords[key].options.list.push('+ Triad')
      chords[key].options.list.push(`7(${sharp}5)`)
    } //dom #5

    if (chordTonesRef === JSON.stringify(['one', 'flatThree', 'five', 'seven'])) {
      chordQ = 'minor'
      chordName += 'm'
      chordLabel += 'm'
      seventhName = `${chordName}(maj7)`
      seventhLabel = `${chordLabel}(maj7)`
      seventhChord = 'minor(major 7)'
      chords[key].options.list.push('m Triad')
      chords[key].options.list.push(`m(maj7)`)
      chords[key].options.list.push(`m(maj7) (shell)`)
    } //min(maj7)

    if (chordTonesRef === JSON.stringify(['one', 'flatThree', 'five', 'flatSeven'])) {
      chordQ = 'minor'
      chordName += 'm'
      chordLabel += 'm'
      seventhName = `${chordName}7`
      seventhLabel = `${chordLabel}7`
      seventhChord = 'minor 7'
      chords[key].options.list.push('m Triad')
      chords[key].options.list.push(`m7`)
      chords[key].options.list.push(`m7 (shell)`)
    } //min7

    if (chordTonesRef === JSON.stringify(['one', 'flatThree', 'flatFive', 'flatSeven'])) {
      chordQ = 'diminished'
      chordName += `${dim}`
      chordLabel += `${dim}`
      seventhName = `${chordTones[0]}m7(${flat}5)`
      seventhLabel = `${labelsSeven.roman}m7(${flat}5)`
      seventhChord = `minor 7(${flat}5)`
      chords[key].options.list.push(`${dim} Triad`)
      chords[key].options.list.push(`m7(${flat}5)`)
    } //min7(b5)

    if (chordTonesRef === JSON.stringify(['one', 'flatThree', 'flatFive', 'dblFlatSeven'])) {
      chords[key].seventh.chordDegree = `${dblFlat}7`
      chordQ = 'diminished'
      chordName += `${dim}`
      chordLabel += `${dim}`
      seventhName = `${chordName}7`
      seventhLabel = `${chordLabel}7`
      seventhChord = 'full diminished 7'
      chords[key].options.list.push(`${dim} Triad`)
      chords[key].options.list.push(`${dim}7`)
    } // full dim

    if (chordTonesRef === JSON.stringify(['one', 'three', 'flatFive', 'flatSeven'])) {
      seventhName = `${chordName}7(${flat}5)`
      seventhLabel = `${chordLabel}7(${flat}5)`
      seventhChord = `dominant 7(${flat}5)`
      chordQ = `major(${flat}5)`
      chordName += `maj(${flat}5)`
      chordLabel += `maj(${flat}5)`
      chords[key].options.list.push(`maj ${flat}5 Triad`)
      chords[key].options.list.push(`7(${flat}5)`)
    } // dominant (b5)

    if (chordTonesRef === JSON.stringify(['one', 'three', 'flatFive', 'seven'])) {
      seventhName = `${chordName}maj7(${flat}5)`
      seventhLabel = `${chordLabel}maj7(${flat}5)`
      seventhChord = `major 7(${flat}5)`
      chordQ = `major(${flat}5)`
      chordName += `maj(${flat}5)`
      chordLabel += `maj(${flat}5)`
      chords[key].options.list.push(`maj${flat}5 Triad`)
      chords[key].options.list.push(`maj7(${flat}5)`)
    } // maj7 (b5)

    chords[key].options.triad.name = chordName
    chords[key].options.triad.label = chordLabel
    chords[key].options.triad.quality = chordQ
    chords[key].options.triad.voicingObjKey = 'triad'
    chords[key].options.seventhChord.name = seventhName
    chords[key].options.seventhChord.label = seventhLabel
    chords[key].options.seventhChord.quality = seventhChord
    chords[key].options.seventhChord.voicingObjKey = 'seventhChord'
    chords[key].options.shell.name = `${seventhName}(shell)`
    chords[key].options.shell.label = `${seventhLabel}(shell)`
    chords[key].options.shell.quality = seventhChord
    chords[key].options.shell.voicingObjKey = 'shell'





    addVoicing(['one', 'two', 'five'], 'sus2', ' sus2', null, null, 'sus2');
    addVoicing(['one', 'four', 'five'], 'sus4', ' sus4', null, null, 'sus4');
    addVoicing(['one', 'three','five', 'two'], 'add9', ' add9', null, null, 'add9', true);
    addVoicing(['one', 'three','five', 'sharpFour'], 'addSharp11', ` add${sharp}11`, null, null, `add${sharp}11`, true);
    addVoicing(['one', 'three', 'five', 'six'], 'major6', '6', null, null, '6');
    addVoicing(['one', 'flatThree', 'five', 'six'], 'minor6', 'm6', null, null, '6');

    addVoicing(['one', 'four', 'five', 'flatSeven'], `dominantSus4`, `7sus4`, null, null, `7sus4`);
    addVoicing(['one', 'four', 'five', 'seven'], `maj7Sus4`, `maj7(sus4)`, null, null, `maj7(sus4)`);

    addVoicing(['one', 'three', 'five', 'seven', 'two'], 'maj9', `maj7(9)`, null, null, `maj7(9)`, true);
    addVoicing(['one', 'three', 'five', 'seven', 'sharpFour'], 'maj7AddSharp11', `maj7(${sharp}11)`, null, null, `maj7(${sharp}11)`, true);
    addVoicing(['one', 'three', 'five', 'seven', 'six'], 'maj7Add13', `maj7(13)`, null, null, `maj7(13)`, true);
    addVoicing(['one', 'three', 'five', 'seven', 'two', 'sharpFour'], 'majSharp11', `maj7(9, ${sharp}11)`, null, null, `maj7(9, ${sharp}11)`, true);
    addVoicing(['one', 'three', 'five', 'seven', 'sharpFour', 'six'], 'maj7AddSharp11Add13', `maj7(${sharp}11, 13)`, null, null, `maj7(${sharp}11, 13)`, true);
    addVoicing(['one', 'three', 'five', 'seven', 'two', 'six'], 'maj9Add13', `maj7(9, 13)`, null, null, `maj7(9, 13)`, true);
    addVoicing(['one', 'three', 'five', 'seven', 'two', 'sharpFour', 'six'], 'maj13', `maj7(9, ${sharp}11, 13)`, null, null, `maj7(9, ${sharp}11, 13)`, true);

    addVoicing(['one', 'flatThree', 'five', 'flatSeven', 'two'], 'min9', `m7(9)`, null, null, `m7(9)`, true);
    addVoicing(['one', 'flatThree', 'five', 'flatSeven', 'four'], 'minAdd11', `m7(11)`, null, null, `m7(11)`, true);
    addVoicing(['one', 'flatThree', 'five', 'flatSeven', 'six'], 'minAdd13', `m7(13)`, null, null, `m7(13)`, true);
    addVoicing(['one', 'flatThree', 'five', 'flatSeven', 'two', 'four'], 'min11', `m7(9, 11)`, null, null, `m7(9, 11)`, true);
    addVoicing(['one', 'flatThree', 'five', 'flatSeven', 'two', 'six'], 'minAdd9Add13', `m7(9, 13)`, null, null, `m7(9, 13)`, true);
    addVoicing(['one', 'flatThree', 'five', 'flatSeven', 'four', 'six'], 'minAdd11Add13', `m7(11, 13)`, null, null, `m7(11, 13)`, true);
    addVoicing(['one', 'flatThree', 'five', 'flatSeven', 'two', 'four', 'six'], 'min13', `m7(9, 11, 13)`, null, null, `m7(9, 11, 13)`, true);

    addVoicing(['one', 'three', 'five', 'flatSeven', 'two'], 'dominant9', `7(9)`, null, null, `7(9)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'flatTwo'], 'dominantFlat9', `7(${flat}9)`, null, null, `7(${flat}9)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'sharpTwo'], 'dominantSharp9', `7(${sharp}9)`, null, null, `7(${sharp}9)`, true);

    addVoicing(['one', 'three', 'five', 'flatSeven', 'sharpFour'], 'dominantAddSharp11', `7(${sharp}11)`, null, null, `7(${sharp}11)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour'], 'dominantSharp11', `7(9, ${sharp}11)`, null, null, `7(9, ${sharp}11)`, true);

    addVoicing(['one', 'three', 'five', 'flatSeven', 'six'], 'dominantAdd13', `7(13)`, null, null, `7(13)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'flatSix'], 'dominantAddFlat13', `7(${flat}13)`, null, null, `7(${flat}13)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'six'], 'dominant13', `7(9, ${sharp}11, 13)`, null, null, `7(9, ${sharp}11, 13)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'flatSix'], 'dominantFlat13', `7(9, ${sharp}11, ${flat}13)`, null, null, `7(9, ${sharp}11, ${flat}13)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'two', 'flatSix'], 'dominant9Flat13', `7(9, ${flat}13)`, null, null, `7(9, ${flat}13)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'two', 'six'], 'dominant9Add13', `7(9, 13)`, null, null, `7(9, 13)`, true);
    addVoicing(['one', 'three', 'five', 'flatSeven', 'flatTwo', 'flatSix'], 'dominantFlat9Flat13', `7(${flat}9, ${flat}13)`, null, null, `7(${flat}9, ${flat}13)`, true);

    addVoicing(['one', 'two', 'three', 'five', 'six'], 'majorPentatonic', '  Major Pentatonic', null, 'Major Pentatonic', 'maj Pentatonic');
    addVoicing(['one', 'flatThree', 'four', 'five', 'flatSeven'], 'minorPentatonic', '  Minor Pentatonic', null, 'Minor Pentatonic', 'm Pentatonic');
    addVoicing(['one', 'two', 'three', 'five', 'flatSeven'], 'dominantPentatonic', '  Dominant Pentatonic', null, 'Dominant Pentatonic', '');
    addVoicing(['one', 'two', 'three', 'sharpFour', 'flatSeven'], 'lydianDomninantPentatonic', `  Dominant ${sharp}4 Pentatonic`, null, 'Lydian Dominant Pentatonic', 'Lydian Dominant Pentatonic');
    addVoicing(['one', 'two', 'three', 'sharpFour', 'six'], 'majSharp4Pentatonic', `  Major ${sharp}4 Pentatonic`, null, `Major ${sharp}4 Pentatonic`, `maj${sharp}4 Pentatonic`);
    addVoicing(['one', 'flatTwo', 'three', 'five', 'flatSeven'], 'alteredPentatonic', `  Altered Pentatonic`, null, `Altered Pentatonic`, `Altered Pentatonic`);
    addVoicing(['one', 'flatThree', 'four', 'five', 'seven'], 'minorMaj7Pentatonic', '  Minor Major 7 Pentatonic', null, 'Minor Major 7 Pentatonic', 'm(maj7) Pentatonic');
    addVoicing(['one', 'two', 'four', 'five', 'flatSeven'], 'egyptianPentatonic', '  Egyptian Pentatonic', null, 'Egyptian Pentatonic', '');
    addVoicing(['one', 'flatTwo', 'four', 'five', 'flatSix'], 'japanesePentatonic', '  Japanese Pentatonic', null, 'Japanese Pentatonic', '');


    chords[key].options.quartalVoicing = {}
    chords[key].options.quartalVoicing.notes =  quartalVoicing
    chords[key].options.quartalVoicing.label = '4ths voicing'
    chords[key].options.quartalVoicing.voicingObjKey = 'quartalVoicing'
    chords[key].options.fifthsVoicing = {}
    chords[key].options.fifthsVoicing.notes = fifthsVoicing
    chords[key].options.fifthsVoicing.label = '5ths voicing'
    chords[key].options.fifthsVoicing.voicingObjKey = 'fifthsVoicing'

    chords[key].options.list.push(`  Quartal Voicing`)
    chords[key].options.list.push(`  Fifths Voicing`)

    chords[key].tensions = {};
    chords[key].tensions.notes = tensions;

    var labelsNine = findLabels(tensions[0], chordTones[0])
    var labelsNineTonic =  findLabels(tensions[0], tonic)

    chords[key].tensions.nine = {}
    chords[key].tensions.nine.note = tensions[0]
    chords[key].tensions.nine.chordDegree = labelsNine.chordDegree
    chords[key].tensions.nine.scaleDegree = labelsNineTonic.scaleDegree
    chords[key].tensions.nine.solfege = labelsNineTonic.solfege

    if (labelsNine.interval === 'min2') {
      chords[key].tensions.nine.avoid = true
    } else {
      chords[key].tensions.nine.avoid = false
    }

    var labelsEleven = findLabels(tensions[1], chordTones[0])
    var labelsElevenTonic =  findLabels(tensions[1], tonic)
    var checkAvoid = findLabels(tensions[1], chordTones[1])
    chords[key].tensions.eleven = {}
    chords[key].tensions.eleven.note = tensions[1]
    chords[key].tensions.eleven.chordDegree = labelsEleven.chordDegree
    chords[key].tensions.eleven.scaleDegree = labelsElevenTonic.scaleDegree
    chords[key].tensions.eleven.solfege = labelsElevenTonic.solfege

    if (checkAvoid.interval === 'min2') {
      chords[key].tensions.eleven.avoid = true
    } else {
      chords[key].tensions.eleven.avoid = false
    }

    var labelsThirteen = findLabels(tensions[2], chordTones[0])
    var labelsThirteenTonic =  findLabels(tensions[2], tonic)
    checkAvoid = findLabels(tensions[2], chordTones[2])
    chords[key].tensions.thirteen = {}
    chords[key].tensions.thirteen.note = tensions[2]
    chords[key].tensions.thirteen.chordDegree = labelsThirteen.chordDegree
    chords[key].tensions.thirteen.scaleDegree = labelsThirteenTonic.scaleDegree
    chords[key].tensions.thirteen.solfege = labelsThirteenTonic.solfege
    if (checkAvoid.interval === 'min2') {
      chords[key].tensions.thirteen.avoid = true
    } else {
      chords[key].tensions.thirteen.avoid = false
    }
  }

  // console.log(failed)
  return chords;
}

var scaleChoices = [];

var add7NoteScale = (name, degrees, makeChords) => {
  scaleChoices.push(name)
  var objKey = name.split(' ')
  if (objKey.length > 1) {
    for (var i = 1; i < objKey.length; i++) {
      var capital = objKey[i].slice(0, 1)
      var rest = objKey[i].slice(1)
      capital = capital.toUpperCase();
      objKey[i] = `${capital}${rest}`
    }
    objKey = objKey.join('')
  } else {
    objKey = name;
  }

  let checker = {}

  tonicsToUse.forEach((note) => {
    checker[note] = true
  })

  for (var tonic in allScales) {
    if (checker[tonic]) {
      allScales[tonic][objKey] = {};
      allScales[tonic][objKey].tonic = tonic
      allScales[tonic][objKey].type = name
      allScales[tonic][objKey].tonicScaleDegrees = allScales[tonic].scaleDegrees
      allScales[tonic][objKey].scaleDegrees = []
      allScales[tonic][objKey].notesToDegrees = {}
      allScales[tonic][objKey].scale = []

      for (var key in allScales[tonic].scaleDegrees) {
        allScales[tonic][objKey].notesToDegrees[allScales[tonic].scaleDegrees[key]] = key
      }
      for (var j = 0; j < degrees.length; j++) {
        let note = allScales[tonic].scaleDegrees[degrees[j]];
        allScales[tonic][objKey].scale.push(note)
        allScales[tonic][objKey].scaleDegrees.push(degrees[j])
      }
      if (makeChords){
        allScales[tonic][objKey].chords = makeChordsFor7NoteScale(allScales[tonic][objKey].scale, tonic)
      }
    }
  }
}

add7NoteScale('major', ['one', 'two', 'three', 'four', 'five', 'six', 'seven'], true)
add7NoteScale('natural minor', ['one', 'two', 'flatThree', 'four', 'five', 'flatSix', 'flatSeven'], true)
add7NoteScale('harmonic minor', ['one', 'two', 'flatThree', 'four', 'five', 'flatSix', 'seven'], true)
add7NoteScale('melodic minor', ['one', 'two', 'flatThree', 'four', 'five', 'six', 'seven'], true)
add7NoteScale('dorian', ['one', 'two', 'flatThree', 'four', 'five', 'six', 'flatSeven'], true)
add7NoteScale('phrygian', ['one', 'flatTwo', 'flatThree', 'four', 'five', 'flatSix', 'flatSeven'], true)
add7NoteScale('lydian', ['one', 'two', 'three', 'sharpFour', 'five', 'six', 'seven'], true)
add7NoteScale('mixolydian', ['one', 'two', 'three', 'four', 'five', 'six', 'flatSeven'], true)
add7NoteScale('locrian', ['one', 'flatTwo', 'flatThree', 'four', 'flatFive', 'flatSix', 'flatSeven'], true)
add7NoteScale('persian', ['one', 'flatTwo', 'three', 'four', 'flatFive', 'flatSix', 'flatSeven'], true)
add7NoteScale('double harmonic major', ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'flatSeven'], true)//byzantine see wiki
add7NoteScale('hungarian gypsy minor', ['one', 'two', 'flatThree', 'sharpFour', 'five', 'flatSix', 'seven'], true)
add7NoteScale('romanian minor', ['one', 'two', 'flatThree', 'sharpFour', 'five', 'six', 'flatSeven'], true) //ukrainian minor
add7NoteScale('romanian major', ['one', 'flatTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'], true)
add7NoteScale('lydian dominant', ['one', 'two', 'three', 'sharpFour', 'five', 'six', 'flatSeven'], true)
add7NoteScale('ukrainian dorian', ['one', 'two', 'flatThree', 'sharpFour', 'five', 'six', 'flatSeven'], true)
add7NoteScale('phrygian dominant', ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'flatSeven'], true)
add7NoteScale('lydian augmented', ['one', 'two', 'three', 'sharpFour', 'sharpFive', 'six', 'seven'], true)
add7NoteScale('locrian natural6', ['one', 'flatTwo', 'flatThree', 'four', 'flatFive', 'six', 'flatSeven'], true)
add7NoteScale('ionian sharp5', ['one', 'two', 'three', 'four', 'sharpFive', 'six', 'seven'], true)
add7NoteScale('phrygian dorian', ['one', 'flatTwo', 'flatThree', 'four', 'five', 'six', 'flatSeven'], true)
add7NoteScale('mixolydian flat13', ['one', 'two', 'three', 'four', 'five', 'flatSix', 'flatSeven']), true
add7NoteScale('aeoleon flat5', ['one', 'two', 'flatThree', 'four', 'flatFive', 'flatSix', 'flatSeven'], true)
add7NoteScale('altered', ['one', 'flatTwo', 'sharpTwo', 'three', 'flatFive', 'sharpFive', 'flatSeven'], false) // 2 3 4 5 6 7
add7NoteScale('gypsy', ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'seven'], true)
add7NoteScale('hungarian major', ['one', 'sharpTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'], true)
add7NoteScale('neapolitan major', ['one', 'flatTwo', 'flatThree', 'four', 'five', 'six', 'seven'], true)
add7NoteScale('neapolitan minor', ['one', 'flatTwo', 'flatThree', 'four', 'five', 'flatSix', 'seven'], true)
add7NoteScale('arabian', ['one', 'two', 'three', 'four', 'flatFive', 'flatSix', 'flatSeven'], true)
// add7NoteScale('major', {}, {})


var chordsRefNotes = () => {
  noteRefs = {};
  for (let tonic in allScales) {
    if (tonicsToUse.includes(tonic)) {
      noteRefs[tonic] = {}
      noteRefs[tonic].degsToNotes = allScales[tonic].scaleDegrees
      noteRefs[tonic].notesToDegs = allScales[tonic].major.notesToDegrees
    }
  }
  return noteRefs;
}



var makeStrings = (array) => {
  var string = {};
  for (var i = 0; i < array.length; i++) {
    var firstOctave = shiftNotes(array[i], array);
    var extraNotes = firstOctave.slice(0,6)
    var newString = firstOctave.concat(extraNotes);
    string[array[i]] = newString
  }
  return string;
}

var makeStringsLeft = (array) => {
  var string = {};
  for (var i = 0; i < array.length; i++) {
    var firstOctave = shiftNotes(array[i], array);
    var extraNotes = firstOctave.slice(0,6)
    var newString = firstOctave.concat(extraNotes);
    string[array[i]] = newString.reverse();
  }
  return string;
}

var strings= makeStrings(chromaticScale);
var stringsLeft = makeStringsLeft(chromaticScale);
var noteRefs = chordsRefNotes();

var {C, D, E, F, G, A, B, 'F\u266F': Fsharp, 'C\u266F': Csharp, 'G\u266F': Gsharp,'D\u266F': Dsharp, 'A\u266F': Asharp, 'E\u266F': Esharp, 'B\u266F': Bsharp,'B\u266D': Bflat, 'E\u266D': Eflat, 'A\u266D': Aflat, 'D\u266D': Dflat, 'G\u266D': Gflat,'C\u266D': Cflat, 'F\u266D': Fflat, 'B\u{1D12B}': BdblFlat, 'E\u{1D12B}': EdblFlat,'A\u{1D12B}': AdblFlat,'D\u{1D12B}': DdblFlat} = allScales;



module.exports.scales = allScales
module.exports.strings = strings
module.exports.stringsLeft = stringsLeft
module.exports.intervals = intervals
module.exports.scaleChoices = scaleChoices
module.exports.solfege = solfege
module.exports.scaleDegrees = scaleDegrees
module.exports.chordDegrees = chordDegrees
module.exports.chordDegreesUpper = chordDegreesUpper
module.exports.chordTypes = chordTypes
module.exports.noteRefs = noteRefs
module.exports.tonicsToUse =tonicsToUse


var findChordSpellings = () => {
  let chords = {
    major: ['C', 'E', 'G'],
    minor: ['C', `E${flat}`, 'G'],
    diminishedTriad: ['C', `E${flat}`, `G${flat}`],
    augmentedTriad: ['C', 'E', `G${sharp}`],
    sus2: ['C', 'D', 'G'],
    sus4: ['C', `F`, 'G'],
    major7: ['C', 'E', 'G', 'B'],
    dominant7: ['C', `E`, 'G', `B${flat}`],
    minor7: ['C', `E${flat}`, 'G', `B${flat}`],
    minMaj7: ['C', `E${flat}`, 'G', 'B'],
    dominant7: ['C', `E`, 'G', `B${flat}`],

  }
}





