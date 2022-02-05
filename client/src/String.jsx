import React from 'react'

var String = ({ string, allStrings, scale, chord }) => {
  var notes = allStrings[string]
  return(
    <div className="string">
      {notes ? notes.map((note, i) => (
        scale.includes(note[0]) && chord.includes(note[0]) && i === 0 ?
          <span className="open">
            <span className="openNote selectedNote">
              {note[0]}
            </span>
          </span>:
          scale.includes(note[0]) && i === 0 ?
            <span className="open">
              <span className="openNote">
                {note[0]}
              </span>
            </span>:
            scale.includes(note[1]) && chord.includes(note[1]) && i === 0 ?
              <span className="open">
                <span className="openNote selectedNote">
                  {note[1]}
                </span>
              </span>:
              scale.includes(note[1]) && i === 0 ?
                <span className="open">
                  <span className="openNote">
                    {note[1]}
                  </span>
                </span>:
                scale.includes(note[2]) && chord.includes(note[2]) && i === 0 ?
                  <span className="open">
                    <span className="openNote selectedNote">
                      {note[2]}
                    </span>
                  </span>:
                  scale.includes(note[2]) && i === 0 ?
                    <span className="open">
                      <span className="openNote">
                        {note[2]}
                      </span>
                    </span>:
                    !scale.includes(note[0]) && !scale.includes(note[1]) && !scale.includes(note[2]) && i === 0 ?
                      <span className="open">
                      </span>:
                      scale.includes(note[0]) && chord.includes(note[0]) ?
                        <span className="fret">__________
                          <span className="note selectedNote">
                            {note[0]}
                          </span>_______________
                        </span>:
                        scale.includes(note[0]) ?
                          <span className="fret">__________
                            <span className="note">
                              {note[0]}
                            </span>_______________
                          </span>:
                          scale.includes(note[1]) && chord.includes(note[1]) ?
                            <span className="fret">__________
                              <span className="note selectedNote">
                                {note[1]}
                              </span>_______________
                            </span>:
                            scale.includes(note[1]) ?
                              <span className="fret">__________
                                <span className="note">
                                  {note[1]}
                                </span>_______________
                              </span>:
                              scale.includes(note[2]) && chord.includes(note[2]) ?
                                <span className="fret">__________
                                  <span className="note selectedNote">
                                    {note[2]}
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

