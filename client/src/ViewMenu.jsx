import React from 'react';

var ViewMenu = ({name, handleView})  => {

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