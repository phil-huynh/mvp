import React from 'react'

var ChordCalculator = () => {

const sharp = '#';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E'
const dim = '\u00B0'

  return (
    <div className="calculatorContainer">
      <div className="rootSelector">
        <div className="whiteNoteContainer">
          <div className="whiteNote">C</div>
        </div>
        <div className="blackNote">
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`C${sharp}`}</div>
          </div>
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`D${flat}`}</div>
          </div>
        </div>
        <div className="whiteNoteContainer">
          <div className="whiteNote">D</div>
        </div>
        <div className="blackNote">
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`D${sharp}`}</div>
          </div>
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`E${flat}`}</div>
          </div>
        </div>
        <div className="whiteNoteContainer">
          <div className="whiteNote">E</div>
        </div>
        <div className="whiteNoteContainer">
          <div className="whiteNote">F</div>
        </div>
        <div className="blackNote">
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`F${sharp}`}</div>
          </div>
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`G${flat}`}</div>
          </div>
        </div>
        <div className="whiteNoteContainer">
          <div className="whiteNote">G</div>
        </div>
        <div className="blackNote">
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`G${sharp}`}</div>
          </div>
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`A${flat}`}</div>
          </div>
        </div>
        <div className="whiteNoteContainer">
          <div className="whiteNote">A</div>
        </div>
        <div className="blackNote">
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`A${sharp}`}</div>
          </div>
          <div className="blackNoteContainer">
            <div className="blackNoteName">{`B${flat}`}</div>
          </div>
        </div>
        <div className="whiteNoteContainer">
          <div className="whiteNote">B</div>
        </div>
      </div>

      <div className="chordTypeSelector">
        <div className="types_row row_one">
          <div className="type_choice_container">
            <div className="types_col col_one">maj</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two">min</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three">{`${dim}`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four">+</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five">{`maj(${flat}5)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six">sus2</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven">sus4</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight">7sus4</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>
        <div className="types_row row_tow">
          <div className="type_choice_container">
            <div className="types_col col_one">6</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two">m6</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three">{`${dim}7`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four">{`7(${flat}13)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five">{`add${sharp}11`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six">add9</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven">{`maj7(9, ${sharp}11)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight">maj7(sus4)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>
        <div className="types_row row_three">
          <div className="type_choice_container">
            <div className="types_col col_one">maj7</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two">m(maj7)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three">{`${dim}(maj7)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four">+(maj7)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five">{`maj7(${flat}5)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six">maj9</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven">{`maj7(${sharp}11)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight">{`maj7(13)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>
        <div className="types_row row_four">
          <div className="type_choice_container">
            <div className="types_col col_one">m9</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two">m7(11)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three">m7(13)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four">m7(9, 11)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five">m7(9, 13)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six">m7(11,13)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven">m7(9,11,13)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>
        <div className="types_row row_five">
          <div className="type_choice_container">
            <div className="types_col col_one">7</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two">m7</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three">{`m7(${flat}5)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four">{`7(${sharp}5)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five">{`7(${flat}5)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six">7(9)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven">{`7(${sharp}11)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight">7(13)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>
        <div className="types_row row_six">
          <div className="type_choice_container">
            <div className="types_col col_one">{`7(${flat}9)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two">{`7(${sharp}9)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five">{`maj7(${sharp}11, 13)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six">{`maj7(9, 13)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven">{'maj13'}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>
        <div className="types_row row_seven">
          <div className="type_choice_container">
            <div className="types_col col_one">{`7(9, ${sharp}11)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two"></div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three">{`7(9, ${sharp}11, 13)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four">{`7(9, ${sharp}11, ${flat}13)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five">{`7(9, ${flat}13)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six">{`7(${flat}9, ${flat}13)`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven">7(9, 13)</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight">Domininant Pentatonic</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>
        <div className="types_row row_eight">
          <div className="type_choice_container">
            <div className="types_col col_one">maj Pentatonic</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_two">min Pentatonic</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_three">{`Dominant${sharp}4 Pentatonic`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_four">{`maj${sharp}4 Pentatonic`}</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_five">Altered Pentatonic</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_six">m(maj7) Pentatonic</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_seven">Japanese Pentatonic</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_eight">Egyptian Pentatonic</div>
          </div>
          <div className="type_choice_container">
            <div className="types_col col_nine"></div>
          </div>
        </div>








      </div>
    </div>
  )
}

export default ChordCalculator;