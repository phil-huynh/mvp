import React from 'react';
import { useStoreContext } from '../StoreContext.js'

export const HideScaleMenu = ()  => {
  const {State, Setters, Conditions} = useStoreContext()

  const {handleHide} = Setters
  const {showScale, unfocusScale, hiddenScale} = Conditions

  let [scaleVisible, scaleUnfocused, scaleHidden] = ['', '', '']
  let [visibleLabel, unfocusedLabel, hiddenLabel] = ['', '', '']

  showScale ? scaleVisible = 'toggle_on' : scaleVisible = ''
  unfocusScale ? scaleUnfocused = 'toggle_on' : scaleUnfocused = ''
  hiddenScale ? scaleHidden = 'toggle_on' : scaleHidden= ''
  showScale ? visibleLabel = 'Scale Visible' : visibleLabel = 'Show Scale'
  unfocusScale ? unfocusedLabel = 'Scale Unfocused' : unfocusedLabel = 'Unfocus Scale'
  hiddenScale ? hiddenLabel = 'Scale Hidden' : hiddenLabel= 'Hide Scale'

  return (
    <div
      className='hideScaleMenu'>
      <div
        className={`hideToggle ${scaleVisible}`}
        onClick={(e) => {handleHide(e)}}
        title='Show Scale'
      >
        {visibleLabel}
      </div>
      <div
        className={`hideToggle ${scaleUnfocused}`}
        onClick={(e) => {handleHide(e)}}
        title='Unfocus Scale'
      >
        {unfocusedLabel}
      </div>
      <div
        className={`hideToggle ${scaleHidden}`}
        onClick={(e) => {handleHide(e)}}
        title='Hide Scale'
      >
        {hiddenLabel}
      </div>
    </div>
  )
}

