import React from 'react'

var ChordLabels = ({ chords, sevenths }) => {
  var classes = []
  var romans = []
  var romans7 = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}Roman romans labels first`
    classes.push(name)
    romans.push(chords[key].triadLabel)
    romans7.push(chords[key].seventhLabel)
  })
  var list
  sevenths ? list = romans7 : list = romans


  return (
    <span className="labelsRoman1">
      { list.map((label, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{label}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )

}

export default ChordLabels;