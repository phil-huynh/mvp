import React from 'react'

var ChordNames = ({ chords, sevenths }) => {
  var classes = []
  var chNames = []
  var chNames7 = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key} names labels first`
    classes.push(name)
    chNames.push(chords[key].triadName)
    chNames7.push(chords[key].seventhName)
  })
  var list
  sevenths ? list = chNames7 : list = chNames

  return (
    <span className="labelsNames1">
      { list.map((label, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{label}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )
}

export default ChordNames;