import React from 'react'

var Sevenths = ({ chords }) => {
  var classes = []
  var seven = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}_seven`
    classes.push(name)
    seven.push(chords[key].seventh.note)
  })

  return (
      <span className="sevens">
        { seven.map((note, index) => (
          <span
            className={classes[index]}
            >&nbsp;&nbsp;{note}&nbsp;&nbsp;
          </span>
        ))}
      </span>
  )
}

export default Sevenths;


