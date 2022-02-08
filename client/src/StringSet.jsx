import React from 'react';
import String from './String.jsx';

var StringSet = ({strings, stringsMirror, allStrings, stringsLeft, scale, chord, chord2, view, chordOneSelected, chordTwoSelected})  => {
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
        />
      ))}
    </div>
  )
}

export default StringSet;