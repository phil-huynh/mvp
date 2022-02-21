const sharp = '\u266F';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E'

const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const clockwise = ['G', 'D', 'A', 'E', 'B', `F${sharp}`, `C${sharp}`, `G${sharp}`, `D${sharp}`, `A${sharp}`,
`E${sharp}`, `B${sharp}`];

const counterClockwise = ["F", `B${flat}`, `E${flat}`, `A${flat}`, `D${flat}`, `G${flat}`, `C${flat}`, `F${flat}`,
`B${dblFlat}`, `E${dblFlat}`, `A${dblFlat}`, `D${dblFlat}`]

var chromaticScale = [['C', `B${sharp}`, `D${dblFlat}`], [`C${sharp}`, `D${flat}`, `B${dblSharp}`], ["D", `C${dblSharp}`, `E${dblFlat}`], [`D${sharp}`, `E${flat}`, `F${dblFlat}`], ["E", `F${flat}`, `D${dblSharp}`], ["F", `E${sharp}`, `G${dblFlat}`], [`F${sharp}`, `G${flat}`, `E${dblSharp}`], ["G", `F${dblSharp}`, `A${dblFlat}`], [`G${sharp}`, `A${flat}`], ["A", `G${dblSharp}`, `B${dblFlat}`], [`A${sharp}`, `B${flat}`, `C${dblFlat}`], ["B", `C${flat}`, `A${dblSharp}`]];

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
  flatSeven: `${flat}7`,
  seven: '7'
}

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
  var indexOfNoteBase = chromaticScale.indexOf(noteBase);
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
  if (newIndex >= chromaticScale.length) {
      newIndex = indexOfNoteBase - (12 - distanceToMove);
  } else if (newIndex < 0) {
      newIndex = indexOfNoteBase + (distanceToMove + 12);
  }
  if (distanceToMove === 0) {
      enharmonicEquivalent = noteBase;
  } else if (note.length > 1 && (note[1] === `${sharp}` || note.includes(`${dblSharp}`))) {
      if (distanceToMove === 1 && chromaticScale[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScale[newIndex][1];
      } else if (chromaticScale[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScale[newIndex][0];
      } else {
          enharmonicEquivalent = chromaticScale[newIndex];
      }
  } else if (note.length > 1 && note[1] === `${flat}` || note.includes(`${dblFlat}`)) {
      if (distanceToMove === -1 && chromaticScale[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScale[newIndex][0];
      } else if (chromaticScale[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScale[newIndex][1];
      } else {
          enharmonicEquivalent = chromaticScale[newIndex];
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
    let fifthsVoicing = [mode[0], mode[4], mode[1], mode[5]]

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

    if (labelsThree.chordQuality === 'min' && labelsFive.chordDegree === '5') {
    chordQ = 'minor'
    chordName += 'min'
    chordLabel += 'min'
    }
    if (labelsThree.chordQuality === 'min' && labelsFive.chordQuality === 'dim') {
      chordQ = 'diminished'
      chordName += 'dim'
      chordLabel += 'dim'
    }
    if (labelsThree.chordQuality === 'maj' && labelsFive.chordQuality === 'aug') {
      chordQ = 'augmented'
      chordName += 'aug'
      chordLabel += 'aug'
    }
    if (labelsThree.chordQuality === 'maj' && labelsFive.chordQuality === 'dim') {
      chordQ = `major(${flat}5)`
      chordName += `maj(${flat}5)`
      chordLabel += `maj(${flat}5)`
    }
    if (labelsThree.chordQuality === 'maj' && labelsFive.chordDegree === '5') {
      chordQ = 'major'
    }

    var labelsSeven = findLabels(chordTones[3], chordTones[0])
    var labelsSevenTonic = findLabels(chordTones[3], tonic)
    chords[key].seventh = {}
    chords[key].seventh.note = chordTones[3]
    chords[key].seventh.chordDegree = labelsSeven.chordDegree
    chords[key].seventh.scaleDegree = labelsSevenTonic.scaleDegree
    chords[key].seventh.solfege = labelsSevenTonic.solfege

    if (chordQ === 'major' && labelsSeven.seventhChordNotation === 'maj7' ) {
      seventhName = `${chordName}maj7`
      seventhLabel = `${chordLabel}maj7`
      seventhChord = 'major 7'
    }
    if (chordQ === `major(${flat}5)` && labelsSeven.seventhChordNotation === `maj7(${flat}5)` ) {
      seventhName = `${chordName}maj7(${flat}5)`
      seventhLabel = `${chordLabel}maj7(${flat}5)`
      seventhChord = `major 7(${flat}5)`
    }
    if (chordQ === 'major' && labelsSeven.seventhChordNotation === '7' ) {
      seventhName = `${chordName}7`
      seventhLabel = `${chordLabel}7`
      seventhChord = 'dominant 7'
    }
    if (chordQ === `major(${flat}5)` && labelsSeven.seventhChordNotation === '7' ) {
      seventhName = `${chordName}7(${flat}5)`
      seventhLabel = `${chordLabel}7(${flat}5)`
      seventhChord = `dominant 7(${flat}5)`
    }
    if (chordQ === 'minor' && labelsSeven.seventhChordNotation === '7' ) {
      seventhName = `${chordName}7`
      seventhLabel = `${chordLabel}7`
      seventhChord = 'minor 7'
    }
    if (chordQ === 'minor' && labelsSeven.seventhChordNotation === 'maj7' ) {
      seventhName = `${chordName}(maj7)`
      seventhLabel = `${chordLabel}(maj7)`
      seventhChord = 'minor(major 7)'
    }

    if (chordQ === 'diminished' && labelsSeven.seventhChordNotation === '7' ) {
      seventhName = `${chordTones[0]}min7(${flat}5)`
      seventhLabel = `${labelsSeven.roman}min7(${flat}5)`
      seventhChord = [`minor 7(${flat}5)`, 'half diminished']
    }

    var dimCheck = findLabels(chordTones[0], chordTones[3])
    if (chordQ === 'diminished' && (dimCheck.interval === 'aug2' || dimCheck.interval === 'min3')) {
      seventhName = `${chordName}7`
      seventhLabel = `${chordLabel}7`
      seventhChord = 'full diminished 7'
    }

    if (chordQ === 'augmented' && labelsSeven.seventhChordNotation === 'maj7' ) {
      seventhName = `${chordName}(maj7)`
      seventhLabel = `${chordLabel}(maj7)`
      seventhChord = ' augmented major 7'
    }
    if (chordQ === 'augmented' && labelsSeven.seventhChordNotation === '7' ) {
      seventhName = `${chordName}7(${sharp}5)`
      seventhLabel = `${chordLabel}7(${sharp}5)`
      seventhChord = `dominant 7(${sharp}5)`
    }

    chords[key].triadName = chordName
    chords[key].triadLabel = chordLabel
    chords[key].chordQuality = chordQ
    chords[key].seventhName = seventhName
    chords[key].seventhLabel = seventhLabel
    chords[key].seventhQuality = seventhChord
    chords[key].quartalVoicing =  quartalVoicing
    chords[key].fifthsVoicing = fifthsVoicing

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


var add7NoteScale = (name, degrees) => {
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
  for (var tonic in allScales) {
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

    allScales[tonic][objKey].chords = makeChordsFor7NoteScale(allScales[tonic][objKey].scale, tonic)
    var chrd = allScales[tonic][objKey].chords
    for(var root in chrd) {
      if(chrd[root].chordQuality==='major') {
        chrd[root].pentatonic = {}
        chrd[root].pentatonic.degrees = ['R', '2','3','5','6']
        chrd[root].pentatonic.notes = [chrd[root].chordTones[0], chrd[root].tensions.notes[0], chrd[root].chordTones[1], chrd[root].chordTones[2], chrd[root].tensions.notes[2]]

      }
      if(chrd[root].chordQuality==='minor') {
        chrd[root].pentatonic = {}
        chrd[root].pentatonic.degrees = ['R', `${flat}3`,'4','5',`${flat}7`]
        chrd[root].pentatonic.notes = [chrd[root].chordTones[0], chrd[root].chordTones[1], chrd[root].tensions.notes[1], chrd[root].chordTones[2], chrd[root].chordTones[3]]
      }
    }
  }
}

add7NoteScale('major', ['one', 'two', 'three', 'four', 'five', 'six', 'seven'])
add7NoteScale('natural minor', ['one', 'two', 'flatThree', 'four', 'five', 'flatSix', 'flatSeven'])
add7NoteScale('harmonic minor', ['one', 'two', 'flatThree', 'four', 'five', 'flatSix', 'seven'])
add7NoteScale('melodic minor', ['one', 'two', 'flatThree', 'four', 'five', 'six', 'seven'])
add7NoteScale('dorian', ['one', 'two', 'flatThree', 'four', 'five', 'six', 'flatSeven'])
add7NoteScale('phrygian', ['one', 'flatTwo', 'flatThree', 'four', 'five', 'flatSix', 'flatSeven'])
add7NoteScale('lydian', ['one', 'two', 'three', 'sharpFour', 'five', 'six', 'seven'])
add7NoteScale('mixolydian', ['one', 'two', 'three', 'four', 'five', 'six', 'flatSeven'])
add7NoteScale('locrian', ['one', 'flatTwo', 'flatThree', 'four', 'flatFive', 'flatSix', 'flatSeven'])
add7NoteScale('persian', ['one', 'flatTwo', 'three', 'four', 'flatFive', 'flatSix', 'flatSeven'])
add7NoteScale('double harmonic major', ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'flatSeven'])//byzantine  see wiki
add7NoteScale('hungarian gypsy minor', ['one', 'two', 'flatThree', 'sharpFour', 'five', 'flatSix', 'seven'])
add7NoteScale('romanian minor', ['one', 'two', 'flatThree', 'sharpFour', 'five', 'six', 'flatSeven']) //ukrainian minor
add7NoteScale('romanian major', ['one', 'flatTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'])
add7NoteScale('lydian dominant', ['one', 'two', 'three', 'sharpFour', 'five', 'six', 'flatSeven'])
add7NoteScale('ukrainian dorian', ['one', 'two', 'flatThree', 'sharpFour', 'five', 'six', 'flatSeven'])
add7NoteScale('phrygian dominant', ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'flatSeven'])
add7NoteScale('lydian augmented', ['one', 'two', 'three', 'sharpFour', 'sharpFive', 'six', 'seven'])
add7NoteScale('locrian natural6', ['one', 'flatTwo', 'flatThree', 'four', 'flatFive', 'six', 'flatSeven'])
add7NoteScale('ionian sharp5', ['one', 'two', 'three', 'four', 'sharpFive', 'six', 'seven'])
add7NoteScale('phrygian dorian', ['one', 'flatTwo', 'flatThree', 'four', 'five', 'six', 'flatSeven'])
add7NoteScale('mixolydian flat13', ['one', 'two', 'three', 'four', 'five', 'flatSix', 'flatSeven'])
add7NoteScale('aeoleon flat5', ['one', 'two', 'flatThree', 'four', 'flatFive', 'flatSix', 'flatSeven'])
add7NoteScale('altered', ['one', 'flatTwo', 'sharpTwo', 'three', 'flatFive', 'sharpFive', 'flatSeven']) // 2 3 4 5 6 7
add7NoteScale('gypsy', ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'seven'])
add7NoteScale('hungarian major', ['one', 'sharpTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'])
add7NoteScale('neapolitan major', ['one', 'flatTwo', 'flatThree', 'four', 'five', 'six', 'seven'])
add7NoteScale('neapolitan minor', ['one', 'flatTwo', 'flatThree', 'four', 'five', 'flatSix', 'seven'])
add7NoteScale('arabian', ['one', 'two', 'three', 'four', 'flatFive', 'flatSix', 'flatSeven'])
// add7NoteScale('major', {}, {})


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
    newString.push('');
    string[array[i]] = newString.reverse();
  }
  return string;
}

var strings= makeStrings(chromaticScale);
var stringsLeft = makeStringsLeft(chromaticScale);

var {C, D, E, F, G, A, B, 'F\u266F': Fsharp, 'C\u266F': Csharp, 'G\u266F': Gsharp,'D\u266F': Dsharp, 'A\u266F': Asharp, 'E\u266F': Esharp, 'B\u266F': Bsharp,'B\u266D': Bflat, 'E\u266D': Eflat, 'A\u266D': Aflat, 'D\u266D': Dflat, 'G\u266D': Gflat,'C\u266D': Cflat, 'F\u266D': Fflat, 'B\u{1D12B}': BdblFlat, 'E\u{1D12B}': EdblFlat,'A\u{1D12B}': AdblFlat,'D\u{1D12B}': DdblFlat} = allScales;



module.exports.scales = allScales
module.exports.strings = strings
module.exports.stringsLeft = stringsLeft
module.exports.intervals = intervals
module.exports.scaleChoices = scaleChoices
module.exports.solfege = solfege
module.exports.scaleDegrees = scaleDegrees



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

