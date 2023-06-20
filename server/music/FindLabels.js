const { sharp, flat, dim, dblFlat, intervals } = require('./Constants.js');


module.exports.findLabels = (root, tonic) => {

  const getLabels = (roman, key, scDeg, chDeg, sol, interval) => (
    {
      roman: roman,
      objKeyChord: key,
      scaleDegree: scDeg,
      chordDegree: chDeg,
      solfege: sol,
      interval: interval,
    }
  )

  labels = {root: root};
  if (tonic === root) {
    return {
      ...labels,
      ...getLabels('I', 'oneChord', '1', '1', 'Do', 'Unison/Octave')
    }
  }
  if (intervals.aug1[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${sharp}I`, 'oneChord', `${sharp}1`, `${sharp}1`, 'Di', 'aug1')
    }
  }
  if (intervals.min2[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${flat}II`, 'twoChord', `${flat}2`, `${flat}9`, 'Ra', 'min2')
    }
  }
  if (intervals.maj2[tonic] === root) {
    return {
      ...labels,
      ...getLabels('II', 'twoChord', '2', '9', 'Re', 'maj2')
    }
  }
  if (intervals.aug2[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${sharp}II`, 'twoChord', `${sharp}2`, `${sharp}9`, 'Ri', 'aug2')
    }
  }
  if (intervals.min3[tonic] === root) {
    labels = {
      ...labels,
      ...getLabels(`${flat}III`,  'threeChord',  `${flat}3`,  `${flat}3`,  'Me',  'min3'),
      chordQuality: 'min'
    }
  }
  if (intervals.maj3[tonic] === root) {
    return {
      ...labels,
      ...getLabels('III', 'threeChord', '3', '3', 'Mi', 'maj3'),
      chordQuality: 'maj'
    }
  }
  if (intervals.p4[tonic] === root) {
    return {
      ...labels,
      ...getLabels('IV', 'fourChord', '4', '11', 'Fa', 'p4')
    }
  }
  if (intervals.aug4[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${sharp}IV`, 'fourChord', `${sharp}4`, `${sharp}11`, 'Fi', 'aug4')
    }
  }
  if (intervals.dim5[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${flat}V`, 'fiveChord', `${flat}5`, `${flat}5`, 'dim5', 'Se'),
      chordQuality: 'dim'
    }
  }
  if (intervals.p5[tonic] === root) {
    return {
      ...labels,
      ...getLabels('V', 'fiveChord', '5', '5', 'Sol', 'p5'),
      chordQuality: ['5', 'power chord' ]
    }
  }
  if (intervals.aug5[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${sharp}V`, 'fiveChord', `${sharp}5`, `${sharp}5`, 'Si', 'aug5'),
      chordQuality: 'aug'
    }
  }
  if (intervals.min6[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${flat}VI`, 'sixChord', `${flat}6`, `${flat}13`, 'Le', 'min6')
    }
  }
  if (intervals.maj6[tonic] === root) {
    return {
      ...labels,
      ...getLabels('VI', 'sixChord', '6', '13', 'La', 'maj6')
    }
  }
  if (intervals.aug6[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${sharp}VI`, 'sixChord', `${sharp}6`, `${sharp}13`, 'Li', 'aug6')
    }
  }
  if (intervals.dim7[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${dblFlat}VII`, 'sevenChord', `${dblFlat}7`, `${dblFlat}7`, 'Ta', `${dim}7`),
      seventhChordNotation: `${dim}7`
    }
  }
  if (intervals.min7[tonic] === root) {
    return {
      ...labels,
      ...getLabels(`${flat}VII`, 'sevenChord', `${flat}7`, `${flat}7`, 'Te', 'min7'),
      seventhChordNotation: '7'
    }
  }
  if (intervals.maj7[tonic] === root) {
    return {
      ...labels,
      ...getLabels('VII', 'sevenChord', '7', '7', 'Ti', 'maj7'),
      seventhChordNotation: 'maj7'
    }
  }
  return labels;
}

