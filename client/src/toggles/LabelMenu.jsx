import React from 'react';
import { useStoreContext } from '../../Providers/StoreContext.js';


export const LabelMenu = ()  => {

  const {State, Setters, Conditions} = useStoreContext();

  const { labelType } = State;
  const { setLabelType } = Setters;

  const {
    noteNameLabels,
    scaleDegLabels,
    solfegeLabels
  } = Conditions;


  const noteNamesClass = noteNameLabels ? "toggle_on" : '';
  const scaleDegreesClass = scaleDegLabels ? "toggle_on" : '';
  const solfegeClass = solfegeLabels ? "toggle_on" : '';

  return (
    <div className="labelMenu_container">
      <span className='labelMenu'>
        <span
          className={`labelToggle ${noteNamesClass}`}
          onClick={ e => setLabelType(e.target.title) }
          title='Note Names'
        >
          Note Names
        </span>
        <span
          className={`labelToggle ${scaleDegreesClass}`}
          onClick={ e => setLabelType(e.target.title) }
          title='Scale Degrees'
        >
          Scale Degrees
        </span>
        <span
          className={`labelToggle ${solfegeClass}`}
          onClick={ e => setLabelType(e.target.title) }
          title='Solfege'
        >
          Solfege
        </span>
      </span>
    </div>
  )
}

