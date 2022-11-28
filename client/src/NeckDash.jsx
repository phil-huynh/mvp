import React from 'react'
import { HideScaleMenu } from './HideScaleMenu.jsx'
import { LabelMenu } from './LabelMenu.jsx'
import { BiArrowFromLeft } from 'react-icons/bi'
import { BiArrowFromRight } from 'react-icons/bi'
import { CgArrowsShrinkH } from 'react-icons/cg'
import { CgArrowsHAlt } from 'react-icons/cg'
import { useStoreContext } from '../StoreContext.js'

export const NeckDash = () => {

  const {State, Setters, Conditions} = useStoreContext()

  const {neckWindowMode, view, lowestFret, highestFret, renderView, selNote, chordOneSelected, resetVoicingCount, root1, root2, voicing1, voicing2, displayChordDegrees, chordFocus, sharedNotes, instrument, tuning, calcChord1, currentChordTones} = State

  const {setShowViewMenu, setShowStringsMenu, handleChordDegrees, setNeckWindowMode, setWholeNeck, setWindowCycle, resetAll} = Setters

  const {lefty, mapScales, mapChords, neutral, windowMode, startMode, endMode, cycleStart, cycleEnd, capoMode} = Conditions

  let [fromClass, toClass, windowClass, resetIconClass, capoClass] = ['', '', '', '', '']
  let resetClass = "reset_button resetAll"
  let iconClass = 'range_option_icons'
  let chordDegClass = 'chordDegButton'


  let sharedCount = 0
  if (sharedNotes.length > 0) {
    if(mapScales) {
      sharedCount = sharedNotes.length
    }
    if(mapChords) {
      let checker = {}
      calcChord1.forEach((note) => {checker[note] = true});
      sharedNotes.forEach((note) => {checker[note] ? sharedCount++: null})
    }
  }

  displayChordDegrees ? chordDegClass += ' toggle_on chordDegToggle' : chordDegClass += ''
  startMode ? fromClass = iconClass + ' icon_toggle' : fromClass = iconClass
  endMode ? toClass = iconClass + ' icon_toggle' : toClass = iconClass
  windowMode ? windowClass = iconClass + ' icon_toggle' : windowClass = iconClass
  capoMode ? capoClass = iconClass + ' capo_toggle capo' : capoClass = iconClass + ' capo'
  lowestFret !== 0 || highestFret !== 17 ? resetIconClass = iconClass + ' neck_window_reset' : resetIconClass = iconClass

  if (neckWindowMode !== 'none' || lowestFret !== 0 || highestFret !== 17 ||
    (mapScales && (selNote || chordOneSelected || resetVoicingCount)) ||
    (mapChords && (root1 || root2 || voicing1 || voicing2 || displayChordDegrees || !neutral))) {
    resetClass = "reset_button resetAll can_reset"
  }

  return (
    <span className="neckDashLayout">
      <div className="view_label_container">
        <span
          className="viewLabel"
          onClick={()=>setShowViewMenu(true)}
        >
          {view}
        </span>
      </div>

      <div className="tuning_label_container">
        <span
          className="tuningLabel"
          onClick={()=>setShowStringsMenu(true)}
        >
          {`${instrument} : ${tuning}`}
        </span>
      </div>
      {mapScales ?
      <div className="scale_neck_options">
        <HideScaleMenu/>
        <LabelMenu/>
      </div>
        :
        mapChords ?
          <div className="chordDegree_container">
            <span
              className={chordDegClass}
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
              onClick={()=>{
                neckWindowMode !== 'from start' ? setNeckWindowMode('from start') : setNeckWindowMode('none')
              }}
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
              onClick={()=>{
                neckWindowMode !== 'to end' ? setNeckWindowMode('to end') : setNeckWindowMode('none')
              }}
            />
          </div>
          <div className={windowClass}>
            <CgArrowsShrinkH
              size={25}
              onClick={()=>{
                setWindowCycle('start');
                neckWindowMode !== 'window' ? setNeckWindowMode('window') : setNeckWindowMode('none')
              }}
            />
          </div>
        </div>
      </div>
      <div className="capo_container">
        <div
        className={capoClass}
        onClick={()=>{
          neckWindowMode !== 'capo' ? setNeckWindowMode('capo') : setNeckWindowMode('none')
        }}
        >
          Capo
        </div>
      </div>
      {sharedCount > 1 ?
        <span className="sharedLight_container">
          <span className="sharedLight">{`${sharedCount} Shared Notes`}</span>
        </span>
        : sharedNotes.length === 1 ?
        <span className="sharedLight_container">
          <span className="sharedLight">{'1 Shared Note'}</span>
        </span>
        :null
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


