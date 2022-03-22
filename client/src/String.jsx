import React from 'react'

var String = ({ string, allStrings, stringsLeft, scale, scaleChord1, scaleChord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees, keyCenter, labelType, selectedChord, selectedChord2, chordFocus, displayChordDegrees, instrument, firstString, lastString, render, selNote, chordDegreesUpper, chordObjKey, chord2ObjKey, calcChord1, calcChord2 }) => {
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
  var fretClass;
  var chord;
  var chord2

  if (['Violin', 'Viola', 'Cello'].includes(instrument)) {
    fretClass = 'orchestral'
    if(firstString) {
      fretClass += ' orchNeckTop'
    }
    if(lastString) {
      fretClass += ' orchNeckBottom'
    }
  } else {
    fretClass = 'fret'
  }

  if (labelType === 'Note Names') {
    labelContainer = keyCenter.tonicScaleDegrees
  }

  if (labelType === 'Scale Degrees') {
    labelContainer = scaleDegrees
  }

  if (labelType === 'Solfege') {
    labelContainer = solfege
  }

  if(render === 'Map Scales') {
    chord = scaleChord1
    chord2 = scaleChord2
  }

  if(render === 'test') {
    chord = calcChord1
    chord2 = calcChord2
  }

  if (displayChordDegrees && chordFocus === 'Focus 1') {
    chordKey = selectedChord.notesToDegrees
    selectedChord.options[chordObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
  }

  if (displayChordDegrees  && chordFocus === 'Focus 2') {
    chordKey = selectedChord2.notesToDegrees
    selectedChord2.options[chord2ObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
  }

  if (displayChordDegrees && chordFocus === 'Neutral') {
    altLabelContainer = labelContainer
    chordKey = keyKey
  }

  if (displayChordDegrees  && chordFocus === 'Neutral' && !chordTwoSelected) {
    chordKey = selectedChord.notesToDegrees
    selectedChord.options[chordObjKey].useUpper !== undefined ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
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
          chord.includes(note) && chord2.includes(note) && i === open && displayChordDegrees ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>
          :
          chord.includes(note) && chord2.includes(note) && i === open ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          chord.includes(note) && i === open && displayChordDegrees && (chordFocus === 'Focus 1' || !chordTwoSelected ) ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>
          :
          chord.includes(note) && i === open && chordFocus === 'Focus 2' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote unfocus`}>
                {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          chord.includes(note) && i === open ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote`}>
                {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          chord2.includes(note) && i === open && displayChordDegrees && chordFocus === 'Focus 2' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>
          :
          chord2.includes(note) && i === open && chordFocus === 'Focus 1' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2 unfocus`}>
              {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          chord2.includes(note) && i === open ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2`}>
              {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          scale.includes(note) && !chordOneSelected && !chordTwoSelected && selNote && selNote === note && i === open ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selNoteNeckToggle`}>
              {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          scale.includes(note) && i === open && !(chordOneSelected && chordTwoSelected) && hideScale === 'Show Scale' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass}`}>
                {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          scale.includes(note) && i === open && !(chordOneSelected && chordTwoSelected) && hideScale === 'Unfocus Scale' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} unfocus`}>
                {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          scale.includes(note) && i === open && (hideScale === 'Hide Scale' || (chordOneSelected && chordTwoSelected)) ?
            <span className={`${openClass}`}>
            </span>
          :
          !scale.includes(note) && i === open ?
            <span className={`${openClass}`}>
            </span>
          :
          chord.includes(note) && chord2.includes(note) && displayChordDegrees ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          chord.includes(note) && chord2.includes(note) ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          chord.includes(note) && displayChordDegrees && (chordFocus === 'Focus 1' || !chordTwoSelected ) ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          chord.includes(note) && chordFocus === 'Focus 2'  ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote unfocus`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          chord.includes(note) ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          chord2.includes(note) && displayChordDegrees && chordFocus === 'Focus 2' ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2`}>
                {altLabelContainer[chordKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          chord2.includes(note) && chordFocus === 'Focus 1' ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2 unfocus`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          chord2.includes(note) ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          scale.includes(note) && !chordOneSelected && !chordTwoSelected && selNote && selNote === note ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selNoteNeckToggle`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          scale.includes(note) && !(chordOneSelected && chordTwoSelected) && hideScale === 'Show Scale'?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass}`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          scale.includes(note) && !(chordOneSelected && chordTwoSelected) && hideScale === 'Unfocus Scale'?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} unfocus`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>:
            <span className={`${fretClass}`}>___________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
        )): null}
      </div>
  )
}

export default String;

