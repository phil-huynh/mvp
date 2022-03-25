import React from 'react'
import HideScaleMenu from './HideScaleMenu.jsx'

var NeckDash = ({chordOneSelected, handleViewMenuWindow, handleStringsMenuWindow, instrument, tuning, view, sharedNotes, name, handleHide, scaleHiddenToggle, scaleHiddenLabel, scaleUnfocusedToggle, scaleUnfocusedLabel, scaleVisibleToggle, scaleVisibleLabel, resetAll, resetVoicingCount, selNote, render, chordDegButtonClass, handleChordDegrees, root1, root2, voicing1, voicing2, displayChordDegrees, chordFocus}) => {

  var resetClass = "reset_button resetAll"

  if ((render === 'Map Scales' && (selNote || chordOneSelected || resetVoicingCount)) || (render === 'Map Chords' && (root1 || root2 || voicing1 || voicing2 || displayChordDegrees || chordFocus !== 'Neutral'))) {
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
        render === 'Map Chords' ?
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

