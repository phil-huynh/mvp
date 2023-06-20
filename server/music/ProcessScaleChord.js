const { sharp, flat, dim } = require('./Constants.js');

module.exports.processScaleChords = (chordTonesRef, root, chordLabel, options, sevenRoman) => {
  let chordName = root
  let chordQ = ''
  let seventhName = ''
  let seventhLabel = ''
  let seventhChord = ''

  if (chordTonesRef) {
    if (chordTonesRef.includes('three')) {

      if (chordTonesRef.includes('five')) {
        chordQ = 'major'
        options.list.push([' Triad', 'triad']);

        if (chordTonesRef.includes('seven')) {
          seventhName = `${chordName}maj7`;
          seventhLabel = `${chordLabel}maj7`;
          seventhChord = 'major 7';
          options.list.push(['maj7', 'seventhChord']);
          options.list.push(['maj7 (shell)', 'shell']);
        }
        if (chordTonesRef.includes('flatSeven')) {
          seventhName = `${chordName}7`;
          seventhLabel = `${chordLabel}7`;
          seventhChord = 'dominant 7';
          options.list.push(['7', 'seventhChord']);
          options.list.push(['7 (shell)', 'shell']);
        }
      }

      if (chordTonesRef.includes('sharpFive')) {
        chordQ = 'augmented';
        chordName += '+';
        chordLabel += '+';
        options.list.push(['+ Triad', 'triad']);

        if (chordTonesRef.includes('seven')) {
          seventhName = `${chordName}(maj7)`;
          seventhLabel = `${chordLabel}(maj7)`;
          seventhChord = ' augmented major 7';
          options.list.push(['+(maj7)', 'seventhChord']);
        }
        if (chordTonesRef.includes('flatSeven')) {
          seventhName = `${chordName}7(${sharp}5)`;
          seventhLabel = `${chordLabel}7(${sharp}5)`;
          seventhChord = `dominant 7(${sharp}5)`;
          options.list.push([`7(${sharp}5)`, 'seventhChord']);
        }
      }

      if (chordTonesRef.includes('flatFive')) {
        chordQ = `major(${flat}5)`;
        chordName += `maj(${flat}5)`;
        chordLabel += `maj(${flat}5)`;
        options.list.push([`maj ${flat}5 Triad`, 'triad']);

        if (chordTonesRef.includes('seven')) {
          seventhName = `${chordName}maj7(${flat}5)`;
          seventhLabel = `${chordLabel}maj7(${flat}5)`;
          seventhChord = `major 7(${flat}5)`;
          options.list.push([`maj7(${flat}5)`, 'seventhChord']);
        }
        if (chordTonesRef.includes('flatSeven')) {
          seventhName = `${chordName}7(${flat}5)`;
          seventhLabel = `${chordLabel}7(${flat}5)`;
          seventhChord = `dominant 7(${flat}5)`;
          options.list.push([`7(${flat}5)`, 'seventhChord']);
        }
      }
    }

    if (chordTonesRef.includes('flatThree')) {

      if (chordTonesRef.includes('five')) {
        chordQ = 'minor';
        chordName += 'm';
        chordLabel += 'm';
        options.list.push(['m Triad', 'triad']);

        if (chordTonesRef.includes('seven')) {
          seventhName = `${chordName}(maj7)`;
          seventhLabel = `${chordLabel}(maj7)`;
          seventhChord = 'minor(major 7)';
          options.list.push([`m(maj7)`, 'seventhChord']);
          options.list.push([`m(maj7) (shell)`, 'shell']);
        }
        if (chordTonesRef.includes('flatSeven')) {
          seventhName = `${chordName}7`;
          seventhLabel = `${chordLabel}7`;
          seventhChord = 'minor 7';
          options.list.push([`m7`, 'seventhChord']);
          options.list.push([`m7 (shell)`, 'shell']);
        }
      }

      if (chordTonesRef.includes('flatFive')) {
        chordQ = 'diminished';
        chordName += `${dim}`;
        chordLabel += `${dim}`;
        options.list.push([`${dim} Triad`, 'triad']);

        if (chordTonesRef.includes('flatSeven')) {
          seventhName = `${root}m7(${flat}5)`;
          seventhLabel = `${sevenRoman}m7(${flat}5)`;
          seventhChord = `minor 7(${flat}5)`;
          options.list.push([`m7(${flat}5)`, 'seventhChord']);
        }
        if (chordTonesRef.includes('dblFlatSeven')) {
          seventhName = `${chordName}7`;
          seventhLabel = `${chordLabel}7`;
          seventhChord = 'full diminished 7';
          options.list.push([`${dim}7`, 'seventhChord']);
        }
      }
    }
  }
  return (
    {
      chordName: chordName,
      chordLabel: chordLabel,
      chordQ: chordQ,
      seventhName: seventhName,
      seventhLabel: seventhLabel,
      seventhChord: seventhChord,
    }
  )
}

