import React from 'react';
import String from './String.jsx';

var StringSet = ({strings, allStrings, scale, chord})  => {
  return (
    <div className="neck">
      {strings.map((string) => (
        <String
          string={string}
          allStrings={allStrings}
          scale={scale}
          chord={chord}
        />
      ))}
    </div>
  )
}

export default StringSet;