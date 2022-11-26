import React from 'react'
import { Chord } from './Chord.jsx'
import { Container, Row, Col } from 'react-bootstrap'

export const ScaleChords = ({keyCenter, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected, compareChords, ch0, ch1, ch2, ch3, ch4, ch5, ch6, ch0Alt, ch1Alt, ch2Alt, ch3Alt, ch4Alt, ch5Alt, ch6Alt, handleAlterChordWindow, setTones, setTones2, currentChordTones, currentChordTones2, resetCard, handleLock, displayChordDegrees, handleChordFocus, chordFocus, chordTwoSelected, sharedNotes, selNote, updateShared}) => {

  let chords = keyCenter.chords
  let type = [ch0, ch1, ch2, ch3, ch4, ch5, ch6]
  let whichChordAmI = ['ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6']
  let wasAltered = [ch0Alt, ch1Alt, ch2Alt, ch3Alt, ch4Alt, ch5Alt, ch6Alt]
  if(chords) {
    var keyChords = [chords.oneChord, chords.twoChord, chords.threeChord, chords.fourChord, chords.fiveChord, chords.sixChord, chords.sevenChord]
  }

  return (
    <Row>
      {chords && keyChords ? keyChords.map((chord, i) => (
        <Col key={`${i}${chord}`}>
          <Chord
            chord={chord}
            sevenths={sevenths}
            selectChord={selectChord}
            selectChord2={selectChord2}
            currentChord={currentChord}
            currentChord2={currentChord2}
            chordOneSelected={chordOneSelected}
            chordTwoSelected={chordTwoSelected}
            keyCenter={keyCenter}
            compareChords={compareChords}
            handleLock={handleLock}
            type={type[i]}
            wasAltered={wasAltered[i]}
            whichChordAmI={whichChordAmI[i]}
            handleAlterChordWindow={handleAlterChordWindow}
            setTones={setTones}
            setTones2={setTones2}
            currentChordTones={currentChordTones}
            currentChordTones2={currentChordTones2}
            resetCard={resetCard}
            displayChordDegrees={displayChordDegrees}
            handleChordFocus={handleChordFocus}
            chordFocus={chordFocus}
            sharedNotes={sharedNotes}
            selNote={selNote}
            updateShared={updateShared}
          />
        </Col>
      )): null}
    </Row>
  )
}



