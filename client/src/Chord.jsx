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
  var root = chord.root.note
  var list = chord.options.list
  var triadList = [' Triad', '+ Triad', 'm Triad', `${dim} Triad`, `maj ${flat}5 Triad`]
  var seventhsList = ['maj7', '7', '+(maj7)', `7(${sharp}5)`, `7(${flat}5)`, `${dim}7`,`maj7(${flat}5)`, 'm(maj7)', 'm7']
  var shellList = ['maj7 (shell)', '7 (shell)', 'm7 (shell)', 'm(maj7) (shell)']
  console.log("🚀 ~ file: Chord.jsx ~ line 12 ~ Chord ~ list ", list )
  if (chord) {
    sevenths && !wasAltered ?
    (name=chord.options.seventhChord.name, label=chord.options.seventhChord.label, cardClass='text-center seventhChordCard', tones=chord.options.seventhChord.notes) :
    (name=chord.options.triad.name, label=chord.options.triad.label, cardClass='text-center chordCard', tones=chord.options.triad.notes)
  }

  if (type==='  Octaves' && chord.options.octaves) {
    name=chord.options.octaves.name
    label=chord.options.octaves.label
    tones=chord.options.octaves.notes
  }

  if (type==='  Power Chord' && chord.options.powerChord) {
    name=chord.options.powerChord.name
    label=chord.options.powerChord.label
    tones=chord.options.powerChord.notes
  }

  if (triadList.includes(type) && chord.options.triad) {
    name=chord.options.triad.name
    label=chord.options.triad.label
    tones=chord.options.triad.notes
  }

  if (shellList.includes(type) && chord.options.shell) {
    name=chord.options.shell.name
    label=chord.options.shell.label
    tones=chord.options.shell.notes
  }

  if (seventhsList.includes(type) && chord.options.seventhChord) {
    name=chord.options.seventhChord.name
    label=chord.options.seventhChord.label
    tones=chord.options.seventhChord.notes
  }

  if (type===' sus2' && chord.options.sus2) {
    name=chord.options.sus2.name
    label=chord.options.sus2.label
    tones=chord.options.sus2.notes
  }

  if (type===' sus4' && chord.options.sus4) {
    name=chord.options.sus4.name
    label=chord.options.sus4.label
    tones=chord.options.sus4.notes
  }

  if (type===`7sus4` && chord.options.dominantSus4) {
    name=chord.options.dominantSus4.name
    label=chord.options.dominantSus4.label
    tones=chord.options.dominantSus4.notes
  }

  if (type===' add9' && chord.options.add9) {
    name=chord.options.add9.name
    label=chord.options.add9.label
    tones=chord.options.add9.notes
  }

  if (type===`7(9)` && chord.options.dominant9) {
    name=chord.options.dominant9.name
    label=chord.options.dominant9.label
    tones=chord.options.dominant9.notes
  }

  if (type===`7(${flat}9)` && chord.options.dominantFlat9) {
    name=chord.options.dominantFlat9.name
    label=chord.options.dominantFlat9.label
    tones=chord.options.dominantFlat9.notes
  }

  if (type===`7(${sharp}9)` && chord.options.dominantSharp9) {
    name=chord.options.dominantSharp9.name
    label=chord.options.dominantSharp9.label
    tones=chord.options.dominantSharp9.notes
  }

  if (type===`7(9, ${sharp}11)` && chord.options.dominantSharp11) {
    name=chord.options.dominantSharp11.name
    label=chord.options.dominantSharp11.label
    tones=chord.options.dominantSharp11.notes
  }

  if (type===`7(${sharp}11)` && chord.options.dominantAddSharp11) {
    name=chord.options.dominantAddSharp11.name
    label=chord.options.dominantAddSharp11.label
    tones=chord.options.dominantAddSharp11.notes
  }

  if (type===`7(9, ${sharp}11, 13)` && chord.options.dominant13) {
    name=chord.options.dominant13.name
    label=chord.options.dominant13.label
    tones=chord.options.dominant13.notes
  }

  if (type===`7(9, ${sharp}11, ${flat}13)` && chord.options.dominantFlat13) {
    name=chord.options.dominantFlat13.name
    label=chord.options.dominantFlat13.label
    tones=chord.options.dominantFlat13.notes
  }

  if (type===`7(${flat}13)` && chord.options.dominantAddFlat13) {
    name=chord.options.dominantFlatAdd13.name
    label=chord.options.dominantFlatAdd13.label
    tones=chord.options.dominantFlatAdd13.notes
  }

  if (type===`7(${flat}9, ${flat}13)` && chord.options.dominantFlat9Flat13) {
    name=chord.options.dominantFlat9Flat13.name
    label=chord.options.dominantFlat9Flat13.label
    tones=chord.options.dominantFlat9Flat13.notes
  }

  if (type===`7(9, ${flat}13)` && chord.options.dominant9Flat13) {
    name=chord.options.dominant9Flat13.name
    label=chord.options.dominant9Flat13.label
    tones=chord.options.dominant9Flat13.notes
  }

  if (type===`7(13)` && chord.options.dominantAdd13) {
    name=chord.options.dominantAdd13.name
    label=chord.options.dominantAdd13.label
    tones=chord.options.dominantAdd13.notes
  }

  if (type==='6' && chord.options.major6) {
    name=chord.options.major6.name
    label=chord.options.major6.label
    tones=chord.options.major6.notes
  }

  if (type==='m6' && chord.options.minor6) {
    name=chord.options.minor6.name
    label=chord.options.minor6.label
    tones=chord.options.minor6.notes
  }

  if (type==='  Tritone' && chord.options.tritone) {
    name=chord.options.tritone.name
    label=chord.options.tritone.label
    tones=chord.options.tritone.notes
  }

  if (type==='  Major Pentatonic' && chord.options.majorPentatonic) {
    name=chord.options.majorPentatonic.name
    label=chord.options.majorPentatonic.label
    tones=chord.options.majorPentatonic.notes
  }

  if (type==='  Minor Pentatonic' && chord.options.minorPentatonic) {
    name=chord.options.minorPentatonic.name
    label=chord.options.minorPentatonic.label
    tones=chord.options.minorPentatonic.notes
  }

  if (type==='  Dominant Pentatonic' && chord.options.dominantPentatonic) {
    name=chord.options.dominantPentatonic.name
    label=chord.options.dominantPentatonic.label
    tones=chord.options.dominantPentatonic.notes
  }

  if (type===`  Dominant ${sharp}4 Pentatonic` && chord.options.lydianDominantPentatonic) {
    name=chord.options.lydianDominantPentatonic.name
    label=chord.options.lydianDominantPentatonic.label
    tones=chord.options.lydianDominantPentatonic.notes
  }

  if (type===`  Major ${sharp}4 Pentatonic` && chord.options.majSharp4Pentatonic) {
    name=chord.options.majSharp4Pentatonic.name
    label=chord.options.majSharp4Pentatonic.label
    tones=chord.options.majSharp4Pentatonic.notes
  }

  if (type===`  Altered Pentatonic` && chord.options.alteredPentatonic) {
    name=chord.options.alteredPentatonic.name
    label=chord.options.alteredPentatonic.label
    tones=chord.options.alteredPentatonic.notes
  }

  if (type==='  Minor Major 7 Pentatonic' && chord.options.minorMaj7Pentatonic) {
    name=chord.options.minorMaj7Pentatonic.name
    label=chord.options.minorMaj7Pentatonic.label
    tones=chord.options.minorMaj7Pentatonic.notes
  }

  if (type==='  Minor 6 Pentatonic' && chord.options.minorMaj7Pentatonic) {
    name=chord.options.minor6Pentatonic.name
    label=chord.options.minor6Pentatonic.label
    tones=chord.options.minor6Pentatonic.notes
  }

  if (type==='  Egyptian Pentatonic' && chord.options.egyptianPentatonic) {
    name=chord.options.egyptianPentatonic.name
    label=chord.options.egyptianPentatonic.label
    tones=chord.options.egyptianPentatonic.notes
  }

  if (type==='  Japanese Pentatonic' && chord.options.japanesePentatonic) {
    name=chord.options.japanesePentatonic.name
    label=chord.options.japanesePentatonic.label
    tones=chord.options.japanesePentatonic.notes
  }

  if (type==='  Quartal Voicing' && chord.options.quartalVoicing) {
    name=chord.options.quartalVoicing.name
    label=chord.options.quartalVoicing.label
    tones=chord.options.quartalVoicing.notes
  }

  if (type==='  Fifths Voicing' && chord.options.fifthsVoicing) {
    name=chord.options.fifthsVoicing.name
    label=chord.options.fifthsVoicing.label
    tones=chord.
    options.fifthsVoicing.notes
  }

  if (chord===currentChord && currentChordTones !== tones) {
    setTones(tones)
  }
  if (chord===currentChord2 && currentChordTones2 !== tones) {
    setTones2(tones)
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
            onClick={()=>{handleAlterChordWindow(whichChordAmI, list, root)}}
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