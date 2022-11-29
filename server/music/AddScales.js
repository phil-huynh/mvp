const Constants = require('./Constants.js');
const AddScales = require('./AddScalesFunction.js');

const { allScales } = Constants;
const { add7NoteScale } = AddScales;


add7NoteScale(
  'major',
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
  true
);

add7NoteScale(
  'natural minor',
  ['one', 'two', 'flatThree', 'four', 'five', 'flatSix', 'flatSeven'],
  true
);

add7NoteScale(
  'harmonic minor',
  ['one', 'two', 'flatThree', 'four', 'five', 'flatSix', 'seven'],
  true
);

add7NoteScale(
  'melodic minor',
  ['one', 'two', 'flatThree', 'four', 'five', 'six', 'seven'],
  true
);

add7NoteScale(
  'dorian',
  ['one', 'two', 'flatThree', 'four', 'five', 'six', 'flatSeven'],
  true
);

add7NoteScale(
  'phrygian',
  ['one', 'flatTwo', 'flatThree', 'four', 'five', 'flatSix', 'flatSeven'],
  true
);

add7NoteScale(
  'lydian',
  ['one', 'two', 'three', 'sharpFour', 'five', 'six', 'seven'],
  true
);

add7NoteScale(
  'mixolydian',
  ['one', 'two', 'three', 'four', 'five', 'six', 'flatSeven'],
  true
);

add7NoteScale(
  'locrian',
  ['one', 'flatTwo', 'flatThree', 'four', 'flatFive', 'flatSix', 'flatSeven'],
  true
);

add7NoteScale(
  'persian',
  ['one', 'flatTwo', 'three', 'four', 'flatFive', 'flatSix', 'flatSeven'],
  true
);

add7NoteScale(
  'double harmonic major',
  ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'flatSeven'],
  true
); //byzantine see wiki

add7NoteScale(
  'hungarian gypsy minor',
  ['one', 'two', 'flatThree', 'sharpFour', 'five', 'flatSix', 'seven'],
  true
);

add7NoteScale(
  'romanian minor',
  ['one', 'two', 'flatThree', 'sharpFour', 'five', 'six', 'flatSeven'],
  true); //ukrainian minor


add7NoteScale(
  'romanian major',
  ['one', 'flatTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'],
  true
);

add7NoteScale(
  'lydian dominant',
  ['one', 'two', 'three', 'sharpFour', 'five', 'six', 'flatSeven'],
  true
);

add7NoteScale(
  'ukrainian dorian',
  ['one', 'two', 'flatThree', 'sharpFour', 'five', 'six', 'flatSeven'],
  true
);

add7NoteScale(
  'phrygian dominant',
  ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'flatSeven'],
  true
);

add7NoteScale(
  'lydian augmented',
  ['one', 'two', 'three', 'sharpFour', 'sharpFive', 'six', 'seven'],
  true
);

add7NoteScale(
  'locrian natural6',
  ['one', 'flatTwo', 'flatThree', 'four', 'flatFive', 'six', 'flatSeven'],
  true
);

add7NoteScale(
  'ionian sharp5',
  ['one', 'two', 'three', 'four', 'sharpFive', 'six', 'seven'],
  true
);

add7NoteScale(
  'phrygian dorian',
  ['one', 'flatTwo', 'flatThree', 'four', 'five', 'six', 'flatSeven'],
  true
);

add7NoteScale(
  'mixolydian flat13',
  ['one', 'two', 'three', 'four', 'five', 'flatSix', 'flatSeven']
  ,true
);

add7NoteScale(
  'aeoleon flat5',
  ['one', 'two', 'flatThree', 'four', 'flatFive', 'flatSix', 'flatSeven'],
  true
);

add7NoteScale(
  'gypsy',
  ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'seven'],
  true
);

add7NoteScale(
  'hungarian major',
  ['one', 'sharpTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'],
  true
);

add7NoteScale(
  'neapolitan major',
  ['one', 'flatTwo', 'flatThree', 'four', 'five', 'six', 'seven'],
  true
);

add7NoteScale(
  'neapolitan minor',
  ['one', 'flatTwo', 'flatThree', 'four', 'five', 'flatSix', 'seven'],
  true
);

add7NoteScale(
  'arabian',
  ['one', 'two', 'three', 'four', 'flatFive', 'flatSix', 'flatSeven'],
  true
);

module.exports.allScales = allScales