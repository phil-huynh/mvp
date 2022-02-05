import React from 'react'
import Chord from './Chord.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

var ScaleChords = ({chords, sevenths, selectChord}) => {
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
          />
        </Col>
      )): null}
    </Row>
  )
}

export default ScaleChords;


