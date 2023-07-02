import React from 'react';
import { Chord } from './Chord.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { useStoreContext } from '../../Providers/StoreContext.js';

export const ScaleChords = () => {
  const {State, Setters, Conditions} = useStoreContext();
  const {
    ch0,
    ch1,
    ch2,
    ch3,
    ch4,
    ch5,
    ch6,
    keyCenter,
    ch0Alt,
    ch1Alt,
    ch2Alt,
    ch3Alt,
    ch4Alt,
    ch5Alt,
    ch6Alt
  } = State;

  const type = [
    ch0,
    ch1,
    ch2,
    ch3,
    ch4,
    ch5,
    ch6
  ];

  const wasAltered = [
    ch0Alt,
    ch1Alt,
    ch2Alt,
    ch3Alt,
    ch4Alt,
    ch5Alt,
    ch6Alt
  ];

  const chords = keyCenter.chords
  let keyChords = chords ?
    [
      chords.oneChord,
      chords.twoChord,
      chords.threeChord,
      chords.fourChord,
      chords.fiveChord,
      chords.sixChord,
      chords.sevenChord
    ] : []

  return (
    <Row>
      {chords && keyChords ? keyChords.map((chord, i) => (
        <Col key={`${i}${chord}`}>
          <Chord
            chord={chord}
            type={type[i]}
            wasAltered={wasAltered[i]}
            whichChordAmI={`ch${i}`}
          />
        </Col>
      )): null}
    </Row>
  )
}



