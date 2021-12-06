import React from 'react';
import String from './String.jsx';

var StringSet = ({strings, allStrings})  => (
  <div>
    <div>
      {strings.map((string) => (
        <String
          allStrings={allStrings}
          string={string}
        />
      ))}
    </div>
  </div>
)

export default StringSet;