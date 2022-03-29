import React, { useState } from 'react'
import { BiArrowFromLeft } from 'react-icons/bi'
import { BiArrowFromRight } from 'react-icons/bi'

var FretGuide = ({name, view, setStart, setEnd, setCapo, neckWindowMode, setWindowCycle, windowCycle}) => {


  const dot = '\u2022'
  let lefty = (view === 'Lefty Traditional View' || view === 'Lefty Mirror View')
  let guideboxClass = 'guidebox';
  let unMarkedClass = 'unmarked';
  let setFret;
  let nextCycle;
  let marker;
  let on = neckWindowMode !== 'none'
  let windowMode = neckWindowMode === 'window'
  let startMode = neckWindowMode === 'from start'
  let endMode = neckWindowMode === 'to end'
  let cycleStart = windowCycle === 'start'
  let cycleEnd = windowCycle === 'end'
  let active = neckWindowMode !== 'none'
  let capo = neckWindowMode === 'capo'

  const [guideboxLabel3, setGuideboxLabel3] = useState(dot)
  const [guideboxLabel5, setGuideboxLabel5] = useState(dot)
  const [guideboxLabel7, setGuideboxLabel7] = useState(dot)
  const [guideboxLabel9, setGuideboxLabel9] = useState(dot)
  const [guideboxLabel15, setGuideboxLabel15] = useState(dot)
  const [guideboxLabel17, setGuideboxLabel17] = useState(dot)
  const [guideboxLabel12, setGuideboxLabel12] = useState(':')


  if(lefty) {
    name += '_left'
  } else {
    name += '_right'
  }

  if (windowMode) {
    if (lefty) {
      if(cycleEnd) {
        nextCycle= 'start'
      }
      if(cycleStart) {
        nextCycle= 'off'
      }
    }
    if (!lefty) {
      if(cycleStart) {
        nextCycle= 'end'
      }
      if(cycleEnd) {
        nextCycle= 'off'
      }
    }
  }

  if (capo) {
    setFret = setCapo
    guideboxClass += ' capo_guide_marker'
    unMarkedClass += ' capo_guide_marker'
    marker = ''
  }

  if (!lefty && (startMode || (windowMode && cycleStart))) {
    setFret = setStart
    guideboxClass += ' from_fret'
    unMarkedClass += ' from_fret'
    marker = <BiArrowFromLeft size={19}/>
  }

  if (lefty && (startMode || (windowMode && cycleStart))) {
    setFret = setStart
    guideboxClass += ' to_fret'
    unMarkedClass += ' to_fret'
    marker = <BiArrowFromLeft size={19}/>
  }

  if (!lefty && (endMode || (windowMode && cycleEnd))) {
    setFret = setEnd
    guideboxClass += ' to_fret'
    unMarkedClass += ' to_fret'
    marker = <BiArrowFromRight size={19}/>
  }

  if (lefty && (endMode || (windowMode && cycleEnd))) {
    setFret = setEnd
    guideboxClass += ' from_fret'
    unMarkedClass += ' from_fret'
    marker = <BiArrowFromRight size={19}/>
  }

  return (
    <div className={name}>
      {lefty ?
      <React.Fragment>
        <span></span>
        <span
          className={guideboxClass}
          onClick={()=>{active ? setFret(0) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel17(marker) : ()=>setGuideboxLabel17(dot)}
          onMouseLeave={()=>setGuideboxLabel17(dot)}
        >
          {guideboxLabel17}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(1) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={guideboxClass}
          onClick={()=>{active ? setFret(2) : null ; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel15(marker) : ()=>setGuideboxLabel15(dot)}
          onMouseLeave={()=>setGuideboxLabel15(dot)}
        >
          {guideboxLabel15}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(3) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(4) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={guideboxClass}
          onClick={()=>{active ? setFret(5) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel12(marker) : ()=>setGuideboxLabel12(':')}
          onMouseLeave={()=>setGuideboxLabel12(':')}
        >
          {guideboxLabel12}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(6) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(7) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={guideboxClass}
          onClick={()=>{active ? setFret(8) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel9(marker) : ()=>setGuideboxLabel9(dot)}
          onMouseLeave={()=>setGuideboxLabel9(dot)}
        >
          {guideboxLabel9}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(9) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={guideboxClass}
          onClick={()=>{active ? setFret(10) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel7(marker) : ()=>setGuideboxLabel7(dot)}
          onMouseLeave={()=>setGuideboxLabel7(dot)}
        >
          {guideboxLabel7}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(11) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={guideboxClass}
          onClick={()=>{active ? setFret(12) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel5(marker) : ()=>setGuideboxLabel5(dot)}
          onMouseLeave={()=>setGuideboxLabel5(dot)}
        >
          {guideboxLabel5}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(13) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={guideboxClass}
          onClick={()=>{active ? setFret(14) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel3(marker) : ()=>setGuideboxLabel3(dot)}
          onMouseLeave={()=>setGuideboxLabel3(dot)}
        >
          {guideboxLabel3}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(15) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(16) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
        <span
          className={unMarkedClass}
          onClick={()=>{active ? setFret(17) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </span>
      </React.Fragment>:
      <React.Fragment>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(0) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(1) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(2) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={guideboxClass}
          onClick={()=>{active ? setFret(3) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel3(marker) : ()=>setGuideboxLabel3(dot)}
          onMouseLeave={()=>setGuideboxLabel3(dot)}
        >
          {guideboxLabel3}
        </div>
        <div
          onClick={()=>{active ? setFret(4) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          className={unMarkedClass}
          >{marker}</div>
        <div
          className={guideboxClass}
          onClick={()=>{active ? setFret(5) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel5(marker) : ()=>setGuideboxLabel5(dot)}
          onMouseLeave={()=>setGuideboxLabel5(dot)}
        >
          {guideboxLabel5}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(6) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={guideboxClass}
          onClick={()=>{active ? setFret(7) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel7(marker) : ()=>setGuideboxLabel7(dot)}
          onMouseLeave={()=>setGuideboxLabel7(dot)}
        >
          {guideboxLabel7}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(8) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={guideboxClass}
          onClick={()=>{active ? setFret(9) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel9(marker) : ()=>setGuideboxLabel9(dot)}
          onMouseLeave={()=>setGuideboxLabel9(dot)}
        >
          {guideboxLabel9}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(10) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(11) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={guideboxClass}
          onClick={()=>{active ? setFret(12) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel12(marker) : ()=>setGuideboxLabel12(':')}
          onMouseLeave={()=>setGuideboxLabel12(':')}
        >
          {guideboxLabel12}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(13) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(14) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={guideboxClass}
          onClick={()=>{active ? setFret(15) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel15(marker) : ()=>setGuideboxLabel15(dot)}
          onMouseLeave={()=>setGuideboxLabel15(dot)}
        >
          {guideboxLabel15}
        </div>
        <div
          className={unMarkedClass}
          onClick={()=>{active ? setFret(16) : null; windowMode ? setWindowCycle(nextCycle) : null}}
        >
          {marker}
        </div>
        <div
          className={guideboxClass}
          onClick={()=>{active ? setFret(17) : null; windowMode ? setWindowCycle(nextCycle) : null}}
          onMouseEnter={on ? ()=>setGuideboxLabel17(marker) : ()=>setGuideboxLabel17(dot)}
          onMouseLeave={()=>setGuideboxLabel17(dot)}
        >
          {guideboxLabel17}
        </div>
      </React.Fragment>
      }
    </div>
  )
}

export default FretGuide;




