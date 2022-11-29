import React from 'react';
import { useStoreContext } from '../../Providers/StoreContext.js';
import { Constants } from '../../Providers/Constants.js';

export const String = ({string, firstString, lastString}) => {

  const {sharp, flat, dblSharp, dblFlat, natural, dim, enharmonic} = Constants;

  const {State, Setters, Conditions} = useStoreContext();

  const {strings, stringsLeft , scale, currentChordTones, currentChordTones2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees, keyCenter, labelType, selectedChord, selectedChord2, chordFocus, displayChordDegrees, instrument, renderView, selNote, chordDegreesUpper, chordObjKey, chord2ObjKey, calcChord1, calcChord2, noteRefs1, noteRefs2, chordType1, chordType2, lowestFret, highestFret, useCapo} = State;

  const {mapChords, mapScales, welcome, tutorial, focus1, focus2, neutral, noteNameLabels, scaleDegLabels, solfegeLabels, showScale, unfocusScale, hiddenScale, lefty} = Conditions;

  const {markNote} = Setters;

  let chord; let chord2; let chordKey; let chordKey2;
  let openString; let fretClass; let altLabelContainer; let capo;
  let currentString = strings[string];
  let [start, end] = [lowestFret, highestFret];
  let [keyKey, keyKey2, labelContainer, labelContainer2, notes] = [{}, {}, {}, {}, []];
  let [name, openClass, openNoteClass, noteClass, capoClass] = ['string', 'open', 'openNote', 'note', 'capo_neck_fret'];


  ['Violin', 'Viola', 'Cello'].includes(instrument) ? fretClass = 'orchestral' : fretClass = 'fret';


  if (mapScales || welcome || tutorial) {
    [chord, chord2] = [currentChordTones, currentChordTones2];
    keyKey = keyCenter.notesToDegrees;
    labelContainer = keyCenter.tonicScaleDegrees;
    if (scaleDegLabels) { labelContainer = scaleDegrees; }
    if (solfegeLabels) { labelContainer = solfege; }
  }

  if (mapChords) {
    [chord, chord2] = [calcChord1, calcChord2]
    noteRefs1 ? chordKey = noteRefs1.notesToDegs : chordKey = {};
    noteRefs2 ? chordKey2 = noteRefs2.notesToDegs : chordKey2 = {};
  }

  const hasChord1 = chord.length > 0;
  const hasChord2 = chord2.length > 0;

  if (mapChords) {
    [chord, chord2] = [calcChord1, calcChord2];
    noteRefs1 ? chordKey = noteRefs1.notesToDegs : chordKey = {};
    noteRefs2 ? chordKey2 = noteRefs2.notesToDegs : chordKey2 = {};
    if (displayChordDegrees && (focus1 || (neutral && hasChord1 && !hasChord2))) {
      chordType1.useUpper ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees;
    }
    if (displayChordDegrees  && (focus2 || (neutral && hasChord2 && !hasChord1))) {
      chordType2.useUpper ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees;
    }
  }

  if (mapScales) {
    if (displayChordDegrees && focus1) {
      chordKey = selectedChord.notesToDegrees;
      selectedChord.options[chordObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees;
    }
    if (displayChordDegrees  && focus2) {
      chordKey = selectedChord2.notesToDegrees;
      selectedChord2.options[chord2ObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees;
    }
    if (displayChordDegrees && neutral) {
      altLabelContainer = labelContainer;
      chordKey = keyKey;
    }
    if (displayChordDegrees  && neutral && !chordTwoSelected) {
      chordKey = selectedChord.notesToDegrees;
      selectedChord.options[chordObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees;
    }
  }

  if (lefty) {
    currentString = stringsLeft[string];
    name = 'string-left';
    openClass = 'open-left';
    openNoteClass = 'openNoteLeft';
    noteClass = 'noteLeft';
    capoClass = 'capo_neck_fret_lefty';
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
      chord.forEach((note) => { list.push(note); })
    }
    if (chord2.length > 0) {
      chord2.forEach((note) => { list.push(note); })
    }

    for(var i = 0; i < currentString.length; i++) {
      let [containsNote, box] = [false, []];
      for(var j = 0; j < currentString[i].length; j++) {
        if(list.includes(currentString[i][j])) {
          containsNote = true;
          box.push(currentString[i][j]);
        }
      }
      if(!containsNote) { notes.push(''); }
      if(box.length === 1) { notes.push(box[0]); }
      if(box.length === 2) { notes.push(box); }
    }
  }

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
            if (((!chord.includes(note) && !chord2.includes(note) && !multiName))) {
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
            if (hasChord1 && hasChord2) {
              if (multiName) {
                let one; let two
                if (chord.includes(note[0]) && chord2.includes(note[1])) {
                  [one, two] = [note[0], note[1]]
                }
                if (chord.includes(note[1]) && chord2.includes(note[0])) {
                  [one, two] = [note[1], note[0]]
                }
                if ((neutral)) {
                  if (open) {
                    return (
                      <span key={i} className={`${openClass}`}>
                        <span className={`${openNoteClass} sharedNeckNote doubleName`}>
                          <span className="fromOne">{one}</span>
                          <span className="divider">|</span>
                          <span className="fromTwo">{two}</span>
                        </span>
                      </span>
                    )
                  }
                  else {
                    return (
                      <span key={i} className={`${fretClass}`}>_________________________________________________________________________________________________________________
                      <span className={`${noteClass} sharedNeckNote doubleName`}>
                        <span className="fromOne">{one}</span>
                        <span className="divider">|</span>
                        <span className="fromTwo">{two}</span>
                      </span>_________________________________________________________________________________________________________________
                    </span>
                    )
                  }
                }
                innerClass += ' sharedNeckNote'
                if (displayChordDegrees && altLabelContainer) {
                  if (focus1) {
                    chordKey ? noteText = altLabelContainer[chordKey[one]] : noteText = one;
                  }
                  if (focus2) {
                    chordKey2 ? noteText = altLabelContainer[chordKey2[two]] : noteText = two;
                  }
                }
                else {
                  if (focus1) { noteText = one; }
                  if (focus2) { noteText = two; }
                }

              }
              else {
                if (chord.includes(note) && chord2.includes(note)) {
                  innerClass += ' sharedNeckNote'
                  if (displayChordDegrees && !neutral && altLabelContainer) {
                    if(focus1) {
                      chordKey ? noteText = altLabelContainer[chordKey[note]] : noteText = note;
                    }
                    if(focus2) {
                      chordKey2 ? noteText = altLabelContainer[chordKey2[note]] : noteText = note;
                    }
                  }
                  else {
                    noteText = note
                  }
                }
                else if (chord.includes(note)) {
                  innerClass += ' selectedNote'
                  if (displayChordDegrees && !neutral && altLabelContainer){
                    if (focus1) {
                      chordKey ? noteText = altLabelContainer[chordKey[note]] : noteText = note
                    }
                    if (focus2) {
                      noteText = note
                      innerClass += ' unfocus'
                    }
                  }
                  else {
                    noteText = note
                    focus2 ? innerClass += ' selectedNote unfocus' : innerClass += ' selectedNote'
                  }
                }
                else if (chord2.includes(note)) {
                  innerClass += ' selectedNote2'
                  if (displayChordDegrees && !neutral && altLabelContainer){
                    if (focus2 && chordKey2) {
                      chordKey2 ? noteText = altLabelContainer[chordKey2[note]] : noteText = note
                    }
                    if (focus1) {
                      noteText = note
                      innerClass += ' unfocus'
                    }
                  }
                  else {
                    noteText = note
                    focus1 ? innerClass += ' selectedNote2 unfocus' : innerClass += ' selectedNote2'
                  }
                }
              }
            }
            else if (hasChord1) {
              innerClass += ' selectedNote'
              if (displayChordDegrees && altLabelContainer && chordKey) {
                noteText = altLabelContainer[chordKey[note]]
              }
              else { noteText = note }
            }
            else if (hasChord2) {
              innerClass += ' selectedNote2'
              if (displayChordDegrees && altLabelContainer && chordKey2) {
                noteText = altLabelContainer[chordKey2[note]]
              }
              else {noteText = note}
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
            if(selNote && note === selNote) {
              innerClass += ' selNoteNeckToggle'
              if(chord.includes(note) && chord2.includes(note)) {innerClass += ' sel_and_shared'}
              else if(chord.includes(note)) {innerClass += ' sel_and_one'}
              else if(chord2.includes(note)) {innerClass += ' sel_and_two'}
              displayChordDegrees ? noteText = altLabelContainer[chordKey[note]] : noteText = labelContainer[keyKey[note]]
            }
            else if(chord.includes(note) && chord2.includes(note)) {
              innerClass += ' sharedNeckNote'
              displayChordDegrees ? noteText = altLabelContainer[chordKey[note]] : noteText = labelContainer[keyKey[note]]
            }
            else if(chord.includes(note)) {
              focus2 ? innerClass += ' selectedNote unfocus' : innerClass += ' selectedNote'
              if (displayChordDegrees && (focus1 || !chordTwoSelected)) {
                noteText = altLabelContainer[chordKey[note]]
              }
              else {
                noteText = labelContainer[keyKey[note]]
              }
            }
            else if(chord2.includes(note)) {
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
                  <span
                    className={`${innerClass} interact`}
                    onClick={()=>markNote(note)}
                  >
                    {noteText}
                  </span>
                </span>
              )
            }
            else {
              return (
              <span key={i} className={`${outerClass}`}> _________________________________________________________________________________________________________________
                <span
                  className={`${innerClass} interact`}
                  onClick={()=>markNote(note)}
                >
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



