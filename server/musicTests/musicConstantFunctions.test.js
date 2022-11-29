const Constants = require('../music/Constants.js');

const {sharpNote, flatNote, findEnharmonicEquivalent, shiftNotes, sharp, flat, dblSharp, dblFlat, natural, dim} = Constants


// Tests for sharpNote()
test('should sharp a natural note', () => {
  expect(sharpNote('C')).toBe(`C${sharp}`);
});
test('should sharp a sharp note correctly', () => {
  expect(sharpNote(`F${sharp}`)).toBe(`F${dblSharp}`);
});
test('should sharp a double sharp note correctly', () => {
  expect(sharpNote(`F${dblSharp}`)).toBe(`F${dblSharp}${sharp}`);
});
test('should sharp a triple sharp note correctly', () => {
  expect(sharpNote(`F${dblSharp}${sharp}`)).toBe(`F${dblSharp}${dblSharp}`);
});
test('should sharp a flat note correctly', () => {
  expect(sharpNote(`B${flat}`)).toBe(`B`);
});
test('should sharp a double flat note correctly', () => {
  expect(sharpNote(`A${dblFlat}`)).toBe(`A${flat}`);
});
test('should sharp a triple flat note correctly', () => {
  expect(sharpNote(`E${dblFlat}${flat}`)).toBe(`E${dblFlat}`);
});
test('should sharp a quadruple flat note correctly', () => {
  expect(sharpNote(`E${dblFlat}${dblFlat}`)).toBe(`E${dblFlat}${flat}`);
});
test('should sharp a note with no natural sharp correctly', () => {
  expect(sharpNote('B')).toBe(`B${sharp}`);
});


// Tests for flatNote()
test('should flat a natural note', () => {
  expect(flatNote('D')).toBe(`D${flat}`);
});
test('should flat a sharp note correctly', () => {
  expect(flatNote(`F${sharp}`)).toBe('F');
});
test('should flat a double sharp note correctly', () => {
  expect(flatNote(`C${dblSharp}`)).toBe(`C${sharp}`);
});
test('should flat a triple sharp note correctly', () => {
  expect(flatNote(`G${dblSharp}${sharp}`)).toBe(`G${dblSharp}`);
});
test('should flat a quadruple sharp note correctly', () => {
  expect(flatNote(`E${dblSharp}${dblSharp}`)).toBe(`E${dblSharp}${sharp}`);
});
test('should flat a flat note correctly', () => {
  expect(flatNote(`A${flat}`)).toBe(`A${dblFlat}`);
});
test('should flat a double flat note correctly', () => {
  expect(flatNote(`E${dblFlat}`)).toBe(`E${dblFlat}${flat}`);
});
test('should sharp a triple flat note correctly', () => {
  expect(flatNote(`B${dblFlat}${flat}`)).toBe(`B${dblFlat}${dblFlat}`);
});
test('should flat a note with no natural flat correctly', () => {
  expect(flatNote('F')).toBe(`F${flat}`);
});
