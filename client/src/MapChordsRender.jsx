import React from 'react'
import ChordCalculator from './ChordCalculator.jsx'

var MapChordsRender = ({handleRootChange, handleVoicingChange, root1, root2, voicing1, voicing2, chord1, chord2, clear, handleChordFocus, chordFocus, sharedNotes}) => {

  return (
    <div className="testContainer">
    <ChordCalculator
      handleRootChange={handleRootChange}
      handleVoicingChange={handleVoicingChange}
      root={root1}
      voicing={voicing1}
      whichCalculator={'1'}
      clear={clear}
      chord={chord1}
      handleChordFocus={handleChordFocus}
      chordFocus={chordFocus}
      sharedNotes={sharedNotes}
      />
    <ChordCalculator
      handleRootChange={handleRootChange}
      handleVoicingChange={handleVoicingChange}
      root={root2}
      voicing={voicing2}
      whichCalculator={'2'}
      clear={clear}
      chord={chord2}
      handleChordFocus={handleChordFocus}
      chordFocus={chordFocus}
      sharedNotes={sharedNotes}
    />
  </div>
  )
}

export default MapChordsRender