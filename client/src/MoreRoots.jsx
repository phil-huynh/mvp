import React from 'react'

var MoreRoots = ({ chords }) => {
  var classes = []
  var roots = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}_root_2`
    classes.push(name)
    roots.push(chords[key].root.note)
  })

  return (
    <span className="roots_2">
      { roots.map((note, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{note}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )
}

export default MoreRoots;