import React from 'react';

var LabelMenu = ({name, handleNeckNotes})  => {

  return (
    <span className={name}>
      <select onChange={(e) => {handleNeckNotes(e)}}>
        <option selected value='Note Names'>Note Names</option>
        <option value='Scale Degrees'>Scale Degrees</option>
        <option value='Solfege'>Solfege</option>
      </select>
    </span>
  )
}

export default LabelMenu;