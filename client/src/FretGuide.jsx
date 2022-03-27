import React, { useState } from 'react'
import { BiArrowFromLeft } from 'react-icons/bi'
import { BiArrowFromRight } from 'react-icons/bi'

var FretGuide = ({name, view, setStart, setEnd, neckWindowMode, setWindowCycle, windowCycle}) => {

  if(view === 'Lefty Traditional View' || view === 'Lefty Mirror View') {
    name += '_left'
  } else {
    name += '_right'
  }

  const dot = '\u2022'
  var guideboxClass = 'guidebox';
  var unMarkedClass = 'unmarked';
  var setFret;
  var nextCycle;
  var marker;
  var on = neckWindowMode !== 'none'

  const [guideboxLabel3, setGuideboxLabel3] = useState(dot)
  const [guideboxLabel5, setGuideboxLabel5] = useState(dot)
  const [guideboxLabel7, setGuideboxLabel7] = useState(dot)
  const [guideboxLabel9, setGuideboxLabel9] = useState(dot)
  const [guideboxLabel15, setGuideboxLabel15] = useState(dot)
  const [guideboxLabel17, setGuideboxLabel17] = useState(dot)
  const [guideboxLabel12, setGuideboxLabel12] = useState(':')

  if (neckWindowMode === 'window') {
    windowCycle === 'start' ? nextCycle = 'end' : nextCycle = 'start'
  }

  if (neckWindowMode === 'from start' || (neckWindowMode === 'window' && windowCycle === 'start')) {
    setFret = setStart
    guideboxClass += ' from_fret'
    unMarkedClass += ' from_fret'
    marker = <BiArrowFromLeft size={25}/>
  }
  if (neckWindowMode === 'to end' || (neckWindowMode === 'window' && windowCycle === 'end')) {
    setFret = setEnd
    guideboxClass += ' to_fret'
    unMarkedClass += ' to_fret'
    marker = <BiArrowFromRight size={25}/>
  }

  return (
    <div className={name}>
      {(view === 'Lefty Traditional View' || view === 'Lefty Mirror View') ?
      <React.Fragment>
        <span></span>
        <span className='at_fret guidebox leftyFret17'> &#183;</span>
        <span className='at_fret'></span>
        <span className='at_fret guidebox leftyFret15'> &#183;</span>
        <span className='at_fret'></span>
        <span className='at_fret'></span>
        <span className='at_fret guidebox leftyFret12'>:</span>
        <span className='at_fret'></span>
        <span className='at_fret'></span>
        <span className='at_fret guidebox leftyFret9'> &#183;</span>
        <span className='at_fret'></span>
        <span className='at_fret guidebox leftyFret7'> &#183;</span>
        <span className='at_fret'></span>
        <span className='at_fret guidebox leftyFret5'> &#183;</span>
        <span className='at_fret'></span>
        <span className='at_fret guidebox leftyFret3'> &#183;</span>
        <span className='at_fret'></span>
        <span className='at_fret'></span>
        <span className='at_fret'></span>
      </React.Fragment>:
      <React.Fragment>
        <div onClick={()=>{setFret(0); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(1); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(2); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(3); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} onMouseEnter={on ? ()=>setGuideboxLabel3(marker) : ()=>setGuideboxLabel3(dot)} onMouseLeave={()=>setGuideboxLabel3(dot)} className={guideboxClass}>{guideboxLabel3}</div>
        <div onClick={()=>{setFret(4); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(5); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} onMouseEnter={on ? ()=>setGuideboxLabel5(marker) : ()=>setGuideboxLabel5(dot)} onMouseLeave={()=>setGuideboxLabel5(dot)} className={guideboxClass}>{guideboxLabel5}</div>
        <div onClick={()=>{setFret(6); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(7); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} onMouseEnter={on ? ()=>setGuideboxLabel7(marker) : ()=>setGuideboxLabel7(dot)} onMouseLeave={()=>setGuideboxLabel7(dot)} className={guideboxClass}>{guideboxLabel7}</div>
        <div onClick={()=>{setFret(8); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(9); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} onMouseEnter={on ? ()=>setGuideboxLabel9(marker) : ()=>setGuideboxLabel9(dot)} onMouseLeave={()=>setGuideboxLabel9(dot)} className={guideboxClass}>{guideboxLabel9}</div>
        <div onClick={()=>{setFret(10); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(11); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(12); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} onMouseEnter={on ? ()=>setGuideboxLabel12(marker) : ()=>setGuideboxLabel12(':')} onMouseLeave={()=>setGuideboxLabel12(':')} className={guideboxClass}>{guideboxLabel12}</div>
        <div onClick={()=>{setFret(13); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(14); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(15); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} onMouseEnter={on ? ()=>setGuideboxLabel15(marker) : ()=>setGuideboxLabel15(dot)} onMouseLeave={()=>setGuideboxLabel15(dot)} className={guideboxClass}>{guideboxLabel15}</div>
        <div onClick={()=>{setFret(16); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} className={unMarkedClass}>{marker}</div>
        <div onClick={()=>{setFret(17); neckWindowMode === 'window' ? setWindowCycle(nextCycle) : null}} onMouseEnter={on ? ()=>setGuideboxLabel17(marker) : ()=>setGuideboxLabel17(dot)} onMouseLeave={()=>setGuideboxLabel17(dot)} className={guideboxClass}>{guideboxLabel17}</div>
      </React.Fragment>
      }
    </div>
  )
}

export default FretGuide;




