import React from 'react'
import Chord from './Chord.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

var ScaleChords = ({chords, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected}) => {
  var keyChords = [chords.oneChord, chords.twoChord, chords.threeChord, chords.fourChord, chords.fiveChord, chords.sixChord, chords.sevenChord]
  console.log("🚀 ~ file: ScaleChords.jsx ~ line 8 ~ ScaleChords ~ keyChords ", keyChords )
  console.log(sevenths)
  return (
    <Row>
      {chords ? keyChords.map((chord) => (
        <Col>
          <Chord
            chord={chord}
            sevenths={sevenths}
            selectChord={selectChord}
            selectChord2={selectChord2}
            currentChord={currentChord}
            currentChord2={currentChord2}
            chordOneSelected={chordOneSelected}
          />
        </Col>
      )): null}
    </Row>
  )
}

export default ScaleChords;


