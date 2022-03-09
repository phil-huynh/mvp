import React from 'react'
import HideScaleMenu from './HideScaleMenu.jsx'

var NeckDash = ({handleViewMenuWindow, handleStringsMenuWindow, instrument, tuning, view, sharedNotes, name, handleHide, scaleHiddenToggle, scaleHiddenLabel, scaleUnfocusedToggle, scaleUnfocusedLabel, scaleVisibleToggle, scaleVisibleLabel}) => {
  return (
    <span>
      <span
        className="viewLabel"
        onClick={()=>handleViewMenuWindow()}
      >
        {view}
      </span>
      <span
        className="tuningLabel"
        onClick={()=>handleStringsMenuWindow()}
      >
        {`${instrument} : ${tuning}`}
      </span>
      <HideScaleMenu
        name={name}
        handleHide={handleHide}
        scaleHiddenToggle={scaleHiddenToggle}
        scaleUnfocusedToggle={scaleUnfocusedToggle}
        scaleVisibleToggle={scaleVisibleToggle}
        scaleHiddenLabel={scaleHiddenLabel}
        scaleUnfocusedLabel={scaleUnfocusedLabel}
        scaleVisibleLabel={scaleVisibleLabel}
      />
      {sharedNotes ?
        <span className="sharedLight">Shared Notes</span> : null
      }
    </span>
  )
}

export default NeckDash

