import React from 'react';

var ViewMenu = ({name, handleView})  => {
  const sharp = '\u266F';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';

  return (
    <span className={name}>
      <select onChange={(e) => {handleView(e)}}>
        <option selected value='Traditional'>Traditional</option>
        <option value='Mirror'>Mirror</option>
        <option value='Mirror-left'>Mirror-left</option>
        <option value='Traditional-left'>Traditional-left</option>

      </select>
    </span>
  )
}

export default ViewMenu;