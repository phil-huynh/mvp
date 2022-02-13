import React from 'react'

var String = ({ string, allStrings, stringsLeft, scale, chord, chord2, view, chordOneSelected, chordTwoSelected, hideScale, solfege, scaleDegrees, keyCenter, labelType }) => {
  var notes=[];
  var currentString;
  var name;
  var open;
  var openClass;
  var openNoteClass;
  var noteClass;
  var labelContainer;

  if (labelType === 'Note Names') {
    labelContainer = keyCenter.tonicScaleDegrees
  }

  if (labelType === 'Scale Degrees') {
    labelContainer = scaleDegrees
  }

  if (labelType === 'Solfege') {
    labelContainer = solfege
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
          scale.includes(note) && chord.includes(note) && chord2.includes(note) && (i === open || i === 0)  ?
            <span className={`${openClass}`}>
              <span className={`${openNoteClass} sharedNote`}>
                {labelContainer[keyCenter.notesToDegrees[note]]}
              </span>
            </span>:
            scale.includes(note) && chord.includes(note) && (i === open || i === 0)  ?
              <span className={`${openClass}`}>
                <span className={`${openNoteClass} selectedNote`}>
                  {labelContainer[keyCenter.notesToDegrees[note]]}
                </span>
              </span>:
              scale.includes(note) && chord2.includes(note) && (i === open || i === 0)  ?
                <span className={`${openClass}`}>
                  <span className={`${openNoteClass} selectedNote2`}>
                  {labelContainer[keyCenter.notesToDegrees[note]]}
                  </span>
                </span>:
                scale.includes(note) && i === open && !(chordOneSelected && chordTwoSelected) && !hideScale ?
                  <span className={`${openClass}`}>
                    <span className={`${openNoteClass}`}>
                      {labelContainer[keyCenter.notesToDegrees[note]]}
                    </span>
                  </span>:
                  scale.includes(note) && i === open && (hideScale || (chordOneSelected && chordTwoSelected)) ?
                    <span className={`${openClass}`}>
                    </span>:
                    !scale.includes(note) && (i === open || i === 0) ?
                      <span className={`${openClass}`}>
                      </span>:
                      scale.includes(note) && chord.includes(note) && chord2.includes(note) ?
                        <span className="fret">______________________________
                          <span className={`${noteClass} sharedNote`}>
                            {labelContainer[keyCenter.notesToDegrees[note]]}
                          </span>______________________________
                        </span>:
                        scale.includes(note) && chord.includes(note) ?
                          <span className="fret">______________________________
                            <span className={`${noteClass} selectedNote`}>
                              {labelContainer[keyCenter.notesToDegrees[note]]}
                            </span>______________________________
                          </span>:
                          scale.includes(note) && chord2.includes(note) ?
                            <span className="fret">______________________________
                              <span className={`${noteClass} selectedNote2`}>
                                {labelContainer[keyCenter.notesToDegrees[note]]}
                              </span>______________________________
                            </span>:
                            scale.includes(note) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
                              <span className="fret">______________________________
                                <span className={`${noteClass}`}>
                                  {labelContainer[keyCenter.notesToDegrees[note]]}
                                </span>______________________________
                              </span>:
                              <span className="fret">________________________________________________________________________________________</span>

        )): null}
      </div>
  )
}

export default String;

// return(
//   <div className={`${name}`}>
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
//                                         <span className="fret">______________________________
//                                           <span className={`${noteClass} sharedNote`}>
//                                             {note[0]}
//                                           </span>______________________________
//                                         </span>:
//                                         scale.includes(note[0]) && chord.includes(note[0]) ?
//                                           <span className="fret">______________________________
//                                             <span className={`${noteClass} selectedNote`}>
//                                               {note[0]}
//                                             </span>______________________________
//                                           </span>:
//                                           scale.includes(note[0]) && chord2.includes(note[0]) ?
//                                             <span className="fret">______________________________
//                                               <span className={`${noteClass} selectedNote2`}>
//                                                 {note[0]}
//                                               </span>______________________________
//                                             </span>:
//                                             scale.includes(note[0]) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//                                               <span className="fret">______________________________
//                                                 <span className={`${noteClass}`}>
//                                                   {note[0]}
//                                                 </span>______________________________
//                                               </span>:
//                                                 scale.includes(note[1]) && chord.includes(note[1]) && chord2.includes(note[1]) ?
//                                                   <span className="fret">______________________________
//                                                     <span className={`${noteClass} sharedNote`}>
//                                                       {note[1]}
//                                                     </span>______________________________
//                                                   </span>:
//                                                   scale.includes(note[1]) && chord.includes(note[1]) ?
//                                                     <span className="fret">______________________________
//                                                       <span className={`${noteClass} selectedNote`}>
//                                                         {note[1]}
//                                                       </span>______________________________
//                                                     </span>:
//                                                   scale.includes(note[1]) && chord2.includes(note[1]) ?
//                                                     <span className="fret">______________________________
//                                                       <span className={`${noteClass} selectedNote2`}>
//                                                         {note[1]}
//                                                       </span>______________________________
//                                                     </span>:
//                                                     scale.includes(note[1]) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//                                                       <span className="fret">______________________________
//                                                         <span className={`${noteClass}`}>
//                                                           {note[1]}
//                                                         </span>______________________________
//                                                       </span>:
//                                                       scale.includes(note[2]) && chord.includes(note[2]) && chord2.includes(note[2]) ?
//                                                         <span className="fret">______________________________
//                                                           <span className={`${noteClass} sharedNote`}>
//                                                             {note[2]}
//                                                           </span>______________________________
//                                                         </span>:
//                                                         scale.includes(note[2]) && chord.includes(note[2]) ?
//                                                           <span className="fret">______________________________
//                                                             <span className={`${noteClass} selectedNote`}>
//                                                               {note[2]}
//                                                             </span>______________________________
//                                                           </span>:
//                                                           scale.includes(note[2]) && chord2.includes(note[2]) ?
//                                                             <span className="fret">______________________________
//                                                               <span className={`${noteClass} selectedNote2`}>
//                                                                 {note[2]}
//                                                               </span>______________________________
//                                                             </span>:
//                                                             scale.includes(note[2]) && !(chordOneSelected && chordTwoSelected) && !hideScale ?
//                                                               <span className="fret">______________________________
//                                                                 <span className={`${noteClass}`}>
//                                                                   {note[2]}
//                                                                 </span>______________________________
//                                                               </span>:
//                                                               <span className="fret">________________________________________________________________________________________</span>
//       )): null}
//   </div>
// )
