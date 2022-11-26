import React from 'react'
import { TonicMenu } from './TonicMenu.jsx'
import { ScalesMenu } from './ScalesMenu.jsx'
import { LabelMenu } from './LabelMenu.jsx'
import { AlterChordOpt } from './AlterChordOpt.jsx'
import { ScaleChords } from './ScaleChords.jsx'


export const MapScalesRender = ({ ch0, ch1, ch2, ch3, ch4, ch5, ch6, ch0Alt, ch1Alt, ch2Alt, ch3Alt, ch4Alt, ch5Alt, ch6Alt, chordDegButtonClass, chordFocus, chordOneSelected, chordTwoSelected, compareChords, currentCard, currentChord, currentChord2, currentChordTones, currentChordTones2, defaultType, displayChordDegrees, handleAlterChord, handleAlterChordWindow, handleChordDegrees, handleChordFocus, handleLock, handleScaleChange, handleScaleChange2, handleScaleMenuWindow, handleSevenths, handleTonicChange, handleTonicChange2, handleTonicMenuWindow, keyCenter, list, markNote, resetCard, resetChords, resetVoicingCount,root, scale, scaleName, selectChord, selectChord2, selNote, setTones, setTones2, sevenths, sharedNotes, showAlter, showScaleMenu, showTonicMenu, tonic, updateShared}) => {


  var resetClass = 'reset_button resetVoicings '

  if (resetVoicingCount) {
    resetClass = 'reset_button resetVoicings can_reset'
  }

  return (
    <React.Fragment>
        <TonicMenu
          handleTonicChange={handleTonicChange}
          handleTonicMenuWindow={handleTonicMenuWindow}
          showTonicMenu={showTonicMenu}
        />
        <ScalesMenu
          handleScaleChange={handleScaleChange}
          handleScaleMenuWindow={handleScaleMenuWindow}
          showScaleMenu={showScaleMenu}
        />
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
                  <span className="noteRef targetNote" key={`${i}${note}`} onClick={()=>markNote(note)}>{`   ${note}   `}</span>
                : sharedNotes.length > 0 && sharedNotes.includes(note) ?
                  <span className="sharedNoteInScale" key={`${i}${note}`} onClick={()=>markNote(note)}>{`   ${note}   `}</span>
                : currentChordTones.length > 0 && currentChordTones.includes(note) ?
                  <span className="chord1NoteInScale" key={`${i}${note}`} onClick={()=>markNote(note)}>{`   ${note}   `}</span>
                : currentChordTones2.length > 0 && currentChordTones2.includes(note) ?
                  <span className="chord2NoteInScale" key={`${i}${note}`} onClick={()=>markNote(note)}>{`   ${note}   `}</span>
                :
                  <span className="noteRef" key={`${i}${note}`} onClick={()=>markNote(note)}>{`   ${note}   `}</span>

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
        <AlterChordOpt
          showAlter={showAlter}
          handleAlterChord={handleAlterChord}
          handleAlterChordWindow={handleAlterChordWindow}
          currentCard={currentCard}
          list={list}
          root={root}
        />
        <ScaleChords
          keyCenter={keyCenter}
          sevenths={sevenths}
          selectChord={selectChord}
          selectChord2={selectChord2}
          currentChord={currentChord}
          currentChord2={currentChord2}
          chordOneSelected={chordOneSelected}
          chordTwoSelected={chordTwoSelected}
          currentChordTones={currentChordTones}
          currentChordTones2={currentChordTones2}
          compareChords={compareChords}
          handleLock={handleLock}
          handleAlterChordWindow={handleAlterChordWindow}
          resetCard={resetCard}
          setTones={setTones}
          setTones2={setTones2}
          sharedNotes={sharedNotes}
          displayChordDegrees={displayChordDegrees}
          handleChordFocus={handleChordFocus}
          chordFocus={chordFocus}
          selNote={selNote}
          ch0={ch0}
          ch1={ch1}
          ch2={ch2}
          ch3={ch3}
          ch4={ch4}
          ch5={ch5}
          ch6={ch6}
          ch0Alt={ch0Alt}
          ch1Alt={ch1Alt}
          ch2Alt={ch2Alt}
          ch3Alt={ch3Alt}
          ch4Alt={ch4Alt}
          ch5Alt={ch5Alt}
          ch6Alt={ch6Alt}
          updateShared={updateShared}
        />
      </div>
    </React.Fragment>
  )
}

export default MapScalesRender;