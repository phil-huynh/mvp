import React from 'react'

var MoreChordNames = ({ chords, sevenths }) => {
  var classes = []
  var chNames = []
  var chNames7 = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}2 names labels second`
    classes.push(name)
    chNames.push(chords[key].triadName)
    chNames7.push(chords[key].seventhName)
  })
  var list
  sevenths ? list = chNames7 : list = chNames

  return (
    <span className="labelsNames2">
      { list.map((label, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{label}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )
}

export default MoreChordNames;