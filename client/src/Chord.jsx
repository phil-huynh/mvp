import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'


var Chord = ({chord, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected, keyCenter, compareChords}) => {
  var name;
  var label;
  var cardClass;
  var tones;
  if (chord) {
    sevenths ?
    (name=chord.seventhName, label=chord.seventhLabel, cardClass='text-center seventhChordCard', tones=chord.chordTones) :
    (name=chord.triadName, label=chord.triadLabel, cardClass='text-center chordCard',
    tones=[chord.chordTones[0], chord.chordTones[1], chord.chordTones[2]])
  }

  if(currentChord && chord===currentChord ) {
    cardClass = `${cardClass} selectedChord`
  }

  if(currentChord2 && chord===currentChord2) {
    cardClass = `${cardClass} selectedChord2`
  }

  return (
    <React.Fragment>
      {chord ?
      <Card
        className={cardClass}
        bg='secondary'
        border='dark'
        text='white'
        onClick={chordOneSelected && compareChords ? ()=>{selectChord2(chord, tones)} : ()=>{selectChord(chord, tones)}}
        >
        <Card.Header className='triadLabel'>{label}</Card.Header>
        <Card.Body>
          {sevenths ?
            <Card.Text>
              {chord.seventh.note}
            </Card.Text> : null}
          <Card.Text>{chord.fifth.note}</Card.Text>
          <Card.Text>{chord.third.note}</Card.Text>
          <Card.Text className= 'rootNote'>{chord.root.note}</Card.Text>
        </Card.Body>
        <Card.Footer className='triadName'>{name}</Card.Footer>
      </Card>:null
      }
    </React.Fragment>

  )
}

export default Chord;