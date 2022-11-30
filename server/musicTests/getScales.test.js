const Constants = require('../music/Constants.js');
const Main = require('../music/music_Main.js');

const {sharp, flat, dblSharp, dblFlat, natural, dim, chromaticScale} = Constants
const { getScale } = Main

const getNotes = (root, type) =>{
  let scaleObject = getScale(root, type)
  return scaleObject.scale
}


test('should correctly spell a major scale', () => {
expect(getNotes(`B`, 'major')).toEqual(
  ['B', `C${sharp}`, `D${sharp}`, 'E', `F${sharp}`, `G${sharp}`, `A${sharp}`]
  )
})
test('should correctly spell a natural minor scale', () => {
expect(getNotes(`G`, 'natural minor')).toEqual(
  ['G', 'A', `B${flat}`, 'C', 'D', `E${flat}`, 'F']
  )
})
test('should correctly spell a harmonic minor scale', () => {
expect(getNotes(`F`, 'harmonic minor')).toEqual(
  ['F', 'G', `A${flat}`, `B${flat}`, 'C', `D${flat}`, 'E']
  )
})
test('should correctly spell a melodic minor scale', () => {
expect(getNotes(`C`, 'melodic minor')).toEqual(
  ['C', 'D', `E${flat}`, 'F', 'G', 'A', 'B']
  )
})
test('should correctly spell a dorian scale', () => {
expect(getNotes(`A`, 'dorian')).toEqual(
  ['A', 'B', 'C', 'D', 'E', `F${sharp}`, 'G']
  )
})
test('should correctly spell a phrygian scale', () => {
expect(getNotes(`D`, 'phrygian')).toEqual(
  ['D', `E${flat}`, 'F', 'G', 'A', `B${flat}`, 'C']
  )
})
test('should correctly spell a lydian scale', () => {
expect(getNotes(`E`, 'lydian')).toEqual(
  ['E', `F${sharp}`, `G${sharp}`, `A${sharp}`, 'B', `C${sharp}`, `D${sharp}`]
  )
})
test('should correctly spell a mixolydian scale', () => {
expect(getNotes(`C`, 'mixolydian')).toEqual(
  ['C', 'D', 'E', 'F', 'G', 'A', `B${flat}`]
  )
})
test('should correctly spell a locrian scale', () => {
expect(getNotes(`B`, 'locrian')).toEqual(
  ['B', 'C', 'D', 'E', 'F', 'G', 'A']
  )
})
test('should correctly spell a persian scale', () => {
expect(getNotes(`G`, 'persian')).toEqual(
  ['G', `A${flat}`, 'B', 'C', `D${flat}`, `E${flat}`, 'F']
  )
})
test('should correctly spell a double harmonic major scale', () => {
expect(getNotes(`D`, 'double harmonic major')).toEqual(
  ['D', `E${flat}`, `F${sharp}`, 'G', 'A', `B${flat}`, 'C']
  )
})
test('should correctly spell a hungarian gypsy minor scale', () => {
expect(getNotes(`A`, 'hungarian gypsy minor')).toEqual(
  ['A', 'B', 'C', `D${sharp}`, 'E', 'F', `G${sharp}`]
  )
})
test('should correctly spell a romanian minor scale', () => {
expect(getNotes(`F`, 'romanian minor')).toEqual(
  ['F', 'G', `A${flat}`, 'B', 'C', 'D', `E${flat}`]
  )
})
test('should correctly spell a romanian major scale', () => {
expect(getNotes(`D`, 'romanian major')).toEqual(
  ['D', `E${flat}`, `F${sharp}`, `G${sharp}`, 'A', 'B', 'C']
  )
})
test('should correctly spell a lydian dominant scale', () => {
expect(getNotes(`A`, 'lydian dominant')).toEqual(
  ['A', 'B', `C${sharp}`, `D${sharp}`, 'E', `F${sharp}`, 'G']
  )
})
test('should correctly spell a ukrainian dorian scale', () => {
expect(getNotes(`B${flat}`, 'ukrainian dorian')).toEqual(
  [`B${flat}`, 'C', `D${flat}`, 'E', 'F', 'G', `A${flat}`]
  )
})
test('should correctly spell a phrygian dominant scale', () => {
expect(getNotes(`E`, 'phrygian dominant')).toEqual(
  ['E', 'F', `G${sharp}`, 'A', 'B', 'C', 'D']
  )
})
test('should correctly spell a lydian augmented scale', () => {
expect(getNotes(`G`, 'lydian augmented')).toEqual(
  ['G', 'A', 'B', `C${sharp}`, `D${sharp}`, 'E', `F${sharp}`]
  )
})
test('should correctly spell a locrian natural6 scale', () => {
expect(getNotes(`C`, 'locrian natural6')).toEqual(
  ['C', `D${flat}`, `E${flat}`, 'F', `G${flat}`, 'A', `B${flat}`]
  )
})
test('should correctly spell a ionian sharp5 scale', () => {
expect(getNotes(`F`, 'ionian sharp5')).toEqual(
  ['F', 'G', 'A', `B${flat}`, `C${sharp}`, 'D', 'E']
  )
})
test('should correctly spell a phrygian dorian scale', () => {
expect(getNotes(`A`, 'phrygian dorian')).toEqual(
  ['A', `B${flat}`, 'C', 'D', 'E', `F${sharp}`, 'G']
  )
})
test('should correctly spell a mixolydian flat13 scale', () => {
expect(getNotes(`B`, 'mixolydian flat13')).toEqual(
  ['B', `C${sharp}`, `D${sharp}`, 'E', `F${sharp}`, 'G', 'A']
  )
})
test('should correctly spell a aeoleon flat5 scale', () => {
expect(getNotes(`D`, 'aeoleon flat5')).toEqual(
  ['D', 'E', 'F', 'G', `A${flat}`, `B${flat}`, 'C']
  )
})
test('should correctly spell a gypsy scale', () => {
expect(getNotes(`E`, 'gypsy')).toEqual(
  ['E', 'F', `G${sharp}`, 'A', 'B', 'C', `D${sharp}`]
  )
})
test('should correctly spell a hungarian major scale', () => {
expect(getNotes(`G`, 'hungarian major')).toEqual(
  ['G', `A${sharp}`, 'B', `C${sharp}`, 'D', 'E', 'F']
  )
})
test('should correctly spell a neapolitan major scale', () => {
expect(getNotes(`C`, 'neapolitan major')).toEqual(
  ['C', `D${flat}`, `E${flat}`, 'F', 'G', 'A', 'B']
  )
})
test('should correctly spell a neapolitan minor scale', () => {
expect(getNotes(`E`, 'neapolitan minor')).toEqual(
  ['E', 'F', 'G', 'A', 'B', 'C', `D${sharp}`]
  )
})
test('should correctly spell a arabian scale', () => {
expect(getNotes(`A`, 'arabian')).toEqual(
  ['A', 'B', `C${sharp}`, 'D', `E${flat}`, 'F', 'G']
  )
})

