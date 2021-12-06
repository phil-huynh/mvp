import React from 'react'

var MoreSevenths = ({ chords }) => {
  var classes = []
  var seven = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}_seven2`
    classes.push(name)
    seven.push(chords[key].seventh.note)
  })

  return (
      <span className="sevens2">
        { seven.map((note, index) => (
          <span
            className={classes[index]}
            >&nbsp;&nbsp;{note}&nbsp;&nbsp;
          </span>
        ))}
      </span>
  )
}

export default MoreSevenths;


