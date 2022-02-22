import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var AlterChordOpt = ({showAlter, handleAlterChordWindow, handleAlterChord}) => {
  return (
    <Modal
      className='alterChord'
      show={showAlter}
      onHide={() => {handleAlterChordWindow(); handleAlterChordWindow()}}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>
            Choose Diatonic Structure
          </h2>
        </Modal.Title>
      </Modal.Header>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Hello World</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Power Chord</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Triad</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Shell Voicing</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Sus2</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Sus4</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Six</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Seventh</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Ninth</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Add Nine</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Eleventh</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Add Eleven</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Thirteen</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Add Thirteen</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Pentatonic Scale</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Quartal Voicing</div>
      <div className='chordChoice' onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}>Fifths Voicing</div>
    </Modal>
  )
}

export default AlterChordOpt;