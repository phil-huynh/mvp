import React from 'react'
import HideScaleMenu from './HideScaleMenu.jsx'

var NeckDash = ({chordOneSelected, handleViewMenuWindow, handleStringsMenuWindow, instrument, tuning, view, sharedNotes, name, handleHide, scaleHiddenToggle, scaleHiddenLabel, scaleUnfocusedToggle, scaleUnfocusedLabel, scaleVisibleToggle, scaleVisibleLabel, resetAll, resetVoicingCount, selNote, render, chordDegButtonClass, handleChordDegrees}) => {

  var resetClass = "reset_button resetAll"

  if (selNote || chordOneSelected || resetVoicingCount) {
    resetClass = "reset_button resetAll can_reset"
  }

  return (
    <span className="neckDashLayout">
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
      {render === 'Map Scales' ?
        <HideScaleMenu
          name={'hideScaleMenu'}
          handleHide={handleHide}
          scaleHiddenToggle={scaleHiddenToggle}
          scaleUnfocusedToggle={scaleUnfocusedToggle}
          scaleVisibleToggle={scaleVisibleToggle}
          scaleHiddenLabel={scaleHiddenLabel}
          scaleUnfocusedLabel={scaleUnfocusedLabel}
          scaleVisibleLabel={scaleVisibleLabel}
        />
        :
        render === 'test' ?
          <div className="chordDegree_container">
            <span
              className={chordDegButtonClass}
              onClick={()=>handleChordDegrees()}
            >
              Chord Degrees
            </span>
          </div>
        :
        <span></span>
      }
      {sharedNotes.length > 0 ?
        <span className="sharedLight_container">
          <span className="sharedLight">Shared Notes</span>
        </span>
        : null
      }
      <span className="resetAll_container">
        <span
          onClick={() => resetAll()}
          className={resetClass}
          >
          Reset All
        </span>
      </span>
    </span>
  )
}

export default NeckDash

