import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'


var Chord = ({chord, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected, chordTwoSelected, keyCenter, compareChords, whichChordAmI, handleAlterChordWindow, type, wasAltered, setTones, setTones2, currentChordTones, currentChordTones2, resetCard, handleLock, displayChordDegrees, handleChordFocus, chordFocus, sharedNotes, selNote, updateShared}) => {

  const sharp = '#';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E'
  const dim = '\u00B0'

  var name;
  var label;
  var objKey='hello'
  var cardClass='text-center chordCard'
  var tones;
  var root = chord.root.note
  var list = chord.options.list
  var triadList = [' Triad', '+ Triad', 'm Triad', `${dim} Triad`, `maj ${flat}5 Triad`]
  var seventhsList = ['maj7', '7', '+(maj7)', `7(${sharp}5)`, `7(${flat}5)`, `${dim}7`,`maj7(${flat}5)`, `m7(${flat}5)`, 'm(maj7)', 'm7']
  var shellList = ['maj7 (shell)', '7 (shell)', 'm7 (shell)', 'm(maj7) (shell)']
  var isChord1 = chord===currentChord
  var isChord2 = chord===currentChord2
  var noneSelected = (!chordOneSelected && !chordTwoSelected)


  var selected = chord === currentChord
  var selected2 = chord === currentChord2
  var both = (chordOneSelected && chordTwoSelected)

  if (chord) {
    sevenths && !wasAltered ?
    (name=chord.options.seventhChord.name, label=chord.options.seventhChord.label, tones=chord.options.seventhChord.notes, objKey=chord.options.seventhChord.voicingObjKey) :
    (name=chord.options.triad.name, label=chord.options.triad.label, tones=chord.options.triad.notes, objKey=chord.options.triad.voicingObjKey)
  }

  if (type==='  Octaves' && chord.options.octaves) {
    name=chord.options.octaves.name
    label=chord.options.octaves.label
    tones=chord.options.octaves.notes
    objKey=chord.options.octaves.voicingObjKey
  }

  if (type==='  Power Chord' && chord.options.powerChord) {
    name=chord.options.powerChord.name
    label=chord.options.powerChord.label
    tones=chord.options.powerChord.notes
    objKey=chord.options.powerChord.voicingObjKey
  }

  if (triadList.includes(type) && chord.options.triad) {
    name=chord.options.triad.name
    label=chord.options.triad.label
    tones=chord.options.triad.notes
    objKey=chord.options.triad.voicingObjKey
  }

  if (shellList.includes(type) && chord.options.shell) {
    name=chord.options.shell.name
    label=chord.options.shell.label
    tones=chord.options.shell.notes
    objKey=chord.options.shell.voicingObjKey
  }

  if (seventhsList.includes(type) && chord.options.seventhChord) {
    name=chord.options.seventhChord.name
    label=chord.options.seventhChord.label
    tones=chord.options.seventhChord.notes
    objKey=chord.options.seventhChord.voicingObjKey
  }

  if (type===' sus2' && chord.options.sus2) {
    name=chord.options.sus2.name
    label=chord.options.sus2.label
    tones=chord.options.sus2.notes
    objKey=chord.options.sus2.voicingObjKey
  }

  if (type===' sus4' && chord.options.sus4) {
    name=chord.options.sus4.name
    label=chord.options.sus4.label
    tones=chord.options.sus4.notes
    objKey=chord.options.sus4.voicingObjKey
  }

  if (type===' add9' && chord.options.add9) {
    name=chord.options.add9.name
    label=chord.options.add9.label
    tones=chord.options.add9.notes
    objKey=chord.options.add9.voicingObjKey
  }

  if (type===` add${sharp}11` && chord.options.addSharp11) {
    name=chord.options.addSharp11.name
    label=chord.options.addSharp11.label
    tones=chord.options.addSharp11.notes
    objKey=chord.options.addSharp11.voicingObjKey
  }

  if (type===`7sus4` && chord.options.dominantSus4) {
    name=chord.options.dominantSus4.name
    label=chord.options.dominantSus4.label
    tones=chord.options.dominantSus4.notes
    objKey=chord.options.dominantSus4.voicingObjKey
  }

  if (type===`maj7(sus4)` && chord.options.maj7Sus4) {
    name=chord.options.maj7Sus4.name
    label=chord.options.maj7Sus4.label
    tones=chord.options.maj7Sus4.notes
    objKey=chord.options.maj7Sus4.voicingObjKey
  }

  if (type===`maj7(9)` && chord.options.maj9) {
    name=chord.options.maj9.name
    label=chord.options.maj9.label
    tones=chord.options.maj9.notes
    objKey=chord.options.maj9.voicingObjKey
  }

  if (type===`maj7(${sharp}11)` && chord.options.maj7AddSharp11) {
    name=chord.options.maj7AddSharp11.name
    label=chord.options.maj7AddSharp11.label
    tones=chord.options.maj7AddSharp11.notes
    objKey=chord.options.maj7AddSharp11.voicingObjKey
  }

  if (type===`maj7(13)` && chord.options.maj7Add13) {
    name=chord.options.maj7Add13.name
    label=chord.options.maj7Add13.label
    tones=chord.options.maj7Add13.notes
    objKey=chord.options.maj7Add13.voicingObjKey
  }

  if (type===`maj7(9, ${sharp}11)` && chord.options.majSharp11) {
    name=chord.options.majSharp11.name
    label=chord.options.majSharp11.label
    tones=chord.options.majSharp11.notes
    objKey=chord.options.majSharp11.voicingObjKey
  }

  if (type=== `maj7(${sharp}11, 13)` && chord.options.maj7AddSharp11Add13) {
    name=chord.options.maj7AddSharp11Add13.name
    label=chord.options.maj7AddSharp11Add13.label
    tones=chord.options.maj7AddSharp11Add13.notes
    objKey=chord.options.maj7AddSharp11Add13.voicingObjKey
  }

  if (type===`maj7(9, 13)` && chord.options.maj9Add13) {
    name=chord.options.maj9Add13.name
    label=chord.options.maj9Add13.label
    tones=chord.options.maj9Add13.notes
    objKey=chord.options.maj9Add13.voicingObjKey
  }

  if (type===`maj7(9, ${sharp}11, 13)` && chord.options.maj13) {
    name=chord.options.maj13.name
    label=chord.options.maj13.label
    tones=chord.options.maj13.notes
    objKey=chord.options.maj13.voicingObjKey
  }

  if (type===`m7(9)` && chord.options.min9) {
    name=chord.options.min9.name
    label=chord.options.min9.label
    tones=chord.options.min9.notes
    objKey=chord.options.min9.voicingObjKey
  }

  if (type===`m7(11)` && chord.options.minAdd11) {
    name=chord.options.minAdd11.name
    label=chord.options.minAdd11.label
    tones=chord.options.minAdd11.notes
    objKey=chord.options.minAdd11.voicingObjKey
  }

  if (type===`m7(13)` && chord.options.minAdd13) {
    name=chord.options.minAdd13.name
    label=chord.options.minAdd13.label
    tones=chord.options.minAdd13.notes
    objKey=chord.options.minAdd13.voicingObjKey
  }

  if (type===`m7(9, 11)` && chord.options.min11) {
    name=chord.options.min11.name
    label=chord.options.min11.label
    tones=chord.options.min11.notes
    objKey=chord.options.min11.voicingObjKey
  }

  if (type===`m7(9, 13)` && chord.options.minAdd9Add13) {
    name=chord.options.minAdd9Add13.name
    label=chord.options.minAdd9Add13.label
    tones=chord.options.minAdd9Add13.notes
    objKey=chord.options.minAdd9Add13.voicingObjKey
  }

  if (type===`m7(11, 13)` && chord.options.minAdd11Add13) {
    name=chord.options.minAdd11Add13.name
    label=chord.options.minAdd11Add13.label
    tones=chord.options.minAdd11Add13.notes
    objKey=chord.options.minAdd11Add13.voicingObjKey
  }

  if (type===`m7(9, 11, 13)` && chord.options.min13) {
    name=chord.options.min13.name
    label=chord.options.min13.label
    tones=chord.options.min13.notes
    objKey=chord.options.min13.voicingObjKey
  }

  if (type===`7(9)` && chord.options.dominant9) {
    name=chord.options.dominant9.name
    label=chord.options.dominant9.label
    tones=chord.options.dominant9.notes
    objKey=chord.options.dominant9.voicingObjKey
  }

  if (type===`7(${flat}9)` && chord.options.dominantFlat9) {
    name=chord.options.dominantFlat9.name
    label=chord.options.dominantFlat9.label
    tones=chord.options.dominantFlat9.notes
    objKey=chord.options.dominantFlat9.voicingObjKey
  }

  if (type===`7(${sharp}9)` && chord.options.dominantSharp9) {
    name=chord.options.dominantSharp9.name
    label=chord.options.dominantSharp9.label
    tones=chord.options.dominantSharp9.notes
    objKey=chord.options.dominantSharp9.voicingObjKey
  }

  if (type===`7(9, ${sharp}11)` && chord.options.dominantSharp11) {
    name=chord.options.dominantSharp11.name
    label=chord.options.dominantSharp11.label
    tones=chord.options.dominantSharp11.notes
    objKey=chord.options.dominantSharp11.voicingObjKey
  }

  if (type===`7(${sharp}11)` && chord.options.dominantAddSharp11) {
    name=chord.options.dominantAddSharp11.name
    label=chord.options.dominantAddSharp11.label
    tones=chord.options.dominantAddSharp11.notes
    objKey=chord.options.dominantAddSharp11.voicingObjKey
  }

  if (type===`7(9, ${sharp}11, 13)` && chord.options.dominant13) {
    name=chord.options.dominant13.name
    label=chord.options.dominant13.label
    tones=chord.options.dominant13.notes
    objKey=chord.options.dominant13.voicingObjKey
  }

  if (type===`7(9, ${sharp}11, ${flat}13)` && chord.options.dominantFlat13) {
    name=chord.options.dominantFlat13.name
    label=chord.options.dominantFlat13.label
    tones=chord.options.dominantFlat13.notes
    objKey=chord.options.dominantFlat13.voicingObjKey
  }

  if (type===`7(${flat}13)` && chord.options.dominantAddFlat13) {
    name=chord.options.dominantFlatAdd13.name
    label=chord.options.dominantFlatAdd13.label
    tones=chord.options.dominantFlatAdd13.notes
    objKey=chord.options.dominantFlatAdd13.voicingObjKey
  }

  if (type===`7(${flat}9, ${flat}13)` && chord.options.dominantFlat9Flat13) {
    name=chord.options.dominantFlat9Flat13.name
    label=chord.options.dominantFlat9Flat13.label
    tones=chord.options.dominantFlat9Flat13.notes
    objKey=chord.options.dominantFlat9Flat13.voicingObjKey
  }

  if (type===`7(9, ${flat}13)` && chord.options.dominant9Flat13) {
    name=chord.options.dominant9Flat13.name
    label=chord.options.dominant9Flat13.label
    tones=chord.options.dominant9Flat13.notes
    objKey=chord.options.dominant9Flat13.voicingObjKey
  }

  if (type===`7(9, 13)` && chord.options.dominant9Add13) {
    name=chord.options.dominant9Add13.name
    label=chord.options.dominant9Add13.label
    tones=chord.options.dominant9Add13.notes
    objKey=chord.options.dominant9Add13.voicingObjKey
  }

  if (type===`7(13)` && chord.options.dominantAdd13) {
    name=chord.options.dominantAdd13.name
    label=chord.options.dominantAdd13.label
    tones=chord.options.dominantAdd13.notes
    objKey=chord.options.dominantAdd13.voicingObjKey
  }

  if (type==='6' && chord.options.major6) {
    name=chord.options.major6.name
    label=chord.options.major6.label
    tones=chord.options.major6.notes
    objKey=chord.options.major6.voicingObjKey
  }

  if (type==='m6' && chord.options.minor6) {
    name=chord.options.minor6.name
    label=chord.options.minor6.label
    tones=chord.options.minor6.notes
    objKey=chord.options.minor6.voicingObjKey
  }

  if (type==='  Tritone' && chord.options.tritone) {
    name=chord.options.tritone.name
    label=chord.options.tritone.label
    tones=chord.options.tritone.notes
    objKey=chord.options.tritone.voicingObjKey
  }

  if (type==='  Major Pentatonic' && chord.options.majorPentatonic) {
    name=chord.options.majorPentatonic.name
    label=chord.options.majorPentatonic.label
    tones=chord.options.majorPentatonic.notes
    objKey=chord.options.majorPentatonic.voicingObjKey
  }

  if (type==='  Minor Pentatonic' && chord.options.minorPentatonic) {
    name=chord.options.minorPentatonic.name
    label=chord.options.minorPentatonic.label
    tones=chord.options.minorPentatonic.notes
    objKey=chord.options.minorPentatonic.voicingObjKey
  }

  if (type==='  Dominant Pentatonic' && chord.options.dominantPentatonic) {
    name=chord.options.dominantPentatonic.name
    label=chord.options.dominantPentatonic.label
    tones=chord.options.dominantPentatonic.notes
    objKey=chord.options.dominantPentatonic.voicingObjKey
  }

  if (type===`  Dominant ${sharp}4 Pentatonic` && chord.options.lydianDominantPentatonic) {
    name=chord.options.lydianDominantPentatonic.name
    label=chord.options.lydianDominantPentatonic.label
    tones=chord.options.lydianDominantPentatonic.notes
    objKey=chord.options.lydianDominantPentatonic.voicingObjKey
  }

  if (type===`  Major ${sharp}4 Pentatonic` && chord.options.majSharp4Pentatonic) {
    name=chord.options.majSharp4Pentatonic.name
    label=chord.options.majSharp4Pentatonic.label
    tones=chord.options.majSharp4Pentatonic.notes
    objKey=chord.options.majSharp4Pentatonic.voicingObjKey
  }

  if (type===`  Altered Pentatonic` && chord.options.alteredPentatonic) {
    name=chord.options.alteredPentatonic.name
    label=chord.options.alteredPentatonic.label
    tones=chord.options.alteredPentatonic.notes
    objKey=chord.options.alteredPentatonic.voicingObjKey
  }

  if (type==='  Minor Major 7 Pentatonic' && chord.options.minorMaj7Pentatonic) {
    name=chord.options.minorMaj7Pentatonic.name
    label=chord.options.minorMaj7Pentatonic.label
    tones=chord.options.minorMaj7Pentatonic.notes
    objKey=chord.options.minorMaj7Pentatonic.voicingObjKey
  }

  if (type==='  Minor 6 Pentatonic' && chord.options.minorMaj7Pentatonic) {
    name=chord.options.minor6Pentatonic.name
    label=chord.options.minor6Pentatonic.label
    tones=chord.options.minor6Pentatonic.notes
    objKey=chord.options.minor6Pentatonic.voicingObjKey
  }

  if (type==='  Egyptian Pentatonic' && chord.options.egyptianPentatonic) {
    name=chord.options.egyptianPentatonic.name
    label=chord.options.egyptianPentatonic.label
    tones=chord.options.egyptianPentatonic.notes
    objKey=chord.options.egyptianPentatonic.voicingObjKey
  }

  if (type==='  Japanese Pentatonic' && chord.options.japanesePentatonic) {
    name=chord.options.japanesePentatonic.name
    label=chord.options.japanesePentatonic.label
    tones=chord.options.japanesePentatonic.notes
    objKey=chord.options.japanesePentatonic.voicingObjKey
  }

  if (type==='  Quartal Voicing' && chord.options.quartalVoicing) {
    name=chord.options.quartalVoicing.name
    label=chord.options.quartalVoicing.label
    tones=chord.options.quartalVoicing.notes
    objKey=chord.options.quartalVoicing.voicingObjKey
  }

  if (type==='  Fifths Voicing' && chord.options.fifthsVoicing) {
    name=chord.options.fifthsVoicing.name
    label=chord.options.fifthsVoicing.label
    tones=chord.options.fifthsVoicing.notes
    objKey=chord.options.fifthsVoicing.voicingObjKey
  }

  if (isChord1 && currentChordTones !== tones) {
    setTones(tones, objKey)
    if (both) {
      let checker = {}
      let sharedNotes = []
      for(var i = 0; i < currentChordTones2.length; i++) {
        checker[currentChordTones2[i]] = true
      }
      for (var j = 0; j < tones.length; j++) {
        if (checker[tones[j]]) {
          sharedNotes.push(tones[j])
        }
      }
      updateShared(sharedNotes)
    }
  }
  if (isChord2 && currentChordTones2 !== tones) {
    setTones2(tones, objKey)
    if (both) {
      let checker = {}
      let sharedNotes = []
      for(var i = 0; i < currentChordTones.length; i++) {
        checker[currentChordTones[i]] = true
      }
      for (var j = 0; j < tones.length; j++) {
        if (checker[tones[j]]) {
          sharedNotes.push(tones[j])
        }
      }
      updateShared(sharedNotes)
    }
  }

  if (isChord1) {
    cardClass = `${cardClass} selectedChord`
  }

  if (isChord2) {
    cardClass = `${cardClass} selectedChord2`
  }


  return (
    <React.Fragment>
      {chord ?
      <Card
        className={cardClass}
        bg='dark'
        text='white'
        >
        <div
          className='cardNameLabel'
          onClick={chordOneSelected && compareChords ? ()=>{selectChord2(chord, tones, objKey)} : ()=>{selectChord(chord, tones, objKey)}}>
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
        <Card.Body>
          <div
          className='cardBody'
          onClick={chordOneSelected && compareChords ? ()=>{selectChord2(chord, tones, objKey)} : ()=>{selectChord(chord, tones, objKey)}}>
          <Card.Text>{tones.map ((tone) => (
            sharedNotes.length > 0 && sharedNotes.includes(tone) && (isChord1 || isChord2) ?
            <span className="sharedCardNote">&nbsp;{tone}&nbsp;</span>
            : noneSelected && tone === selNote ?
            <span className="targetNote" >&nbsp;{tone}&nbsp;</span>
            :

            <span>&nbsp;{tone}&nbsp;</span>
          ))}
          </Card.Text>

          </div>
        </Card.Body>
        <div className='footerButton'>
          <Card.Footer
            className='alterChordButton'
            onClick={()=>{handleAlterChordWindow(whichChordAmI, list, root)}}
          >
            Alter Me
          </Card.Footer>
          <Card.Footer></Card.Footer>
          {selected && both && chordFocus === 'Neutral' ?
            <Card.Footer>
              <span className="focusButton" onClick={()=>handleChordFocus('Focus 1')}>Focus</span>
            </Card.Footer>
            :selected && both && chordFocus === "Focus 1" ?
            <Card.Footer>
              <span className="focusButton toggle_on" onClick={()=>handleChordFocus('Neutral')}>Focused</span>
            </Card.Footer>
            :selected && both && chordFocus === "Focus 2" ?
            <Card.Footer>
              <span className="focusButton" onClick={()=>handleChordFocus('Focus 1')}>Unfocused</span>
            </Card.Footer>
            :selected2 && both && chordFocus === 'Neutral' ?
            <Card.Footer>
              <span className="focusButton" onClick={()=>handleChordFocus('Focus 2')}>Focus</span>
            </Card.Footer>
            :selected2 && both && chordFocus === "Focus 1" ?
            <Card.Footer>
              <span className="focusButton" onClick={()=>handleChordFocus('Focus 2')}>Unfocused</span>
            </Card.Footer>
            :selected2 && both && chordFocus === "Focus 2" ?
            <Card.Footer>
              <span className="focusButton toggle_on" onClick={()=>handleChordFocus('Neutral')}>Focused</span>
            </Card.Footer>
            :null
          }
          <Card.Footer></Card.Footer>
          {selected && !compareChords ?
            <Card.Footer className="lock">
              <span onClick={()=>handleLock()}>Lock</span>
            </Card.Footer>
            :selected && compareChords ?
            <Card.Footer className="lock toggle_on">
              <span onClick={()=>handleLock()}>Locked</span>
            </Card.Footer>
            : null
          }
          <Card.Footer></Card.Footer>
          {wasAltered ?
            <Card.Footer
              className='resetCardButton'
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




