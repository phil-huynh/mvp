import React from 'react';
import String from './String.jsx';

var StringSet = ({strings, stringsMirror, allStrings, stringsLeft, scale, chord, chord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees,  keyCenter, labelType, selectedChord, selectedChord2})  => {
  var list;
  if(view==='Mirror' || view==='Mirror-left') {
    list = stringsMirror
  }
  if(view==='Traditional' || view==='Traditional-left') {
    list = strings
  }

  return (

    <div className='neck'>
      {list.map((string) => (
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
          keyCenter={keyCenter}
          labelType={labelType}
        />
      ))}
    </div>

  )
}

export default StringSet;