import React from 'react';

var HideScaleMenu = ({name, handleHide, scaleHiddenLabel, scaleHiddenToggle, scaleUnfocusedLabel, scaleUnfocusedToggle, scaleVisibleLabel, scaleVisibleToggle})  => {

  return (
    <span className={name}>
      <span className={`hideToggle ${scaleVisibleToggle}`} onClick={(e) => {handleHide(e)}} title='Show Scale'>{scaleVisibleLabel}</span>
      <span className={`hideToggle ${scaleUnfocusedToggle}`} onClick={(e) => {handleHide(e)}} title='Unfocus Scale'>  {scaleUnfocusedLabel}</span>
      <span className={`hideToggle ${scaleHiddenToggle}`} onClick={(e) => {handleHide(e)}} title='Hide Scale'>{scaleHiddenLabel}</span>
    </span>
  )
}

export default HideScaleMenu;