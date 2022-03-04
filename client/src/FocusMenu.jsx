import React from 'react';

var FocusMenu = ({name, handleChordFocus})  => {

  return (
    <span className={name}>
      <select onChange={(e) => {handleChordFocus(e)}}>
        <option selected value='Neutral'>Neutral</option>
        <option value='Focus 1'>Chord 1 Focus</option>
        <option value='Focus 2'>Chord 2 Focus</option>
      </select>
    </span>
  )
}

export default FocusMenu;