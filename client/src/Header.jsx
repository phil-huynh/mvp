import React from 'react'

var Header = ({handleNavChoice, mapChordsToggle, mapScalesToggle, findChordsToggle, findScalesToggle, tutorialToggle, settingsToggle}) => {
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
        className={findChordsToggle}
        onClick={(e)=>handleNavChoice(e)}
        title="findChords"
        >
        Find Chords
      </span>
      <span
        className={findScalesToggle}
        onClick={(e)=>handleNavChoice(e)}
        title="findScales"
        >
        Find Scales
      </span>
      <span
        className={tutorialToggle}
        onClick={(e)=>handleNavChoice(e)}
        title="tutorial"
        >
        Tutorial
      </span>
      <span
        className={settingsToggle}
        onClick={(e)=>handleNavChoice(e)}
        title="settings"
      >
        Settings
      </span>
      <span></span>
    </span>
  )
}


export default Header