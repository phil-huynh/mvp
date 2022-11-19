import React from 'react'

var Header = ({handleNavChoice, renderView}) => {
   let mapScales;
   let mapChords;
   let tutorial;

   renderView === 'Map Scales' ? mapScales = 'toggle_on' : ''
   renderView === 'Map Chords' ? mapChords = 'toggle_on' : ''
   renderView === 'Tutorial' ? tutorial = 'toggle_on' : ''

  return (
    <span className="navbar">
      <span className="navTitle">
        Strings Theory
      </span>
      <span></span>
      <span
        className={`navOption ${mapChords}`}
        onClick={(e)=>handleNavChoice(e)}
        title="mapChords"
        >
        Map Chords
      </span>
      <span
        className={`navOption ${mapScales}`}
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
        className={`navOption ${tutorial}`}
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