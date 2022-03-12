import React from 'react'

var FretGuide = ({name, view}) => {

  if(view === 'Lefty Traditional View' || view === 'Lefty Mirror View') {
    name += '_left'
  } else {
    name += '_right'
  }

  return (
    <div className={name}>
      {(view === 'Lefty Traditional View' || view === 'Lefty Mirror View') ?
      <React.Fragment>
        <span className='guidebox leftyFret17'> &#183;</span>
        <span className='guidebox leftyFret15'> &#183;</span>
        <span className='guidebox leftyFret12'>:</span>
        <span className='guidebox leftyFret9'> &#183;</span>
        <span className='guidebox leftyFret7'> &#183;</span>
        <span className='guidebox leftyFret5'> &#183;</span>
        <span className='guidebox leftyFret3'> &#183;</span>
      </React.Fragment>:
      <React.Fragment>
        <span className='guidebox fret3'> &#183;</span>
        <span className='guidebox fret5'> &#183;</span>
        <span className='guidebox fret7'> &#183;</span>
        <span className='guidebox fret9'> &#183;</span>
        <span className='guidebox fret12'>:</span>
        <span className='guidebox fret15'> &#183;</span>
        <span className='guidebox fret17'> &#183;</span>
      </React.Fragment>
      }
    </div>
  )
}

export default FretGuide;




