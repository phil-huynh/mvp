import React from 'react'

var String = ({ string, allStrings, stringsLeft, scale, chord, chord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, chordDegrees, keyCenter, labelType, selectedChord, selectedChord2, chordFocus }) => {
  var notes=[];
  var currentString;
  var name;
  var open;
  var openClass;
  var openNoteClass;
  var noteClass;
  var altLabelContainer;
  var chordKey;
  var keyKey = keyCenter.notesToDegrees
  var labelContainer = keyCenter.tonicScaleDegrees
  var fretClass = 'fret'

  if (labelType === 'Note Names') {
    labelContainer = keyCenter.tonicScaleDegrees
  }

  if (labelType === 'Scale Degrees') {
    labelContainer = scaleDegrees
  }

  if (labelType === 'Solfege') {
    labelContainer = solfege
  }

  if (labelType === 'Chord Degrees' && chordFocus === 'Focus 1') {
    altLabelContainer = chordDegrees
    chordKey = selectedChord.notesToDegrees
  }

  if (labelType === 'Chord Degrees' && chordFocus === 'Focus 2') {
    altLabelContainer = chordDegrees
    chordKey = selectedChord2.notesToDegrees
  }


  if (labelType === 'Chord Degrees' && chordFocus === 'Neutral') {
    altLabelContainer = labelContainer
    chordKey = keyKey
  }

  if (labelType === 'Chord Degrees' && chordFocus === 'Neutral' && !chordTwoSelected) {
    altLabelContainer = chordDegrees
    chordKey = selectedChord.notesToDegrees
  }

  if (view === 'Mirror' || view === 'Traditional') {
    currentString = allStrings[string]
    name = 'string'
    openClass = 'open'
    openNoteClass = 'openNote'
    noteClass = 'note'
  }

  if (view === 'Mirror-left' || view === 'Traditional-left') {
    currentString = stringsLeft[string]
    name = 'string-left'
    openClass = 'open-left'
    openNoteClass = 'openNoteLeft'
    noteClass = 'noteLeft'
  }

  if (currentString) {
    console.log('string', currentString)
    for(var i = 0; i < currentString.length; i++) {
      var containsNote = false;
      for(var j = 0; j < currentString[i].length; j++) {
        if(scale.includes(currentString[i][j])) {
          containsNote = true;
          notes.push(currentString[i][j])
        }
      }
      if(!containsNote) {
        notes.push('')
      }
    }
  }

  (view ==='Mirror-left' || view ==='Traditional-left') ? open = notes.length - 1 : open = 0;

  return(
      <div className={`${name}`}>
        {notes ? notes.map((note, i) => (
          scale.includes(note) && chord.includes(note) && chord2.includes(note) && i === open && labelType === 'Chord Degrees' ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNote`}>
                {altLabelContainer[chordKey[note]]}
              </span>
            </span>:
            scale.includes(note) && chord.includes(note) && chord2.includes(note) && i === open ?
              <span className={`${openClass}`}>
                <span className={`${openNoteClass} sharedNote`}>
                  {labelContainer[keyKey[note]]}
                </span>
              </span>:
              scale.includes(note) && chord.includes(note) && i === open && labelType === 'Chord Degrees' && (chordFocus === 'Focus 1' || !chordTwoSelected ) ?
                <span className={`${openClass}`}>
                  <span className={`${openNoteClass} selectedNote`}>
                    {altLabelContainer[chordKey[note]]}
                  </span>
                </span>:
                scale.includes(note) && chord.includes(note) && i === open && labelType === 'Chord Degrees' && chordFocus === 'Focus 2' ?
                  <span className={`${openClass}`}>
                    <span className={`${openNoteClass} selectedNote unfocus`}>
                      {labelContainer[keyKey[note]]}
                    </span>
                  </span>:
                  scale.includes(note) && chord.includes(note) && i === open ?
                    <span className={`${openClass}`}>
                      <span className={`${openNoteClass} selectedNote`}>
                        {labelContainer[keyKey[note]]}
                      </span>
                    </span>:
                    scale.includes(note) && chord2.includes(note) && i === open && labelType === 'Chord Degrees' && chordFocus === 'Focus 2' ?
                      <span className={`${openClass}`}>
                        <span className={`${openNoteClass} selectedNote2`}>
                          {altLabelContainer[chordKey[note]]}
                        </span>
                      </span>:
                      scale.includes(note) && chord2.includes(note) && i === open && labelType === 'Chord Degrees' && chordFocus === 'Focus 1' ?
                        <span className={`${openClass}`}>
                          <span className={`${openNoteClass} selectedNote2 unfocus`}>
                          {labelContainer[keyKey[note]]}
                          </span>
                        </span>:
                        scale.includes(note) && chord2.includes(note) && i === open ?
                          <span className={`${openClass}`}>
                            <span className={`${openNoteClass} selectedNote2`}>
                            {labelContainer[keyKey[note]]}
                            </span>
                          </span>:
                          scale.includes(note) && i === open && !(chordOneSelected && chordTwoSelected) && !hideScale ?
                            <span className={`${openClass}`}>
                              <span className={`${openNoteClass}`}>
                                {labelContainer[keyKey[note]]}
                              </span>
                            </span>:
                            scale.includes(note) && i === open && (hideScale || (chordOneSelected && chordTwoSelected)) ?
                              <span className={`${openClass}`}>
                              </span>:
                              !scale.includes(note) && i === open ?
                                <span className={`${openClass}`}>
                                </span>:
                                scale.includes(note) && chord.includes(note) && chord2.includes(note) && labelType === 'Chord Degrees' ?
                                  <span className={`${fretClass}`}>______________________________________________________
                                    <span className={`${noteClass} sharedNote`}>
                                      {altLabelContainer[chordKey[note]]}
                                    </span>______________________________________________________
                                  </span>:
                                  scale.includes(note) && chord.includes(note) && chord2.includes(note) ?
                                    <span className={`${fretClass}`}>______________________________________________________
                                      <span className={`${noteClass} sharedNote`}>
                                        {labelContainer[keyKey[note]]}
                                      </span>______________________________________________________
                                    </span>:
                                    scale.includes(note) && chord.includes(note) && labelType === 'Chord Degrees' && (chordFocus === 'Focus 1' || !chordTwoSelected ) ?
                                      <span className={`${fretClass}`}>______________________________________________________
                                        <span className={`${noteClass} selectedNote`}>
                                          {altLabelContainer[chordKey[note]]}
                                        </span>______________________________________________________
                                      </span>:
                                    scale.includes(note) && chord.includes(note) && labelType === 'Chord Degrees' && chordFocus === 'Focus 2'  ?
                                      <span className={`${fretClass}`}>______________________________________________________
                                        <span className={`${noteClass} selectedNote unfocus`}>
                                          {labelContainer[keyKey[note]]}
                                        </span>______________________________________________________
                                      </span>:
                                      scale.includes(note) && chord.includes(note) ?
                                        <span className={`${fretClass}`}>______________________________________________________
                                          <span className={`${noteClass} selectedNote`}>
                                            {labelContainer[keyKey[note]]}
                                          </span>______________________________________________________
                                        </span>:
                                        scale.includes(note) && chord2.includes(note) && labelType === 'Chord Degrees' && chordFocus === 'Focus 2' ?
                                          <span className={`${fretClass}`}>______________________________________________________
                                            <span className={`${noteClass} selectedNote2`}>
                                              {altLabelContainer[chordKey[note]]}
                                            </span>______________________________________________________
                                          </span>:
                                          scale.includes(note) && chord2.includes(note) && labelType === 'Chord Degrees' && chordFocus === 'Focus 1' ?
                                            <span className={`${fretClass}`}>______________________________________________________
                                              <span className={`${noteClass} selectedNote2 unfocus`}>
                                                {labelContainer[keyKey[note]]}
                                              </span>______________________________________________________
                                            </span>:
                                            scale.includes(note) && chord2.includes(note) ?
                                              <span className={`${fretClass}`}>______________________________________________________
                                                <span className={`${noteClass} selectedNote2`}>
                                                  {labelContainer[keyKey[note]]}
                                                </span>______________________________________________________
                                              </span>:
                                              scale.includes(note) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
                                                <span className={`${fretClass}`}>______________________________________________________
                                                  <span className={`${noteClass}`}>
                                                    {labelContainer[keyKey[note]]}
                                                  </span>______________________________________________________
                                                </span>:
                                                <span className={`${fretClass}`}>________________________________________________________________________________________________________________________________________________________________</span>

          )): null}
      </div>
  )
}

export default String;

// return(
//   < className={`${name}`}>
//     {notes ? notes.map((note, i) => (
//       scale.includes(note[0]) && chord.includes(note[0]) && chord2.includes(note[0]) && (i === open || i === 0)  ?
//         <span className={`${openClass}`}>
//           <span className={`${openNoteClass} sharedNote`}>
//             {note[0]}
//           </span>
//         </span>:
//         scale.includes(note[0]) && chord.includes(note[0]) && (i === open || i === 0)  ?
//           <span className={`${openClass}`}>
//             <span className={`${openNoteClass} selectedNote`}>
//               {note[0]}
//             </span>
//           </span>:
//           scale.includes(note[0]) && chord2.includes(note[0]) && (i === open || i === 0)  ?
//             <span className={`${openClass}`}>
//               <span className={`${openNoteClass} selectedNote2`}>
//                 {note[0]}
//               </span>
//             </span>:
//             scale.includes(note[0]) && i === open && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//               <span className={`${openClass}`}>
//                 <span className={`${openNoteClass}`}>
//                   {note[0]}
//                 </span>
//               </span>:
//               scale.includes(note[0]) && i === open && (hideScale || (chordOneSelected && chordTwoSelected)) ?
//                 <span className={`${openClass}`}>
//                 </span>:
//                 scale.includes(note[1]) && chord.includes(note[1]) && chord2.includes(note[1]) && (i === open || i === 0) ?
//                   <span className={`${openClass}`}>
//                     <span className={`${openNoteClass} sharedNote`}>
//                       {note[1]}
//                     </span>
//                   </span>:
//                   scale.includes(note[1]) && chord.includes(note[1]) && (i === open || i === 0) ?
//                     <span className={`${openClass}`}>
//                       <span className={`${openNoteClass} selectedNote`}>
//                         {note[1]}
//                       </span>
//                     </span>:
//                     scale.includes(note[1]) && chord2.includes(note[1]) && (i === open || i === 0) ?
//                       <span className={`${openClass}`}>
//                         <span className={`${openNoteClass} selectedNote2`}>
//                           {note[1]}
//                         </span>
//                       </span>:
//                       scale.includes(note[1]) && i === open && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//                         <span className={`${openClass}`}>
//                           <span className={`${openNoteClass}`}>
//                             {note[1]}
//                           </span>
//                         </span>:
//                         scale.includes(note[1]) && i === open && (hideScale || (chordOneSelected && chordTwoSelected)) ?
//                           <span className={`${openClass}`}>
//                           </span>:
//                           scale.includes(note[2]) && chord.includes(note[2]) && chord2.includes(note[2]) && (i === open || i === 0) ?
//                             <span className={`${openClass}`}>
//                               <span className={`${openNoteClass} sharedNote`}>
//                                 {note[2]}
//                               </span>
//                             </span>:
//                             scale.includes(note[2]) && chord.includes(note[2]) && (i === open || i === 0) ?
//                               <span className={`${openClass}`}>
//                                 <span className={`${openNoteClass} selectedNote`}>
//                                   {note[2]}
//                                 </span>
//                               </span>:
//                               scale.includes(note[2]) && chord2.includes(note[2]) && (i === open || i === 0) ?
//                                 <span className={`${openClass}`}>
//                                   <span className={`${openNoteClass} selectedNote2`}>
//                                     {note[2]}
//                                   </span>
//                                 </span>:
//                                 scale.includes(note[2]) && (i === open || i === 0) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//                                   <span className={`${openClass}`}>
//                                     <span className={`${openNoteClass}`}>
//                                       {note[2]}
//                                     </span>
//                                   </span>:
//                                   scale.includes(note[2]) && i === open && (hideScale || (chordOneSelected && chordTwoSelected)) ?
//                                     <span className={`${openClass}`}>
//                                     </span>:
//                                     !scale.includes(note[0]) && !scale.includes(note[1]) && !scale.includes(note[2]) && (i === open || i === 0) ?
//                                       <span className={`${openClass}`}>
//                                       </span>:
//                                       scale.includes(note[0]) && chord.includes(note[0]) && chord2.includes(note[0]) ?
//                                         <span className={`${fretClass}`}>______________________________
//                                           <span className={`${noteClass} sharedNote`}>
//                                             {note[0]}
//                                           </span>______________________________
//                                         </span>:
//                                         scale.includes(note[0]) && chord.includes(note[0]) ?
//                                           <span className={`${fretClass}`}>______________________________
//                                             <span className={`${noteClass} selectedNote`}>
//                                               {note[0]}
//                                             </span>______________________________
//                                           </span>:
//                                           scale.includes(note[0]) && chord2.includes(note[0]) ?
//                                             <span className={`${fretClass}`}>______________________________
//                                               <span className={`${noteClass} selectedNote2`}>
//                                                 {note[0]}
//                                               </span>______________________________
//                                             </span>:
//                                             scale.includes(note[0]) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//                                               <span className={`${fretClass}`}>______________________________
//                                                 <span className={`${noteClass}`}>
//                                                   {note[0]}
//                                                 </span>______________________________
//                                               </span>:
//                                                 scale.includes(note[1]) && chord.includes(note[1]) && chord2.includes(note[1]) ?
//                                                   <span className={`${fretClass}`}>______________________________
//                                                     <span className={`${noteClass} sharedNote`}>
//                                                       {note[1]}
//                                                     </span>______________________________
//                                                   </span>:
//                                                   scale.includes(note[1]) && chord.includes(note[1]) ?
//                                                     <span className={`${fretClass}`}>______________________________
//                                                       <span className={`${noteClass} selectedNote`}>
//                                                         {note[1]}
//                                                       </span>______________________________
//                                                     </span>:
//                                                   scale.includes(note[1]) && chord2.includes(note[1]) ?
//                                                     <span className={`${fretClass}`}>______________________________
//                                                       <span className={`${noteClass} selectedNote2`}>
//                                                         {note[1]}
//                                                       </span>______________________________
//                                                     </span>:
//                                                     scale.includes(note[1]) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//                                                       <span className={`${fretClass}`}>______________________________
//                                                         <span className={`${noteClass}`}>
//                                                           {note[1]}
//                                                         </span>______________________________
//                                                       </span>:
//                                                       scale.includes(note[2]) && chord.includes(note[2]) && chord2.includes(note[2]) ?
//                                                         <span className={`${fretClass}`}>______________________________
//                                                           <span className={`${noteClass} sharedNote`}>
//                                                             {note[2]}
//                                                           </span>______________________________
//                                                         </span>:
//                                                         scale.includes(note[2]) && chord.includes(note[2]) ?
//                                                           <span className={`${fretClass}`}>______________________________
//                                                             <span className={`${noteClass} selectedNote`}>
//                                                               {note[2]}
//                                                             </span>______________________________
//                                                           </span>:
//                                                           scale.includes(note[2]) && chord2.includes(note[2]) ?
//                                                             <span className={`${fretClass}`}>______________________________
//                                                               <span className={`${noteClass} selectedNote2`}>
//                                                                 {note[2]}
//                                                               </span>______________________________
//                                                             </span>:
//                                                             scale.includes(note[2]) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//                                                               <span className={`${fretClass}`}>______________________________
//                                                                 <span className={`${noteClass}`}>
//                                                                   {note[2]}
//                                                                 </span>______________________________
//                                                               </span>:
//                                                               <span className={`${fretClass}`}>________________________________________________________________________________________</span>
//       )): null}
