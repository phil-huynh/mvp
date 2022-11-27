import React from 'react';
import { useStoreContext } from '../StoreContext.js'

export const LabelMenu = ()  => {

  const {handleNeckNotes, labelType} = useStoreContext()

  let [noteNames, scaleDegrees, solfege] = ['', '', ''];
  labelType === "Note Names" ? noteNames = "toggle_on" : noteNames = '';
  labelType === "Scale Degrees" ? scaleDegrees = "toggle_on" : scaleDegrees = '';
  labelType === "Solfege" ? solfege = "toggle_on" : solfege = '';

  return (
    <div className="labelMenu_container">
      <span className='labelMenu'>
        <span
          className={`labelToggle ${noteNames}`}
          onClick={(e) => {handleNeckNotes(e)}}
          title='Note Names'
        >
          Note Names
        </span>
        <span
          className={`labelToggle ${scaleDegrees}`}
          onClick={(e) => {handleNeckNotes(e)}}
          title='Scale Degrees'
        >
          Scale Degrees
        </span>
        <span
          className={`labelToggle ${solfege}`}
          onClick={(e) => {handleNeckNotes(e)}}
          title='Solfege'
        >
          Solfege
        </span>
      </span>
    </div>
  )
}

