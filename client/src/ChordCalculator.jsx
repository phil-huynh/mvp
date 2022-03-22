import React from 'react'

var ChordCalculator = ({handleRootChange, root, handleVoicingChange, voicing, whichCalculator, chordTypes, noteRefs, chordDegrees, chordDegreesUpper, getChord}) => {

  const sharp = '#';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E'
  const dim = '\u00B0'

  const notes = ['C', [`C${sharp}`, `D${flat}`],'D', [`D${sharp}`, `E${flat}`], 'E', 'F',[`F${sharp}`, `G${flat}`], 'G', [`G${sharp}`, `A${flat}`], 'A', [`A${sharp}`, `B${flat}`], 'B']

  const rowOne = ['','','','','','','','','']
  const rowTwo = ['maj','min',`${dim}`,'+',`maj(${flat}5)`,'sus2','sus4','7sus4','maj7(sus4)']
  const rowThree = ['6','m6',`${dim}7`,`7(${flat}13)`,`add${sharp}11`,'add9',`maj7(9, ${sharp}11)`,'maj7(9, 13)',`maj7(${sharp}11, 13)`]
  const rowFour = ['maj7','m(maj7)',`${dim}(maj7)`,'+(maj7)',`maj7(${flat}5)`,'maj9',`maj7(${sharp}11)`,'maj7(13)','Whole Tone Scale']
  const rowFive = ['m9','m7(11)','m7(13)','m7(9, 11)','m7(9, 13)','m7(11, 13)','m7(9, 11, 13)','maj13','Whole/Half Scale']
  const rowSix = ['7','m7',`m7(${flat}5)`,`7(${sharp}5)`,`7(${flat}5)`,'7(9)',`7(${sharp}11)`,'7(13)','Half/Whole Scale']
  const rowSeven = [`7(${flat}9)`, `7(${sharp}9)`, `7(9, ${sharp}11)`, `7(9, ${flat}13)`, `7(${flat}9, ${flat}13)`,'7(9, 13)',`7(9, ${sharp}11, 13)`,`7(9, ${sharp}11, ${flat}13)`,'Altered Scale']
  const rowEight = ['maj Pentatonic','min Pentatonic','Domininant Pentatonic',`Dominant${sharp}4 Pentatonic`,`maj${sharp}4 Pentatonic`,'Altered Pentatonic','m(maj7) Pentatonic','Japanese Pentatonic','Egyptian Pentatonic']



  return (
    <div className="calculatorContainer">
      <div className="calc_header_container">
        <div className="types_row row_one">
          <div className="type_choice_container">
            <div className="types_col col_one"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>
      </div>
      <div className="rootSelector">
        {notes.map((note) => (
          note.length === 1 && root && note === root ?
            <div className="whiteNoteContainer">
              <div
                className="whiteNote selectedRoot"
                title={note}
                onClick={(e)=>{handleRootChange(e, whichCalculator)}}
              >{note}
              </div>
            </div>
          :
          note.length === 1 ?
            <div className="whiteNoteContainer">
              <div
                className="whiteNote"
                title={note}
                onClick={(e)=>{handleRootChange(e, whichCalculator)}}
              >{note}
              </div>
            </div>
          :
          note.length === 2 && root && note[0] === root ?
            <div className="blackNote">
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
            <div className="blackNote">
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
            <div className="blackNote">
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