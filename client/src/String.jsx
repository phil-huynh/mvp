import React from 'react'
import { useStoreContext } from '../StoreContext.js'
import { Constants } from '../Constants.js'

export const String = ({string, firstString, lastString}) => {

  const {sharp, flat, dblSharp, dblFlat, natural, dim, enharmonic} = Constants

  const {State, Setters, Conditions} = useStoreContext()

  const {strings, stringsLeft , scale, currentChordTones, currentChordTones2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees, keyCenter, labelType, selectedChord, selectedChord2, chordFocus, displayChordDegrees, instrument, renderView, selNote, chordDegreesUpper, chordObjKey, chord2ObjKey, calcChord1, calcChord2, noteRefs1, noteRefs2, chordType1, chordType2, lowestFret, highestFret, useCapo} = State

  const {mapChords, mapScales, welcome, tutorial, focus1, focus2, neutral, noteNameLabels, scaleDegLabels, solfegeLabels, showScale, unfocusScale, hiddenScale, lefty} = Conditions


  let notes=[];
  let currentString = strings[string];
  let name = 'string';
  let openString;
  let openClass = 'open';
  let openNoteClass = 'openNote';
  let noteClass = 'note';
  let altLabelContainer;
  let chordKey;
  let chordKey2;
  let keyKey = {};
  let keyKey2 = {};
  let labelContainer = {};
  let labelContainer2 = {};
  let fretClass;
  let chord;
  let chord2;
  let capo;
  let capoClass = 'capo_neck_fret';
  let start = lowestFret;
  let end = highestFret;


  const trad = view === 'Traditional View';
  const mirror = view === 'Mirror View';
  const leftyTrad = view === 'Lefty Traditional View';
  const leftyMirror = view === 'Lefty Mirror View';



  ['Violin', 'Viola', 'Cello'].includes(instrument) ? fretClass = 'orchestral' : fretClass = 'fret'


  if (mapScales || welcome || tutorial) {
    [chord, chord2] = [currentChordTones, currentChordTones2];
    keyKey = keyCenter.notesToDegrees;
    labelContainer = keyCenter.tonicScaleDegrees;
    if (noteNameLabels) {
      labelContainer = keyCenter.tonicScaleDegrees;
    }
    if (scaleDegLabels) {
      labelContainer = scaleDegrees;
    }
    if (solfegeLabels) {
      labelContainer = solfege;
    }
  }

  if (mapChords) {
    [chord, chord2] = [calcChord1, calcChord2]
    noteRefs1 ? chordKey = noteRefs1.notesToDegs : chordKey = {}
    noteRefs2 ? chordKey2 = noteRefs2.notesToDegs : chordKey2 = {}
    if (displayChordDegrees && (focus1 || (neutral && chord && !chord2))) {
      chordType1.useUpper ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
    }
    if (displayChordDegrees  && (focus2 || (neutral && chord2 && !chord))) {
      chordType2.useUpper ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
    }
  }


  if (mapScales) {
    if (displayChordDegrees && focus1) {
      chordKey = selectedChord.notesToDegrees
      selectedChord.options[chordObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
    }
    if (displayChordDegrees  && focus2) {
      chordKey = selectedChord2.notesToDegrees
      selectedChord2.options[chord2ObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
    }
    if (displayChordDegrees && neutral) {
      altLabelContainer = labelContainer
      chordKey = keyKey
    }
    if (displayChordDegrees  && neutral && !chordTwoSelected) {
      chordKey = selectedChord.notesToDegrees
      selectedChord.options[chordObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
    }
  }

  if (leftyTrad || leftyMirror) {
    currentString = stringsLeft[string]
    name = 'string-left'
    openClass = 'open-left'
    openNoteClass = 'openNoteLeft'
    noteClass = 'noteLeft'
    capoClass = 'capo_neck_fret_lefty'
  }

  if (currentString && (mapScales || welcome || tutorial)) {
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

  if (currentString && mapChords) {
    let list = [];
    if (chord.length > 0) {
      chord.forEach((note) => { list.push(note) })
    }
    if (chord2.length > 0) {
      chord2.forEach((note) => { list.push(note) })
    }

    for(var i = 0; i < currentString.length; i++) {
      let [containsNote, box] = [false, []]
      for(var j = 0; j < currentString[i].length; j++) {
        if(list.includes(currentString[i][j])) {
          containsNote = true;
          box.push(currentString[i][j])
        }
      }
      if(!containsNote) {
        notes.push('')
      }
      if(box.length === 1) {
        notes.push(box[0])
      }
      if(box.length === 2) {
        notes.push(box)
      }
    }
  }

  const labelContainerEmpty = JSON.stringify(labelContainer) === '{}'
  const altLabelContainerEmpty = JSON.stringify(altLabelContainer) === '{}'
  const chordKeyEmpty = JSON.stringify(chordKey) === '{}'
  const chordKey2Empty = JSON.stringify(chordKey2) === '{}'
  const twoChordsSelected = chordOneSelected === true && chordTwoSelected === true;


  (lefty) ? openString = notes.length - 1 : openString = 0;

  return (
    <div className={`${name}`}>
      {notes ? notes.map((note, i) => {
        const inRange = i >= start && i <= end
        const open = i === openString
        const multiName = Array.isArray(note)
        let [outerClass, innerClass, noteText] = ['', '', '']
        open ? outerClass = openClass : outerClass = fretClass
        open ? innerClass = openNoteClass : innerClass = noteClass
        if (useCapo && ((!lefty && i === start) || (lefty && i === end))) {
          outerClass += ` ${capoClass}`
        }
        if (inRange) {
          if (mapChords && !(chordKeyEmpty && chordKey2Empty)) {
            if ((!chord && !chord2) || ((chord && chord2) && (!chord.includes(note) && !chord2.includes(note) && !multiName)) || ((chord && !chord2) && (!chord.includes(note))) || ((chord2 && !chord) && (!chord2.includes(note)))) {
              if (open) {
                return (
                  <span key={i} className={`${outerClass}`}></span>
                )
              }
              else {

                return (
                  <span key={i} className={`${outerClass}`}> ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________
                  </span>
                )

              }
            }
            if (chord && chord2) {
              if (multiName) {
                if (chord.includes(note[0]) && chord2.includes(note[1])) {
                  if ((neutral)) {
                    if (open) {
                      return (
                        <span key={i} className={`${openClass}`}>
                          <span className={`${openNoteClass} sharedNeckNote doubleName`}>
                            <span className="fromOne">{note[0]}</span>
                            <span className="divider">|</span>
                            <span className="fromTwo">{note[1]}</span>
                          </span>
                        </span>
                      )
                    }
                    else {
                      return (
                        <span key={i} className={`${fretClass}`}>_________________________________________________________________________________________________________________
                        <span className={`${noteClass} sharedNeckNote doubleName`}>
                          <span className="fromOne">{note[0]}</span>
                          <span className="divider">|</span>
                          <span className="fromTwo">{note[1]}</span>
                        </span>_________________________________________________________________________________________________________________
                      </span>
                      )
                    }

                  }
                  if (displayChordDegrees && altLabelContainer) {
                    (focus1 && chordKey) ? noteText = altLabelContainer[chordKey[note[0]]] : noteText = note[0]
                    (focus2 && chordKey2) ? noteText = altLabelContainer[chordKey2[note[1]]] : noteText = note[1]
                  }
                  else {
                    if(focus1) { noteText = note[0] }
                    if(focus2) { noteText = note[1] }
                  }
                  innerClass += ' sharedNeckNote'
                }

                if (chord.includes(note[1]) && chord2.includes(note[0])) {
                  if ((neutral)) {
                    if (open) {
                      return (
                        <span key={i} className={`${openClass}`}>
                          <span className={`${openNoteClass} sharedNeckNote doubleName`}>
                            <span className="fromOne">{note[1]}</span>
                            <span className="divider">|</span>
                            <span className="fromTwo">{note[0]}</span>
                          </span>
                        </span>
                      )
                    }
                    else {
                      return (
                        <span key={i} className={`${fretClass}`}>_________________________________________________________________________________________________________________
                          <span className={`${noteClass} sharedNeckNote doubleName`}>
                            <span className="fromOne">{note[1]}</span>
                            <span className="divider">|</span>
                            <span className="fromTwo">{note[0]}</span>
                          </span>_________________________________________________________________________________________________________________
                        </span>
                      )
                    }


                  }
                  if (displayChordDegrees && altLabelContainer) {
                    (focus1 && chordKey) ? noteText = altLabelContainer[chordKey[note[1]]] : noteText = note[1]
                    (focus2 && chordKey2) ? noteText = altLabelContainer[chordKey2[note[0]]] : noteText = note[0]
                  }
                  else {
                    if(focus1) { noteText = note[1] }
                    if(focus2) { noteText = note[0] }
                  }
                  innerClass += ' sharedNeckNote'
                }
              }
              else {
                if (chord.includes(note) && chord2.includes(note)) {
                  if (displayChordDegrees && !neutral && altLabelContainer) {
                    (focus1 && chordKey) ? noteText = altLabelContainer[chordKey[note]] : noteText = note;
                    (focus2 && chordKey2) ? noteText = altLabelContainer[chordKey2[note]] : noteText = note;
                  }
                  else if (neutral || !displayChordDegrees) {
                    noteText = note
                  }
                  innerClass += ' sharedNeckNote'
                }
                else if (chord.includes(note)) {
                  if (displayChordDegrees && !neutral && altLabelContainer){
                    if (focus1 && chordKey) {
                      noteText = altLabelContainer[chordKey[note]]
                      innerClass += ' selectedNote'
                    }
                    if (focus2) {
                      noteText = note
                      innerClass += ' selectedNote unfocus'
                    }
                  }
                  else {
                    noteText = note
                    focus2 ? innerClass += ' selectedNote unfocus' : innerClass += ' selectedNote'
                  }
                }
                else if (chord2.includes(note)) {
                  if (displayChordDegrees && !neutral && altLabelContainer){
                    if (focus2 && chordKey2) {
                      noteText = altLabelContainer[chordKey2[note]]
                      innerClass += ' selectedNote2'
                    }
                    if (focus1) {
                      noteText = note
                      innerClass += ' selectedNote2 unfocus'
                    }
                  }
                  else {
                    noteText = note
                    focus1 ? innerClass += ' selectedNote2 unfocus' : innerClass += ' selectedNote2'
                  }
                }
              }
            }
            else if (chord && !chord2) {
              if (displayChordDegrees && altLabelContainer && chordKey) {
                noteText = altLabelContainer[chordKey[note]]
              }
              else {
                noteText = note
              }
              innerClass += ' selectedNote'
            }
            else if (!chord && chord2) {
              if (displayChordDegrees && altLabelContainer && chordKey2) {
                noteText = altLabelContainer[chordKey2[note]]
              }
              else {
                noteText = note
              }
              innerClass += ' selectedNote2'
            }
            if(open) {
              return (
                <span key={i} className={`${outerClass}`}>
                  <span className={`${innerClass}`}>
                    {noteText}
                  </span>
                </span>
              )
            }
            else {
              return (
                <span key={i} className={`${outerClass}`}>_________________________________________________________________________________________________________________
                  <span className={`${innerClass}`}>
                    {noteText}
                  </span>
                _________________________________________________________________________________________________________________
                </span>
              )
            }
          }
          else if (mapScales) {
            if(note === selNote) {
              innerClass += ' selNoteNeckToggle'
            }
            if(chord && chord2 && chord.includes(note) && chord2.includes(note)) {
              innerClass += ' sharedNeckNote'
              displayChordDegrees ? noteText = altLabelContainer[chordKey[note]] : noteText = labelContainer[keyKey[note]]
            }
            else if(chord && chord.includes(note)) {
              focus2 ? innerClass += ' selectedNote unfocus' : innerClass += ' selectedNote'
              if (displayChordDegrees && (focus1 || !chordTwoSelected)) {
                noteText = altLabelContainer[chordKey[note]]
              }
              else {
                noteText = labelContainer[keyKey[note]]
              }
            }
            else if(chord2 && chord2.includes(note)) {
              innerClass += ' selectedNote2'
              focus1 ? innerClass += ' unfocus' : ''
              if (displayChordDegrees && focus2) {
                noteText = altLabelContainer[chordKey[note]]
              }
              else {
                noteText = labelContainer[keyKey[note]]
              }
            }
            else if(scale.includes(note) && (showScale || unfocusScale) && !twoChordsSelected) {
              unfocusScale ? innerClass += ' unfocus' : innerClass += ''
              noteText = labelContainer[keyKey[note]]
            }
            else if((scale.includes(note) && (hiddenScale || (twoChordsSelected))) || (scale.includes(note) && (showScale || unfocusScale) && twoChordsSelected) || !scale.includes(note)) {
              if (open) {
                return (
                  <span key={i} className={`${outerClass}`}></span>
                )
              }
              else {
                return (
                  <span key={i} className={`${outerClass}`}>___________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
                )
              }
            }
            if (open) {
              return (
                <span key={i} className={`${outerClass}`}>
                  <span className={`${innerClass}`}>
                    {noteText}
                  </span>
                </span>
              )
            }
            else {
              return (
              <span key={i} className={`${outerClass}`}> _________________________________________________________________________________________________________________
                <span className={`${innerClass}`}>
                  {noteText}
                </span>
              _________________________________________________________________________________________________________________
              </span>
              )
            }
          }
          else {
            if (open) {
              return (
                <span key={i} className={`${outerClass}`}>
                  <span>
                  </span>
                </span>
              )
            }
            else {
              return (
              <span key={i} className={`${outerClass}`}> _________________________________________________________________________________________________________________
                <span>
                </span>
              _________________________________________________________________________________________________________________
              </span>
              )
            }
          }
        }
        if (open) {
          return (
            <span key={i} className={`${outerClass}`}>
              <span>
              </span>
            </span>
          )
        }
        else {
          return (
          <span key={i} className={`${outerClass}`}> _________________________________________________________________________________________________________________
            <span>
            </span>
          _________________________________________________________________________________________________________________
          </span>
          )
        }
      }): null}
    </div>
  )
}



