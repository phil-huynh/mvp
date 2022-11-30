const Constants = require('../music/Constants.js');
const Main = require('../music/music_Main.js');

const {sharp, flat, dblSharp, dblFlat, natural, dim, chromaticScale} = Constants
const { getChord } = Main

const getNotes = (root, type) =>{
  let chordObject = getChord(root, type)
  return chordObject.chordNotes
}

test('should correctly spell a major triad', () => {
  expect(getNotes('F', 'maj')).toEqual(['F', 'A', 'C'])
})
test('should correctly spell a major 7 chord', () => {
  expect(getNotes('E', 'maj7')).toEqual(
    ['E', `G${sharp}`, 'B', `D${sharp}`]
  )
})
test('should correctly spell a dominant 7 chord', () => {
  expect(getNotes(`F${sharp}`, '7')).toEqual(
    [`F${sharp}`, `A${sharp}`, `C${sharp}`, 'E']
  )
})
test('should correctly spell a minor triad', () => {
  expect(getNotes(`G`, 'min')).toEqual(
    ['G', `B${flat}`, 'D']
  )
})
test('should correctly spell a min7 chord', () => {
  expect(getNotes(`B`, 'm7')).toEqual(
    ['B', 'D', `F${sharp}`, 'A']
  )
})
test('should correctly spell a m(maj7) chord', () => {
  expect(getNotes(`F`, 'm(maj7)')).toEqual(
    ['F', `A${flat}`, 'C', 'E']
  )
})
test('should correctly spell a min7(b5) chord', () => {
  expect(getNotes(`C`, `m7(${flat}5)`)).toEqual(
    ['C', `E${flat}`, `G${flat}`, `B${flat}`]
  )
})
test('should correctly spell a diminished triad', () => {
  expect(getNotes(`G`, `${dim}`)).toEqual(
    ['G', `B${flat}`, `D${flat}`]
  )
})
test('should correctly spell a diminshed 7  chord', () => {
  expect(getNotes(`G${sharp}`, `${dim}7`)).toEqual(
    [`G${sharp}`, 'B', 'D', 'F']
  )
})
test('should correctly spell a diminished maj7 chord', () => {
  expect(getNotes(`C`, `${dim}(maj7)`)).toEqual(
    ['C', `E${flat}`, `G${flat}`, 'B']
  )
})
test('should correctly spell an augmented triad', () => {
  expect(getNotes(`B`, '+')).toEqual(
    ['B', `D${sharp}`, `F${dblSharp}`]
  )
})
test('should correctly spell a +(maj7) chord', () => {
  expect(getNotes(`C`, '+(maj7)')).toEqual(
    ['C', 'E', `G${sharp}`, 'B']
  )
})
test('should correctly spell a 7(#5)  chord', () => {
  expect(getNotes(`D`, `7(${sharp}5)`)).toEqual(
    ['D', `F${sharp}`, `A${sharp}`, 'C']
  )
})
test('should correctly spell a major b5 triad', () => {
  expect(getNotes(`E`, `maj(${flat}5)`)).toEqual(
    ['E', `G${sharp}`, `B${flat}`]
  )
})
test('should correctly spell a maj7(b5)  chord', () => {
  expect(getNotes(`A`, `maj7(${flat}5)`)).toEqual(
    ['A', `C${sharp}`, `E${flat}`, `G${sharp}`]
  )
})
test('should correctly spell a 7(b5) chord', () => {
  expect(getNotes(`C${sharp}`, `7(${flat}5)`)).toEqual(
    [`C${sharp}`, `E${sharp}`, 'G', 'B' ]
  )
})
test('should correctly spell a sus2 chord', () => {
  expect(getNotes(`A${flat}`, 'sus2')).toEqual(
    [`A${flat}`, `B${flat}`, `E${flat}`]
  )
})
test('should correctly spell a sus4 chord', () => {
  expect(getNotes(`D${flat}`, 'sus4')).toEqual(
    [`D${flat}`, `G${flat}`, `A${flat}`]
  )
})
test('should correctly spell an add9 chord', () => {
  expect(getNotes(`F`, 'add9')).toEqual(['F', 'A', 'C', 'G'])
})
test('should correctly spell an add #11 chord', () => {
  expect(getNotes(`A`, `add${sharp}11`)).toEqual(
    ['A', `C${sharp}`, 'E', `D${sharp}`]
  )
})
test('should correctly spell a 6 chord', () => {
  expect(getNotes(`F${sharp}`, '6')).toEqual(
    [`F${sharp}`, `A${sharp}`, `C${sharp}`, `D${sharp}`]
  )
})
test('should correctly spell a min6 chord', () => {
  expect(getNotes(`B`, 'm6')).toEqual(
    ['B', 'D', `F${sharp}`, `G${sharp}`]
  )
})
test('should correctly spell a 7sus4 chord', () => {
  expect(getNotes(`G`, '7sus4')).toEqual(
    ['G', 'C', 'D', 'F']
  )
})
test('should correctly spell a maj7(sus4) chord', () => {
  expect(getNotes(`F`, 'maj7(sus4)')).toEqual(
    ['F', `B${flat}`, 'C', 'E']
  )
})
test('should correctly spell a maj9 chord', () => {
  expect(getNotes(`C`, 'maj9')).toEqual(
    ['C', 'E', 'G', 'B', 'D']
  )
})
test('should correctly spell a maj7(#11) chord', () => {
  expect(getNotes(`D`, `maj7(${sharp}11)`)).toEqual(
    ['D', `F${sharp}`, 'A', `C${sharp}`, `G${sharp}`]
  )
})
test('should correctly spell a   chord', () => {
  expect(getNotes(`E`, 'maj7(13)')).toEqual(
    ['E', `G${sharp}`, 'B', `D${sharp}`, `C${sharp}`]
  )
})
test('should correctly spell a maj7(9, #11) chord', () => {
  expect(getNotes(`G`, `maj7(9, ${sharp}11)`)).toEqual(
    ['G', 'B', 'D', `F${sharp}`, 'A', `C${sharp}`]
  )
})
test('should correctly spell a maj7(#11, 13) chord', () => {
  expect(getNotes(`B`, `maj7(${sharp}11, 13)`)).toEqual(
    ['B', `D${sharp}`, `F${sharp}`, `A${sharp}`, `E${sharp}`, `G${sharp}`]
  )
})
test('should correctly spell a maj7(9, 13) chord', () => {
  expect(getNotes(`A${flat}`, 'maj7(9, 13)')).toEqual(
    [`A${flat}`, 'C', `E${flat}`, 'G', `B${flat}`, 'F']
  )
})
test('should correctly spell a maj13 chord', () => {
  expect(getNotes(`A`, 'maj13')).toEqual(
    ['A', `C${sharp}`, 'E', `G${sharp}`, 'B', `D${sharp}`, `F${sharp}`]
  )
})
test('should correctly spell a m9 chord', () => {
  expect(getNotes(`E`, 'm9')).toEqual(
    ['E', 'G', 'B', 'D', `F${sharp}`]
  )
})
test('should correctly spell a m(11) chord', () => {
  expect(getNotes(`G`, 'm7(11)')).toEqual(
    ['G', `B${flat}`, 'D', 'F', 'C']
  )
})
test('should correctly spell a m7(13) chord', () => {
  expect(getNotes(`A`, 'm7(13)')).toEqual(
    ['A', 'C', 'E', 'G', `F${sharp}`]
  )
})
test('should correctly spell a m7(9, 11) chord', () => {
  expect(getNotes(`F`, 'm7(9, 11)')).toEqual(
    ['F', `A${flat}`, 'C', `E${flat}`, 'G', `B${flat}`]
  )
})
test('should correctly spell a m7(9, 13) chord', () => {
  expect(getNotes(`D`, 'm7(9, 13)')).toEqual(
    ['D', 'F', 'A', 'C', 'E', 'B']
  )
})
test('should correctly spell a m7(11, 13) chord', () => {
  expect(getNotes(`F`, 'm7(11, 13)')).toEqual(
    ['F', `A${flat}`, 'C', `E${flat}`, `B${flat}`, 'D']
  )
})
test('should correctly spell a m7(9, 11, 13) chord', () => {
  expect(getNotes('A', 'm7(9, 11, 13)')).toEqual(
    ['A', 'C', 'E', 'G', 'B', 'D', `F${sharp}`]
  )
})
test('should correctly spell a 7(9) chord', () => {
  expect(getNotes('D', '7(9)')).toEqual(
    ['D', `F${sharp}`, 'A', 'C', 'E']
  )
})
test('should correctly spell a 7(b9) chord', () => {
  expect(getNotes(`C`, `7(${flat}9)`)).toEqual(
    ['C', 'E', 'G', `B${flat}`, `D${flat}`]
  )
})
test('should correctly spell a 7(#9) chord', () => {
  expect(getNotes(`A`, `7(${sharp}9)`)).toEqual(
    ['A', `C${sharp}`, 'E', 'G', `B${sharp}`]
  )
})
test('should correctly spell a 7(#11) chord', () => {
  expect(getNotes(`G`, `7(${sharp}11)`)).toEqual(
    ['G', 'B', 'D', 'F', `C${sharp}`]
  )
})
test('should correctly spell a 7(9, #11) chord', () => {
  expect(getNotes(`B`, `7(9, ${sharp}11)`)).toEqual(
    ['B', `D${sharp}`, `F${sharp}`, 'A', `C${sharp}`, `E${sharp}`]
  )
})
test('should correctly spell a 7(13) chord', () => {
  expect(getNotes(`C`, '7(13)')).toEqual(
    ['C', 'E', 'G', `B${flat}`, 'A']
  )
})
test('should correctly spell a 7(b13) chord', () => {
  expect(getNotes(`B${flat}`, `7(${flat}13)`)).toEqual(
    [`B${flat}`, 'D', 'F', `A${flat}`, `G${flat}`]
  )
})
test('should correctly spell a 7(9, #11, 13) chord', () => {
  expect(getNotes(`D`, `7(9, ${sharp}11, 13)`)).toEqual(
    ['D', `F${sharp}`, 'A', 'C', 'E', `G${sharp}`, 'B']
  )
})
test('should correctly spell a 7(9, #11, b13) chord', () => {
  expect(getNotes(`E`, `7(9, ${sharp}11, ${flat}13)`)).toEqual(
    ['E', `G${sharp}`, 'B', 'D', `F${sharp}`, `A${sharp}`, 'C']
  )
})
test('should correctly spell a 7(9, b13) chord', () => {
  expect(getNotes(`F`, `7(9, ${flat}13)`)).toEqual(
    ['F', 'A', 'C', `E${flat}`, 'G', `D${flat}`]
  )
})
test('should correctly spell a 7(9, 13) chord', () => {
  expect(getNotes(`G`, '7(9, 13)')).toEqual(
    ['G', 'B', 'D', 'F', 'A', 'E']
  )
})
test('should correctly spell a 7(b9,b13) chord', () => {
  expect(getNotes(`E`, `7(${flat}9, ${flat}13)`)).toEqual(
    ['E', `G${sharp}`, 'B', 'D', 'F', 'C']
  )
})
test('should correctly spell a major pentatonic scale', () => {
  expect(getNotes(`C`, 'maj Pentatonic')).toEqual(
    ['C', 'D', 'E', 'G', 'A']
  )
})
test('should correctly spell a minor pentatonic scale', () => {
  expect(getNotes(`E${flat}`, 'min Pentatonic')).toEqual(
    [`E${flat}`, `G${flat}`, `A${flat}`, `B${flat}`, `D${flat}`]
  )
})
test('should correctly spell a dominant pentatonic scale', () => {
  expect(getNotes(`B${flat}`, 'Dominant Pentatonic')).toEqual(
    [`B${flat}`, 'C', 'D', 'F', `A${flat}`]
  )
})
test('should correctly spell dominant #4 pentatonic scale', () => {
  expect(getNotes(`F`, `Dominant ${sharp}4 Pentatonic`)).toEqual(
    ['F', 'G', 'A', 'B', `E${flat}`]
  )
})
test('should correctly spell a major #4 pentatonic scale', () => {
  expect(getNotes(`C`, `maj ${sharp}4 Pentatonic`)).toEqual(
    ['C', 'D', 'E', `F${sharp}`, 'A']
  )
})
test('should correctly spell an altered pentatonic scale', () => {
  expect(getNotes(`D`, 'Altered Pentatonic')).toEqual(
    ['D', `E${flat}`, `F${sharp}`, 'A', 'C']
  )
})
test('should correctly spell a m(maj7) pentatonic Scale', () => {
  expect(getNotes(`A${flat}`, 'm(maj7) Pentatonic')).toEqual(
    [`A${flat}`, `C${flat}`, `D${flat}`, `E${flat}`, 'G']
  )
})
test('should correctly spell an Egyptian pentatonic Scale', () => {
  expect(getNotes(`B`, 'Egyptian Pentatonic')).toEqual(
    ['B', `C${sharp}`, 'E', `F${sharp}`, 'A']
  )
})
test('should correctly spell a Japanese pentatonic Scale', () => {
  expect(getNotes(`G`, 'Japanese Pentatonic')).toEqual(
    ['G', `A${flat}`, 'C', 'D', `E${flat}`]
  )
})
test('should correctly spell a whole tone scale', () => {
  expect(getNotes(`D`, 'Whole Tone Scale')).toEqual(
    ['D', 'E', `F${sharp}`, `G${sharp}`, `A${sharp}`, `B${sharp}`]
  )
})
test('should correctly spell a whole/half scale', () => {
  expect(getNotes(`A`, 'Whole/Half Scale')).toEqual(
    ['A', 'B', 'C', 'D', `E${flat}`, `E${sharp}`, `F${sharp}`, `G${sharp}`]
  )
})
test('should correctly spell a half/whole scale', () => {
  expect(getNotes(`C`, 'Half/Whole Scale')).toEqual(
    ['C', `D${flat}`, `D${sharp}`, 'E', `F${sharp}`, 'G', 'A', `B${flat}`]
  )
})
test('should correctly spell an altered scale', () => {
  expect(getNotes(`G`, 'Altered Scale')).toEqual(
    ['G', `A${flat}`, `A${sharp}`, 'B', `D${flat}`, `D${sharp}`, 'F']
  )
})





