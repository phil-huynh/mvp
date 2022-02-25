import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'


var Chord = ({chord, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected, keyCenter, compareChords, whichChordAmI, handleAlterChordWindow, type, wasAltered, setTones, setTones2, currentChordTones, currentChordTones2, resetCard}) => {
  var name;
  var label;
  var cardClass='text-center chordCard'
  var tones;
  if (chord) {
    sevenths && !wasAltered ?
    (name=chord.options.seventhChord.name, label=chord.options.seventhChord.label, cardClass='text-center seventhChordCard', tones=chord.options.seventhChord.notes) :
    (name=chord.options.triad.name, label=chord.options.triad.label, cardClass='text-center chordCard', tones=chord.options.triad.notes)
  }

  if(type==='Triad' && chord.options.triad) {
    name=chord.options.triad.name
    label=chord.options.triad.label
    tones=chord.options.triad.notes
    if(chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if(chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if(type==='Shell Voicing' && chord.options.shell) {
    name=chord.options.shell.name
    label=chord.options.shell.label
    tones=chord.options.shell.notes
    if(chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if(chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if(type==='Seventh' && chord.options.seventhChord) {
    name=chord.options.seventhChord.name
    label=chord.options.seventhChord.label
    tones=chord.options.seventhChord.notes
    if(chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if(chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if(type==='Pentatonic Scale' && chord.options.pentatonic) {
    name=chord.options.pentatonic.name
    label=chord.options.pentatonic.label
    tones=chord.options.pentatonic.notes
    if(chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if(chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if(type==='Quartal Voicing' && chord.options.quartalVoicing) {
    name=chord.options.quartalVoicing.name
    label=chord.options.quartalVoicing.label
    tones=chord.options.quartalVoicing.notes
    if(chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if(chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if(type==='Fifths Voicing' && chord.options.fifthsVoicing) {
    name=chord.options.fifthsVoicing.name
    label=chord.options.fifthsVoicing.label
    tones=chord.options.fifthsVoicing.notes
    if(chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if(chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if(currentChord && chord===currentChord ) {
    cardClass = `${cardClass} selectedChord`
  }

  if(currentChord2 && chord===currentChord2) {
    cardClass = `${cardClass} selectedChord2`
  }

  console.log(tones)

  return (
    <React.Fragment>
      {chord ?
      <Card
        className={cardClass}
        bg='secondary'
        border='dark'
        text='white'
        >
        <div
          className='cardNameLabel'
          onClick={chordOneSelected && compareChords ? ()=>{selectChord2(chord, tones)} : ()=>{selectChord(chord, tones)}}>
          <Card.Header
            className='triadLabel'
          >
            {label}
          </Card.Header>
          <Card.Header
            className='triadName'
          >
            {name}
          </Card.Header>
        </div>
        <Card.Body className='cardBody'>
          {sevenths ?
            <Card.Text>
              {chord.seventh.note}
            </Card.Text> : null}
          <Card.Text>{tones}</Card.Text>
        </Card.Body>
        <div className='footerButton'>
          <Card.Footer
            className='alterChordButton'
            onClick={()=>{handleAlterChordWindow(whichChordAmI)}}
          >
            Alter Me
          </Card.Footer>
          <Card.Footer></Card.Footer>
          {wasAltered ?
            <Card.Footer
              className='alterChordButton'
              onClick={()=>{resetCard(whichChordAmI)}}
            >
              Reset Me
            </Card.Footer>
            : null
          }
        </div>
      </Card>:null
      }
    </React.Fragment>

  )
}

export default Chord;