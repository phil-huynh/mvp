import React from 'react'
import { ChordCalculator } from './ChordCalculator.jsx'
import { useStoreContext } from '../StoreContext.js'

export const MapChordsRender = () => {

  const {root1, root2, voicing1, voicing2, calcChord1, calcChord2} = useStoreContext()
  return (
    <div className="testContainer">
    <ChordCalculator
      root={root1}
      voicing={voicing1}
      whichCalculator={'1'}
      chord={calcChord1}
      />
    <ChordCalculator
      root={root2}
      voicing={voicing2}
      whichCalculator={'2'}
      chord={calcChord2}
    />
  </div>
  )
}

