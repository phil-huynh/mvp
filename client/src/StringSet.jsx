import React from 'react';
import String from './String.jsx';

var StringSet = ({strings, stringsMirror, allStrings, stringsLeft, scale, chord, view})  => {
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
          view={view}
        />
      ))}
    </div>
  )
}

export default StringSet;