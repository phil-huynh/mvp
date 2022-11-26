import React from 'react';
import { String } from './String.jsx';

export const StringSet = ({strings, stringsMirror, allStrings, stringsLeft, scale, scaleChord1, scaleChord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees, keyCenter, labelType, selectedChord, selectedChord2, chordFocus, displayChordDegrees, instrument, render, selNote, chordDegreesUpper, chordObjKey, chord2ObjKey, calcChord1, calcChord2, noteRefs1, noteRefs2, enharmonic, chordType1, chordType2, lowestFret, highestFret, useCapo})  => {
  let list;
  let neckClass;
  let firstString;
  let lastString;

  (view==='Mirror View' || view==='Lefty Mirror View') ? list = stringsMirror : list = strings
  if (list && list.length === 4){neckClass = 'four_string_neck'}
  if (list && list.length === 5){neckClass = 'five_string_neck'}
  if (list && list.length === 6){neckClass = 'six_string_neck'}

  return (

    <div className={`${neckClass}`}>
      {list ? list.map((string, i) => (
        i === 0 ? firstString = true : firstString = false,
        i === list.length - 1 ? lastString = true : lastString = false,
        <String
          key={i}
          string={string}
          allStrings={allStrings}
          stringsLeft={stringsLeft}
          scale={scale}
          scaleChord1={scaleChord1}
          scaleChord2={scaleChord2}
          view={view}
          chordOneSelected={chordOneSelected}
          chordTwoSelected={chordTwoSelected}
          selectedChord={selectedChord}
          selectedChord2={selectedChord2}
          hideScale={hideScale}
          solfege={solfege}
          scaleDegrees={scaleDegrees}
          chordDegrees={chordDegrees}
          chordDegreesUpper={chordDegreesUpper}
          keyCenter={keyCenter}
          labelType={labelType}
          chordFocus={chordFocus}
          displayChordDegrees={displayChordDegrees}
          instrument={instrument}
          firstString={firstString}
          lastString={lastString}
          render={render}
          selNote={selNote}
          chordObjKey={chordObjKey}
          chord2ObjKey={chord2ObjKey}
          calcChord1={calcChord1}
          calcChord2={calcChord2}
          noteRefs1={noteRefs1}
          noteRefs2={noteRefs2}
          chordType1={chordType1}
          chordType2={chordType2}
          enharmonic={enharmonic}
          lowestFret={lowestFret}
          highestFret={highestFret}
          useCapo={useCapo}
        />
      )): null}
    </div>

  )
}








