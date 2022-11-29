const Constants = require('./Constants.js');
const Voicings = require('./ScaleChordVoicings.js');

const { sharp, flat, dim, dblFlat, dblSharp, shiftNotes, allScales, intervals } = Constants;
const { voicingsList } = Voicings;

const findLabels = (root, tonic) => {
  labels = {};
  labels.root = root;
  if (tonic === root) {
    labels.roman = 'I';
    labels.objKeyChord = 'oneChord';
    labels.scaleDegree = '1';
    labels.chordDegree = '1';
    labels.solfege = 'Do';
    labels.interval = 'Unison/Octave';
  }
  if (intervals.aug1[tonic] === root) {
    labels.roman = `${sharp}I`;
    labels.objKeyChord = 'oneChord';
    labels.scaleDegree = `${sharp}1`;
    labels.chordDegree = `${sharp}1`;
    labels.solfege = 'Di';
    labels.interval = 'aug1';
  }
  if (intervals.min2[tonic] === root) {
    labels.roman = `${flat}II`;
    labels.objKeyChord = 'twoChord';
    labels.scaleDegree = `${flat}2`;
    labels.chordDegree = `${flat}9`;
    labels.solfege = 'Ra';
    labels.interval = 'min2';
  }
  if (intervals.maj2[tonic] === root) {
    labels.roman = 'II';
    labels.objKeyChord = 'twoChord';
    labels.scaleDegree = '2';
    labels.chordDegree = '9';
    labels.solfege = 'Re';
    labels.interval = 'maj2';
  }
  if (intervals.aug2[tonic] === root) {
    labels.roman = `${sharp}II`;
    labels.objKeyChord = 'twoChord';
    labels.scaleDegree = `${sharp}2`;
    labels.chordDegree = `${sharp}9`;
    labels.solfege = 'Ri';
    labels.interval = 'aug2';
  }
  if (intervals.min3[tonic] === root) {
    labels.roman = `${flat}III`;
    labels.objKeyChord = 'threeChord';
    labels.scaleDegree = `${flat}3`;
    labels.chordDegree = `${flat}3`;
    labels.solfege = 'Me';
    labels.interval = 'min3';
    labels.chordQuality = 'min';
  }
  if (intervals.maj3[tonic] === root) {
    labels.roman = 'III';
    labels.objKeyChord = 'threeChord';
    labels.scaleDegree = '3';
    labels.chordDegree = '3';
    labels.solfege = 'Mi';
    labels.interval = 'maj3';
    labels.chordQuality = 'maj';
  }
  if (intervals.p4[tonic] === root) {
    labels.roman = 'IV';
    labels.objKeyChord = 'fourChord';
    labels.scaleDegree ='4';
    labels.chordDegree ='11';
    labels.solfege = 'Fa';
    labels.interval = 'p4';
  }
  if (intervals.aug4[tonic] === root) {
    labels.roman = `${sharp}IV`;
    labels.objKeyChord = 'fourChord';
    labels.scaleDegree = `${sharp}4`;
    labels.chordDegree = `${sharp}11`;
    labels.solfege = 'Fi';
    labels.interval = 'aug4';
  }
  if (intervals.dim5[tonic] === root) {
    labels.roman = `${flat}V`;
    labels.objKeyChord = 'fiveChord';
    labels.scaleDegree = `${flat}5`;
    labels.chordDegree = `${flat}5`;
    labels.interval = 'dim5';
    labels.solfege = 'Se';
    labels.chordQuality = 'dim';
  }
  if (intervals.p5[tonic] === root) {
    labels.roman = 'V';
    labels.objKeyChord = 'fiveChord';
    labels.scaleDegree = '5';
    labels.chordDegree = '5';
    labels.solfege = 'Sol';
    labels.interval = 'p5';
    labels.chordQuality = ['5', 'power chord' ];
  }
  if (intervals.aug5[tonic] === root) {
    labels.roman = `${sharp}V`;
    labels.objKeyChord = 'fiveChord';
    labels.scaleDegree = `${sharp}5`;
    labels.chordDegree = `${sharp}5`;
    labels.solfege = 'Si';
    labels.interval = 'aug5';
    labels.chordQuality = 'aug';
  }
  if (intervals.min6[tonic] === root) {
    labels.roman = `${flat}VI`;
    labels.objKeyChord = 'sixChord';
    labels.scaleDegree = `${flat}6`;
    labels.chordDegree = `${flat}13`;
    labels.solfege = 'Le';
    labels.interval = 'min6';
  }
  if (intervals.maj6[tonic] === root) {
    labels.roman = 'VI';
    labels.objKeyChord = 'sixChord';
    labels.scaleDegree = '6';
    labels.chordDegree = '13';
    labels.solfege = 'La';
    labels.interval = 'maj6';
  }
  if (intervals.aug6[tonic] === root) {
    labels.roman = `${sharp}VI`;
    labels.objKeyChord = 'sixChord';
    labels.scaleDegree = `${sharp}6`;
    labels.chordDegree = `${sharp}13`;
    labels.solfege = 'Li';
    labels.interval = 'aug6';
  }
  if (intervals.min7[tonic] === root) {
    labels.roman = `${flat}VII`;
    labels.objKeyChord = 'sevenChord';
    labels.scaleDegree = `${flat}7`;
    labels.chordDegree = `${flat}7`;
    labels.solfege = 'Te';
    labels.interval = 'min7';
    labels.seventhChordNotation = '7';
  }
  if (intervals.maj7[tonic] === root) {
    labels.roman = 'VII';
    labels.objKeyChord = 'sevenChord';
    labels.scaleDegree = '7';
    labels.chordDegree = '7';
    labels.solfege = 'Ti';
    labels.interval = 'maj7';
    labels.seventhChordNotation = 'maj7';
  }
  return labels;
}

