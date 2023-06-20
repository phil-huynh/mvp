const { allScales }  = require('./Constants.js');
const { add7NoteScale } = require('./AddScalesFunction.js');


const scaleList = [
  [
    'major',
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
    true
  ],
  [
    'natural minor',
    ['one', 'two', 'flatThree', 'four', 'five', 'flatSix', 'flatSeven'],
    true
  ],
  [
    'harmonic minor',
    ['one', 'two', 'flatThree', 'four', 'five', 'flatSix', 'seven'],
    true
  ],
  [
    'melodic minor',
    ['one', 'two', 'flatThree', 'four', 'five', 'six', 'seven'],
    true
  ],
  [
    'dorian',
    ['one', 'two', 'flatThree', 'four', 'five', 'six', 'flatSeven'],
    true
  ],
  [
    'phrygian',
    ['one', 'flatTwo', 'flatThree', 'four', 'five', 'flatSix', 'flatSeven'],
    true
  ],
  [
    'lydian',
    ['one', 'two', 'three', 'sharpFour', 'five', 'six', 'seven'],
    true
  ],
  [
    'mixolydian',
    ['one', 'two', 'three', 'four', 'five', 'six', 'flatSeven'],
    true
  ],
  [
    'locrian',
    ['one', 'flatTwo', 'flatThree', 'four', 'flatFive', 'flatSix', 'flatSeven'],
    true
  ],
  [
    'persian',
    ['one', 'flatTwo', 'three', 'four', 'flatFive', 'flatSix', 'flatSeven'],
    true
  ],
  [
    'double harmonic major',
    ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'flatSeven'],
    true
  ],
  [
    'hungarian gypsy minor',
    ['one', 'two', 'flatThree', 'sharpFour', 'five', 'flatSix', 'seven'],
    true
  ],
  [
    'romanian minor',
    ['one', 'two', 'flatThree', 'sharpFour', 'five', 'six', 'flatSeven'],
    true
  ],
  [
    'romanian major',
    ['one', 'flatTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'],
    true
  ],
  [
    'lydian dominant',
    ['one', 'two', 'three', 'sharpFour', 'five', 'six', 'flatSeven'],
    true
  ],
  [
    'ukrainian dorian',
    ['one', 'two', 'flatThree', 'sharpFour', 'five', 'six', 'flatSeven'],
    true
  ],
  [
    'phrygian dominant',
    ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'flatSeven'],
    true
  ],
  [
    'lydian augmented',
    ['one', 'two', 'three', 'sharpFour', 'sharpFive', 'six', 'seven'],
    true
  ],
  [
    'locrian natural6',
    ['one', 'flatTwo', 'flatThree', 'four', 'flatFive', 'six', 'flatSeven'],
    true
  ],
  [
    'ionian sharp5',
    ['one', 'two', 'three', 'four', 'sharpFive', 'six', 'seven'],
    true
  ],
  [
    'phrygian dorian',
    ['one', 'flatTwo', 'flatThree', 'four', 'five', 'six', 'flatSeven'],
    true
  ],
  [
    'mixolydian flat13',
    ['one', 'two', 'three', 'four', 'five', 'flatSix', 'flatSeven'],
    true
  ],
  [
    'aeoleon flat5',
    ['one', 'two', 'flatThree', 'four', 'flatFive', 'flatSix', 'flatSeven'],
    true
  ],
  [
    'gypsy',
    ['one', 'flatTwo', 'three', 'four', 'five', 'flatSix', 'seven'],
    true
  ],
  [
    'hungarian major',
    ['one', 'sharpTwo', 'three', 'sharpFour', 'five', 'six', 'flatSeven'],
    true
  ],
  [
    'neapolitan major',
    ['one', 'flatTwo', 'flatThree', 'four', 'five', 'six', 'seven'],
    true
  ],
  [
    'neapolitan minor',
    ['one', 'flatTwo', 'flatThree', 'four', 'five', 'flatSix', 'seven'],
    true
  ],
  [
    'arabian',
    ['one', 'two', 'three', 'four', 'flatFive', 'flatSix', 'flatSeven'],
    true
  ],
]
scaleList.forEach(scale => add7NoteScale(...scale))

module.exports.allScales = allScales