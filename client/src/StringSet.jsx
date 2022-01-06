import React from 'react';
import String from './String.jsx';

var StringSet = ({strings, allStrings, scale})  => {
  return (
    <div className="neck">
      {strings.map((string) => (
        <String
          string={string}
          allStrings={allStrings}
          scale={scale}
        />
      ))}
    </div>
  )
}

export default StringSet;