const makeChordsFor7NoteScale = (scale, tonic) => {
  var chords = {};
  var failed = [];
  for (var i = 0; i < scale.length; i++) {
    let mode = shiftNotes(scale[i], scale);
    let chordTones = [mode[0], mode[2], mode[4], mode[6]];
    let tensions = [mode[1], mode[3], mode[5]];
    let quartalVoicing = [mode[5], mode[1], mode[4], mode[0]];
    let fifthsVoicing = [mode[0], mode[4], mode[1]];

    let labelsOne = findLabels(chordTones[0], tonic);
    let key = labelsOne.objKeyChord;

    chords[key] = {};
    if (allScales[chordTones[0]]){
      chords[key].relativeDegrees = allScales[chordTones[0]].scaleDegrees;
      chords[key].notesToDegrees = {};
      for (let degr in chords[key].relativeDegrees) {
        chords[key].notesToDegrees[chords[key].relativeDegrees[degr]] = degr;
      }
    } else {
      failed.push(chordTones[0]);
    }

    let notesToDegrees = chords[key].notesToDegrees;
    let modeObj = {};
    let chordTonesRef;
    let tensionsRef;

    if (notesToDegrees) {
      chordTonesRef = [notesToDegrees[mode[0]], notesToDegrees[mode[2]], notesToDegrees[mode[4]], notesToDegrees[mode[6]]];
      tensionsRef = [notesToDegrees[mode[1]], notesToDegrees[mode[3]], notesToDegrees[mode[5]]];
      for (var j = 0; j < mode.length; j++) {
        modeObj[notesToDegrees[mode[j]]] = true;
      }
    }

    let [chordName, chordLabel, chordQ, seventhName, seventhLabel, seventhChord] = ['', '', '', '', '', ''];

    chords[key].chordTones = chordTones;

    chords[key].root = {};
    chords[key].root.note = chordTones[0];
    chords[key].root.chordDegree = 'root';
    chords[key].root.scaleDegree = labelsOne.scaleDegree;
    chords[key].root.solfege = labelsOne.solfege;
    chordName += chordTones[0];
    chordLabel += labelsOne.roman;
    chName = chordName.slice();
    chLabel = chordLabel.slice();

    let labelsThree = findLabels(chordTones[1], chordTones[0]);
    let labelsThreeTonic = findLabels(chordTones[1], tonic);

    chords[key].third = {};
    chords[key].third.note = chordTones[1];
    chords[key].third.chordDegree = labelsThree.chordDegree;
    chords[key].third.scaleDegree = labelsThreeTonic.scaleDegree;
    chords[key].third.solfege = labelsThreeTonic.solfege;

    let labelsFive = findLabels(chordTones[2], chordTones[0]);
    let labelsFiveTonic = findLabels(chordTones[2], tonic);

    chords[key].fifth = {};
    chords[key].fifth.note = chordTones[2];
    chords[key].fifth.chordDegree = labelsFive.chordDegree;
    chords[key].fifth.scaleDegree = labelsFiveTonic.scaleDegree;
    chords[key].fifth.solfege = labelsFiveTonic.solfege;

    let labelsSeven = findLabels(chordTones[3], chordTones[0]);
    let labelsSevenTonic = findLabels(chordTones[3], tonic);

    chords[key].seventh = {};
    chords[key].seventh.note = chordTones[3];
    chords[key].seventh.chordDegree = labelsSeven.chordDegree;
    chords[key].seventh.scaleDegree = labelsSevenTonic.scaleDegree;
    chords[key].seventh.solfege = labelsSevenTonic.solfege;

    chords[key].options = {};
    chords[key].options.list = [];
    chords[key].options.triad = {};
    chords[key].options.triad.notes = [chordTones[0], chordTones[1], chordTones[2]];
    chords[key].options.seventhChord = {};
    chords[key].options.seventhChord.notes = [chordTones[0], chordTones[1], chordTones[2], chordTones[3]];
    chords[key].options.shell = {};
    chords[key].options.shell.notes = [chordTones[0], chordTones[1], chordTones[3]];
    chords[key].options.octaves = {};
    chords[key].options.octaves.notes = [chordTones[0]];
    chords[key].options.octaves.name = `${chordName} Octaves`;
    chords[key].options.octaves.label = `${chordLabel} Octaves`;
    chords[key].options.list.push(['  Octaves', 'octaves']);

    const addVoicing = (voicing, objKey, listName, name, label, quality, useUpper) => {
      let notes = [];
      const check = (voicing) => {
        for (var k = 0; k < voicing.length; k++) {
          if(chords[key].relativeDegrees) {
            let conversion = chords[key].relativeDegrees[voicing[k]];
            notes.push(conversion);
          }
          if (!modeObj[voicing[k]]) {
            return false;
          }
        }
        return true
      }
      if(check(voicing)) {
        chords[key].options[objKey] = {};
        chords[key].options[objKey].notes = notes;
        chords[key].options[objKey].voicingObjKey = objKey;
        if (name == null) {
          chords[key].options[objKey].name = `${chName}${quality}`;
        }
        if (name != null) {
          chords[key].options[objKey].name = `${name}`;
        }
        if (label == null) {
          chords[key].options[objKey].label = `${chLabel}${quality}`;
        }
        if (label != null) {
          chords[key].options[objKey].label = `${label}`;
        }
        if (useUpper) {
          chords[key].options[objKey].useUpper = useUpper;
        }
        chords[key].options.list.push([`${listName}`, objKey]);
      }
    }

    addVoicing(['one', 'five'], 'powerChord', '  Power Chord', null, null, '5');
    addVoicing(['one', 'flatFive'], 'tritone', '  Tritone', 'tritone', 'tritone', 'tritone');

    chordTonesRef = JSON.stringify(chordTonesRef);

    if (chordTonesRef === JSON.stringify(['one', 'three', 'five', 'seven'])) {
      chordQ = 'major';
      seventhName = `${chordName}maj7`;
      seventhLabel = `${chordLabel}maj7`;
      seventhChord = 'major 7';
      chords[key].options.list.push([' Triad', 'triad']);
      chords[key].options.list.push(['maj7', 'seventhChord']);
      chords[key].options.list.push(['maj7 (shell)', 'shell']);
    } // maj7

    if (chordTonesRef === JSON.stringify(['one', 'three', 'five', 'flatSeven'])) {
      chordQ = 'major';
      seventhName = `${chordName}7`;
      seventhLabel = `${chordLabel}7`;
      seventhChord = 'dominant 7';
      chords[key].options.list.push([' Triad', 'triad']);
      chords[key].options.list.push(['7', 'seventhChord']);
      chords[key].options.list.push(['7 (shell)', 'shell']);
    } //dom7

    if (chordTonesRef === JSON.stringify(['one', 'three', 'sharpFive', 'seven'])) {
      chordQ = 'augmented';
      chordName += '+';
      chordLabel += '+';
      seventhName = `${chordName}(maj7)`;
      seventhLabel = `${chordLabel}(maj7)`;
      seventhChord = ' augmented major 7';
      chords[key].options.list.push(['+ Triad', 'triad']);
      chords[key].options.list.push(['+(maj7)', 'seventhChord']);
    } //aug(maj7)

    if (chordTonesRef === JSON.stringify(['one', 'three', 'sharpFive', 'flatSeven'])) {
      chordQ = 'augmented';
      chordName += '+';
      chordLabel += '+';
      seventhName = `${chordName}7(${sharp}5)`;
      seventhLabel = `${chordLabel}7(${sharp}5)`;
      seventhChord = `dominant 7(${sharp}5)`;
      chords[key].options.list.push(['+ Triad', 'triad']);
      chords[key].options.list.push([`7(${sharp}5)`, 'seventhChord']);
    } //dom #5

    if (chordTonesRef === JSON.stringify(['one', 'flatThree', 'five', 'seven'])) {
      chordQ = 'minor';
      chordName += 'm';
      chordLabel += 'm';
      seventhName = `${chordName}(maj7)`;
      seventhLabel = `${chordLabel}(maj7)`;
      seventhChord = 'minor(major 7)';
      chords[key].options.list.push(['m Triad', 'triad']);
      chords[key].options.list.push([`m(maj7)`, 'seventhChord']);
      chords[key].options.list.push([`m(maj7) (shell)`, 'shell']);
    } //min(maj7)

    if (chordTonesRef === JSON.stringify(['one', 'flatThree', 'five', 'flatSeven'])) {
      chordQ = 'minor';
      chordName += 'm';
      chordLabel += 'm';
      seventhName = `${chordName}7`;
      seventhLabel = `${chordLabel}7`;
      seventhChord = 'minor 7';
      chords[key].options.list.push(['m Triad', 'triad']);
      chords[key].options.list.push([`m7`, 'seventhChord']);
      chords[key].options.list.push([`m7 (shell)`, 'shell']);
    } //min7

    if (chordTonesRef === JSON.stringify(['one', 'flatThree', 'flatFive', 'flatSeven'])) {
      chordQ = 'diminished';
      chordName += `${dim}`;
      chordLabel += `${dim}`;
      seventhName = `${chordTones[0]}m7(${flat}5)`;
      seventhLabel = `${labelsSeven.roman}m7(${flat}5)`;
      seventhChord = `minor 7(${flat}5)`;
      chords[key].options.list.push([`${dim} Triad`, 'triad']);
      chords[key].options.list.push([`m7(${flat}5)`, 'seventhChord']);
    } //min7(b5)

    if (chordTonesRef === JSON.stringify(['one', 'flatThree', 'flatFive', 'dblFlatSeven'])) {
      chords[key].seventh.chordDegree = `${dblFlat}7`;
      chordQ = 'diminished';
      chordName += `${dim}`;
      chordLabel += `${dim}`;
      seventhName = `${chordName}7`;
      seventhLabel = `${chordLabel}7`;
      seventhChord = 'full diminished 7';
      chords[key].options.list.push([`${dim} Triad`, 'triad']);
      chords[key].options.list.push([`${dim}7`, 'seventhChord']);
    } // full dim

    if (chordTonesRef === JSON.stringify(['one', 'three', 'flatFive', 'flatSeven'])) {
      seventhName = `${chordName}7(${flat}5)`;
      seventhLabel = `${chordLabel}7(${flat}5)`;
      seventhChord = `dominant 7(${flat}5)`;
      chordQ = `major(${flat}5)`;
      chordName += `maj(${flat}5)`;
      chordLabel += `maj(${flat}5)`;
      chords[key].options.list.push([`maj ${flat}5 Triad`, 'triad']);
      chords[key].options.list.push([`7(${flat}5)`, 'seventhChord']);
    } // dominant (b5)

    if (chordTonesRef === JSON.stringify(['one', 'three', 'flatFive', 'seven'])) {
      seventhName = `${chordName}maj7(${flat}5)`;
      seventhLabel = `${chordLabel}maj7(${flat}5)`;
      seventhChord = `major 7(${flat}5)`;
      chordQ = `major(${flat}5)`;
      chordName += `maj(${flat}5)`;
      chordLabel += `maj(${flat}5)`;
      chords[key].options.list.push([`maj${flat}5 Triad`, 'triad']);
      chords[key].options.list.push([`maj7(${flat}5)`, 'seventhChord']);
    } // maj7 (b5)

    chords[key].options.triad.name = chordName;
    chords[key].options.triad.label = chordLabel;
    chords[key].options.triad.quality = chordQ;
    chords[key].options.triad.voicingObjKey = 'triad';
    chords[key].options.seventhChord.name = seventhName;
    chords[key].options.seventhChord.label = seventhLabel;
    chords[key].options.seventhChord.quality = seventhChord;
    chords[key].options.seventhChord.voicingObjKey = 'seventhChord';
    chords[key].options.shell.name = `${seventhName}(shell)`;
    chords[key].options.shell.label = `${seventhLabel}(shell)`;
    chords[key].options.shell.quality = seventhChord;
    chords[key].options.shell.voicingObjKey = 'shell';

    voicingsList.forEach((voicing) => { addVoicing(...voicing); });

    chords[key].options.quartalVoicing = {};
    chords[key].options.quartalVoicing.notes =  quartalVoicing;
    chords[key].options.quartalVoicing.label = '4ths voicing';
    chords[key].options.quartalVoicing.voicingObjKey = 'quartalVoicing';
    chords[key].options.fifthsVoicing = {};
    chords[key].options.fifthsVoicing.notes = fifthsVoicing;
    chords[key].options.fifthsVoicing.label = '5ths voicing';
    chords[key].options.fifthsVoicing.voicingObjKey = 'fifthsVoicing';

    chords[key].options.list.push([`  Quartal Voicing`, 'quartalVoicing']);
    chords[key].options.list.push([`  Fifths Voicing`, 'fifthsVoicing']);

    chords[key].tensions = {};
    chords[key].tensions.notes = tensions;

    let labelsNine = findLabels(tensions[0], chordTones[0]);
    let labelsNineTonic =  findLabels(tensions[0], tonic);

    chords[key].tensions.nine = {};
    chords[key].tensions.nine.note = tensions[0];
    chords[key].tensions.nine.chordDegree = labelsNine.chordDegree;
    chords[key].tensions.nine.scaleDegree = labelsNineTonic.scaleDegree;
    chords[key].tensions.nine.solfege = labelsNineTonic.solfege;

    if (labelsNine.interval === 'min2') {
      chords[key].tensions.nine.avoid = true;
    } else {
      chords[key].tensions.nine.avoid = false;
    }

    let labelsEleven = findLabels(tensions[1], chordTones[0]);
    let labelsElevenTonic =  findLabels(tensions[1], tonic);
    let checkAvoid = findLabels(tensions[1], chordTones[1]);

    chords[key].tensions.eleven = {};
    chords[key].tensions.eleven.note = tensions[1];
    chords[key].tensions.eleven.chordDegree = labelsEleven.chordDegree;
    chords[key].tensions.eleven.scaleDegree = labelsElevenTonic.scaleDegree;
    chords[key].tensions.eleven.solfege = labelsElevenTonic.solfege;

    if (checkAvoid.interval === 'min2') {
      chords[key].tensions.eleven.avoid = true;
    } else {
      chords[key].tensions.eleven.avoid = false;
    }

    let labelsThirteen = findLabels(tensions[2], chordTones[0]);
    let labelsThirteenTonic =  findLabels(tensions[2], tonic);

    checkAvoid = findLabels(tensions[2], chordTones[2]);
    chords[key].tensions.thirteen = {};
    chords[key].tensions.thirteen.note = tensions[2];
    chords[key].tensions.thirteen.chordDegree = labelsThirteen.chordDegree;
    chords[key].tensions.thirteen.scaleDegree = labelsThirteenTonic.scaleDegree;
    chords[key].tensions.thirteen.solfege = labelsThirteenTonic.solfege;
    if (checkAvoid.interval === 'min2') {
      chords[key].tensions.thirteen.avoid = true;
    } else {
      chords[key].tensions.thirteen.avoid = false;
    }
  }
  return chords;
}

module.exports.makeChordsFor7NoteScale = makeChordsFor7NoteScale;