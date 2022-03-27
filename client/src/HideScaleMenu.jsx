import React from 'react';

var HideScaleMenu = ({name, handleHide, scaleHiddenLabel, scaleHiddenToggle, scaleUnfocusedLabel, scaleUnfocusedToggle, scaleVisibleLabel, scaleVisibleToggle})  => {

  return (
    <div className={name}>
      <div className={`hideToggle ${scaleVisibleToggle}`} onClick={(e) => {handleHide(e)}} title='Show Scale'>{scaleVisibleLabel}</div>
      <div className={`hideToggle ${scaleUnfocusedToggle}`} onClick={(e) => {handleHide(e)}} title='Unfocus Scale'>  {scaleUnfocusedLabel}</div>
      <div className={`hideToggle ${scaleHiddenToggle}`} onClick={(e) => {handleHide(e)}} title='Hide Scale'>{scaleHiddenLabel}</div>
    </div>
  )
}

export default HideScaleMenu;