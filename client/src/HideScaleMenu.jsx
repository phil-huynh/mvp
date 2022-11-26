import React from 'react';

export const HideScaleMenu = ({name, handleHide, hideScale})  => {

  let [scaleVisible, scaleUnfocused, scaleHidden] = ['', '', '']
  let visibleLabel;
  let unfocusedLabel;
  let hiddenLabel;

  hideScale === "Show Scale" ? scaleVisible = 'toggle_on' : scaleVisible = ''
  hideScale === "Unfocus Scale" ? scaleUnfocused = 'toggle_on' : scaleUnfocused = ''
  hideScale === "Hide Scale" ? scaleHidden = 'toggle_on' : scaleHidden= ''
  hideScale === "Show Scale" ? visibleLabel = 'Scale Visible' : visibleLabel = 'Show Scale'
  hideScale === "Unfocus Scale" ? unfocusedLabel = 'Scale Unfocused' : unfocusedLabel = 'Unfocus Scale'
  hideScale === "Hide Scale" ? hiddenLabel = 'Scale Hidden' : hiddenLabel= 'Hide Scale'

  return (
    <div
      className={name}>
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

