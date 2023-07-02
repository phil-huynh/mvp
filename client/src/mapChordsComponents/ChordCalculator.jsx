import React from 'react';
import { useStoreContext } from '../../Providers/StoreContext.js';
import { Constants } from '../../Providers/Constants.js';


export const ChordCalculator = ({root, voicing, whichCalculator, chord}) => {

  const {State, Setters, Conditions} = useStoreContext();

  const {
    sharp,
    flat,
    dblSharp,
    dblFlat,
    natural,
    dim,
    rows,
    rowClasses,
    chromatic
  } = Constants;

  const {
    chordDegrees,
    chordDegreesUpper,
    chordFocus,
    sharedNotes
  } = State;

  const {
    handleRootChange,
    handleVoicingChange,
    setChordFocus,
    clear
  } = Setters;

  const { neutral } = Conditions;

  const  clearClass = root || voicing ? 'clear_button clear_on' : 'clear_button';

  const  chordNameClass = root || voicing ?
    `calc_chord_name${whichCalculator} calc_header_on_${whichCalculator}`
    :
    `calc_chord_name${whichCalculator}`;

  const chordNoteClass = chord && chord.length > 0 ?
    `calc_notes${whichCalculator} calc_header_on_${whichCalculator}`
    :
    `calc_notes${whichCalculator}`;

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
          {neutral ?
            <div
              className="types_col"
              onClick={()=>{setChordFocus(`Focus ${whichCalculator}`)}}
            >
              Focus
            </div>
            :
            chordFocus === `Focus ${whichCalculator}` ?
              <div
                className="types_col calc_toggle_on"
                onClick={()=>{setChordFocus('Neutral')}}
              >
                Focused
              </div>
            :
            !neutral && chordFocus !== `Focus ${whichCalculator}` ?
              <div
                className="types_col"
                onClick={()=>{setChordFocus(`Focus ${whichCalculator}`)}}
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
        {chromatic.map((note, i) => {
          if (note.length === 1) {
            let innerClass;
            (root && note === root) ? innerClass = "whiteNote selectedRoot" : innerClass = "whiteNote"
            return (
              <div className="whiteNoteContainer" key={`note${i}-${note}`}>
                <div
                  className={innerClass}
                  title={note}
                  onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                >{note}
                </div>
              </div>
            )
          }
          else {
            let [upper, lower] = ['blackNoteName', 'blackNoteName']
            if (root && note[0] === root) { upper += ' selectedRoot'; }
            if (root && note[1] === root) { lower += ' selectedRoot'; }
            return (
              <div className="blackNote" key={`note${i}-${note}`}>
                <div className="blackNoteContainer">
                  <div
                    className={upper}
                    title={note[0]}
                    onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                  >{note[0]}
                  </div>
                </div>
                <div className="blackNoteContainer">
                  <div
                    className={lower}
                    title={note[1]}
                    onClick={(e)=>{handleRootChange(e, whichCalculator)}}
                  >{note[1]}
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
      <div className="chordTypeSelector">
        {rows.map((row, i) => (
          <div key={`row-${i+2}`} className={`types_row ${rowClasses[i]}`}>
            {row.map((type) => {
              let buttonClass = 'types_col';
              if (voicing && type === voicing) {
                buttonClass += " selectedVoicing";
              }
              return (
                <div
                  className="type_choice_container"
                  key={`${type}-calc${whichCalculator}`}
                  >
                  <div
                    className={buttonClass}
                    onClick={(e)=>{handleVoicingChange(e, whichCalculator)}}
                  >{type}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}








