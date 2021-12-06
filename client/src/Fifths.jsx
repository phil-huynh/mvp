import React from 'react'

var Fifths = ({ chords }) => {
  var classes = []
  var fifths = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}_fifth`
    classes.push(name)
    fifths.push(chords[key].fifth.note)
  })

  return (
    <span className="fifths">
      { fifths.map((note, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{note}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )
}

export default Fifths;