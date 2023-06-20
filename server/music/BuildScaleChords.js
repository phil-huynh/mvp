const { sharp, flat, dim, dblFlat, dblSharp, shiftNotes, allScales, intervals } = require('./Constants.js');
const { voicingsList } = require('./ScaleChordVoicings.js');
const { findLabels } = require('./FindLabels.js')
const { processScaleChords } = require('./ProcessScaleChord.js')
const { addVoicing } = require('./AddVoicing.js')


module.exports.makeChordsFor7NoteScale = (scale, tonic) => {
  const chords = {};
  const failed = [];

  for (var i = 0; i < scale.length; i++) {

    const mode = shiftNotes(scale[i], scale);
    const [root, nine, third, eleven, fifth, thirteen, seventh] = mode;

    const chordTones = [
      root,
      third,
      fifth,
      seventh
    ];

    const tensions = [
      nine,
      eleven,
      thirteen
    ];

    const rootRoman = findLabels(root, tonic).roman;
    const key = findLabels(root, tonic).objKeyChord;
    const seventhRoman = findLabels(seventh, root).roman

    const addChordTone = (note) => (
      {
        note: note,
        chordDegree: note === root ? 'root' : findLabels(note, root).chordDegree,
        scaleDegree: findLabels(note, tonic).scaleDegree,
        solfege: findLabels(note, tonic).solfege,
      }
    )

    const addTension = (note, avoid) => (
      {
        note: note,
        chordDegree: findLabels(note, root).chordDegree,
        scaleDegree: findLabels(note, tonic).scaleDegree,
        solfege: findLabels(note, tonic).solfege,
        avoid: findLabels(note, avoid) === 'min2' ? true : false
      }
    );

    chords[key] = {};
    const thisChord = chords[key]

    if (allScales[root]){
      thisChord.relativeDegrees = allScales[root].scaleDegrees;
      let relative = thisChord.relativeDegrees
      thisChord.notesToDegrees = {};
      Object.keys(relative).forEach(degr => thisChord.notesToDegrees[relative[degr]] = degr)
    }
    else failed.push(root);

    thisChord.chordTones = chordTones;
    const notesToDegrees = thisChord.notesToDegrees;

    const chordTonesRef = !notesToDegrees ? [] :
    [
      notesToDegrees[root],
      notesToDegrees[third],
      notesToDegrees[fifth],
      notesToDegrees[seventh]
    ];

    const tensionsRef = !notesToDegrees ? [] :
    [
      notesToDegrees[nine],
      notesToDegrees[eleven],
      notesToDegrees[thirteen]
    ];

    const modeObj = {};
    notesToDegrees ? mode.forEach(note => modeObj[notesToDegrees[note]] = true) : null;

    chords[key] = {
      ...thisChord,
      root: addChordTone(root),
      third: addChordTone(third),
      fifth: addChordTone(fifth),
      seventh: addChordTone(seventh),
    }

    chords[key].options = {
      list: [],
      triad: { notes: [root, third, fifth] },
      seventhChord: { notes: [...chordTones] },
      shell: {notes: [root, third, seventh]},
      octaves: {
        notes: [root],
        name: `${root} Octaves`,
        label: `${rootRoman} Octaves`,
      },
    };

    const options = chords[key].options
    options.list.push(['  Octaves', 'octaves']);

    addVoicing(['one', 'five'], 'powerChord', '  Power Chord', null, null, '5', false, root, rootRoman, thisChord, options, modeObj);
    addVoicing(['one', 'flatFive'], 'tritone', '  Tritone', 'tritone', 'tritone', 'tritone', false,  root, rootRoman, thisChord, options, modeObj);

    const {
      chordName,
      chordLabel,
      chordQ,
      seventhName,
      seventhLabel,
      seventhChord
    } = (processScaleChords(chordTonesRef, root, rootRoman, options, seventhRoman))

    options.triad = {
      ...options.triad,
      name: chordName,
      label: chordLabel,
      quality: chordQ,
      voicingObjKey: 'triad',
    };

    options.seventhChord = {
      ...options.seventhChord,
      name: seventhName,
      label: seventhLabel,
      quality: seventhChord,
      voicingObjKey: 'seventhChord',
    };

    options.shell = {
      ...options.shell,
      name: `${seventhName}(shell)`,
      label: `${seventhLabel}(shell)`,
      quality: seventhChord,
      voicingObjKey: 'shell',
    };

    chords[key].tensions = {
      notes: tensions,
      nine: addTension(nine, root),
      eleven: addTension(eleven, third),
      thirteen: addTension(thirteen, fifth),
    };

    voicingsList.forEach((voicing) => { addVoicing(...voicing, root, rootRoman, thisChord, options, modeObj); });

    options.quartalVoicing = {
      notes:  [ thirteen, nine, fifth, root ],
      label: '4ths voicing',
      voicingObjKey: 'quartalVoicing'
    };
    options.list.push([`  Quartal Voicing`, 'quartalVoicing']);

    options.fifthsVoicing = {
      notes: [ root, fifth, nine ],
      label: '5ths voicing',
      voicingObjKey: 'fifthsVoicing'
    };
    options.list.push([`  Fifths Voicing`, 'fifthsVoicing']);
  };
  return chords
};
