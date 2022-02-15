import React from 'react'

var FretGuide = ({name, view}) => {

  return (
    <div className={name}>
      {(view === 'Traditional-left' || view === 'Mirror-left') ?
      <div className='guideLeft'>
        <span className='guidebox leftyFret17'> &#183;</span>
        <span className='guidebox leftyFret15'> &#183;</span>
        <span className='guidebox leftyFret12'>:</span>
        <span className='guidebox leftyFret9'> &#183;</span>
        <span className='guidebox leftyFret7'> &#183;</span>
        <span className='guidebox leftyFret5'> &#183;</span>
        <span className='guidebox leftyFret3'> &#183;</span>
      </div>:
      <div className='guide'>
        <span className='guidebox fret3'> &#183;</span>
        <span className='guidebox fret5'> &#183;</span>
        <span className='guidebox fret7'> &#183;</span>
        <span className='guidebox fret9'> &#183;</span>
        <span className='guidebox fret12'>:</span>
        <span className='guidebox fret15'> &#183;</span>
        <span className='guidebox fret17'> &#183;</span>
      </div>
      }
    </div>
  )
}

export default FretGuide;