import React from 'react'

var String = ({ string, allStrings, scale }) => {
  var notes = allStrings[string]
  return(
    <div className="string">
      {notes ? notes.map((note, i) => (
        scale.includes(note) && i === 0 ?
          <span className="open">
            <span className="openNote">
              {note}
            </span>
          </span>:
          scale.includes(note[0]) && i === 0 ?
            <span className="open">
              <span className="openNote">
                {note[0]}
              </span>
            </span>:
            scale.includes(note[1]) && i === 0 ?
              <span className="open">
                <span className="openNote">
                  {note[1]}
                </span>
              </span>:
              scale.includes(note[2]) && i === 0 ?
                <span className="open">
                  <span className="openNote">
                    {note[2]}
                  </span>
                </span>:
                scale.includes(note) === false && i === 0 ?
                  <span className="open">
                  </span>:
                  scale.includes(note) ?
                    <span className="fret">__________
                      <span className="note">
                        {note}
                      </span>_______________
                    </span>:
                    scale.includes(note[0]) ?
                      <span className="fret">__________
                        <span className="note">
                          {note[0]}
                        </span>_______________
                      </span>:
                      scale.includes(note[1]) ?
                        <span className="fret">__________
                          <span className="note">
                            {note[1]}
                          </span>_______________
                        </span>:
                        scale.includes(note[2]) ?
                          <span className="fret">__________
                            <span className="note">
                              {note[2]}
                            </span>_______________
                          </span>:
                          <span className="fret">_________________________________________</span>
      )): null}
    </div>
  )
}

export default String;

