import React from 'react';
import String from './String.jsx';

var StringSet = ({strings, stringsMirror, allStrings, stringsLeft, scale, chord, chord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, keyCenter, labelType})  => {
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
          hideScale={hideScale}
          solfege={solfege}
          scaleDegrees={scaleDegrees}
          keyCenter={keyCenter}
          labelType={labelType}
        />
      ))}
    </div>
  )
}

export default StringSet;