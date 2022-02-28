import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'


var Chord = ({chord, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected, keyCenter, compareChords, whichChordAmI, handleAlterChordWindow, type, wasAltered, setTones, setTones2, currentChordTones, currentChordTones2, resetCard}) => {

  const sharp = '\u266F';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E'
  const dim = '\u00B0'

  var name;
  var label;
  var cardClass='text-center chordCard'
  var tones;
  var list = chord.options.list
  console.log("🚀 ~ file: Chord.jsx ~ line 12 ~ Chord ~ list ", list )
  if (chord) {
    sevenths && !wasAltered ?
    (name=chord.options.seventhChord.name, label=chord.options.seventhChord.label, cardClass='text-center seventhChordCard', tones=chord.options.seventhChord.notes) :
    (name=chord.options.triad.name, label=chord.options.triad.label, cardClass='text-center chordCard', tones=chord.options.triad.notes)
  }

  if (type==='Octaves' && chord.options.octaves) {
    name=chord.options.octaves.name
    label=chord.options.octaves.label
    tones=chord.options.octaves.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Power Chord' && chord.options.powerChord) {
    name=chord.options.powerChord.name
    label=chord.options.powerChord.label
    tones=chord.options.powerChord.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Triad' && chord.options.triad) {
    name=chord.options.triad.name
    label=chord.options.triad.label
    tones=chord.options.triad.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Shell Voicing' && chord.options.shell) {
    name=chord.options.shell.name
    label=chord.options.shell.label
    tones=chord.options.shell.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Seventh' && chord.options.seventhChord) {
    name=chord.options.seventhChord.name
    label=chord.options.seventhChord.label
    tones=chord.options.seventhChord.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='sus2' && chord.options.sus2) {
    name=chord.options.sus2.name
    label=chord.options.sus2.label
    tones=chord.options.sus2.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='sus4' && chord.options.sus4) {
    name=chord.options.sus4.name
    label=chord.options.sus4.label
    tones=chord.options.sus4.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='add9' && chord.options.add9) {
    name=chord.options.add9.name
    label=chord.options.add9.label
    tones=chord.options.add9.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Dominant 9' && chord.options.dominant9) {
    name=chord.options.dominant9.name
    label=chord.options.dominant9.label
    tones=chord.options.dominant9.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Major 6' && chord.options.major6) {
    name=chord.options.major6.name
    label=chord.options.major6.label
    tones=chord.options.major6.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Minor 6' && chord.options.minor6) {
    name=chord.options.minor6.name
    label=chord.options.minor6.label
    tones=chord.options.minor6.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Tritone' && chord.options.tritone) {
    name=chord.options.tritone.name
    label=chord.options.tritone.label
    tones=chord.options.tritone.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Major Pentatonic' && chord.options.majorPentatonic) {
    name=chord.options.majorPentatonic.name
    label=chord.options.majorPentatonic.label
    tones=chord.options.majorPentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Minor Pentatonic' && chord.options.minorPentatonic) {
    name=chord.options.minorPentatonic.name
    label=chord.options.minorPentatonic.label
    tones=chord.options.minorPentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Dominant Pentatonic' && chord.options.dominantPentatonic) {
    name=chord.options.dominantPentatonic.name
    label=chord.options.dominantPentatonic.label
    tones=chord.options.dominantPentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type===`Dominant ${sharp}4 Pentatonic` && chord.options.lydianDominantPentatonic) {
    name=chord.options.lydianDominantPentatonic.name
    label=chord.options.lydianDominantPentatonic.label
    tones=chord.options.lydianDominantPentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type===`Altered Pentatonic` && chord.options.alteredPentatonic) {
    name=chord.options.alteredPentatonic.name
    label=chord.options.alteredPentatonic.label
    tones=chord.options.alteredPentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Minor Major 7 Pentatonic' && chord.options.minorMaj7Pentatonic) {
    name=chord.options.minorMaj7Pentatonic.name
    label=chord.options.minorMaj7Pentatonic.label
    tones=chord.options.minorMaj7Pentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Minor 6 Pentatonic' && chord.options.minorMaj7Pentatonic) {
    name=chord.options.minor6Pentatonic.name
    label=chord.options.minor6Pentatonic.label
    tones=chord.options.minor6Pentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Egyptian Pentatonic' && chord.options.egyptianPentatonic) {
    name=chord.options.egyptianPentatonic.name
    label=chord.options.egyptianPentatonic.label
    tones=chord.options.egyptianPentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Japanese Pentatonic' && chord.options.japanesePentatonic) {
    name=chord.options.japanesePentatonic.name
    label=chord.options.japanesePentatonic.label
    tones=chord.options.japanesePentatonic.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Quartal Voicing' && chord.options.quartalVoicing) {
    name=chord.options.quartalVoicing.name
    label=chord.options.quartalVoicing.label
    tones=chord.options.quartalVoicing.notes
    if (chord===currentChord && currentChordTones !== tones) {
      setTones(tones)
    }
    if (chord===currentChord2 && currentChordTones2 !== tones) {
      setTones2(tones)
    }
  }

  if (type==='Fifths Voicing' && chord.options.fifthsVoicing) {
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

  if (currentChord && chord===currentChord ) {
    cardClass = `${cardClass} selectedChord`
  }

  if (currentChord2 && chord===currentChord2) {
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
            onClick={()=>{handleAlterChordWindow(whichChordAmI, list)}}
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