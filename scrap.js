const sharp = "\u266F"
const flat = "\u266D"
const dblSharp = "\u{1D12A}"
const dblFlat = "\u{1D12B}"
const orderOfSharps = ["F", "C", "G", "D", "A", "E", "B", `F${sharp}`, `C${sharp}`,
    `G${sharp}`, `D${sharp}`, `A${sharp}`
];
const orderOfFlats = ["B", "E", "A", "D", "G", "C", "F", `B${flat}`, `E${flat}`, `A${flat}`, `D${flat}`, `G${flat}`];
const whiteNotes = ["C", "D", "E", "F", "G", "A", "B"];
const clockwise = ["G", "D", "A", "E", "B", `F${sharp}`, `C${sharp}`, `G${sharp}`, `D${sharp}`, `A${sharp}`,
    `E${sharp}`, `B${sharp}`];
const counterClockwise = ["F", `B${flat}`, `E${flat}`, `A${flat}`, `D${flat}`, `G${flat}`, `C${flat}`, `F${flat}`,
    `B${dblFlat}`, `E${dblFlat}`, `A${dblFlat}`, `D${dblFlat}`
];
var chromaticScale = ["C", [`C${sharp}`, `D${flat}`], "D", [`D${sharp}`, `E${flat}`], "E", "F", [`F${sharp}`, `G${flat}`], "G", [`G${sharp}`, `A${flat}`], "A", [`A${sharp}`, `B${flat}`], "B"];




// var numericalScaleDegrees = {
//     "one": `1`,
//     "sharpOne": `${sharp}1`,
//     "flat2": `${flat}2`,
//     "two": `2`,
//     "sharpTwo": `${sharp}2`,
//     "flatThree": `${flat}3`,
//     "Three": `3`,
//     "Four": `4`,
//     "sharpFour": `${sharp}4`,
//     "flatFive": `${flat}5`,
//     "Five": `5`,
//     "sharpFive": `${sharp}5`,
//     "flatSix": `${flat}6`,
//     "Six": `6`,
//     "sharpSix": `${sharp}6`,
//     "flatSeven": `${flat}7`,
//     "seven": `7`
// };

var allScales = {}
var intervals = {}



// var doubleSharpNotation = (note) => {
//     if (note.includes(`${sharp}${dblSharp}`)) {
//         note = note.replace(`${sharp}${dblSharp}`, `${dblSharp}${sharp}`);
//     }
//     if (note.includes(`${sharp}${sharp}`)) {
//         note = note.replace(`${sharp}${sharp}`, `${dblSharp}`);
//     }
//     return note;
// }

// function doubleFlatNotation(note) {
//     while (note.includes(`${flat}${dblFlat}`)) {
//         note = note.replace(`${flat}${dblFlat}`, `${dblFlat}${flat}`);
//     }
//     while (note.includes(`${flat}${flat}`)) {
//         note = note.replace(`${flat}${flat}`, `${dblFlat}`);
//     }
//     return note;
// }


// function formatNote(note) {
//     note = note.charAt(0).toUpperCase() + note.slice(1);
//     note = doubleSharpNotation(note);
//     note = doubleFlatNotation(note)
//     return note;
// }
// function isNote(note) {
//     for (var i = 0; i < note.length; i++) {
//         if (whiteNotes.includes(note[0]) === false) {
//             return false;
//         }
//         if (i > 0 && note[i] !== `${flat}` && note[i] !== `${sharp}` && (note[i] + note[i + 1]) !== `${dblSharp}` &&
//             (note[i] + note[i + 1]) !== `${dblFlat}` && (note[i - 1] + note[i]) !== `${dblSharp}` && (note[i - 1] + note[i]) !== `${dblFlat}`) {
//             return false;
//         }
//     }
//     if ((note.indexOf(`${flat}`) !== -1 || note.indexOf(`${dblFlat}`) !== -1) && (note.indexOf(`${sharp}`) !== -1 ||
//             note.indexOf(`${dblSharp}`) !== -1)) {
//         return false;
//     }
//     return true;
// }



// function findEnharmonicEquivalent(note) {
//     var noteBase = note[0];
//     var indexOfNoteBase = chromaticScale.indexOf(noteBase);
//     var distanceToMove = 0;
//     var enharmonicEquivalent = ""
//     for (var i = 0; i < note.length; i++) {
//         if (i === 0) {
//             continue;
//         } else if (note[i] === `${flat}`) {
//             distanceToMove--;
//         } else if (note[i] === `${sharp}`) {
//             distanceToMove++;
//         } else if ((note[i] + note[i + 1]) === `${dblSharp}`) {
//             distanceToMove += 2
//         } else if ((note[i] + note[i + 1]) === `${dblFlat}`) {
//             distanceToMove -= 2
//         } else if ((note[i - 1] + note[i]) === `${dblSharp}`) {
//             continue;
//         } else if ((note[i - 1] + note[i]) === `${dblFlat}`) {
//             continue;
//         }
//     }
//     var newIndex = indexOfNoteBase + distanceToMove;
//     if (newIndex >= chromaticScale.length) {
//         newIndex = indexOfNoteBase - (12 - distanceToMove);
//     } else if (newIndex < 0) {
//         newIndex = indexOfNoteBase + (distanceToMove + 12);
//     }
//     if (distanceToMove === 0) {
//         enharmonicEquivalent = noteBase;
//     } else if (note.length > 1 && (note[1] === `${sharp}` || note.includes(`${dblSharp}`))) {
//         if (distanceToMove === 1 && chromaticScale[newIndex].length === 2) {
//             enharmonicEquivalent = chromaticScale[newIndex][1];
//         } else if (chromaticScale[newIndex].length === 2) {
//             enharmonicEquivalent = chromaticScale[newIndex][0];
//         } else {
//             enharmonicEquivalent = chromaticScale[newIndex];
//         }
//     } else if (note.length > 1 && note[1] === `${flat}` || note.includes(`${dblFlat}`)) {
//         if (distanceToMove === -1 && chromaticScale[newIndex].length === 2) {
//             enharmonicEquivalent = chromaticScale[newIndex][0];
//         } else if (chromaticScale[newIndex].length === 2) {
//             enharmonicEquivalent = chromaticScale[newIndex][1];
//         } else {
//             enharmonicEquivalent = chromaticScale[newIndex];
//         }
//     }
//     return enharmonicEquivalent;
// }


