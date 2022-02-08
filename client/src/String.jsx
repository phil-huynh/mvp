import React from 'react'

var String = ({ string, allStrings, stringsLeft, scale, chord, view }) => {
  var notes;
  var name;
  var open;
  var openClass;
  var openNoteClass;
  var noteClass;
  if(view==='Mirror' || view==='Traditional') {
    notes = allStrings[string]
    name = 'string'
    open = 0
    openClass = 'open'
    openNoteClass = 'openNote'
    noteClass = 'note'
  }
  if(view==='Mirror-left' || view==='Traditional-left') {
    notes = stringsLeft[string]
    name = 'string-left'
    open = notes.length - 1
    openClass = 'open-left'
    openNoteClass = 'openNoteLeft'
    noteClass = 'noteLeft'
  }


  return(
    <div className={`${name}`}>
      {notes ? notes.map((note, i) => (
        scale.includes(note[0]) && chord.includes(note[0]) && (i === open || i === 0)  ?
          <span className={`${openClass}`}>
            <span className={`${openNoteClass} selectedNote`}>
              {note[0]}
            </span>
          </span>:
          scale.includes(note[0]) && i === open ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass}`}>
                {note[0]}
              </span>
            </span>:
            scale.includes(note[1]) && chord.includes(note[1]) && (i === open || i === 0) ?
              <span className={`${openClass}`}>
                <span className={`${openNoteClass} selectedNote`}>
                  {note[1]}
                </span>
              </span>:
              scale.includes(note[1]) && i === open ?
                <span className={`${openClass}`}>
                  <span className={`${openNoteClass}`}>
                    {note[1]}
                  </span>
                </span>:
                scale.includes(note[2]) && chord.includes(note[2]) && (i === open || i === 0) ?
                  <span className={`${openClass}`}>
                    <span className={`${openNoteClass} selectedNote`}>
                      {note[2]}
                    </span>
                  </span>:
                  scale.includes(note[2]) && (i === open || i === 0) ?
                    <span className={`${openClass}`}>
                      <span className={`${openNoteClass}`}>
                        {note[2]}
                      </span>
                    </span>:
                    !scale.includes(note[0]) && !scale.includes(note[1]) && !scale.includes(note[2]) && (i === open || i === 0) ?
                      <span className={`${openClass}`}>
                      </span>:
                      scale.includes(note[0]) && chord.includes(note[0]) ?
                        <span className="fret">__________
                          <span className={`${noteClass} selectedNote`}>
                            {note[0]}
                          </span>_______________
                        </span>:
                        scale.includes(note[0]) ?
                          <span className="fret">__________
                            <span className={`${noteClass}`}>
                              {note[0]}
                            </span>_______________
                          </span>:
                          scale.includes(note[1]) && chord.includes(note[1]) ?
                            <span className="fret">__________
                              <span className={`${noteClass} selectedNote`}>
                                {note[1]}
                              </span>_______________
                            </span>:
                            scale.includes(note[1]) ?
                              <span className="fret">__________
                                <span className={`${noteClass}`}>
                                  {note[1]}
                                </span>_______________
                              </span>:
                              scale.includes(note[2]) && chord.includes(note[2]) ?
                                <span className="fret">__________
                                  <span className={`${noteClass} selectedNote`}>
                                    {note[2]}
                                  </span>_______________
                                </span>:
                                scale.includes(note[2]) ?
                                  <span className="fret">__________
                                    <span className={`${noteClass}`}>
                                      {note[2]}
                                    </span>_______________
                                  </span>:
                                  <span className="fret">_________________________________________</span>
        )): null}
    </div>
  )
}

export default String;

