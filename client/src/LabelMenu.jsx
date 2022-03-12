import React from 'react';

var LabelMenu = ({name, handleNeckNotes, noteNameToggle, scaleDegreeToggle, solfegeToggle})  => {

  var types = ['Note Names', 'Scale Degrees', 'Solfege']

  return (
    <div className="labelMenu_container">
      <span className={name}>
        <span className={`labelToggle ${noteNameToggle}`} onClick={(e) => {handleNeckNotes(e)}} title='Note Names'>Note Names</span>
        <span className={`labelToggle ${scaleDegreeToggle}`} onClick={(e) => {handleNeckNotes(e)}} title='Scale Degrees'>Scale Degrees</span>
        <span className={`labelToggle ${solfegeToggle}`} onClick={(e) => {handleNeckNotes(e)}} title='Solfege'>Solfege</span>
      </span>
    </div>
  )
}

export default LabelMenu;