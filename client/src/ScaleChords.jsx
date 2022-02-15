import React from 'react'
import Chord from './Chord.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

var ScaleChords = ({keyCenter, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected, compareChords, ch0, ch1, ch2, ch3, ch4, ch5, ch6, ch0Alt, ch1Alt, ch2Alt, ch3Alt, ch4Alt, ch5Alt, ch6Alt, handleAlterChordWindow}) => {

  var chords = keyCenter.chords
  var type = [ch0, ch1, ch2, ch3, ch4, ch5, ch6]
  var whichChordAmI = ['ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6']
  var wasAltered = [ch0Alt, ch1Alt, ch2Alt, ch3Alt, ch4Alt, ch5Alt, ch6Alt]
  if(chords) {
    var keyChords = [chords.oneChord, chords.twoChord, chords.threeChord, chords.fourChord, chords.fiveChord, chords.sixChord, chords.sevenChord]
  }

  return (
    <Row>
      {chords && keyChords ? keyChords.map((chord, i) => (
        <Col>
          <Chord
            chord={chord}
            sevenths={sevenths}
            selectChord={selectChord}
            selectChord2={selectChord2}
            currentChord={currentChord}
            currentChord2={currentChord2}
            chordOneSelected={chordOneSelected}
            keyCenter={keyCenter}
            compareChords={compareChords}
            type={type[i]}
            wasAltered={wasAltered[i]}
            whichChordAmI={whichChordAmI[i]}
            handleAlterChordWindow={handleAlterChordWindow}
          />
        </Col>
      )): null}
    </Row>
  )
}

export default ScaleChords;


