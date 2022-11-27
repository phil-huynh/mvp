import React from 'react'
import { useStoreContext } from '../StoreContext.js'

export const Header = () => {
  const {State, Setters, Conditions} = useStoreContext()

  const {renderView} = State
  const {handleNavChoice} = Setters
  const {mapScales, mapChords, tutorial} = Conditions

  let [mapScalesToggle, mapChordsToggle, tutorialToggle] = ['', '', '']

  mapScales ? mapScalesToggle = 'toggle_on' : ''
  mapChords ? mapChordsToggle = 'toggle_on' : ''
  tutorial ? tutorialToggle = 'toggle_on' : ''

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
        onClick={(e)=>handleNavChoice(e)}
        title="findStructures"
        >
        Find Structures
      </span>
      <span
        className={`navOption ${tutorialToggle}`}
        onClick={(e)=>handleNavChoice(e)}
        title="tutorial"
        >
        Tutorial
      </span>
      <span></span>
    </span>
  )
}


