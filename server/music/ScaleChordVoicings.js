const { sharp, flat } = require('./Constants.js');

module.exports.voicingsList = [
  [
    ['one', 'two', 'five'],
    'sus2',
    ' sus2',
    null,
    null,
    'sus2',
    false
  ],

  [
    ['one', 'four', 'five'],
    'sus4',
    ' sus4',
    null,
    null,
    'sus4',
    false
  ],

  [
    ['one', 'three','five', 'two'],
    'add9',
    ' add9',
    null,
    null,
    'add9',
    true
  ],

  [
    ['one', 'three','five', 'sharpFour'],
    'addSharp11',
    ` add${sharp}11`,
    null,
    null,
    `add${sharp}11`,
    true
  ],

  [
    ['one', 'three', 'five', 'six'],
    'major6',
    '6',
    null,
    null,
    '6',
    false
  ],

  [
    ['one', 'flatThree', 'five', 'six'],
    'minor6',
    'm6',
    null,
    null,
    '6',
    false
  ],

  [
    ['one', 'four', 'five', 'flatSeven'],
    `dominantSus4`,
    `7sus4`,
    null,
    null,
    `7sus4`,
    false
  ],

  [
    ['one', 'four', 'five', 'seven'],
    `maj7Sus4`,
    `maj7(sus4)`,
    null,
    null,
    `maj7(sus4)`,
    false
  ],

  [
    ['one', 'three', 'five', 'seven', 'two'],
    'maj9',
    `maj7(9)`,
    null,
    null,
    `maj7(9)`,
    true
  ],

  [
    ['one', 'three', 'five', 'seven', 'sharpFour'],
    'maj7AddSharp11',
    `maj7(${sharp}11)`,
    null,
    null,
    `maj7(${sharp}11)`,
    true
  ],

  [
    ['one', 'three', 'five', 'seven', 'six'],
    'maj7Add13',
    `maj7(13)`,
    null,
    null,
    `maj7(13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'seven', 'two', 'sharpFour'],
    'majSharp11',
    `maj7(9, ${sharp}11)`,
    null,
    null,
    `maj7(9, ${sharp}11)`,
    true
  ],

  [
    ['one', 'three', 'five', 'seven', 'sharpFour', 'six'],
    'maj7AddSharp11Add13',
    `maj7(${sharp}11, 13)`,
    null,
    null,
    `maj7(${sharp}11, 13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'seven', 'two', 'six'],
    'maj9Add13',
    `maj7(9, 13)`,
    null,
    null,
    `maj7(9, 13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'seven', 'two', 'sharpFour', 'six'],
    'maj13',
    `maj7(9, ${sharp}11, 13)`,
    null,
    null,
    `maj7(9, ${sharp}11, 13)`,
    true
  ],

  [
    ['one', 'flatThree', 'five', 'flatSeven', 'two'],
    'min9',
    `m7(9)`,
    null,
    null,
    `m7(9)`,
    true
  ],

  [
    ['one', 'flatThree', 'five', 'flatSeven', 'four'],
    'minAdd11',
    `m7(11)`,
    null,
    null,
    `m7(11)`,
    true
  ],

  [
    ['one', 'flatThree', 'five', 'flatSeven', 'six'],
    'minAdd13',
    `m7(13)`,
    null,
    null,
    `m7(13)`,
    true
  ],

  [
    ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four'],
    'min11',
    `m7(9, 11)`,
    null,
    null,
    `m7(9, 11)`,
    true
  ],

  [
    ['one', 'flatThree', 'five', 'flatSeven', 'two', 'six'],
    'minAdd9Add13',
    `m7(9, 13)`,
    null,
    null,
    `m7(9, 13)`,
    true
  ],

  [
    ['one', 'flatThree', 'five', 'flatSeven', 'four', 'six'],
    'minAdd11Add13',
    `m7(11, 13)`,
    null,
    null,
    `m7(11, 13)`,
    true
  ],

  [
    ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four', 'six'],
    'min13',
    `m7(9, 11, 13)`,
    null,
    null,
    `m7(9, 11, 13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'two'],
    'dominant9',
    `7(9)`,
    null,
    null,
    `7(9)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'flatTwo'],
    'dominantFlat9',
    `7(${flat}9)`,
    null,
    null,
    `7(${flat}9)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'sharpTwo'],
    'dominantSharp9',
    `7(${sharp}9)`,
    null,
    null,
    `7(${sharp}9)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'sharpFour'],
    'dominantAddSharp11',
    `7(${sharp}11)`,
    null,
    null,
    `7(${sharp}11)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour'],
    'dominantSharp11',
    `7(9, ${sharp}11)`,
    null,
    null,
    `7(9, ${sharp}11)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'six'],
    'dominantAdd13',
    `7(13)`,
    null,
    null,
    `7(13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'flatSix'],
    'dominantAddFlat13',
    `7(${flat}13)`,
    null,
    null,
    `7(${flat}13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'six'],
    'dominant13',
    `7(9, ${sharp}11, 13)`,
    null,
    null,
    `7(9, ${sharp}11, 13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'flatSix'],
    'dominantFlat13',
    `7(9, ${sharp}11, ${flat}13)`,
    null,
    null,
    `7(9, ${sharp}11, ${flat}13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'two', 'flatSix'],
    'dominant9Flat13',
    `7(9, ${flat}13)`,
    null,
    null,
    `7(9, ${flat}13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'two', 'six'],
    'dominant9Add13',
    `7(9, 13)`,
    null,
    null,
    `7(9, 13)`,
    true
  ],

  [
    ['one', 'three', 'five', 'flatSeven', 'flatTwo', 'flatSix'],
    'dominantFlat9Flat13',
    `7(${flat}9, ${flat}13)`,
    null,
    null,
    `7(${flat}9, ${flat}13)`,
    true
  ],

  [
    ['one', 'two', 'three', 'five', 'six'],
    'majorPentatonic',
    '  Major Pentatonic',
    null,
    'Major Pentatonic',
    'maj Pentatonic',
    false
  ],

  [
    ['one', 'flatThree', 'four', 'five', 'flatSeven'],
    'minorPentatonic',
    '  Minor Pentatonic',
    null,
    'Minor Pentatonic',
    'm Pentatonic',
    false
  ],

  [
    ['one', 'two', 'three', 'five', 'flatSeven'],
    'dominantPentatonic',
    '  Dominant Pentatonic',
    null,
    'Dominant Pentatonic',
    '',
    false
  ],

  [
    ['one', 'two', 'three', 'sharpFour', 'flatSeven'],
    'lydianDomninantPentatonic',
    `  Dominant ${sharp}4 Pentatonic`,
    null,
    'Lydian Dominant Pentatonic',
    'Lydian Dominant Pentatonic',
    false
  ],

  [
    ['one', 'two', 'three', 'sharpFour', 'six'],
    'majSharp4Pentatonic',
    `  Major ${sharp}4 Pentatonic`,
    null,
    `Major ${sharp}4 Pentatonic`,
    `maj${sharp}4 Pentatonic`,
    false
  ],

  [
    ['one', 'flatTwo', 'three', 'five', 'flatSeven'],
    'alteredPentatonic',
    `  Altered Pentatonic`,
    null,
    `Altered Pentatonic`,
    `Altered Pentatonic`,
    false
  ],

  [
    ['one', 'flatThree', 'four', 'five', 'seven'],
    'minorMaj7Pentatonic',
    '  Minor Major 7 Pentatonic',
    null,
    'Minor Major 7 Pentatonic',
    'm(maj7) Pentatonic',
    false
  ],

  [
    ['one', 'two', 'four', 'five', 'flatSeven'],
    'egyptianPentatonic',
    '  Egyptian Pentatonic',
    null,
    'Egyptian Pentatonic',
    '',
    false
  ],

  [
    ['one', 'flatTwo', 'four', 'five', 'flatSix'],
    'japanesePentatonic',
    '  Japanese Pentatonic',
    null,
    'Japanese Pentatonic',
    '',
    false
  ]
];

