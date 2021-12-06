import React from 'react'

var MoreThirds = ({ chords }) => {
  var classes = []
  var thirds = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}_third_2`
    classes.push(name)
    thirds.push(chords[key].third.note)
  })

  return (
    <span className="thirds_2">
      { thirds.map((note, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{note}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )
}

export default MoreThirds;