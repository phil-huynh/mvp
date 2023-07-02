import React from 'react';
import { useStoreContext } from '../../Providers/StoreContext.js';

export const HideScaleMenu = ()  => {
  const {State, Setters, Conditions} = useStoreContext();

  const { setHideScale } = Setters;

  const {
    showScale,
    unfocusScale,
    hiddenScale
  } = Conditions;


  const scaleVisible = showScale ? 'toggle_on' : '';
  const scaleUnfocused = unfocusScale ? 'toggle_on' : '';
  const scaleHidden = hiddenScale ? 'toggle_on' : '';

  const visibleLabel = showScale ? 'Scale Visible' : 'Show Scale';
  const unfocusedLabel = unfocusScale ? 'Scale Unfocused' : 'Unfocus Scale';
  const hiddenLabel = hiddenScale ? 'Scale Hidden' : 'Hide Scale';

  return (
    <div
      className='hideScaleMenu'>
      <div
        className={`hideToggle ${scaleVisible}`}
        onClick={ e => setHideScale(e.target.title) }
        title='Show Scale'
      >
        {visibleLabel}
      </div>
      <div
        className={`hideToggle ${scaleUnfocused}`}
        onClick={e => setHideScale(e.target.title)}
        title='Unfocus Scale'
      >
        {unfocusedLabel}
      </div>
      <div
        className={`hideToggle ${scaleHidden}`}
        onClick={ e => setHideScale(e.target.title) }
        title='Hide Scale'
      >
        {hiddenLabel}
      </div>
    </div>
  )
}

