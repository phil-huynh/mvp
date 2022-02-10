import React from 'react'
import Chord from './Chord.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

var ScaleChords = ({keyCenter, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected}) => {

  var chords = keyCenter.chords
  if(chords) {
    var keyChords = [chords.oneChord, chords.twoChord, chords.threeChord, chords.fourChord, chords.fiveChord, chords.sixChord, chords.sevenChord]
  }

  return (
    <Row>
      {chords && keyChords ? keyChords.map((chord) => (
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
          />
        </Col>
      )): null}
    </Row>
  )
}

export default ScaleChords;


