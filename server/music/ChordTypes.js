const Constants = require('./Constants.js');

const {sharp, flat, dim} = Constants;

const chordTypes = (() => {
  let chordTypes = {};

  const addChordType = (key, degrees, label, useUpper)=> {
    chordTypes[key] = {};
    chordTypes[key].degrees = degrees;
    chordTypes[key].label = label;
    chordTypes[key].useUpper = useUpper;
  }

  addChordType(
    'maj',
    ['one', 'three', 'five'],
    '',
    false
  );

  addChordType(
    'maj7',
    ['one', 'three', 'five', 'seven'],
    'maj7',
    false
  );

  addChordType(
    '7',
    ['one', 'three', 'five', 'flatSeven'],
    '7',
    false
  );

  addChordType(
    'min',
    ['one', 'flatThree', 'five'],
    'm',
    false
  );

  addChordType(
    'm7',
    ['one', 'flatThree', 'five', 'flatSeven'],
    'm7',
    false
  );

  addChordType(
    'm(maj7)',
    ['one', 'flatThree', 'five', 'seven'],
    'm(maj7)',
    false
  );

  addChordType(
    `m7(${flat}5)`,
    ['one', 'flatThree', 'flatFive', 'flatSeven'],
    `m7(${flat}5)`,
    false
  );

  addChordType(
    `${dim}`,
    ['one', 'flatThree', 'flatFive'],
    `${dim}`,
    false
  );

  addChordType(
    `${dim}7`,
    ['one', 'flatThree', 'flatFive', 'dblFlatSeven'],
    `${dim}7`,
    false
  );

  addChordType(
    `${dim}(maj7)`,
    ['one', 'flatThree', 'flatFive', 'seven'],
    `${dim}(maj7)`,
    false
  );

  addChordType(
    '+',
    ['one', 'three', 'sharpFive'],
    '+',
    false
  );

  addChordType(
    '+(maj7)',
    ['one', 'three', 'sharpFive', 'seven'],
    '+(maj7)',
    false
  );

  addChordType(
    `7(${sharp}5)`,
    ['one', 'three', 'sharpFive', 'flatSeven'],
    `7(${sharp}5)`,
    false
  );

  addChordType(
    `maj(${flat}5)`,
    ['one', 'three', 'flatFive'],
    `maj(${flat}5)`,
    false
  );

  addChordType(
    `maj7(${flat}5)`,
    ['one', 'three', 'flatFive', 'seven'],
    `maj7(${flat}5)`,
    false
  );

  addChordType(
    `7(${flat}5)`,
    ['one', 'three', 'flatFive', 'flatSeven'],
    `7(${flat}5)`,
    false
  );

  addChordType(
    'sus2',
    ['one', 'two', 'five'],
    'sus2',
    false
  );

  addChordType(
    'sus4',
    ['one', 'four', 'five'],
    'sus4',
    false
  );

  addChordType(
    'add9',
    ['one', 'three','five', 'two'],
    'add9',
    true
  );

  addChordType(
    `add${sharp}11`,
    ['one', 'three','five', 'sharpFour'],
    `add${sharp}11`,
    true
  );

  addChordType(
    '6',
    ['one', 'three', 'five', 'six'],
    '6',
    false
  );

  addChordType(
    'm6',
    ['one', 'flatThree', 'five', 'six'],
    'm6',
    false
  );

  addChordType(
    '7sus4',
    ['one', 'four', 'five', 'flatSeven'],
    `7sus4`,
    false
  );

  addChordType(
    'maj7(sus4)',
    ['one', 'four', 'five', 'seven'],
    `maj7(sus4)`,
    false
  );

  addChordType(
    'maj9',
    ['one', 'three', 'five', 'seven', 'two'],
    'maj9',
    true
  );

  addChordType(
    `maj7(${sharp}11)`,
    ['one', 'three', 'five', 'seven', 'sharpFour'],
    `maj7(${sharp}11)`,
    true
  );

  addChordType(
    'maj7(13)',
    ['one', 'three', 'five', 'seven', 'six'],
    `maj7(13)`,
    true
  );

  addChordType(
    `maj7(9, ${sharp}11)`,
    ['one', 'three', 'five', 'seven', 'two', 'sharpFour'],
    `maj7(9, ${sharp}11)`,
    true
  );

  addChordType(
    `maj7(${sharp}11, 13)`,
    ['one', 'three', 'five', 'seven', 'sharpFour', 'six'],
    `maj7(${sharp}11, 13)`,
    true
  );

  addChordType(
    'maj7(9, 13)',
    ['one', 'three', 'five', 'seven', 'two', 'six'],
    `maj7(9, 13)`,
    true
  );

  addChordType(
    'maj13',
    ['one', 'three', 'five', 'seven', 'two', 'sharpFour', 'six'],
    'maj13',
    true
  );

  addChordType(
    'm9',
    ['one', 'flatThree', 'five', 'flatSeven', 'two'],
    `m9`,
    true
  );

  addChordType(
    'm7(11)',
    ['one', 'flatThree', 'five', 'flatSeven', 'four'],
    `m7(11)`,
    true
  );

  addChordType(
    'm7(13)',
    ['one', 'flatThree', 'five', 'flatSeven', 'six'],
    `m7(13)`,
    true
  );

  addChordType(
    'm7(9, 11)',
    ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four'],
    `m7(9, 11)`,
    true
  );

  addChordType(
    'm7(9, 13)',
    ['one', 'flatThree', 'five', 'flatSeven', 'two', 'six'],
    `m7(9, 13)`,
    true
  );

  addChordType(
    'm7(11, 13)',
    ['one', 'flatThree', 'five', 'flatSeven', 'four', 'six'],
    `m7(11, 13)`,
    true
  );

  addChordType(
    'm7(9, 11, 13)',
    ['one', 'flatThree', 'five', 'flatSeven', 'two', 'four', 'six'],
    `m7(9, 11, 13)`,
    true
  );

  addChordType(
    '7(9)',
    ['one', 'three', 'five', 'flatSeven', 'two'],
    `7(9)`,
    true
  );

  addChordType(
    `7(${flat}9)`,
    ['one', 'three', 'five', 'flatSeven', 'flatTwo'],
    `7(${flat}9)`,
    true
  );

  addChordType(
    `7(${sharp}9)`,
    ['one', 'three', 'five', 'flatSeven', 'sharpTwo'],
    `7(${sharp}9)`,
    true
  );

  addChordType(
    `7(${sharp}11)`,
    ['one', 'three', 'five', 'flatSeven', 'sharpFour'],
    `7(${sharp}11)`,
    true
  );

  addChordType(
    `7(9, ${sharp}11)`,
    ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour'],
    `7(9, ${sharp}11)`,
    true
  );

  addChordType(
    '7(13)',
    ['one', 'three', 'five', 'flatSeven', 'six'],
    `7(13)`,
    true
  );

  addChordType(
    `7(${flat}13)`,
    ['one', 'three', 'five', 'flatSeven', 'flatSix'],
    `7(${flat}13)`,
    true
  );

  addChordType(
    `7(9, ${sharp}11, 13)`,
    ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'six'],
    `7(9, ${sharp}11, 13)`,
    true
  );

  addChordType(
    `7(9, ${sharp}11, ${flat}13)`,
    ['one', 'three', 'five', 'flatSeven', 'two', 'sharpFour', 'flatSix'],
    `7(9, ${sharp}11, ${flat}13)`,
    true
  );

  addChordType(
    `7(9, ${flat}13)`,
    ['one', 'three', 'five', 'flatSeven', 'two', 'flatSix'],
    `7(9, ${flat}13)`,
    true
  );

  addChordType(
    '7(9, 13)',
    ['one', 'three', 'five', 'flatSeven', 'two', 'six'],
    `7(9, 13)`,
    true
  );

  addChordType(
    `7(${flat}9, ${flat}13)`,
    ['one', 'three', 'five', 'flatSeven', 'flatTwo', 'flatSix'],
    `7(${flat}9, ${flat}13)`,
    true
  );

  addChordType(
    'maj Pentatonic',
    ['one', 'two', 'three', 'five', 'six'],
    'maj Pentatonic',
    false
  );

  addChordType(
    'min Pentatonic',
    ['one', 'flatThree', 'four', 'five', 'flatSeven'],
    'min Pentatonic',
    false
  );

  addChordType(
    'Dominant Pentatonic',
    ['one', 'two', 'three', 'five', 'flatSeven'],
    'Dominant Pentatonic',
    false
  );

  addChordType(
    `Dominant ${sharp}4 Pentatonic`,
    ['one', 'two', 'three', 'sharpFour', 'flatSeven'],
    `Dominant ${sharp}4 Pentatonic`,
    false
  );

  addChordType(
    `maj ${sharp}4 Pentatonic`,
    ['one', 'two', 'three', 'sharpFour', 'six'],
    `maj ${sharp}4 Pentatonic`,
    false
  );

  addChordType(
    'Altered Pentatonic',
    ['one', 'flatTwo', 'three', 'five', 'flatSeven'],
    `Altered Pentatonic`,
    false
  );

  addChordType(
    'm(maj7) Pentatonic',
    ['one', 'flatThree', 'four', 'five', 'seven'],
    'm(maj7) Pentatonic',
    false
  );

  addChordType(
    'Egyptian Pentatonic',
    ['one', 'two', 'four', 'five', 'flatSeven'],
    'Egyptian Pentatonic',
    false
  );

  addChordType(
    'Japanese Pentatonic',
    ['one', 'flatTwo', 'four', 'five', 'flatSix'],
    'Japanese Pentatonic',
    false
  );

  addChordType(
    'Whole Tone Scale',
    ['one', 'two', 'three', 'sharpFour', 'sharpFive', 'sharpSix'],
    'Whole Tone Scale',
    false
  );

  addChordType(
    'Whole/Half Scale',
    ['one', 'two', 'flatThree', 'four', 'flatFive', 'sharpFive', 'six', 'seven'],
    'Whole/Half Scale',
    false
  );

  addChordType(
    'Half/Whole Scale',
    ['one', 'flatTwo', 'sharpTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'],
    'Half Whole',
    false
  );

  addChordType(
    'Altered Scale',
    ['one', 'flatTwo', 'sharpTwo', 'three', 'flatFive', 'sharpFive', 'flatSeven'],
    'Altered Scale',
    false
  );

  return chordTypes;
})()

module.exports.chordTypes = chordTypes;
