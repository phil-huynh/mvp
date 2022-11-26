import React from 'react'
import { Card, Button } from 'react-bootstrap'


export const Chord = ({chord, sevenths, selectChord, selectChord2, currentChord, currentChord2, chordOneSelected, chordTwoSelected, keyCenter, compareChords, whichChordAmI, handleAlterChordWindow, type, wasAltered, setTones, setTones2, currentChordTones, currentChordTones2, resetCard, handleLock, displayChordDegrees, handleChordFocus, chordFocus, sharedNotes, selNote, updateShared}) => {

  const sharp = '#';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E'
  const dim = '\u00B0'

  let name;
  let label;
  let objKey='hello'
  let cardClass='text-center chordCard'
  let tones;
  let root = chord.root.note
  let list = chord.options.list
  let isChord1 = chord === currentChord
  let isChord2 = chord === currentChord2
  let selected = chord === currentChord
  let selected2 = chord === currentChord2
  let noneSelected = (!chordOneSelected && !chordTwoSelected)
  let both = (chordOneSelected && chordTwoSelected)

  if (chord) {
    sevenths && !wasAltered ?
    (name=chord.options.seventhChord.name, label=chord.options.seventhChord.label, tones=chord.options.seventhChord.notes, objKey=chord.options.seventhChord.voicingObjKey) :
    (name=chord.options.triad.name, label=chord.options.triad.label, tones=chord.options.triad.notes, objKey=chord.options.triad.voicingObjKey)
  }

  if (chord.options[type]) {
    name=chord.options[type].name
    label=chord.options[type].label
    tones=chord.options[type].notes
    objKey=chord.options[type].voicingObjKey
  }

  if (isChord1 && currentChordTones !== tones) {
    setTones(tones, objKey)
    if (both) {
      let [checker, sharedNotes] = [{}, []]
      currentChordTones2.forEach((tone) => {
        checker[tone] = true
      })
      tones.forEach((tone) => {
        if (checker[tone]) {
          sharedNotes.push(tone)
        }
      })
      updateShared(sharedNotes)
    }
  }
  if (isChord2 && currentChordTones2 !== tones) {
    setTones2(tones, objKey)
    if (both) {
      let [checker, sharedNotes] = [{}, []]
      currentChordTones.forEach((tone) => {
        checker[tone] = true
      })
      tones.forEach((tone) => {
        if (checker[tone]) {
          sharedNotes.push(tone)
        }
      })
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
          <Card.Text>{tones.map ((tone, i) => (
            sharedNotes.length > 0 && sharedNotes.includes(tone) && (isChord1 || isChord2) ?
            <span className="sharedCardNote" key={`${i}${tone}`}>&nbsp;{tone}&nbsp;</span>
            : noneSelected && tone === selNote ?
            <span className="targetNote" key={`${i}${tone}`}>&nbsp;{tone}&nbsp;</span>
            :

            <span key={`${i}${tone}`}>&nbsp;{tone}&nbsp;</span>
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




