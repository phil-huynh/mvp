import React from 'react'

var String = ({ string, allStrings, scale }) => {
  var notes = allStrings[string]
  console.log("🚀 ~ file: String.jsx ~ line 5 ~ String ~ notes", notes)
  return(
    <div className="string">
      {notes ? notes.map((note) => (
        scale.includes(note) ?
          <span className="fret">{note}</span>:
          scale.includes(note[0]) ?
            <span className="fret">{note[0]}</span>:
            scale.includes(note[1]) ?
        <span className="fret">{note[1]}</span>:
        <span className="fret"></span>
      )): null}
    </div>
  )
}

export default String;