// Scale parameter expects an array
// FUNCTION NOT PASSING TESTS!!!!!!
var shiftNotes = (note, scale) => {
  var shiftedScale = [];
  if (scale[0] === note) {
      return scale;
  }
  for (var i = 0; i < scale.length; i++) {
      if (scale[i] === note) {
          var newStartIndex = i;
      } else if (Array.isArray(scale[i]) && scale[i].length === 2) {
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

var initiateScaleObjects = (allScales) => {
    allScales.tonic_C = {}
    allScales.tonic_C.tonic = "C";

    var inC = allScales.tonic_C;
    inC.scaleDegrees = {};
    inC.scaleDegrees.allNaturalScaleDegrees = whiteNotes;

    var scaleDegree = inC.scaleDegrees.allNaturalScaleDegrees;
    inC.scaleDegrees.one = scaleDegree[0];
    inC.scaleDegrees.sharpOne = sharpNote(scaleDegree[0]);
    inC.scaleDegrees.flatTwo = flatNote(scaleDegree[1]);
    inC.scaleDegrees.two = scaleDegree[1];
    inC.scaleDegrees.sharpTwo = sharpNote(scaleDegree[1]);
    inC.scaleDegrees.flatThree = flatNote(scaleDegree[2]);
    inC.scaleDegrees.three = scaleDegree[2];
    inC.scaleDegrees.four = scaleDegree[3];
    inC.scaleDegrees.sharpFour = sharpNote(scaleDegree[3]);
    inC.scaleDegrees.flatFive = flatNote(scaleDegree[4]);
    inC.scaleDegrees.five = scaleDegree[4];
    inC.scaleDegrees.sharpFive = sharpNote(scaleDegree[4]);
    inC.scaleDegrees.flatSix = flatNote(scaleDegree[5]);
    inC.scaleDegrees.six = scaleDegree[5];
    inC.scaleDegrees.sharpSix = sharpNote(scaleDegree[5]);
    inC.scaleDegrees.flatSeven = flatNote(scaleDegree[6]);
    inC.scaleDegrees.seven = scaleDegree[6];


    var clockwiseScale = whiteNotes.slice();
    for (var i = 0; i < clockwise.length; i++) {
        clockwiseScale = shiftNotes(clockwise[i], clockwiseScale);
        clockwiseScale[6] = sharpNote(clockwiseScale[6]);
        allScales[`tonic_${clockwise[i]}`] = {};
        allScales[`tonic_${clockwise[i]}`].tonic = `${clockwise[i]}`;
        allScales[`tonic_${clockwise[i]}`].scaleDegrees = {};
        allScales[`tonic_${clockwise[i]}`].scaleDegrees.allNaturalScaleDegrees = clockwiseScale;

        var currentKeyScaleDegree = allScales[`tonic_${clockwise[i]}`].scaleDegrees
        var scaleDegree = allScales[`tonic_${clockwise[i]}`].scaleDegrees.allNaturalScaleDegrees;

        currentKeyScaleDegree.one = scaleDegree[0];
        currentKeyScaleDegree.sharpOne = sharpNote(scaleDegree[0]);
        currentKeyScaleDegree.flatTwo = flatNote(scaleDegree[1]);
        currentKeyScaleDegree.two = scaleDegree[1];
        currentKeyScaleDegree.sharpTwo = sharpNote(scaleDegree[1]);
        currentKeyScaleDegree.flatThree = flatNote(scaleDegree[2]);
        currentKeyScaleDegree.three = scaleDegree[2];
        currentKeyScaleDegree.four = scaleDegree[3];
        currentKeyScaleDegree.sharpFour = sharpNote(scaleDegree[3]);
        currentKeyScaleDegree.flatFive = flatNote(scaleDegree[4]);
        currentKeyScaleDegree.five = scaleDegree[4];
        currentKeyScaleDegree.sharpFive = sharpNote(scaleDegree[4]);
        currentKeyScaleDegree.flatSix = flatNote(scaleDegree[5]);
        currentKeyScaleDegree.six = scaleDegree[5];
        currentKeyScaleDegree.sharpSix = sharpNote(scaleDegree[5]);
        currentKeyScaleDegree.flatSeven = flatNote(scaleDegree[6]);
        currentKeyScaleDegree.seven = scaleDegree[6];
    }

    var counterClockwiseScale = whiteNotes.slice();
    for (var i = 0; i < counterClockwise.length; i++) {
        counterClockwiseScale = shiftNotes(counterClockwise[i], counterClockwiseScale);
        counterClockwiseScale[3] = flatNote(counterClockwiseScale[3]);
        allScales[`tonic_${counterClockwise[i]}`] = {};
        allScales[`tonic_${counterClockwise[i]}`].tonic = `${counterClockwise[i]}`;
        allScales[`tonic_${counterClockwise[i]}`].scaleDegrees = {};
        allScales[`tonic_${counterClockwise[i]}`].scaleDegrees.allNaturalScaleDegrees = counterClockwiseScale;

        var currentKeyScaleDegree = allScales[`tonic_${counterClockwise[i]}`].scaleDegrees
        var scaleDegree = allScales[`tonic_${counterClockwise[i]}`].scaleDegrees.allNaturalScaleDegrees;

        currentKeyScaleDegree.one = scaleDegree[0];
        currentKeyScaleDegree.sharpOne = sharpNote(scaleDegree[0]);
        currentKeyScaleDegree.flatTwo = flatNote(scaleDegree[1]);
        currentKeyScaleDegree.two = scaleDegree[1];
        currentKeyScaleDegree.sharpTwo = sharpNote(scaleDegree[1]);
        currentKeyScaleDegree.flatThree = flatNote(scaleDegree[2]);
        currentKeyScaleDegree.three = scaleDegree[2];
        currentKeyScaleDegree.four = scaleDegree[3];
        currentKeyScaleDegree.sharpFour = sharpNote(scaleDegree[3]);
        currentKeyScaleDegree.flatFive = flatNote(scaleDegree[4]);
        currentKeyScaleDegree.five = scaleDegree[4];
        currentKeyScaleDegree.sharpFive = sharpNote(scaleDegree[4]);
        currentKeyScaleDegree.flatSix = flatNote(scaleDegree[5]);
        currentKeyScaleDegree.six = scaleDegree[5];
        currentKeyScaleDegree.sharpSix = sharpNote(scaleDegree[5]);
        currentKeyScaleDegree.flatSeven = flatNote(scaleDegree[6]);
        currentKeyScaleDegree.seven = scaleDegree[6];
    }

    return allScales;
}

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

var makeStrings = (array) => {
    var string = {};
    for (var i = 0; i < array.length; i++) {
        var newString = shiftNotes(array[i], array);
        string[array[i]] = newString
    }
    return string;
}

var findLabels  = (root, tonic) => {
    labels = {}
    if (tonic === root) {
        labels.roman = 'I'
        labels.objKeyChord = 'oneChord'
        labels.scaleDegree = '1'
        labels.chordDegree = '1'
        labels.interval = 'Unison/Octave'
    }
    if (intervals.aug1[tonic] === root) {
        labels.roman = `${sharp}I`
        labels.objKeyChord = 'oneChord'
        labels.scaleDegree = `${sharp}1`
        labels.chordDegree = `${sharp}1`
        labels.interval = 'aug1'
    }
    if (intervals.min2[tonic] === root) {
        labels.roman = `${flat}II`
        labels.objKeyChord = 'twoChord'
        labels.scaleDegree = `${flat}2`
        labels.chordDegree = `${flat}9`
        labels.interval = 'min2'
    }
    if (intervals.maj2[tonic] === root) {
        labels.roman = 'II'
        labels.objKeyChord = 'twoChord'
        labels.scaleDegree = '2'
        labels.chordDegree = '9'
        labels.interval = 'maj2'
    }
    if (intervals.aug2[tonic] === root) {
        labels.roman = `${sharp}II`
        labels.objKeyChord = 'twoChord'
        labels.scaleDegree = `${sharp}2`
        labels.chordDegree = `${sharp}9`
        labels.interval = 'aug2'
    }
    if (intervals.min3[tonic] === root) {
        labels.roman = `${flat}III`
        labels.objKeyChord = 'threeChord'
        labels.scaleDegree = `${flat}3`
        labels.chordDegree = `${flat}3`
        labels.interval = 'min3'
        labels.chordQuality = 'min'
    }
    if (intervals.maj3[tonic] === root) {
        labels.roman = 'III'
        labels.objKeyChord = 'threeChord'
        labels.scaleDegree = '3'
        labels.chordDegree = '3'
        labels.interval = 'maj3'
        labels.chordQuality = 'maj'
    }
    if (intervals.p4[tonic] === root) {
        labels.roman = 'IV'
        labels.objKeyChord = 'fourChord'
        labels.scaleDegree ='4'
        labels.chordDegree ='11'
        labels.interval = 'p4'
    }
    if (intervals.aug4[tonic] === root) {
        labels.roman = `${sharp}IV`
        labels.objKeyChord = 'fourChord'
        labels.scaleDegree = `${sharp}4`
        labels.chordDegree = `${sharp}11`
        labels.interval = 'aug4'
    }
    if (intervals.dim5[tonic] === root) {
        labels.roman = `${flat}V`
        labels.objKeyChord = 'fiveChord'
        labels.scaleDegree = `${flat}5`
        labels.chordDegree = `${flat}5`
        labels.interval = 'dim5'
        labels.chordQuality = 'dim'
    }
    if (intervals.p5[tonic] === root) {
        labels.roman = 'V'
        labels.objKeyChord = 'fiveChord'
        labels.scaleDegree = '5'
        labels.chordDegree = '5'
        labels.interval = 'p5'
        labels.chordQuality = ['5', 'power chord' ]
    }
    if (intervals.aug5[tonic] === root) {
        labels.roman = `${sharp}V`
        labels.objKeyChord = 'fiveChord'
        labels.scaleDegree = `${sharp}5`
        labels.chordDegree = `${sharp}5`
        labels.interval = 'aug5'
        labels.chordQuality = 'aug'
    }
    if (intervals.min6[tonic] === root) {
        labels.roman = `${flat}VI`
        labels.objKeyChord = 'sixChord'
        labels.scaleDegree = `${flat}6`
        labels.chordDegree = `${flat}13`
        labels.interval = 'min6'
    }
    if (intervals.maj6[tonic] === root) {
        labels.roman = 'VI'
        labels.objKeyChord = 'sixChord'
        labels.scaleDegree = '6'
        labels.chordDegree = '13'
        labels.interval = 'maj6'
    }
    if (intervals.aug6[tonic] === root) {
        labels.roman = `${sharp}VI`
        labels.objKeyChord = 'sixChord'
        labels.scaleDegree = `${sharp}6`
        labels.chordDegree = `${sharp}13`
        labels.interval = 'aug6'
    }
    if (intervals.min7[tonic] === root) {
        labels.roman = `${flat}VII`
        labels.objKeyChord = 'sevenChord'
        labels.scaleDegree = `${flat}7`
        labels.chordDegree = `${flat}7`
        labels.interval = 'min7'
        labels.seventhChordNotation = '7'
    }
    if (intervals.maj7[tonic] === root) {
        labels.roman = 'VII'
        labels.objKeyChord = 'sevenChord'
        labels.scaleDegree = '7'
        labels.chordDegree = '7'
        labels.interval = 'maj7'
        labels.seventhChordNotation = 'maj7'
    }
    return labels;
}


var makeChordsFor7NoteScale = (scale, tonic, name) => {
    var chords = {};
    var failed = []
    for (var i = 0; i < scale.length; i++) {
      let mode = shiftNotes(scale[i], scale)
      let chordTones = [mode[0], mode[2], mode[4], mode[6]];
      let tensions = [mode[1], mode[3], mode[5]];
      let quartalVoicing = [mode[0], mode[3], mode[6], mode[2]]
      let fifthsVoicing = [mode[0], mode[4], mode[1], mode[5]]


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


      var chordName = ''
      var chordLabel = ''
      var chordQ = ''
      var seventhName = ''
      var seventhLabel = ''
      var seventhChord = ''


      var labelsOne = findLabels(chordTones[0], tonic)
      var key = labelsOne.objKeyChord

      chords[key] = {}
      chords[key].root = {}
      chords[key].root.note = chordTones[0]
      chords[key].root.chordDegree = 'root'
      chords[key].root.scaleDegree = labelsOne.scaleDegree
      chordName += chordTones[0]
      chordLabel += labelsOne.roman

      var labelsThree = findLabels(chordTones[1], chordTones[0])
      var labelsThreeTonic = findLabels(chordTones[1], tonic)
      chords[key].third = {}
      chords[key].third.note = chordTones[1]
      chords[key].third.chordDegree = labelsThree.chordDegree
      chords[key].third.scaleDegree = labelsThreeTonic.scaleDegree

      var labelsFive = findLabels(chordTones[2], chordTones[0])
      var labelsFiveTonic = findLabels(chordTones[2], tonic)
      chords[key].fifth = {}
      chords[key].fifth.note = chordTones[2]
      chords[key].fifth.chordDegree = labelsFive.chordDegree
      chords[key].fifth.scaleDegree = labelsFiveTonic.scaleDegree

      var labelsSeven = findLabels(chordTones[3], chordTones[0])
      var labelsSevenTonic = findLabels(chordTones[3], tonic)
      chords[key].seventh = {}
      chords[key].seventh.note = chordTones[3]
      chords[key].seventh.chordDegree = labelsSeven.chordDegree
      chords[key].seventh.scaleDegree = labelsFiveTonic.scaleDegree

      chords[key].tensions = {}

      var labelsNine = findLabels(tensions[0], chordTones[0])
      var labelsNineTonic =  findLabels(tensions[0], tonic)

      chords[key].tensions.nine = {}
      chords[key].tensions.nine.note = tensions[0]
      chords[key].tensions.nine.chordDegree = labelsNine.chordDegree
      chords[key].tensions.nine.scaleDegree = labelsNineTonic.scaleDegree
      if (labelsNine.interval === 'min2') {
          chords[key].tensions.nine.avoid = true
      } else {
          chords[key].tensions.nine.avoid = false
      }

      var labelsEleven = findLabels(tensions[1], chordTones[0])
      var labelsElevenTonic =  findLabels(tensions[1], tonic)
      var checkAvoid = findLabels(tensions[1], chordTones[1])
      chords[key].tensions.eleven = {}
      chords[key].tensions.eleven.note = tensions[0]
      chords[key].tensions.eleven.chordDegree = labelsEleven.chordDegree
      chords[key].tensions.eleven.scaleDegree = labelsElevenTonic.scaleDegree
      if (checkAvoid.interval === 'min2') {
          chords[key].tensions.eleven.avoid = true
      } else {
          chords[key].tensions.eleven.avoid = false
      }

      var labelsThirteen = findLabels(tensions[2], chordTones[0])
      var labelsThirteenTonic =  findLabels(tensions[2], tonic)
      checkAvoid = findLabels(tensions[2], chordTones[2])
      chords[key].tensions.thirteen = {}
      chords[key].tensions.thirteen.note = tensions[0]
      chords[key].tensions.thirteen.chordDegree = labelsThirteen.chordDegree
      chords[key].tensions.thirteen.scaleDegree = labelsThirteenTonic.scaleDegree
      if (checkAvoid.interval === 'min2') {
          chords[key].tensions.thirteen.avoid = true
      } else {
          chords[key].tensions.thirteen.avoid = false
            }


    // if (labelsThree.chordQuality === 'min' && labelsFive.chordDegree === '5') {
        // chordQ = 'minor'
        // chordName += 'min'
        // chordLabel += 'min'
    // }
    // if (labelsThree.chordQuality === 'min' && labelsFive.chordQuality === 'dim') {
    //     chordQ = 'diminished'
    //     chordName += 'dim'
    //     chordLabel += 'dim'
    // }
    // if (labelsThree.chordQuality === 'maj' && labelsFive.chordQuality === 'aug') {
    //     chordQ = 'augmented'
    //     chordName += 'aug'
    //     chordLabel += 'aug'
    // }
    // if (labelsThree.chordQuality === 'maj' && labelsFive.chordDegree === '5') {
    //     chordQ = 'major'
    // }


    // if (chordQ === 'major' && labelsSeven.seventhChordNotation === 'maj7' ) {
    //     seventhName = `${chordName}maj7`
    //     seventhLabel = `${chordLabel}maj7`
    //     seventhChord = 'major 7'
    // }
    // if (chordQ === 'major' && labelsSeven.seventhChordNotation === '7' ) {
    //     seventhName = `${chordName}7`
    //     seventhLabel = `${chordLabel}7`
    //     seventhChord = 'dominant 7'
    // }
    // if (chordQ === 'minor' && labelsSeven.seventhChordNotation === '7' ) {
    //     seventhName = `${chordName}7`
    //     seventhLabel = `${chordLabel}7`
    //     seventhChord = 'minor 7'
    // }
    // if (chordQ === 'minor' && labelsSeven.seventhChordNotation === 'maj7' ) {
    //     seventhName = `${chordName}(maj7)`
    //     seventhLabel = `${chordLabel}(maj7)`
    //     seventhChord = 'minor(major 7)'
    // }

    // if (chordQ === 'diminished' && labelsSeven.seventhChordNotation === '7' ) {
    //     seventhName = `${chordName}7(${flat}5)`
    //     seventhLabel = `${chordLabel}7(${flat}5)`
    //     seventhChord = [`minor 7(${flat}5)`, 'half diminished']
    // }

    // var dimCheck = findLabels(chordTones[0], chordTones[3])
    // if (chordQ === 'diminished' && (dimCheck.interval === 'aug2' || dimCheck.interval === 'min3')) {
    //     seventhName = `${chordName}7`
    //     seventhLabel = `${chordLabel}7`
    //     seventhChord = 'full diminished 7'
    // }

    // if (chordQ === 'augmented' && labelsSeven.seventhChordNotation === 'maj7' ) {
    //     seventhName = `${chordName}maj7`
    //     seventhLabel = `${chordLabel}maj7`
    //     seventhChord = ' augmented major 7'
    // }

    /*

    */


    chords[key].triadName = chordName
    chords[key].triadLabel = chordLabel
    chords[key].chordQuality = chordQ
    chords[key].seventhName = seventhName
    chords[key].seventhLabel = seventhLabel
    chords[key].seventhQuality = seventhChord
}

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
    flatSix: 'Me',
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




// *********** COMPARE SCALES AND SEVENTHS2 BUTTONS  *********************

//   <button
//   onClick={(e) => this.handleSecondScale(e)}
//   className="seventh_button"
//   id="second_button">
//   {this.state.secondButton}
// </button>
// {this.state.second === true ?
//   <button
//     onClick={(e) => this.handleMoreSevenths(e)}
//     className="seventh_button"
//     id="sevenths_button2">
//     {this.state.moreSeventhsButton}
//   </button>
//   : null
// }

//************************************************************************ */


    addChordType('majorTriad', ['one', 'three', 'five'], '')
    addChordType('maj7', ['one', 'three', 'five', 'seven'], 'maj7')
    addChordType('domniant', ['one', 'three', 'five', 'flatSeven'], '7')
    addChordType('minorTriad:', ['one', 'flatThree', 'five'], 'm',)
    addChordType('min7', ['one', 'flatThree', 'five', 'flatSeven'], 'm7')
    addChordType('min7FlatFive', ['one', 'flatThree', 'flatFive', 'flatSeven'], `m7(${flat}5)`)
    addChordType('dimTriad', ['one', 'flatThree', 'flatFive'], `${dim}`)
    addChordType('fullDim', ['one', 'flatThree', 'flatFive', 'dblFlat7'], `${dim}7`)
    addChordType('augTriad', ['one', 'three', 'sharpFive'], '+')
    addChordType('augmaj7', ['one', 'three', 'sharpFive', 'sevn'], '+(maj7)')
    addChordType('dominantSharp5', ['one', 'three', 'sharpFive', 'flatSevn'], `7${sharp}5`)
    addChordType('maj7Flat5', ['one', 'three', 'flatFive', 'seven'], `maj7(${flat}5)`)
    addChordType('dominantFlat5', ['one', 'three', 'flatFive', 'flatSeven'], `7(${flat}5)`)
    addChordType('sus2', ['one', 'two', 'five'], 'sus2')
    addChordType('sus4', ['one', 'four', 'five'], 'sus4')
    addChordType('add9', ['one', 'three','five', 'two'], 'add9', true)
    addChordType('addSharp11', ['one', 'three','five', 'sharpFour'], `add${sharp}11`, true)
    addChordType('major6', ['one', 'three', 'five', 'six'], '6')
    addChordType('minor6', ['one', 'flatThree', 'five', 'six'], 'm6')
    addChordType('dominantSus4', ['one', 'four', 'five', 'flatSeven'], `7sus4`)
    addChordType('maj7Sus4', ['one', 'four', 'five', 'seven'], `maj7(sus4)`)
    addChordType('maj9', ['one', 'three', 'five', 'seven', 'two'], 'maj9', true)
    addChordType('maj7AddSharp11',['one', 'three', 'five', 'seven', 'sharpFour'], `maj7(${sharp}11)`, true)
    addChordType('maj7Add13', ['one', 'three', 'five', 'seven', 'six'], `maj7(13)`, true)
    addChordType('majSharp11', ['one', 'three', 'five', 'seven', 'two', 'sharpFour'], `maj7(9, ${sharp}11)`, true)
    addChordType('maj7AddSharp11Add13', ['one', 'three', 'five', 'seven', 'sharpFour', 'six'],  `maj7(${sharp}11, 13)`, true)
    addChordType('maj9Add13', ['one', 'three', 'five', 'seven', 'two', 'six'], `maj7(9, 13)`, true)
    addChordType('maj13', ['one', 'three', 'five', 'seven', 'two', 'sharpFour', 'six'], 'maj13', true)
    addChordType('min9', ['one', 'flatThree', 'five', 'flatSeven', 'two'], `m7(9)`, true)
    addChordType('minAdd11', ['one', 'flatThree', 'five', 'flatSeven', 'four'], `m7(11)`, true)
    addChordType('minAdd13', ['one', 'flatThree', 'five', 'flatSeven', 'six'], `m7(13)`, true)
    addChordType('min11', ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four'], `m7(9, 11)`, true)
    addChordType('minAdd9Add1', ['one', 'flatThree', 'five', 'flatSeven', 'two', 'six'], `m7(9, 13)`, true)
    addChordType('minAdd11Add13', ['one', 'flatThree', 'five', 'flatSeven', 'four', 'six'], `m7(11, 13)`, true)
    addChordType('min13', ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four', 'six'], `m7(9, 11, 13)`, true)
    addChordType('dominant9', ['one', 'three', 'five', 'flatSeven', 'two'], `7(9)`, true)
    addChordType('dominantFlat9', ['one', 'three', 'five', 'flatSeven', 'flatTwo'], `7(${flat}9)`, true)
    addChordType('dominantSharp9', ['one', 'three', 'five', 'flatSeven', 'sharpTwo'], `7(${sharp}9)`, true)
    addChordType('dominantAddSharp11', ['one', 'three', 'five', 'flatSeven', 'sharpFour'], `7(${sharp}11)`, true)
    addChordType('dominantSharp11', ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour'], `7(9, ${sharp}11), true`)
    addChordType('dominantAdd13', ['one', 'three', 'five', 'flatSeven', 'six'], `7(13)`, true)
    addChordType('dominantAddFlat13', ['one', 'three', 'five', 'flatSeven', 'flatSix'], `7(${flat}13)`, true)
    addChordType('dominant13', ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'six'], `7(9, ${sharp}11, 13)`, true)
    addChordType('dominantFlat13', ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'flatSix'], `7(9, ${sharp}11, ${flat}13)`, true)
    addChordType('dominant9Flat13', ['one', 'three', 'five', 'flatSeven', 'two', 'flatSix'], `7(9, ${flat}13)`, true)
    addChordType('dominant9Add13', ['one', 'three', 'five', 'flatSeven', 'two', 'six'], `7(9, 13)`, true)
    addChordType('dominantFlat9Flat13', ['one', 'three', 'five', 'flatSeven', 'flatTwo', 'flatSix'], `7(${flat}9, ${flat}13)`, true)
    addChordType('majorPentatonic', ['one', 'two', 'three', 'five', 'six'], 'maj Pentatonic')
    addChordType('minorPentatonic', ['one', 'flatThree', 'four', 'five', 'flatSeven'], 'min Pentatonic')
    addChordType('dominantPentatonic', ['one', 'two', 'three', 'five', 'flatSeven'], 'Dominant Pentatonic')
    addChordType('lydianDominantPentatonic', ['one', 'two', 'three', 'sharpFour', 'flatSeven'], `Dominant${sharp}4 Pentatonic`)
    addChordType('majSharp4Pentatonic', ['one', 'two', 'three', 'sharpFour', 'six'], `maj${sharp}4 Pentatonic`)
    addChordType('alteredPentatonic', ['one', 'flatTwo', 'three', 'five', 'flatSeven'], ` Altered Pentatonic`)
    addChordType('minorMaj7Pentatonic', ['one', 'flatThree', 'four', 'five', 'seven'], 'm(maj7 Pentatonic')
    addChordType('egyptianPentatonic', ['one', 'two', 'four', 'five', 'flatSeven'], 'Egyptian Pentatonic')
    addChordType('japanesePentatonic', ['one', 'flatTwo', 'four', 'five', 'flatSix'], 'Japanese Pentatonic')


    var chordTypes = {
        majorTriad: {
            notes: ['one', 'three', 'five'],
            label: '',
        },
        maj7: {
            notes: ['one', 'three', 'five', 'seven'],
            label: 'maj7',
        },
        domniant: {
            notes: ['one', 'three', 'five', 'flatSeven'],
            label: '7',
        },
        minorTriad: {
            notes: ['one', 'flatThree', 'five'],
            label: 'm',
        },
        min7: {
            notes: ['one', 'flatThree', 'five', 'flatSeven'],
            label: 'm7',
        },
        min7FlatFive: {
            notes: ['one', 'flatThree', 'flatFive', 'flatSeven'],
            label: `m7(${flat}5)`,
        },
        dimTriad: {
            notes: ['one', 'flatThree', 'flatFive'],
            label: `${dim}`,
        },
        fullDim: {
            notes: ['one', 'flatThree', 'flatFive', 'dblFlat7'],
            label: `${dim}7`,
        },
        augTriad: {
            notes: ['one', 'three', 'sharpFive'],
            label: '+',
        },
        augmaj7: {
            notes: ['one', 'three', 'sharpFive', 'sevn'],
            label: '+(maj7)',
        },
        dominantSharp5: {
            notes: ['one', 'three', 'sharpFive', 'flatSevn'],
            label: `7${sharp}5`,
        },
        maj7Flat5: {
            notes: ['one', 'three', 'flatFive', 'seven'],
            label: `maj7(${flat}5)`,
        },
        dominantFlat5: {
            notes: ['one', 'three', 'flatFive', 'flatSeven'],
            label: `7(${flat}5)`,
        },
        sus2: {
            notes: ['one', 'two', 'five'],
            label: 'sus2',
        },
        sus4: {
            notes: ['one', 'four', 'five'],
            label: 'sus4',
        },
        add9: {
            notes: ['one', 'three','five', 'two'],
            label: 'add9',
            useUpper: true
        },
        addSharp11: {
            notes: ['one', 'three','five', 'sharpFour'],
            label: `add${sharp}11`,
            useUpper: true
        },
        major6: {
            notes: ['one', 'three', 'five', 'six'],
            label: '6',
        },
        minor6: {
            notes: ['one', 'flatThree', 'five', 'six'],
            label: 'm6',
        },
        dominantSus4: {
            notes: ['one', 'four', 'five', 'flatSeven'],
            label: `7sus4`,
        },
        maj7Sus4: {
            notes: ['one', 'four', 'five', 'seven'],
            label: `maj7(sus4)`,
        },
        maj9: {
            notes: ['one', 'three', 'five', 'seven', 'two'],
            label: 'maj9',
            useUpper: true
        },
        maj7AddSharp11: {
            notes:['one', 'three', 'five', 'seven', 'sharpFour'],
            label: `maj7(${sharp}11)`,
            useUpper: true
        },
        maj7Add13: {
            notes: ['one', 'three', 'five', 'seven', 'six'],
            label: `maj7(13)`,
            useUpper: true
        },
        majSharp11: {
            notes: ['one', 'three', 'five', 'seven', 'two', 'sharpFour'],
            label: `maj7(9, ${sharp}11)`,
            useUpper: true
        },
        maj7AddSharp11Add13: {
            notes: ['one', 'three', 'five', 'seven', 'sharpFour', 'six'],
            label:  `maj7(${sharp}11, 13)`,
            useUpper: true
        },
        maj9Add13: {
            notes: ['one', 'three', 'five', 'seven', 'two', 'six'],
            label: `maj7(9, 13)`,
            useUpper: true
        },
        maj13: {
            notes: ['one', 'three', 'five', 'seven', 'two', 'sharpFour', 'six'],
            label: 'maj13',
            useUpper: true
        },
        min9: {
            notes: ['one', 'flatThree', 'five', 'flatSeven', 'two'],
            label: `m7(9)`,
            useUpper: true
        },
        minAdd11: {
            notes: ['one', 'flatThree', 'five', 'flatSeven', 'four'],
            label: `m7(11)`,
            useUpper: true
        },
        minAdd13: {
            notes: ['one', 'flatThree', 'five', 'flatSeven', 'six'],
            label: `m7(13)`,
            useUpper: true
        },
        min11: {
            notes: ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four'],
            label: `m7(9, 11)`,
            useUpper: true
        },
        minAdd9Add13:{
            notes: ['one', 'flatThree', 'five', 'flatSeven', 'two', 'six'],
            label: `m7(9, 13)`,
            useUpper: true
        },
        minAdd11Add13: {
            notes: ['one', 'flatThree', 'five', 'flatSeven', 'four', 'six'],
            label: `m7(11, 13)`,
            useUpper: true
        },
        min13: {
            notes: ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four', 'six'],
            label: `m7(9, 11, 13)`,
            useUpper: true
        },
        dominant9: {
            notes: ['one', 'three', 'five', 'flatSeven', 'two'],
            label: `7(9)`,
            useUpper: true
        },
        dominantFlat9: {
            notes: ['one', 'three', 'five', 'flatSeven', 'flatTwo'],
            label: `7(${flat}9)`,
            useUpper: true
        },
        dominantSharp9: {
            notes: ['one', 'three', 'five', 'flatSeven', 'sharpTwo'],
            label: `7(${sharp}9)`,
            useUpper: true
        },
        dominantAddSharp11: {
            notes: ['one', 'three', 'five', 'flatSeven', 'sharpFour'],
            label: `7(${sharp}11)`,
            useUpper: true
        },
        dominantSharp11: {
            notes: ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour'],
            label: `7(9, ${sharp}11)`,
            useUpper: true
        },
        dominantAdd13: {
            notes: ['one', 'three', 'five', 'flatSeven', 'six'],
            label: `7(13)`,
            useUpper: true
        },
        dominantAddFlat13: {
            notes: ['one', 'three', 'five', 'flatSeven', 'flatSix'],
            label: `7(${flat}13)`,
            useUpper: true
        },
        dominant13: {
            notes: ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'six'],
            label: `7(9, ${sharp}11, 13)`,
            useUpper: true
        },
        dominantFlat13: {
            notes: ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'flatSix'],
            label: `7(9, ${sharp}11, ${flat}13)`,
            useUpper: true
        },
        dominant9Flat13: {
            notes: ['one', 'three', 'five', 'flatSeven', 'two', 'flatSix'],
            label: `7(9, ${flat}13)`,
            useUpper: true
        },
        dominant9Add13: {
            notes: ['one', 'three', 'five', 'flatSeven', 'two', 'six'],
            label: `7(9, 13)`,
            useUpper: true
        },
        dominantFlat9Flat13: {
            notes: ['one', 'three', 'five', 'flatSeven', 'flatTwo', 'flatSix'],
            label: `7(${flat}9, ${flat}13)`,
            useUpper: true
        },
        majorPentatonic: {
            notes: ['one', 'two', 'three', 'five', 'six'],
            label: 'maj Pentatonic',
        },
        minorPentatonic: {
            notes: ['one', 'flatThree', 'four', 'five', 'flatSeven'],
            label: 'min Pentatonic',
        },
        dominantPentatonic: {
            notes: ['one', 'two', 'three', 'five', 'flatSeven'],
            label: 'Dominant Pentatonic',
        },
        lydianDominantPentatonic: {
            notes: ['one', 'two', 'three', 'sharpFour', 'flatSeven'],
            label: `Dominant ${sharp}4 Pentatonic`,
        },
        majSharp4Pentatonic: {
            notes: ['one', 'two', 'three', 'sharpFour', 'six'],
            label: `maj${sharp}4 Pentatonic`,
        },
        alteredPentatonic: {
            notes: ['one', 'flatTwo', 'three', 'five', 'flatSeven'],
            label: ` Altered Pentatonic`
        },
        minorMaj7Pentatonic: {
            notes: ['one', 'flatThree', 'four', 'five', 'seven'],
            label: 'm(maj7 Pentatonic',
        },
        egyptianPentatonic: {
            notes: ['one', 'two', 'four', 'five', 'flatSeven'],
            label: 'Egyptian Pentatonic',
        },
        japanesePentatonic: {
            notes: ['one', 'flatTwo', 'four', 'five', 'flatSix'],
            label: 'Japanese Pentatonic',
        },
      };


      handleTonicChange={this.handleTonicChange}
      handleTonicMenuWindow={this.handleTonicMenuWindow}
      showTonicMenu={this.state.showTonicMenu}

      handleScaleChange={this.handleScaleChange}
      handleScaleMenuWindow={this.handleScaleMenuWindow}
      showScaleMenu={this.state.showScaleMenu}

      this.handleTonicMenuWindow()
      this.handleScaleMenuWindow()
      this.state.scaleName

      handleTonicChange={this.handleTonicChange2}

      handleScaleChange={this.handleScaleChange2}

      handleNeckNotes={this.handleNeckNotes}
      name={'labelMenu'}
      noteNameToggle={this.state.noteNameToggle}
      scaleDegreeToggle={this.state.scaleDegreeToggle}
      solfegeToggle={this.state.solfegeToggle}

      this.handleSevenths(e)

      this.state.defaultType
      this.state.chordOneSelected
      this.state.chordDegButtonClass

      this.handleChordDegrees()
      this.resetChords()
      this.resetAll()

      showAlter={this.state.showAlter}
      handleAlterChord={this.handleAlterChord}
      handleAlterChordWindow={this.handleAlterChordWindow}
      currentCard={this.state.currentCard}
      list={this.state.currentList}
      root={this.state.chordOptRoot}

      keyCenter={this.state.keyCenter}
      sevenths={this.state.sevenths}
      selectChord={this.selectChord}
      selectChord2={this.selectChord2}
      currentChord={this.state.selectedChord}
      currentChord2={this.state.selectedChord2}
      chordOneSelected={this.state.chordOneSelected}
      chordTwoSelected={this.state.chordTwoSelected}
      currentChordTones={this.state.currentChordTones}
      currentChordTones2={this.state.currentChordTones2}
      compareChords={this.state.compare}
      handleLock={this.handleSingleOrCompare}
      handleAlterChordWindow={this.handleAlterChordWindow}
      resetCard={this.resetCard}
      setTones={this.setTones}
      setTones2={this.setTones2}
      displayChordDegrees={this.state.displayChordDegrees}
      handleChordFocus={this.handleChordFocus}
      chordFocus={this.state.chordFocus}
      ch0={this.state.ch0}
      ch1={this.state.ch1}
      ch2={this.state.ch2}
      ch3={this.state.ch3}
      ch4={this.state.ch4}
      ch5={this.state.ch5}
      ch6={this.state.ch6}
      ch0Alt={this.state.ch0Alt}
      ch1Alt={this.state.ch1Alt}
      ch2Alt={this.state.ch2Alt}
      ch3Alt={this.state.ch3Alt}
      ch4Alt={this.state.ch4Alt}
      ch5Alt={this.state.ch5Alt}
      ch6Alt={this.state.ch6Alt}




      handleTonicChange={this.handleTonicChange}
      handleTonicMenuWindow={this.handleTonicMenuWindow}
      showTonicMenu={this.state.showTonicMenu}

      handleScaleChange={this.handleScaleChange}
      handleScaleMenuWindow={this.handleScaleMenuWindow}
      showScaleMenu={this.state.showScaleMenu}

      this.handleTonicMenuWindow()
      this.handleScaleMenuWindow()
      this.state.scaleName

      handleTonicChange={this.handleTonicChange2}

      handleScaleChange={this.handleScaleChange2}

      handleNeckNotes={this.handleNeckNotes}
      name={'labelMenu'}
      noteNameToggle={this.state.noteNameToggle}
      scaleDegreeToggle={this.state.scaleDegreeToggle}
      solfegeToggle={this.state.solfegeToggle}

      this.handleSevenths(e)

      this.state.defaultType
      this.state.chordOneSelected
      this.state.chordDegButtonClass

      this.handleChordDegrees()
      this.resetChords()
      this.resetAll()

      showAlter={this.state.showAlter}
      handleAlterChord={this.handleAlterChord}
      handleAlterChordWindow={this.handleAlterChordWindow}
      currentCard={this.state.currentCard}
      list={this.state.currentList}
      root={this.state.chordOptRoot}

      keyCenter={this.state.keyCenter}
      sevenths={this.state.sevenths}
      selectChord={this.selectChord}
      selectChord2={this.selectChord2}
      currentChord={this.state.selectedChord}
      currentChord2={this.state.selectedChord2}
      chordOneSelected={this.state.chordOneSelected}
      chordTwoSelected={this.state.chordTwoSelected}
      currentChordTones={this.state.currentChordTones}
      currentChordTones2={this.state.currentChordTones2}
      compareChords={this.state.compare}
      handleLock={this.handleSingleOrCompare}
      handleAlterChordWindow={this.handleAlterChordWindow}
      resetCard={this.resetCard}
      setTones={this.setTones}
      setTones2={this.setTones2}
      displayChordDegrees={this.state.displayChordDegrees}
      handleChordFocus={this.handleChordFocus}
      chordFocus={this.state.chordFocus}
      ch0={this.state.ch0}
      ch1={this.state.ch1}
      ch2={this.state.ch2}
      ch3={this.state.ch3}
      ch4={this.state.ch4}
      ch5={this.state.ch5}
      ch6={this.state.ch6}
      ch0Alt={this.state.ch0Alt}
      ch1Alt={this.state.ch1Alt}
      ch2Alt={this.state.ch2Alt}
      ch3Alt={this.state.ch3Alt}
      ch4Alt={this.state.ch4Alt}
      ch5Alt={this.state.ch5Alt}
      ch6Alt={this.state.ch6Alt}
    /


    {second ?
        <React.Fragment>
          <TonicMenu
            handleTonicChange={handleTonicChange2}
            name={'tonic_options_right'}
          />
          <ScalesMenu
            handleScaleChange={handleScaleChange2}
            name={'scale_options_right'}
          />
        </React.Fragment>
        : null
      }