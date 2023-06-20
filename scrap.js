const Constants = require('./Constants.js');
const Voicings = require('./ScaleChordVoicings.js');

const { sharp, flat, dim, dblFlat, dblSharp, shiftNotes, allScales, intervals } = Constants;
const { voicingsList } = Voicings;

const findLabels = (root, tonic) => {
  const getLabels = (roman, key, scDeg, chDeg, sol, interval) => (
    {
      root: root,
      roman: roman,
      objKeyChord: key,
      scaleDegree: scDeg,
      chordDegree: chDeg,
      solfege: sol,
      interval: interval,
    }
  )
  if (tonic === root) {
    return getLabels('I', 'oneChord', '1', '1', 'Do', 'Unison/Octave')
  }
  if (intervals.aug1[tonic] === root) {
    return getLabels(`${sharp}I`, 'oneChord', `${sharp}1`, `${sharp}1`, 'Di', 'aug1')
  }
  if (intervals.min2[tonic] === root) {
    return getLabels(`${flat}II`, 'twoChord', `${flat}2`, `${flat}9`, 'Ra', 'min2')
  }
  if (intervals.maj2[tonic] === root) {
    return getLabels('II', 'twoChord', '2', '9', 'Re', 'maj2')
  }
  if (intervals.aug2[tonic] === root) {
    return getLabels(`${sharp}II`, 'twoChord', `${sharp}2`, `${sharp}9`, 'Ri', 'aug2')
  }
  if (intervals.min3[tonic] === root) {
    const labels = getLabels(`${flat}III`,  'threeChord',  `${flat}3`,  `${flat}3`,  'Me',  'min3')
    labels.chordQuality = 'min';
    return labels
  }
  if (intervals.maj3[tonic] === root) {
    const labels = getLabels('III', 'threeChord', '3', '3', 'Mi', 'maj3')
    labels.chordQuality = 'maj';
    return labels
  }
  if (intervals.p4[tonic] === root) {
    return getLabels('IV', 'fourChord', '4', '11', 'Fa', 'p4')
  }
  if (intervals.aug4[tonic] === root) {
    return getLabels(`${sharp}IV`, 'fourChord', `${sharp}4`, `${sharp}11`, 'Fi', 'aug4')
  }
  if (intervals.dim5[tonic] === root) {
    const labels = getLabels(`${flat}V`, 'fiveChord', `${flat}5`, `${flat}5`, 'dim5', 'Se')
    labels.chordQuality = 'dim';
    return labels
  }
  if (intervals.p5[tonic] === root) {
    const labels = getLabels('V', 'fiveChord', '5', '5', 'Sol', 'p5')
    labels.chordQuality = ['5', 'power chord' ];
    return labels
  }
  if (intervals.aug5[tonic] === root) {
    const labels = getLabels(`${sharp}V`, 'fiveChord', `${sharp}5`, `${sharp}5`, 'Si', 'aug5')
    labels.chordQuality = 'aug';
    return labels
  }
  if (intervals.min6[tonic] === root) {
    return getLabels(`${flat}VI`, 'sixChord', `${flat}6`, `${flat}13`, 'Le', 'min6')
  }
  if (intervals.maj6[tonic] === root) {
    return getLabels('VI', 'sixChord', '6', '13', 'La', 'maj6')
  }
  if (intervals.aug6[tonic] === root) {
    return getLabels(`${sharp}VI`, 'sixChord', `${sharp}6`, `${sharp}13`, 'Li', 'aug6')
  }
  if (intervals.min7[tonic] === root) {
    const labels = getLabels(`${flat}VII`, 'sevenChord', `${flat}7`, `${flat}7`, 'Te', 'min7')
    labels.seventhChordNotation = '7';
    return labels
  }
  if (intervals.maj7[tonic] === root) {
    const labels = getLabels('VII', 'sevenChord', '7', '7', 'Ti', 'maj7')
    labels.seventhChordNotation = 'maj7';
    return labels
  }
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

    chords[key].root = {
      note: chordTones[0],
      chordDegree: 'root',
      scaleDegree: labelsOne.scaleDegree,
      solfege: labelsOne.solfege,
    };
    chordName += chordTones[0];
    chordLabel += labelsOne.roman;
    chName = chordName.slice();
    chLabel = chordLabel.slice();

    let labelsThree = findLabels(chordTones[1], chordTones[0]);
    let labelsThreeTonic = findLabels(chordTones[1], tonic);

    chords[key].third = {
      note: chordTones[1],
      chordDegree: labelsThree.chordDegree,
      scaleDegree: labelsThreeTonic.scaleDegree,
      solfege: labelsThreeTonic.solfege,
    };

    let labelsFive = findLabels(chordTones[2], chordTones[0]);
    let labelsFiveTonic = findLabels(chordTones[2], tonic);

    chords[key].fifth = {
      note: chordTones[2],
      chordDegree: labelsFive.chordDegree,
      scaleDegree: labelsFiveTonic.scaleDegree,
      solfege: labelsFiveTonic.solfege,
    };

    let labelsSeven = findLabels(chordTones[3], chordTones[0]);
    let labelsSevenTonic = findLabels(chordTones[3], tonic);

    chords[key].seventh = {
      note: chordTones[3],
      chordDegree: labelsSeven.chordDegree,
      scaleDegree: labelsSevenTonic.scaleDegree,
      solfege: labelsSevenTonic.solfege,
    };

    chords[key].options = {
      list: [],
      triad: { notes: [chordTones[0], chordTones[1], chordTones[2]] },
      seventhChord: { notes: [chordTones[0], chordTones[1], chordTones[2], chordTones[3]] },
      shell: {notes: [chordTones[0], chordTones[1], chordTones[3]]},
      octaves: {
        notes: [chordTones[0]],
        name: `${chordName} Octaves`,
        label: `${chordLabel} Octaves`,
      },

    };
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
        chords[key].options[objKey] = {
          notes: notes,
          voicingObjKey: objKey,
        };
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