import React from 'react';

var LabelMenu = ({name, handleNeckNotes, chordSelected})  => {

  return (
    <span className={name}>
      <select onChange={(e) => {handleNeckNotes(e)}}>
        <option selected value='Note Names'>Note Names</option>
        <option value='Scale Degrees'>Scale Degrees</option>
        <option value='Solfege'>Solfege</option>
        {chordSelected ?
          <option value='Chord Degrees'>Chord Degrees</option> : null
        }
      </select>
    </span>
  )
}

export default LabelMenu;