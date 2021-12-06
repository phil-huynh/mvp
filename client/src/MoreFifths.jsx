import React from 'react'

var MoreFifths = ({ chords }) => {
  var classes = []
  var fifths = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}_fifth_2`
    classes.push(name)
    fifths.push(chords[key].fifth.note)
  })

  return (
    <span className="fifths_2">
      { fifths.map((note, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{note}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )
}

export default MoreFifths;