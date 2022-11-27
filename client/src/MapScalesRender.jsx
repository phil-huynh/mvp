import React from 'react'
import { TonicMenu } from './TonicMenu.jsx'
import { ScalesMenu } from './ScalesMenu.jsx'
import { LabelMenu } from './LabelMenu.jsx'
import { AlterChordOpt } from './AlterChordOpt.jsx'
import { ScaleChords } from './ScaleChords.jsx'
import { useStoreContext } from '../StoreContext.js'


export const MapScalesRender = () => {

  let resetClass = 'reset_button resetVoicings '

  const {handleTonicMenuWindow, handleScaleMenuWindow, markNote, handleSevenths, handleChordDegrees, resetChords, showAlter, handleAlterChord, handleAlterChordWindow, currentCard, root, currentList, sharedNotes, selNote, scale, scaleName, currentChordTones, currentChordTones2, chordOneSelected, resetVoicingCount, tonic, defaultType, chordDegButtonClass} = useStoreContext()

  if (resetVoicingCount) {
    resetClass = 'reset_button resetVoicings can_reset'
  }

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
              onClick={()=>handleTonicMenuWindow()}
            >
              {` ${tonic}   `}
            </span>
            <span
              className="dashScaleLabel"
              onClick={()=>handleScaleMenuWindow()}
            >
              {scaleName}
            </span>
          </span>
        </div>
        <div className="spelledScale_container">
          <div className="spelledScale">
            {scale ? scale.map((note, i) => (
                note === selNote ?
                  <span
                    className="noteRef targetNote"
                    key={`${i}${note}`}
                    onClick={()=>markNote(note)}
                  >
                    {`   ${note}   `}
                  </span>
                : sharedNotes.length > 0 && sharedNotes.includes(note) ?
                  <span
                    className="sharedNoteInScale"
                    key={`${i}${note}`}
                    onClick={()=>markNote(note)}
                  >
                    {`   ${note}   `}
                  </span>
                : currentChordTones.length > 0 && currentChordTones.includes(note) ?
                  <span
                    className="chord1NoteInScale"
                    key={`${i}${note}`}
                    onClick={()=>markNote(note)}
                  >
                    {`   ${note}   `}
                  </span>
                : currentChordTones2.length > 0 && currentChordTones2.includes(note) ?
                  <span
                    className="chord2NoteInScale"
                    key={`${i}${note}`}
                    onClick={()=>markNote(note)}
                  >
                    {`   ${note}   `}
                  </span>
                :
                  <span className="noteRef"
                    key={`${i}${note}`}
                    onClick={()=>markNote(note)}
                  >{`   ${note}   `}
                  </span>

            )): null}
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
              className={chordDegButtonClass}
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