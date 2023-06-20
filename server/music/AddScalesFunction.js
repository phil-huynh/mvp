const { tonicsToUse,  allScales } = require('./Constants.js');
const { makeChordsFor7NoteScale } = require('./BuildScaleChords.js');


module.exports.add7NoteScale = (name, degrees, makeChords) => {

  let scaleType = name.split(' ')
    .map((word, i) => i === 0 ? word : `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)
    .join('')

  tonicsToUse.forEach(tonic => {
    const scaleDegs = allScales[tonic].scaleDegrees

    allScales[tonic][scaleType] = {
      tonic: tonic,
      type: name,
      tonicScaleDegrees: scaleDegs,
      scaleDegrees: [],
      notesToDegrees: {},
      scale: [],
    };
    let keyCenter = allScales[tonic][scaleType]

    Object.keys(scaleDegs).forEach(key => keyCenter.notesToDegrees[scaleDegs[key]] = key)

    degrees.forEach(degree => {
      keyCenter.scale.push(scaleDegs[degree]);
      keyCenter.scaleDegrees.push(degree);
    })

    if (makeChords) keyCenter.chords = makeChordsFor7NoteScale(keyCenter.scale, tonic);
  })
};
