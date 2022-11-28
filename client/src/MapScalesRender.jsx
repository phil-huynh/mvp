import React from 'react'
import { TonicMenu } from './TonicMenu.jsx'
import { ScalesMenu } from './ScalesMenu.jsx'
import { LabelMenu } from './LabelMenu.jsx'
import { AlterChordOpt } from './AlterChordOpt.jsx'
import { ScaleChords } from './ScaleChords.jsx'
import { useStoreContext } from '../StoreContext.js'


export const MapScalesRender = () => {

  let resetClass = 'reset_button resetVoicings '

  const {State, Setters, Conditions} = useStoreContext()

  const {showAlter, currentCard, currentList, sharedNotes, selNote, scale, scaleName, currentChordTones, currentChordTones2, chordOneSelected, resetVoicingCount, tonic, defaultType, displayChordDegrees} = State

  const {setShowTonicMenu, setShowScaleMenu, markNote, handleSevenths, handleChordDegrees, resetChords, handleAlterChord, handleAlterChordWindow} = Setters


  if (resetVoicingCount) {
    resetClass = 'reset_button resetVoicings can_reset'
  }

  let chordDegClass = 'chordDegButton'

  displayChordDegrees ? chordDegClass += ' toggle_on chordDegToggle' : chordDegClass += ''

  return (
    <React.Fragment>
      <TonicMenu/>
      <ScalesMenu/>
      <div className="bottomUpperScales">
        <div className='keyChoice_container'>
          <span className="keyChoiceLabels">
            <span>
              {`Scale :  `}
            </span>
            <span
              className="dashTonicLabel"
              onClick={()=>setShowTonicMenu(true)}
            >
              {` ${tonic}   `}
            </span>
            <span
              className="dashScaleLabel"
              onClick={()=>setShowScaleMenu(true)}
            >
              {scaleName}
            </span>
          </span>
        </div>
        <div className="spelledScale_container">
          <div className="spelledScale">
            {scale ? scale.map((note, i) => {
              let noteClass;
              if (note === selNote) {
                noteClass = 'noteRef targetNote'
              }
              else if (sharedNotes.length > 0 && sharedNotes.includes(note)) {
                noteClass = 'sharedNoteInScale'
              }
              else if (currentChordTones.length > 0 && currentChordTones.includes(note)) {
                noteClass = 'chord1NoteInScale'
              }
              else if (currentChordTones2.length > 0 && currentChordTones2.includes(note)) {
                noteClass = 'chord2NoteInScale'
              }
              else {
                noteClass = 'noteRef'
              }
              return (
                <span
                    className={noteClass}
                    key={`${i}${note}`}
                    onClick={()=>markNote(note)}
                  >
                    {`   ${note}   `}
                  </span>
              )
            }): null}
          </div>
        </div>
        <div className="defaultChordLabel_container">
          <span
            className="defaultChordLabel"
          >
            <span>{`Default Voicing : `}</span>
            <span className="defaultVoicing" onClick={(e) => handleSevenths(e)}>{`${defaultType}`}</span>
          </span>
        </div>
        {chordOneSelected ?
          <div className="chordDegree_container">
            <span
              className={chordDegClass}
              onClick={()=>handleChordDegrees()}
            >
              Chord Degrees
            </span>
          </div>
          : null
        }
        <div className="resetVoicings_container">
          <div
            onClick={() => resetChords()}
            className={resetClass}
          >
            <div className="rsv1">
              Reset
            </div>
            <div className="rsv2">
              Voicings
            </div>
          </div>
        </div>
      </div>
      <div className="bottomLowerScales">
        <AlterChordOpt/>
        <ScaleChords/>
      </div>
    </React.Fragment>
  )
}

export default MapScalesRender;