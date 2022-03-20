import React from 'react';
import String from './String.jsx';

var StringSet = ({strings, stringsMirror, allStrings, stringsLeft, scale, chord, chord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees, keyCenter, labelType, selectedChord, selectedChord2, chordFocus, displayChordDegrees, instrument, render, selNote, chordDegreesUpper, chordObjKey, chord2ObjKey})  => {
  var list;
  var neckClass;
  var firstString;
  var lastString;

  if (view==='Mirror View' || view==='Lefty Mirror View') {
    list = stringsMirror
  }
  if (view==='Traditional View' || view==='Lefty Traditional View') {
    list = strings
  }

  if (list && list.length === 4){neckClass = 'four_string_neck'}
  if (list && list.length === 5){neckClass = 'five_string_neck'}
  if (list && list.length === 6){neckClass = 'six_string_neck'}

  return (

    <div className={`${neckClass}`}>
      {list ? list.map((string, i) => (
        i === 0 ? firstString = true : firstString = false,
        i === list.length - 1 ? lastString = true : lastString = false,
        <String
          string={string}
          allStrings={allStrings}
          stringsLeft={stringsLeft}
          scale={scale}
          chord={chord}
          chord2={chord2}
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
        />
      )): null}
    </div>

  )
}

export default StringSet;



// 4.89% 8.39% 7.94% 7.51% 7.1% 6.71% 6.35% 6.01% 5.68% 5.38% 5.09% 4.82% 4.56% 4.32% 4.09% 3.88% 3.67% 3.48%


// 3.23%
// 3.42%
// 3.63%
// 3.84%
// 4.07%
// 4.31%
// 4.57%
// 4.84%
// 5.13%
// 5.43%
// 5.76%
// 6.1%
// 6.46%
// 6.85%
// 7.26%
// 7.69%
// 8.14%
// 4.64%


