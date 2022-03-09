import React from 'react'
import TonicMenu from './TonicMenu.jsx'
import ScalesMenu from './ScalesMenu.jsx'
import LabelMenu from './LabelMenu.jsx'
import AlterChordOpt from './AlterChordOpt.jsx'
import ScaleChords from './ScaleChords.jsx'


var MapScalesRender = ({
  ch0, ch1, ch2, ch3, ch4, ch5, ch6, ch0Alt, ch1Alt, ch2Alt, ch3Alt, ch4Alt, ch5Alt, ch6Alt,
  chordDegButtonClass,
  chordFocus,
  chordOneSelected,
  chordTwoSelected,
  compareChords,
  currentCard,
  currentChord,
  currentChord2,
  currentChordTones,
  currentChordTones2,
  defaultType,
  displayChordDegrees,

  handleAlterChord,
  handleAlterChordWindow,
  handleChordDegrees,
  handleChordFocus,
  handleLock,
  handleNeckNotes,
  handleScaleChange,
  handleScaleChange2,
  handleScaleMenuWindow,
  handleSevenths,
  handleTonicChange,
  handleTonicChange2,
  handleTonicMenuWindow,
  keyCenter,
  list,
  noteNameToggle,

  resetAll,
  resetCard,
  resetChords,
  root,
  scaleDegreeToggle,
  scaleName,
  selectChord,
  selectChord2,
  setTones,
  setTones2,
  sevenths,
  showAlter,
  showScaleMenu,
  showTonicMenu,
  solfegeToggle,
  tonic
  }) => {
  return (
    <React.Fragment>
      <div className="bottomUpper">
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

        </span>

        <LabelMenu
          handleNeckNotes={handleNeckNotes}
          name={'labelMenu'}
          noteNameToggle={noteNameToggle}
          scaleDegreeToggle={scaleDegreeToggle}
          solfegeToggle={solfegeToggle}
        />

        <span
          onClick={(e) => handleSevenths(e)}
          className="defaultChordLabel"
        >
          {`Default Voicing : ${defaultType}`}
        </span>
        {chordOneSelected ?
          <span
            className={chordDegButtonClass}
            onClick={()=>handleChordDegrees()}
          >
            Chord Degrees
          </span>: null
        }
        <span
          onClick={() => resetChords()}
          className="reset_button"
          >
          Reset Voicings
        </span>
        <span
          onClick={() => resetAll()}
          className="reset_button"
          >
          Reset Everything
        </span>
      </div>
      <div className="bottomLower">
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
          displayChordDegrees={displayChordDegrees}
          handleChordFocus={handleChordFocus}
          chordFocus={chordFocus}
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