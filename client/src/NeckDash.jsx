import React from 'react'
import { HideScaleMenu } from './HideScaleMenu.jsx'
import { LabelMenu } from './LabelMenu.jsx'
import { BiArrowFromLeft } from 'react-icons/bi'
import { BiArrowFromRight } from 'react-icons/bi'
import { CgArrowsShrinkH } from 'react-icons/cg'
import { CgArrowsHAlt } from 'react-icons/cg'
import { useStoreContext } from '../StoreContext.js'

export const NeckDash = () => {

  const {handleViewMenuWindow, handleStringsMenuWindow, neckWindowMode, view, lowestFret, highestFret, handleChordDegrees, setNeckWindowMode, setWholeNeck, setWindowCycle, renderView, selNote, chordOneSelected, resetVoicingCount, root1, root2, voicing1, voicing2, displayChordDegrees, chordFocus, sharedNotes, resetAll, instrument, tuning, chordDegButtonClass} = useStoreContext()

  let lefty = (view === 'Lefty Traditional View' || view === 'Lefty Mirror View')
  let resetClass = "reset_button resetAll"
  let fromClass;
  let toClass;
  let windowClass;
  let resetIconClass;
  let capoClass;
  let iconClass = 'range_option_icons'

  neckWindowMode === 'from start' ? fromClass = iconClass + ' icon_toggle' : fromClass = iconClass
  neckWindowMode === 'to end' ? toClass = iconClass + ' icon_toggle' : toClass = iconClass
  neckWindowMode === 'window' ? windowClass = iconClass + ' icon_toggle' : windowClass = iconClass
  neckWindowMode === 'capo' ? capoClass = iconClass + ' capo_toggle capo' : capoClass = iconClass + ' capo'
  lowestFret !== 0 || highestFret !== 17 ? resetIconClass = iconClass + ' neck_window_reset' : resetIconClass = iconClass

  if (neckWindowMode !== 'none' || (renderView === 'Map Scales' && (selNote || chordOneSelected || resetVoicingCount)) || (renderView === 'Map Chords' && (root1 || root2 || voicing1 || voicing2 || displayChordDegrees || chordFocus !== 'Neutral'))) {
    resetClass = "reset_button resetAll can_reset"
  }

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
      {renderView === 'Map Scales' ?
      <div className="scale_neck_options">
        <HideScaleMenu/>
        <LabelMenu/>
      </div>
        :
        renderView === 'Map Chords' ?
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
            <BiArrowFromLeft
              size={25}
              onClick={()=>{setNeckWindowMode('from start')}}
            />
          </div>
          <div className={resetIconClass}>
            <CgArrowsHAlt
              size={25}
              onClick={()=>{setWholeNeck()}}
            />
          </div>
        </div>
        <div className="range_option_icon_row">
          <div className={toClass}>
            <BiArrowFromRight
              size={25}
              onClick={()=>{setNeckWindowMode('to end')}}
            />
          </div>
          <div className={windowClass}>
            <CgArrowsShrinkH
              size={25}
              onClick={()=>{setNeckWindowMode('window'); lefty ? setWindowCycle('end') : setWindowCycle('start')}}
            />
          </div>
        </div>
      </div>
      <div className="capo_container">
        <div
        className={capoClass}
        onClick={()=>{setNeckWindowMode('capo')}}
        >
          Capo
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


