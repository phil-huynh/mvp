import React from 'react'
import { useStoreContext } from '../StoreContext.js'

export const ChordCalculator = ({root, voicing, whichCalculator, chord}) => {

const {sharp, flat, dblSharp, dblFlat, natural, dim, chordDegrees, chordDegreesUpper, clear, handleRootChange, handleVoicingChange, handleChordFocus, chordFocus, sharedNotes} = useStoreContext()

  const notes = ['C', [`C${sharp}`, `D${flat}`],'D', [`D${sharp}`, `E${flat}`], 'E', 'F',[`F${sharp}`, `G${flat}`], 'G', [`G${sharp}`, `A${flat}`], 'A', [`A${sharp}`, `B${flat}`], 'B']

  const rowOne = ['','','','','','','','','']
  const rowTwo = ['maj','min',`${dim}`,'+',`maj(${flat}5)`,'sus2','sus4','7sus4','maj7(sus4)']
  const rowThree = ['6','m6',`${dim}7`,`7(${flat}13)`,`add${sharp}11`,'add9',`maj7(9, ${sharp}11)`,'maj7(9, 13)',`maj7(${sharp}11, 13)`]
  const rowFour = ['maj7','m(maj7)',`${dim}(maj7)`,'+(maj7)',`maj7(${flat}5)`,'maj9',`maj7(${sharp}11)`,'maj7(13)','maj13']
  const rowFive = ['7','m7',`m7(${flat}5)`,`7(${sharp}5)`,`7(${flat}5)`,'7(9)',`7(${sharp}11)`,'7(13)','Whole Tone Scale']
  const rowSix = ['m9','m7(11)','m7(13)','m7(9, 11)','m7(9, 13)','m7(11, 13)','m7(9, 11, 13)','Half/Whole Scale','Whole/Half Scale']
  const rowSeven = [`7(${flat}9)`, `7(${sharp}9)`, `7(9, ${sharp}11)`, `7(9, ${flat}13)`, `7(${flat}9, ${flat}13)`,'7(9, 13)',`7(9, ${sharp}11, 13)`,`7(9, ${sharp}11, ${flat}13)`,'Altered Scale']
  const rowEight = ['maj Pentatonic','min Pentatonic','Dominant Pentatonic',`Dominant ${sharp}4 Pentatonic`,`maj ${sharp}4 Pentatonic`,'Altered Pentatonic','m(maj7) Pentatonic','Japanese Pentatonic','Egyptian Pentatonic']

  let chordNameClass = `calc_chord_name${whichCalculator}`
  let chordNoteClass = `calc_notes${whichCalculator}`
  let clearClass = 'clear_button'


  if (root || voicing) {
    chordNameClass += ` calc_header_on_${whichCalculator}`
    clearClass += ' clear_on'
  }
  if(chord && chord.length > 0) {
    chordNoteClass += ` calc_header_on_${whichCalculator}`
  }

  console.log('!!!!!!', chord)
  console.log('!!!!!!', chordNoteClass)

  return (
    <div className="calculatorContainer">
      <div className="calc_header_container">
        <div className="calc_chord_name_container type_choice_container">
          <div className={chordNameClass}>{`${root} ${voicing}`}</div>
        </div>
        <div className="calc_notes_container type_choice_container">
          <div
            className={chordNoteClass}
          >
            {chord ? chord.map((note, i) => (
              sharedNotes.length > 0 && sharedNotes.includes(note) ?
                <span className="calc_note calc_shared_note" key={`note${i}-${note}`}>{note}</span>
              :
                <span className="calc_note" key={`note${i}-${note}`}>{note}</span>
            )):null}
          </div>
        </div>
        <div className="type_choice_container">
          {chordFocus === 'Neutral' ?
            <div
              className="types_col"
              onClick={()=>{handleChordFocus(`Focus ${whichCalculator}`)}}
            >
              Focus
            </div>
            :
            chordFocus === `Focus ${whichCalculator}` ?
              <div
                className="types_col calc_toggle_on"
                onClick={()=>{handleChordFocus('Neutral')}}
              >
                Focused
              </div>
            :
            chordFocus !== 'Neutral' && chordFocus !== `Focus ${whichCalculator}` ?
              <div
                className="types_col"
                onClick={()=>{handleChordFocus(`Focus ${whichCalculator}`)}}
              >
                Unfocused
              </div>
            :null
          }
        </div>
        <div className="type_choice_container">
          <div className="col_three"></div>
        </div>
        <div className="type_choice_container">
          <div className="col_five"></div>
        </div>
        <div className="clear_button_container">
          <div
            className={clearClass}
            onClick={()=>{clear(whichCalculator)}}
          >clear
          </div>
        </div>
      </div>
      <div className="rootSelector">
        {notes.map((note, i) => (
          note.length === 1 && root && note === root ?
            <div className="whiteNoteContainer" key={`note${i}-${note}`}>
              <div
                className="whiteNote selectedRoot"
                title={note}
                onClick={(e)=>{handleRootChange(e, whichCalculator)}}
              >{note}
              </div>
            </div>
          :
          note.length === 1 ?
            <div className="whiteNoteContainer" key={`note${i}-${note}`}>
              <div
                className="whiteNote"
                title={note}
                onClick={(e)=>{handleRootChange(e, whichCalculator)}}
              >{note}
              </div>
            </div>
          :
          note.length === 2 && root && note[0] === root ?
            <div className="blackNote" key={`note${i}-${note}`}>
              <div className="blackNoteContainer">
                <div
                  className="blackNoteName selectedRoot"
                  title={note[0]}
                  onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                >{note[0]}
                </div>
              </div>
              <div className="blackNoteContainer">
                <div
                  className="blackNoteName"
                  title={note[1]}
                  onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                >{note[1]}
                </div>
              </div>
            </div>
          :
          note.length === 2 && root && note[1] === root ?
            <div className="blackNote" key={`note${i}-${note}`}>
              <div className="blackNoteContainer">
                <div
                  className="blackNoteName"
                  title={note[0]}
                  onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                >{note[0]}
                </div>
              </div>
              <div className="blackNoteContainer">
                <div
                  className="blackNoteName selectedRoot"
                  title={note[1]}
                  onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                >{note[1]}
                </div>
              </div>
            </div>
          :
          note.length === 2 ?
            <div className="blackNote" key={`note${i}-${note}`}>
              <div className="blackNoteContainer">
                <div
                  className="blackNoteName"
                  title={note[0]}
                  onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                >{note[0]}
                </div>
              </div>
              <div className="blackNoteContainer">
                <div
                  className="blackNoteName"
                  title={note[1]}
                  onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                >{note[1]}
                </div>
              </div>
            </div>
            :null
        ))}
      </div>
      <div className="chordTypeSelector">
        <div className="types_row row_two">
          {rowTwo.map((type) => (
            voicing && type === voicing ?
              <div
                className="type_choice_container"
                key={`${type}-calc${whichCalculator}`}
                >
                <div
                  className="types_col selectedVoicing"
                  onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
                >{type}
                </div>
              </div>
            :
            <div
              className="type_choice_container"
              key={`${type}-calc${whichCalculator}`}
              >
              <div
              className="types_col"
              onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
              >{type}
              </div>
            </div>
          ))}
        </div>
        <div className="types_row row_three">
          {rowThree.map((type) => (
            voicing && type === voicing ?
              <div
                className="type_choice_container"
                key={`${type}-calc${whichCalculator}`}
                >
                <div
                  className="types_col selectedVoicing"
                  onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
                >{type}
                </div>
              </div>
            :
            <div
              className="type_choice_container"
              key={`${type}-calc${whichCalculator}`}
              >
              <div
              className="types_col"
              onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
              >{type}
              </div>
            </div>
          ))}
        </div>
        <div className="types_row row_four">
          {rowFour.map((type) => (
            voicing && type === voicing ?
              <div
                className="type_choice_container"
                key={`${type}-calc${whichCalculator}`}
                >
                <div
                  className="types_col selectedVoicing"
                  onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
                >{type}
                </div>
              </div>
            :
            <div
              className="type_choice_container"
              key={`${type}-calc${whichCalculator}`}
              >
              <div
              className="types_col"
              onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
              >{type}
              </div>
            </div>
          ))}
        </div>
        <div className="types_row row_five">
          {rowFive.map((type) => (
            voicing && type === voicing ?
              <div
                className="type_choice_container"
                key={`${type}-calc${whichCalculator}`}
                >
                <div
                  className="types_col selectedVoicing"
                  onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
                >{type}
                </div>
              </div>
            :
            <div
              className="type_choice_container"
              key={`${type}-calc${whichCalculator}`}
              >
              <div
              className="types_col"
              onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
              >{type}
              </div>
            </div>
          ))}
        </div>
        <div className="types_row row_six">
          {rowSix.map((type) => (
            voicing && type === voicing ?
              <div
                className="type_choice_container"
                key={`${type}-calc${whichCalculator}`}
                >
                <div
                  className="types_col selectedVoicing"
                  onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
                >{type}
                </div>
              </div>
            :
            <div
              className="type_choice_container"
              key={`${type}-calc${whichCalculator}`}
              >
              <div
              className="types_col"
              onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
              >{type}
              </div>
            </div>
          ))}
        </div>
        <div className="types_row row_seven">
          {rowSeven.map((type) => (
            voicing && type === voicing ?
              <div
                className="type_choice_container"
                key={`${type}-calc${whichCalculator}`}
                >
                <div
                  className="types_col selectedVoicing"
                  onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
                >{type}
                </div>
              </div>
            :
            <div
              className="type_choice_container"
              key={`${type}-calc${whichCalculator}`}
              >
              <div
              className="types_col"
              onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
              >{type}
              </div>
            </div>
          ))}
        </div>
        <div className="types_row row_eight">
          {rowEight.map((type) => (
            voicing && type === voicing ?
              <div
                className="type_choice_container"
                key={`${type}-calc${whichCalculator}`}
                >
                <div
                  className="types_col selectedVoicing"
                  onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
                >{type}
                </div>
              </div>
            :
            <div
              className="type_choice_container"
              key={`${type}-calc${whichCalculator}`}
              >
              <div
              className="types_col"
              onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
              >{type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChordCalculator;