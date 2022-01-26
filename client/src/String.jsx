import React from 'react'

var String = ({ string, allStrings, scale }) => {
  var notes = allStrings[string]
  console.log("🚀 ~ file: String.jsx ~ line 5 ~ String ~ notes", notes)
  return(
    <div className="string">
      {notes ? notes.map((note, i) => (
        scale.includes(note) && i === 0 ?
          <span className="open">
            <span className="openNote">
              {note}
            </span>
          </span>:
          scale.includes(note) ?
            <span className="fret">
              <span className="note">
                {note}
              </span>
            </span>:
            scale.includes(note[0]) ?
              <span className="fret">
                <span className="note">
                  {note[0]}
                </span>
              </span>:
              scale.includes(note[1]) ?
                <span className="fret">
                  <span className="note">
                    {note[1]}
                  </span>
                </span>:
                <span className="fret"></span>
      )): null}
    </div>
  )
}

export default String;