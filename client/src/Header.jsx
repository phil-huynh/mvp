import React from 'react'

var Header = ({handleNavChoice, mapChordsToggle, mapScalesToggle, findStructuresToggle, tutorialToggle, settingsToggle}) => {
  return (
    <span className="navbar">
      <span className="navTitle">
        Strings Theory
      </span>
      <span></span>
      <span
        className={mapChordsToggle}
        onClick={(e)=>handleNavChoice(e)}
        title="mapChords"
        >
        Map Chords
      </span>
      <span
        className={mapScalesToggle}
        onClick={(e)=>handleNavChoice(e)}
        title="mapScales"
        >
        Map Scales
      </span>
      <span
        className={findStructuresToggle}
        onClick={(e)=>handleNavChoice(e)}
        title="findStructures"
        >
        Find Structures
      </span>
      <span
        className={tutorialToggle}
        onClick={(e)=>handleNavChoice(e)}
        title="tutorial"
        >
        Tutorial
      </span>
      <span></span>
    </span>
  )
}


export default Header