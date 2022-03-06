import React from 'react'

var String = ({ string, allStrings, stringsLeft, scale, chord, chord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees, keyCenter, labelType, selectedChord, selectedChord2, chordFocus }) => {
  var notes=[];
  var currentString;
  var name;
  var open;
  var openClass;
  var openNoteClass;
  var noteClass;
  var altLabelContainer;
  var chordKey;
  var keyKey = keyCenter.notesToDegrees
  var labelContainer = keyCenter.tonicScaleDegrees
  var fretClass = 'fret'

  if (labelType === 'Note Names') {
    labelContainer = keyCenter.tonicScaleDegrees
  }

  if (labelType === 'Scale Degrees') {
    labelContainer = scaleDegrees
  }

  if (labelType === 'Solfege') {
    labelContainer = solfege
  }

  if (labelType === 'Chord Degrees' && chordFocus === 'Focus 1') {
    altLabelContainer = chordDegrees
    chordKey = selectedChord.notesToDegrees
  }

  if (labelType === 'Chord Degrees' && chordFocus === 'Focus 2') {
    altLabelContainer = chordDegrees
    chordKey = selectedChord2.notesToDegrees
  }


  if (labelType === 'Chord Degrees' && chordFocus === 'Neutral') {
    altLabelContainer = labelContainer
    chordKey = keyKey
  }

  if (labelType === 'Chord Degrees' && chordFocus === 'Neutral' && !chordTwoSelected) {
    altLabelContainer = chordDegrees
    chordKey = selectedChord.notesToDegrees
  }

  if (view === 'Mirror View' || view === 'Traditional View') {
    currentString = allStrings[string]
    name = 'string'
    openClass = 'open'
    openNoteClass = 'openNote'
    noteClass = 'note'
  }

  if (view === 'Lefty Mirror View' || view === 'Lefty Traditional View') {
    currentString = stringsLeft[string]
    name = 'string-left'
    openClass = 'open-left'
    openNoteClass = 'openNoteLeft'
    noteClass = 'noteLeft'
  }

  if (currentString) {
    for(var i = 0; i < currentString.length; i++) {
      var containsNote = false;
      for(var j = 0; j < currentString[i].length; j++) {
        if(scale.includes(currentString[i][j])) {
          containsNote = true;
          notes.push(currentString[i][j])
        }
      }
      if(!containsNote) {
        notes.push('')
      }
    }
  }

  (view ==='Lefty Mirror View' || view ==='Lefty Traditional View') ? open = notes.length - 1 : open = 0;

  return(
      <div className={`${name}`}>
        {notes ? notes.map((note, i) => (
          scale.includes(note) && chord.includes(note) && chord2.includes(note) && i === open && labelType === 'Chord Degrees' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>:
            scale.includes(note) && chord.includes(note) && chord2.includes(note) && i === open ?
              <span className={`${openClass}`}>
                <span className={`${openNoteClass} sharedNote`}>
                  {labelContainer[keyKey[note]]}
                </span>
              </span>:
              scale.includes(note) && chord.includes(note) && i === open && labelType === 'Chord Degrees' && (chordFocus === 'Focus 1' || !chordTwoSelected ) ?
                <span className={`${openClass}`}>
                  <span className={`${openNoteClass} selectedNote`}>
                    {altLabelContainer[chordKey[note]]}
                  </span>
                </span>:
                scale.includes(note) && chord.includes(note) && i === open && labelType === 'Chord Degrees' && chordFocus === 'Focus 2' ?
                  <span className={`${openClass}`}>
                    <span className={`${openNoteClass} selectedNote unfocus`}>
                      {labelContainer[keyKey[note]]}
                    </span>
                  </span>:
                  scale.includes(note) && chord.includes(note) && i === open ?
                    <span className={`${openClass}`}>
                      <span className={`${openNoteClass} selectedNote`}>
                        {labelContainer[keyKey[note]]}
                      </span>
                    </span>:
                    scale.includes(note) && chord2.includes(note) && i === open && labelType === 'Chord Degrees' && chordFocus === 'Focus 2' ?
                      <span className={`${openClass}`}>
                        <span className={`${openNoteClass} selectedNote2`}>
                          {altLabelContainer[chordKey[note]]}
                        </span>
                      </span>:
                      scale.includes(note) && chord2.includes(note) && i === open && labelType === 'Chord Degrees' && chordFocus === 'Focus 1' ?
                        <span className={`${openClass}`}>
                          <span className={`${openNoteClass} selectedNote2 unfocus`}>
                          {labelContainer[keyKey[note]]}
                          </span>
                        </span>:
                        scale.includes(note) && chord2.includes(note) && i === open ?
                          <span className={`${openClass}`}>
                            <span className={`${openNoteClass} selectedNote2`}>
                            {labelContainer[keyKey[note]]}
                            </span>
                          </span>:
                          scale.includes(note) && i === open && !(chordOneSelected && chordTwoSelected) && !hideScale ?
                            <span className={`${openClass}`}>
                              <span className={`${openNoteClass}`}>
                                {labelContainer[keyKey[note]]}
                              </span>
                            </span>:
                            scale.includes(note) && i === open && (hideScale || (chordOneSelected && chordTwoSelected)) ?
                              <span className={`${openClass}`}>
                              </span>:
                              !scale.includes(note) && i === open ?
                                <span className={`${openClass}`}>
                                </span>:
                                scale.includes(note) && chord.includes(note) && chord2.includes(note) && labelType === 'Chord Degrees' ?
                                  <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                    <span className={`${noteClass} sharedNote`}>
                                      {altLabelContainer[chordKey[note]]}
                                    </span>_________________________________________________________________________________________________________________
                                  </span>:
                                  scale.includes(note) && chord.includes(note) && chord2.includes(note) ?
                                    <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                      <span className={`${noteClass} sharedNote`}>
                                        {labelContainer[keyKey[note]]}
                                      </span>_________________________________________________________________________________________________________________
                                    </span>:
                                    scale.includes(note) && chord.includes(note) && labelType === 'Chord Degrees' && (chordFocus === 'Focus 1' || !chordTwoSelected ) ?
                                      <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                        <span className={`${noteClass} selectedNote`}>
                                          {altLabelContainer[chordKey[note]]}
                                        </span>_________________________________________________________________________________________________________________
                                      </span>:
                                    scale.includes(note) && chord.includes(note) && labelType === 'Chord Degrees' && chordFocus === 'Focus 2'  ?
                                      <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                        <span className={`${noteClass} selectedNote unfocus`}>
                                          {labelContainer[keyKey[note]]}
                                        </span>_________________________________________________________________________________________________________________
                                      </span>:
                                      scale.includes(note) && chord.includes(note) ?
                                        <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                          <span className={`${noteClass} selectedNote`}>
                                            {labelContainer[keyKey[note]]}
                                          </span>_________________________________________________________________________________________________________________
                                        </span>:
                                        scale.includes(note) && chord2.includes(note) && labelType === 'Chord Degrees' && chordFocus === 'Focus 2' ?
                                          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                            <span className={`${noteClass} selectedNote2`}>
                                              {altLabelContainer[chordKey[note]]}
                                            </span>_________________________________________________________________________________________________________________
                                          </span>:
                                          scale.includes(note) && chord2.includes(note) && labelType === 'Chord Degrees' && chordFocus === 'Focus 1' ?
                                            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                              <span className={`${noteClass} selectedNote2 unfocus`}>
                                                {labelContainer[keyKey[note]]}
                                              </span>_________________________________________________________________________________________________________________
                                            </span>:
                                            scale.includes(note) && chord2.includes(note) ?
                                              <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                                <span className={`${noteClass} selectedNote2`}>
                                                  {labelContainer[keyKey[note]]}
                                                </span>_________________________________________________________________________________________________________________
                                              </span>:
                                              scale.includes(note) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
                                                <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
                                                  <span className={`${noteClass}`}>
                                                    {labelContainer[keyKey[note]]}
                                                  </span>_________________________________________________________________________________________________________________
                                                </span>:
                                                <span className={`${fretClass}`}>___________________________________________________________________________________________________________________________________________________________________________________________________________________________-</span>

        )): null}
      </div>
  )
}

export default String;

