const sharp = '#';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E';
const dim = '\u00B0';


const enharmonic = (note) => {
  let chromaticScale = ["C", [`C${sharp}`, `D${flat}`], "D", [`D${sharp}`, `E${flat}`], "E", "F", [`F${sharp}`, `G${flat}`], "G", [`G${sharp}`, `A${flat}`], "A", [`A${sharp}`, `B${flat}`], "B"];

  let [noteBase, distanceToMove, enharmonicEquivalent] = [note[0], 0, '']
  let indexOfNoteBase = chromaticScale.indexOf(noteBase);
  for (var i = 1; i < note.length; i++) {
      if (note[i] === `${flat}`) {
          distanceToMove--;
      } else if (note[i] === `${sharp}`) {
          distanceToMove++;
      } else if ((note[i] + note[i + 1]) === `${dblSharp}`) {
          distanceToMove += 2
      } else if ((note[i] + note[i + 1]) === `${dblFlat}`) {
          distanceToMove -= 2
      } else if ((note[i - 1] + note[i]) === `${dblSharp}`) {
          continue;
      } else if ((note[i - 1] + note[i]) === `${dblFlat}`) {
          continue;
      }
  }
  let newIndex = indexOfNoteBase + distanceToMove;
  if (newIndex >= chromaticScale.length) {
      newIndex = indexOfNoteBase - (12 - distanceToMove);
  } else if (newIndex < 0) {
      newIndex = indexOfNoteBase + (distanceToMove + 12);
  }
  if (distanceToMove === 0) {
      enharmonicEquivalent = noteBase;
  } else if (note.length > 1 && (note[1] === `${sharp}` || note.includes(`${dblSharp}`))) {
      if (distanceToMove === 1 && chromaticScale[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScale[newIndex][1];
      } else if (chromaticScale[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScale[newIndex][0];
      } else {
          enharmonicEquivalent = chromaticScale[newIndex];
      }
  } else if (note.length > 1 && note[1] === `${flat}` || note.includes(`${dblFlat}`)) {
      if (distanceToMove === -1 && chromaticScale[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScale[newIndex][0];
      } else if (chromaticScale[newIndex].length === 2) {
          enharmonicEquivalent = chromaticScale[newIndex][1];
      } else {
          enharmonicEquivalent = chromaticScale[newIndex];
      }
  }
  return enharmonicEquivalent;
};

const titles = [
    'major',
    'naturalMinor',
    'harmonicMinor',
    'melodicMinor',
    'dorian',
    'phrygian',
    'lydian',
    'mixolydian',
    'locrian',
    'persian',
    'double harmonic major',
    'hungarian gypsy minor',
    'romanian major',
    'romanian minor',
    'lydian dominant',
    'ukrainian dorian',
    'phrygian dominant',
    'lydian augmented',
    'locrian natural6',
    'ionian sharp5',
    'phrygian dorian',
    'mixolydian flat13',
    'aeoleon flat5',
    'gypsy',
    'hungarian major',
    'neapolitan major',
    'neapolitan minor',
    'arabian'
];

const labels = [
    'Major',
    'Natural Minor',
    'Harmonic Minor',
    'Melodic Minor',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolydian',
    'Locrian',
    'Persian',
    'Double Harmonic Major',
    'Hungarian Gypsy Minor',
    'Romanian Major',
    'Romanian Minor',
    'Lydian Dominant',
    'Ukrainian Dorian',
    'Phrygian Dominant',
    'Lydian Augmented',
    'Locrian #6',
    'Ionian #5',
    'Phrygian Dorian',
    'Mixolydian b13',
    'Aeoleon b13',
    'Gypsy Scale',
    'Hungarian Major',
    'Neapolitan Major',
    'Neapolitan Minor',
    'Arabian'
];

const stringA = `A,G${dblSharp},B${dblFlat}`;
const stringB = `B,C${flat},A${dblSharp}`;
const stringC = `C,B${sharp},D${dblFlat}`;
const stringD = `D,C${dblSharp},E${dblFlat}`;
const stringE = `E,F${flat},D${dblSharp}`;
const stringF = `F,E${sharp},G${dblFlat}`;
const stringG = `G,F${dblSharp},A${dblFlat}`;
const stringFsharp = `F${sharp},G${flat},E${dblSharp}`;
const stringGflat = `F${sharp},G${flat},E${dblSharp}`;
const stringCsharp = `C${sharp},D${flat},B${dblSharp}`;
const stringDflat = `C${sharp},D${flat},B${dblSharp}`;
const stringBflat = `A${sharp},B${flat},C${dblFlat}`;
const stringAsharp = `A${sharp},B${flat},C${dblFlat}`;
const stringEflat = `D${sharp},E${flat},F${dblFlat}`;
const stringDsharp = `D${sharp},E${flat},F${dblFlat}`;
const stringGsharp = `G${sharp},A${flat},F${dblSharp}${sharp}`;
const stringAflat = `G${sharp},A${flat},F${dblSharp}${sharp}`;

const tunings = [
    [
      'Guitar - Standard',
      [`Guitar. E A D G B E .${stringE}.${stringB}.${stringG}.${stringD}.${stringA}.${stringE}`]],
    [
      'Guitar - Drop D ',
      [`Guitar. D A D G B E .${stringE}.${stringB}.${stringG}.${stringD}.${stringA}.${stringD}`]],
    [
      'Guitar - Double Drop D',
      [`Guitar. D A D G B D .${stringD}.${stringB}.${stringG}.${stringD}.${stringA}.${stringD}`]],
    [
      'Guitar - Drop C',
      [`Guitar. C G C F A D .${stringD}.${stringA}.${stringF}.${stringC}.${stringG}.${stringC}`]],
    [
      'Guitar - Drop B',
      [`Guitar. B F${sharp} B E G${sharp} C${sharp} .${stringCsharp}.${stringGsharp}.${stringE}.${stringB}.${stringFsharp}.${stringB}`]],
    [
      'Guitar - Drop A',
      [`Guitar. A E A D F${sharp} B .${stringB}.${stringFsharp}.${stringD}.${stringA}.${stringE}.${stringA}`]],
    [
      'Guitar - Open G',
      [`Guitar. D G D G B D .${stringD}.${stringB}.${stringG}.${stringD}.${stringG}.${stringD}`]],
    [
      'Guitar - Open E',
      [`Guitar. E B E G${sharp} B E .${stringE}.${stringB}.${stringGsharp}.${stringE}.${stringB}.${stringE}`]],
    [
      'Guitar - Open A',
      [`Guitar. E A E A C${sharp} E .${stringE}.${stringCsharp}.${stringA}.${stringE}.${stringA}.${stringE}`]],
    [
      'Guitar - Open C6',
      [`Guitar. C A C G C E .${stringE}.${stringC}.${stringG}.${stringC}.${stringA}.${stringC}`]],
    [
      'Guitar - Open D',
      [`Guitar. D A D F${sharp} A D .${stringD}.${stringA}.${stringFsharp}.${stringD}.${stringA}.${stringD}`]],
    [
      'Guitar - Open D Minor',
      [`Guitar. D A D F A D .${stringD}.${stringA}.${stringF}.${stringD}.${stringA}.${stringD}`]],
    [
      'Guitar - DADGAD',
      [`Guitar. D A D G A D .${stringD}.${stringA}.${stringG}.${stringD}.${stringA}.${stringD}`]],
    [
      'Guitar - DGCGCD(Rain Song)',
      [`Guitar. D G C G C D .${stringD}.${stringC}.${stringG}.${stringC}.${stringG}.${stringD}`]],
    [
      'Ukelele',
      [`Ukelele. G C E A .${stringA}.${stringE}.${stringC}.${stringG}`]],
    [
      'Mandolin',
      [`Mandolin. E A D G .${stringG}.${stringD}.${stringA}.${stringE}`]],
    [
      '4 String Bass',
      [`Bass. E A G D .${stringG}.${stringD}.${stringA}.${stringE}`]],
    [
      '5 String Bass BEADG',
      [`Bass. B E A D G .${stringG}.${stringD}.${stringA}.${stringE}.${stringB}`]],
    [
      '5 String Bass EADGC',
      [`Bass. E A D G C .${stringC}.${stringG}.${stringD}.${stringA}.${stringE}`]],
    [
      '6 String Bass BEADGC',
      [`Bass. B E A D G C .${stringC}.${stringG}.${stringD}.${stringA}.${stringE}.${stringB}`]],
    [
      'Violin',
      [`Violin. G D A E .${stringE}.${stringA}.${stringD}.${stringG}`]],
    [
      'Viola',
      [`Viola. C G D A .${stringA}.${stringD}.${stringG}.${stringC}`]],
    [
      'Cello',
      [`Viola. C G D A .${stringA}.${stringD}.${stringG}.${stringC}`]],
  ];


const chromatic = [
    'C',
    [`C${sharp}`, `D${flat}`],
    'D',
    [`D${sharp}`, `E${flat}`],
    'E',
    'F',
    [`F${sharp}`,
    `G${flat}`],
    'G',
    [`G${sharp}`, `A${flat}`],
    'A',
    [`A${sharp}`, `B${flat}`],
    'B'
];

const rowTwo = [
    'maj',
    'min',
    `${dim}`,
    '+',
    `maj(${flat}5)`,
    'sus2',
    'sus4',
    '7sus4',
    'maj7(sus4)'
];

const rowThree = [
    '6',
    'm6',
    `${dim}7`,
    `7(${flat}13)`,
    `add${sharp}11`,
    'add9',
    `maj7(9, ${sharp}11)`,
    'maj7(9, 13)',
    `maj7(${sharp}11, 13)`
];

const rowFour = [
    'maj7',
    'm(maj7)',
    `${dim}(maj7)`,
    '+(maj7)',
    `maj7(${flat}5)`,
    'maj9',
    `maj7(${sharp}11)`,
    'maj7(13)',
    'maj13'
];

const rowFive = [
    '7',
    'm7',
    `m7(${flat}5)`,
    `7(${sharp}5)`,
    `7(${flat}5)`,
    '7(9)',
    `7(${sharp}11)`,
    '7(13)',
    'Whole Tone Scale'
];

const rowSix = [
    'm9',
    'm7(11)',
    'm7(13)',
    'm7(9, 11)',
    'm7(9, 13)',
    'm7(11, 13)',
    'm7(9, 11, 13)',
    'Half/Whole Scale',
    'Whole/Half Scale'
];

const rowSeven = [
    `7(${flat}9)`,
    `7(${sharp}9)`,
    `7(9, ${sharp}11)`,
    `7(9, ${flat}13)`,
    `7(${flat}9, ${flat}13)`,
    '7(9, 13)',
    `7(9, ${sharp}11, 13)`,
    `7(9, ${sharp}11, ${flat}13)`,
    'Altered Scale'
];

const rowEight = [
    'maj Pentatonic',
    'min Pentatonic',
    'Dominant Pentatonic',
    `Dominant ${sharp}4 Pentatonic`,
    `maj ${sharp}4 Pentatonic`,
    'Altered Pentatonic',
    'm(maj7) Pentatonic',
    'Japanese Pentatonic',
    'Egyptian Pentatonic'
];

const rows = [rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight];
const rowClasses = ['row_two', 'row_three', 'row_four', 'row_five', 'row_six', 'row_seven', 'row_eight'];

export const Constants = {
  sharp: sharp,
  flat: flat,
  dblSharp: dblSharp,
  dblFlat: dblFlat,
  natural: natural,
  dim: dim,
  chromatic: chromatic,
  tonics: ['C', 'D', 'E', 'F', 'G', 'A', 'B', `B${flat}`, `E${flat}`, `A${flat}`, `D${flat}`, `G${flat}`, `F${sharp}`, `C${sharp}`, `G${sharp}`, `D${sharp}`, `A${sharp}`],
  standard: [
    `E,F${flat},D${dblSharp}`,
    `B,C${flat},A${dblSharp}`,
    `G,F${dblSharp},A${dblFlat}`,
    `D,C${dblSharp},E${dblFlat}`,
    `A,G${dblSharp},B${dblFlat}`,
    `E,F${flat},D${dblSharp}`
  ],

  standardMirror: [
    `E,F${flat},D${dblSharp}`,
    `A,G${dblSharp},B${dblFlat}`,
    `D,C${dblSharp},E${dblFlat}`,
    `G,F${dblSharp},A${dblFlat}`,
    `B,C${flat},A${dblSharp}`,
    `E,F${flat},D${dblSharp}`
  ],
  labels: labels,
  rows: rows,
  rowClasses: rowClasses,
  titles: titles,
  tunings: tunings,
  enharmonic: enharmonic,
};


