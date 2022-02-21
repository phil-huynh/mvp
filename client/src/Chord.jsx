import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'


var Chord = ({chord, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected, keyCenter, compareChords, whichChordAmI, handleAlterChordWindow, type, wasAltered}) => {
  var name;
  var label;
  var cardClass;
  var tones;
  if (chord) {
    sevenths && !wasAltered ?
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
  if(type==='Pentatonic Scale' && chord.pentatonic) {
    tones=chord.pentatonic.notes
  }



  return (
    <React.Fragment>
      {chord ?
      <Card
        className={cardClass}
        bg='secondary'
        border='dark'
        text='white'
        >
        <div className='cardNameLabel'>
          <Card.Header
            className='triadLabel'
            onClick={chordOneSelected && compareChords ? ()=>{selectChord2(chord, tones)} : ()=>{selectChord(chord, tones)}}>
            {label}
          </Card.Header>
          <Card.Header
            className='triadName'
            onClick={chordOneSelected && compareChords ? ()=>{selectChord2(chord, tones)} : ()=>{selectChord(chord, tones)}}>
            {name}
          </Card.Header>
        </div>
        <Card.Body className='cardBody'>
          {sevenths ?
            <Card.Text>
              {chord.seventh.note}
            </Card.Text> : null}
          <Card.Text>{tones}</Card.Text>
          <Card.Footer
            className='alterChordButton'
            onClick={()=>{handleAlterChordWindow(whichChordAmI)}}
          >
            Alter Me
          </Card.Footer>
        </Card.Body>
      </Card>:null
      }
    </React.Fragment>

  )
}

export default Chord;