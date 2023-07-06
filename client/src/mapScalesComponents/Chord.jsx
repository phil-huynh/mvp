import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useStoreContext } from '../../Providers/StoreContext.js';
import { Constants } from '../../Providers/Constants.js';


export const Chord = ({chord, whichChordAmI, wasAltered, type}) => {

  const {State, Setters, Conditions} = useStoreContext();

  const {sharp, flat, dblSharp, dblFlat, natural, dim} = Constants;

  const {
    sevenths,
    selectedChord,
    selectedChord2,
    chordOneSelected,
    chordTwoSelected,
    keyCenter,
    compare,
    currentChordTones,
    currentChordTones2,
    displayChordDegrees,
    chordFocus,
    sharedNotes,
    selNote
  } = State;

  const {
    handleAlterChordWindow,
    setTones,
    setTones2,
    selectChord,
    selectChord2,
    resetCard,
    handleSingleOrCompare,
    setChordFocus,
    setSharedNotes
  } = Setters;

  const {focus1, focus2, neutral} = Conditions;

  let name;
  let label;
  let tones;
  let objKey='';
  let cardClass='text-center chordCard';
  let root = chord.root.note;
  let list = chord.options.list;
  const selected = chord === selectedChord;
  const selected2 = chord === selectedChord2;
  const both = (chordOneSelected && chordTwoSelected);

  if (chord) {
    sevenths && !wasAltered ?
    (
      name=chord.options.seventhChord.name,
      label=chord.options.seventhChord.label,
      tones=chord.options.seventhChord.notes,
      objKey=chord.options.seventhChord.voicingObjKey
    )
    :
    (
      name=chord.options.triad.name,
      label=chord.options.triad.label,
      tones=chord.options.triad.notes,
      objKey=chord.options.triad.voicingObjKey
    )
  }

  if (chord.options[type]) {
    name=chord.options[type].name;
    label=chord.options[type].label;
    tones=chord.options[type].notes;
    objKey=chord.options[type].voicingObjKey;
  }


  if (selected && currentChordTones !== tones) setTones(tones, objKey);
  if (selected2 && currentChordTones2 !== tones) setTones2(tones, objKey);

  if (selected) cardClass = `${cardClass} selectedChord`;
  if (selected2) cardClass = `${cardClass} selectedChord2`;

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
          onClick={chordOneSelected && compare ?
            ()=>{ selectChord2(chord, tones, objKey); } : ()=>{selectChord(chord, tones, objKey); }}
          >
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
          onClick={chordOneSelected && compare ? ()=> selectChord2(chord, tones, objKey) : ()=>{selectChord(chord, tones, objKey)}}>

          <Card.Text>{tones.map ((tone, i) => (
            sharedNotes.length > 0 && sharedNotes.includes(tone) && (selected || selected2) ?
            <span
              className="sharedCardNote"
              key={`${i}${tone}`}
            >
              &nbsp;{tone}&nbsp;
            </span>
            : tone === selNote ?
            <span
              className="targetNote"
              key={`${i}${tone}`}
            >
              &nbsp;{tone}&nbsp;
            </span>
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
          {selected && both && neutral ?
            <Card.Footer>
              <span
                className="focusButton"
                onClick={()=>setChordFocus('Focus 1')}
              >
                Focus
              </span>
            </Card.Footer>
            :selected && both && focus1 ?
            <Card.Footer>
              <span
                className="focusButton toggle_on"
                onClick={()=>setChordFocus('Neutral')}
              >
                Focused
              </span>
            </Card.Footer>
            :selected && both && focus2 ?
            <Card.Footer>
              <span
                className="focusButton"
                onClick={()=>setChordFocus('Focus 1')}
              >
                Unfocused
              </span>
            </Card.Footer>
            :selected2 && both && neutral ?
            <Card.Footer>
              <span
                className="focusButton"
                onClick={()=>setChordFocus('Focus 2')}
              >
                Focus
              </span>
            </Card.Footer>
            :selected2 && both && focus1 ?
            <Card.Footer>
              <span
                className="focusButton"
                onClick={()=>setChordFocus('Focus 2')}
              >
                Unfocused
              </span>
            </Card.Footer>
            :selected2 && both && focus2 ?
            <Card.Footer>
              <span
                className="focusButton toggle_on"
                onClick={()=>setChordFocus('Neutral')}
              >
                Focused
              </span>
            </Card.Footer>
            :null
          }
          <Card.Footer></Card.Footer>
          {selected && !compare ?
            <Card.Footer className="lock">
              <span onClick={()=>handleSingleOrCompare()}>Lock</span>
            </Card.Footer>
            :selected && compare ?
            <Card.Footer className="lock toggle_on">
              <span onClick={()=>handleSingleOrCompare()}>Locked</span>
            </Card.Footer>
            : null
          }
          <Card.Footer></Card.Footer>
          {wasAltered &&
            <Card.Footer
              className='resetCardButton'
              onClick={()=>{resetCard(whichChordAmI)}}
            >
              Reset Me
            </Card.Footer>
          }
        </div>
      </Card>:null
      }
    </React.Fragment>
  )
}

export default Chord;




