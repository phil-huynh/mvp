import React from 'react'

var Thirds = ({ chords }) => {
  var classes = []
  var thirds = []

  var keys = Object.keys(chords)
  keys.forEach((key) => {
    let name = `${key}_third`
    classes.push(name)
    thirds.push(chords[key].third.note)
  })

  return (
    <span className="thirds">
      { thirds.map((note, index) => (
        <span
          className={classes[index]}
          >&nbsp;&nbsp;{note}&nbsp;&nbsp;
        </span>
      ))}
    </span>
  )
}

export default Thirds;