import React, { useState } from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { BiArrowFromRight } from 'react-icons/bi';
import { useStoreContext } from '../../Providers/StoreContext.js';

export const FretGuide = ({name}) => {

  const {State, Setters, Conditions} = useStoreContext();
  const {view, neckWindowMode, windowCycle} = State;
  const {setLowestFret, setHighestFret, setCapo, updateWindowCycle} = Setters;
  const {lefty, windowMode, startMode, endMode, cycleStart, cycleEnd, capoMode, modeActive} = Conditions;

  const dot = '\u2022'

  const [guideboxLabel3, setGuideboxLabel3] = useState(dot);
  const [guideboxLabel5, setGuideboxLabel5] = useState(dot);
  const [guideboxLabel7, setGuideboxLabel7] = useState(dot);
  const [guideboxLabel9, setGuideboxLabel9] = useState(dot);
  const [guideboxLabel15, setGuideboxLabel15] = useState(dot);
  const [guideboxLabel17, setGuideboxLabel17] = useState(dot);
  const [guideboxLabel12, setGuideboxLabel12] = useState(':');

  let [guideboxClass, unMarkedClass] = ['guidebox', 'unmarked'];
  let setFret;
  let nextCycle;
  let marker;
  let guides = [
    [guideboxLabel3, setGuideboxLabel3],
    [guideboxLabel5, setGuideboxLabel5],
    [guideboxLabel7, setGuideboxLabel7],
    [guideboxLabel9, setGuideboxLabel9],
    [guideboxLabel12, setGuideboxLabel12],
    [guideboxLabel15, setGuideboxLabel15],
    [guideboxLabel17, setGuideboxLabel17],
  ];
  let marked = [3, 5 , 7, 9, 12, 15, 17];

  const fretBoard = (() => {
    let [index, array] = [0, []];
    while (index <= 17) {
      array.push(index);
      index++;
    }
    return array;
  })()

  if (lefty) {
    marked = [0, 2, 5, 8, 10, 12, 14];
    guides.reverse();
    name += '_left';
  } else {
    name += '_right';
  }

  if (windowMode) {
    if(cycleStart) { nextCycle= 'end'; }
    if(cycleEnd) { nextCycle= 'off'; }
  }

  if (capoMode) {
    setFret = setCapo;
    guideboxClass += ' capo_guide_marker';
    unMarkedClass += ' capo_guide_marker';
    marker = '';
  }

  if (!lefty && (startMode || (windowMode && cycleStart))) {
    setFret = setLowestFret;
    guideboxClass += ' from_fret';
    unMarkedClass += ' from_fret';
    marker = <BiArrowFromLeft size={19}/>;
  }

  if (lefty && (startMode || (windowMode && cycleStart))) {
    setFret = setLowestFret;
    guideboxClass += ' to_fret';
    unMarkedClass += ' to_fret';
    marker = <BiArrowFromLeft size={19}/>;
  }

  if (!lefty && (endMode || (windowMode && cycleEnd))) {
    setFret = setHighestFret;
    guideboxClass += ' to_fret';
    unMarkedClass += ' to_fret';
    marker = <BiArrowFromRight size={19}/>;
  }

  if (lefty && (endMode || (windowMode && cycleEnd))) {
    setFret = setHighestFret;
    guideboxClass += ' from_fret';
    unMarkedClass += ' from_fret';
    marker = <BiArrowFromRight size={19}/>;
  }

  return (
    <div className={name}>
      <React.Fragment>
        {lefty ? <span></span> : null}
        {fretBoard.map((fret) => {
          if (marked.includes(fret)) {
            let i = marked.indexOf(fret);
            return (
              <span
                key={fret}
                className={guideboxClass}
                onClick={()=>{
                    modeActive ? setFret(fret) : null;
                    windowMode ? updateWindowCycle(nextCycle) : null
                  }}
                onMouseEnter={modeActive ? ()=>guides[i][1](marker) : ()=>guides[i][1](dot)}
                onMouseLeave={()=>guides[i][1](dot)}
              >
                {guides[i][0]}
              </span>
            )
          } else {
            return (
              <span
              key={fret}
                className={unMarkedClass}
                onClick={()=>
                  {modeActive ? setFret(fret) : null;
                    windowMode ? updateWindowCycle(nextCycle) : null
                  }}
              >
                {marker}
              </span>
            )
          }
        })}
      </React.Fragment>
    </div>
  )
}
