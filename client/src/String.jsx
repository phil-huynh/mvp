import React from 'react'

const sharp = '#';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E'
const dim = '\u00B0'

var String = ({ string, allStrings, stringsLeft, scale, scaleChord1, scaleChord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees, keyCenter, labelType, selectedChord, selectedChord2, chordFocus, displayChordDegrees, instrument, firstString, lastString, render, selNote, chordDegreesUpper, chordObjKey, chord2ObjKey, calcChord1, calcChord2, noteRefs1, noteRefs2, chordType1, chordType2, enharmonic }) => {
  var notes=[];
  var currentString;
  var name;
  var open;
  var openClass;
  var openNoteClass;
  var noteClass;
  var altLabelContainer;
  var chordKey;
  var chordKey2;
  var keyKey;
  var keyKey2;
  var labelContainer;
  var labelContainer2;
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
    keyKey = keyCenter.notesToDegrees
    labelContainer = keyCenter.tonicScaleDegrees
  }

  if(render === 'test') {
    chord = calcChord1
    chord2 = calcChord2
    labelContainer = noteRefs1.degsToNotes
    keyKey = noteRefs1.notesToDegs
    labelContainer2 = noteRefs2.degsToNotes
    keyKey2 = noteRefs2.notesToDegs
    chordKey = noteRefs1.notesToDegs
    chordKey2 = noteRefs2.notesToDegs
  }

  if (render === 'test') {
    if (displayChordDegrees && chordFocus === 'Focus 1') {
      chordType1.useUpper ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
    }
    if (displayChordDegrees  && chordFocus === 'Focus 2') {
      chordType2.useUpper ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
    }
    if (displayChordDegrees && chordFocus === 'Neutral') {
      altLabelContainer = labelContainer
      chordKey = keyKey
    }
    if (displayChordDegrees && chordFocus === 'Neutral' && chord.length > 0 && chord2.length === 0) {
      chordType1.useUpper ? altLabelContainer = chordDegreesUpper : altLabelContainer = chordDegrees
    }
    if (displayChordDegrees && chordFocus === 'Neutral' && chord2.length > 0 && chord.length === 0) {
      altLabelContainer = labelContainer
      chordKey = keyKey
    }
  }

  if (render === 'Map Scales') {
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

  if (currentString && render === 'Map Scales') {
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

  if (currentString && render === 'test') {
    let list = [];

    if (chord.length > 0) {
      chord.forEach((note) => (
        list.push(note)
      ))
    }
    if (chord2.length > 0) {
      chord2.forEach((note) => (
        list.push(note)
      ))
    }

    console.log('list at 182',list)

    for(var i = 0; i < currentString.length; i++) {
      var containsNote = false;
      var box = []
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
    console.log('notes on string',notes)
  }

  (view ==='Lefty Mirror View' || view ==='Lefty Traditional View') ? open = notes.length - 1 : open = 0;

  return(
      <div className={`${name}`}>
        {notes ? notes.map((note, i) => (
          render === 'test' && chord.includes(note) && chord2.includes(note) && i === open && displayChordDegrees && chordFocus === 'Focus 1' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>
          :
          render === 'test' && chord.includes(note) && chord2.includes(note) && i === open && displayChordDegrees && chordFocus === 'Focus 2' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey2[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && chord.includes(note) && chord2.includes(note) && i === open && displayChordDegrees ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>
          :
          render === 'Map SCales' && chord.includes(note) && chord2.includes(note) && i === open && displayChordDegrees ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && i === open && displayChordDegrees && chordFocus === 'Focus 1' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note[0]]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && i === open && chordFocus === 'Focus 1' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {labelContainer[keyKey[note[0]]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && i === open && displayChordDegrees && chordFocus === 'Focus 2' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey2[note[1]]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && i === open && chordFocus === 'Focus 2' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {labelContainer2[keyKey2[note[1]]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && i === open ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote doubleName`}>
                <span className="fromOne">{labelContainer[keyKey[note[0]]]}</span>
                <span className="divider">|</span>
                <span className="fromTwo">{labelContainer2[keyKey2[note[1]]]}</span>
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && i === open && displayChordDegrees && chordFocus === 'Focus 1' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note[1]]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && i === open && chordFocus === 'Focus 1' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {labelContainer[keyKey[note[1]]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && i === open && displayChordDegrees && chordFocus === 'Focus 2' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey2[note[0]]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && i === open && chordFocus === 'Focus 2' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote`}>
                {labelContainer2[keyKey2[note[0]]]}
              </span>
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && i === open ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNeckNote doubleName`}>
                <span className="fromOne">{labelContainer[keyKey[note[0]]]}</span>
                <span className="divider">|</span>
                <span className="fromTwo">{labelContainer2[keyKey2[note[1]]]}</span>
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
          render === 'test' && chord.includes(note) && i === open && displayChordDegrees && (chordFocus === 'Focus 1' || chord2.length === 0) ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && chord.includes(note) && i === open && displayChordDegrees && (chordFocus === 'Focus 1' || !chordTwoSelected ) ?
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
          render === 'test' && chord2.includes(note) && i === open && displayChordDegrees && chordFocus === 'Focus 2' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2`}>
                {altLabelContainer[chordKey2[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && chord2.includes(note) && i === open && displayChordDegrees && chordFocus === 'Focus 2' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>
          :
          render === 'test' && chord2.includes(note) && i === open && chordFocus === 'Focus 1' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2 unfocus`}>
              {labelContainer2[keyKey2[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && chord2.includes(note) && i === open && chordFocus === 'Focus 1' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2 unfocus`}>
              {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          render === 'test' && chord2.includes(note) && i === open ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2`}>
              {labelContainer2[keyKey2[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && chord2.includes(note) && i === open ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} selectedNote2`}>
              {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && scale.includes(note) && !chordOneSelected && !chordTwoSelected && selNote && selNote === note && i === open ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass} selNoteNeckToggle`}>
              {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && scale.includes(note) && i === open && !(chordOneSelected && chordTwoSelected) && hideScale === 'Show Scale' ?
          <span className={`${openClass}`}>
              <span className={`${openNoteClass}`}>
                {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && scale.includes(note) && i === open && !(chordOneSelected && chordTwoSelected) && hideScale === 'Unfocus Scale' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} unfocus`}>
                {labelContainer[keyKey[note]]}
              </span>
            </span>
          :
          render === 'Map Scales' && scale.includes(note) && i === open && (hideScale === 'Hide Scale' || (chordOneSelected && chordTwoSelected)) ?
          <span className={`${openClass}`}>
            </span>
          :
          render === 'Map Scales' && !scale.includes(note) && i === open ?
          <span className={`${openClass}`}>
            </span>
          :
          i === open ?
          <span className={`${openClass}`}>
            </span>
          :
          render ==='test' && chord.includes(note) && chord2.includes(note) && displayChordDegrees && chordFocus === 'Focus 1' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render ==='test' && chord.includes(note) && chord2.includes(note) && displayChordDegrees && chordFocus === 'Focus 2' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey2[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'Map Scales' && chord.includes(note) && chord2.includes(note) && displayChordDegrees ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && displayChordDegrees && chordFocus === 'Focus 1' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note[0]]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && chordFocus === 'Focus 1' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {labelContainer[keyKey[note[0]]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && displayChordDegrees && chordFocus === 'Focus 2' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
              {altLabelContainer[chordKey2[note[1]]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) && chordFocus === 'Focus 2' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {labelContainer2[keyKey2[note[1]]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[0]) && chord2.includes(note[1])) ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote doubleName`}>
                <span className="fromOne">{labelContainer[keyKey[note[0]]]}</span>
                <span className="divider">|</span>
                <span className="fromTwo">{labelContainer2[keyKey2[note[1]]]}</span>
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && displayChordDegrees && chordFocus === 'Focus 1' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey[note[1]]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && chordFocus === 'Focus 1' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {labelContainer[keyKey[note[1]]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && displayChordDegrees && chordFocus === 'Focus 2' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {altLabelContainer[chordKey2[note[1]]]}}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) && chordFocus === 'Focus 2' ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote`}>
                {labelContainer[keyKey[note[0]]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && Array.isArray(note) && (chord.includes(note[1]) && chord2.includes(note[0])) ?
          <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} sharedNeckNote doubleName`}>
                <span className="fromOne">{labelContainer[keyKey[note[1]]]}</span>
                <span className="divider">|</span>
                <span className="fromTwo">{labelContainer2[keyKey2[note[0]]]}</span>
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
          render === 'test' && chord.includes(note) && displayChordDegrees && (chordFocus === 'Focus 1' || chord2.length === 0 ) ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'Map Scales' && chord.includes(note) && displayChordDegrees && (chordFocus === 'Focus 1' || !chordTwoSelected ) ?
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
          render === 'test' && chord2.includes(note) && displayChordDegrees && chordFocus === 'Focus 2' ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2`}>
                {altLabelContainer[chordKey2[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'Map Scales' && chord2.includes(note) && displayChordDegrees && chordFocus === 'Focus 2' ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2`}>
                {altLabelContainer[chordKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && chord2.includes(note) && chordFocus === 'Focus 1' ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2 unfocus`}>
                {labelContainer2[keyKey2[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'Map Scales' && chord2.includes(note) && chordFocus === 'Focus 1' ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2 unfocus`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'test' && chord2.includes(note) ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2`}>
                {labelContainer2[keyKey2[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'Map Scales' && chord2.includes(note) ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selectedNote2`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'Map Scales' && scale.includes(note) && !chordOneSelected && !chordTwoSelected && selNote && selNote === note ?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass} selNoteNeckToggle`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'Map Scales' && scale.includes(note) && !(chordOneSelected && chordTwoSelected) && hideScale === 'Show Scale'?
            <span className={`${fretClass}`}>_________________________________________________________________________________________________________________
              <span className={`${noteClass}`}>
                {labelContainer[keyKey[note]]}
              </span>_________________________________________________________________________________________________________________
            </span>
          :
          render === 'Map Scales' && scale.includes(note) && !(chordOneSelected && chordTwoSelected) && hideScale === 'Unfocus Scale'?
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

