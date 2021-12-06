import React from 'react'

var Roots = ({ chords }) => {
  var classes = []
  var roots = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}_root`
    classes.push(name)
    roots.push(chords[key].root.note)
  })

  return (
    <span className="roots">
      { roots.map((note, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{note}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )
}

export default Roots;