import React from 'react';
import { useStoreContext } from '../../Providers/StoreContext.js';

export const Header = () => {
  const {State, Setters, Conditions} = useStoreContext();

  const { renderView } = State;

  const {
    mapScales,
    mapChords,
    tutorial
  } = Conditions;

  const {
    handleNavChoice,
    setShowFindStructures,
    setRenderView,
    setShowTutorial
  } = Setters;

  const mapScalesToggle = mapScales ? 'toggle_on' : '';
  const mapChordsToggle = mapChords ? 'toggle_on' : '';
  const tutorialToggle = tutorial ? 'toggle_on' : '';

  return (
    <span className="navbar">
      <span className="navTitle">
        Strings Theory
      </span>
      <span></span>
      <span
        className={`navOption ${mapChordsToggle}`}
        onClick={(e)=>handleNavChoice(e)}
        title="mapChords"
        >
        Map Chords
      </span>
      <span
        className={`navOption ${mapScalesToggle}`}
        onClick={(e)=>handleNavChoice(e)}
        title="mapScales"
        >
        Map Scales
      </span>
      <span
        className='navOption'
        onClick={()=>{setShowFindStructures(true)}}
        title="findStructures"
        >
        Find Structures
      </span>
      <span
        className={`navOption ${tutorialToggle}`}
        onClick={()=>{setRenderView('Tutorial'); setShowTutorial(true)}}
        title="tutorial"
        >
        Tutorial
      </span>
      <span></span>
    </span>
  )
}


