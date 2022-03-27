import React from 'react'
import HideScaleMenu from './HideScaleMenu.jsx'
import LabelMenu from './LabelMenu.jsx'
import { BiArrowFromLeft } from 'react-icons/bi'
import { BiArrowFromRight } from 'react-icons/bi'
import { CgArrowsShrinkH } from 'react-icons/cg'
import { CgArrowsHAlt } from 'react-icons/cg'

var NeckDash = ({chordOneSelected, handleViewMenuWindow, handleStringsMenuWindow, instrument, tuning, view, sharedNotes, name, handleHide, scaleHiddenToggle, scaleHiddenLabel, scaleUnfocusedToggle, scaleUnfocusedLabel, scaleVisibleToggle, scaleVisibleLabel, resetAll, resetVoicingCount, selNote, render, chordDegButtonClass, handleChordDegrees, root1, root2, voicing1, voicing2, displayChordDegrees, chordFocus, handleNeckNotes, noteNameToggle, scaleDegreeToggle, solfegeToggle, setWholeNeck, setNeckWindowMode, neckWindowMode, start, end, setWindowCycle}) => {

  var resetClass = "reset_button resetAll"

  if ((render === 'Map Scales' && (selNote || chordOneSelected || resetVoicingCount)) || (render === 'Map Chords' && (root1 || root2 || voicing1 || voicing2 || displayChordDegrees || chordFocus !== 'Neutral'))) {
    resetClass = "reset_button resetAll can_reset"
  }

  var fromClass;
  var toClass;
  var windowClass;
  var resetIconClass;
  var iconClass = 'range_option_icons'

  neckWindowMode === 'from start' ? fromClass = iconClass + ' icon_toggle' : fromClass = iconClass
  neckWindowMode === 'to end' ? toClass = iconClass + ' icon_toggle' : toClass = iconClass
  neckWindowMode === 'window' ? windowClass = iconClass + ' icon_toggle' : windowClass = iconClass
  start !== 0 || end !== 17 ? resetIconClass = iconClass + ' neck_window_reset' : resetIconClass = iconClass



  return (
    <span className="neckDashLayout">
      <div className="view_label_container">
        <span
          className="viewLabel"
          onClick={()=>handleViewMenuWindow()}
        >
          {view}
        </span>
      </div>

      <div className="tuning_label_container">
        <span
          className="tuningLabel"
          onClick={()=>handleStringsMenuWindow()}
        >
          {`${instrument} : ${tuning}`}
        </span>
      </div>
      {render === 'Map Scales' ?
      <div className="scale_neck_options">
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
        <LabelMenu
        handleNeckNotes={handleNeckNotes}
        name={'labelMenu'}
        noteNameToggle={noteNameToggle}
        scaleDegreeToggle={scaleDegreeToggle}
        solfegeToggle={solfegeToggle}
        />
      </div>
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
        <span>
        </span>
      }
      <div className="note_range_opts_container">
        <div className="range_option_icon_row">
          <div className={fromClass}>
            <BiArrowFromLeft onClick={()=>{setNeckWindowMode('from start')}} size={30}/>
          </div>
          <div className={resetIconClass}>
            <CgArrowsHAlt onClick={()=>{setWholeNeck()}} size={30}/>
          </div>
        </div>
        <div className="range_option_icon_row">
          <div className={toClass}>
            <BiArrowFromRight onClick={()=>{setNeckWindowMode('to end')}} size={30}/>
          </div>
          <div className={windowClass}>
            <CgArrowsShrinkH onClick={()=>{setNeckWindowMode('window'); setWindowCycle('start')}} size={30}/>
          </div>
        </div>
      </div>
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

