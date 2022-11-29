import React from 'react';
import { useStoreContext } from '../../Providers/StoreContext.js'

export const LabelMenu = ()  => {

  const {State, Setters, Conditions} = useStoreContext()

  const {labelType} = State
  const {setLabelType} = Setters
  const {noteNameLabels, scaleDegLabels, solfegeLabels} = Conditions

  let [noteNamesClass, scaleDegreesClass, solfegeClass] = ['', '', ''];

  noteNameLabels ? noteNamesClass = "toggle_on" : noteNamesClass = '';
  scaleDegLabels ? scaleDegreesClass = "toggle_on" : scaleDegreesClass = '';
  solfegeLabels ? solfegeClass = "toggle_on" : solfegeClass = '';

  return (
    <div className="labelMenu_container">
      <span className='labelMenu'>
        <span
          className={`labelToggle ${noteNamesClass}`}
          onClick={(e) => {setLabelType(e.target.title)}}
          title='Note Names'
        >
          Note Names
        </span>
        <span
          className={`labelToggle ${scaleDegreesClass}`}
          onClick={(e) => {setLabelType(e.target.title)}}
          title='Scale Degrees'
        >
          Scale Degrees
        </span>
        <span
          className={`labelToggle ${solfegeClass}`}
          onClick={(e) => {setLabelType(e.target.title)}}
          title='Solfege'
        >
          Solfege
        </span>
      </span>
    </div>
  )
}

