import React from 'react'
import TonicMenu from './TonicMenu.jsx'
import ScalesMenu from './ScalesMenu.jsx'
import LabelMenu from './LabelMenu.jsx'
import AlterChordOpt from './AlterChordOpt.jsx'
import ScaleChords from './ScaleChords.jsx'


var MapScalesRender = ({ ch0, ch1, ch2, ch3, ch4, ch5, ch6, ch0Alt, ch1Alt, ch2Alt, ch3Alt, ch4Alt, ch5Alt, ch6Alt, chordDegButtonClass, chordFocus, chordOneSelected, chordTwoSelected, compareChords, currentCard, currentChord, currentChord2, currentChordTones, currentChordTones2, defaultType, displayChordDegrees, handleAlterChord, handleAlterChordWindow, handleChordDegrees, handleChordFocus, handleLock, handleNeckNotes, handleScaleChange, handleScaleChange2, handleScaleMenuWindow, handleSevenths, handleTonicChange, handleTonicChange2, handleTonicMenuWindow, keyCenter, list, markNote, noteNameToggle, resetCard, resetChords, root, scale, scaleDegreeToggle, scaleName, selectChord, selectChord2, selNote, setTones, setTones2, sevenths, sharedNotes, showAlter, showScaleMenu, showTonicMenu, solfegeToggle, tonic}) => {

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
        <span className="keyChoiceLabels">
          <span>
            {`Scale :`}
          </span>
          <span
            className="dashTonicLabel"
            onClick={()=>handleTonicMenuWindow()}
          >
            {` ${tonic} `}
          </span>
          <span
            className="dashScaleLabel"
            onClick={()=>handleScaleMenuWindow()}
          >
            {scaleName}
          </span>
          <span className="spelledScale">
            {scale ? scale.map((note) => (
              sharedNotes.length > 0 && sharedNotes.includes(note) ?
                <span className="sharedNoteInScale">{`   ${note}   `}</span>
                : currentChordTones.length > 0 && currentChordTones.includes(note) ?
                  <span className="chord1NoteInScale">{`   ${note}   `}</span>
                : currentChordTones2.length > 0 && currentChordTones2.includes(note) ?
                  <span className="chord2NoteInScale">{`   ${note}   `}</span>
                : currentChordTones2.length > 0 && currentChordTones2.includes(note) ?
                  <span className="chord2NoteInScale">{`   ${note}   `}</span>
                : chordOneSelected=== false && chordTwoSelected === false && note === selNote?
                  <span className="noteRef targetNote" onClick={()=>markNote(note)}>{`   ${note}   `}</span>
                : chordOneSelected=== false && chordTwoSelected === false ?
                  <span className="noteRef" onClick={()=>markNote(note)}>{`   ${note}   `}</span>
                : <span>{`   ${note}   `}</span>
            )): null}
          </span>
        </span>
        <LabelMenu
          handleNeckNotes={handleNeckNotes}
          name={'labelMenu'}
          noteNameToggle={noteNameToggle}
          scaleDegreeToggle={scaleDegreeToggle}
          solfegeToggle={solfegeToggle}
        />
        <span
          className="defaultChordLabel"
        >
          <span>{`Default Voicing : `}</span>
          <span className="defaultVoicing" onClick={(e) => handleSevenths(e)}>{`${defaultType}`}</span>
        </span>
        <span
          onClick={() => resetChords()}
          className="reset_button"
          >
          Reset Voicings
        </span>
        {chordOneSelected ?
          <span
            className={chordDegButtonClass}
            onClick={()=>handleChordDegrees()}
          >
            Chord Degrees
          </span>: null
        }
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
        />
      </div>
    </React.Fragment>
  )
}

export default MapScalesRender