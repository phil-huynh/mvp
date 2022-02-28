import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var AlterChordOpt = ({showAlter, handleAlterChordWindow, handleAlterChord, list}) => {

  const sharp = '\u266F';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E'
  const dim = '\u00B0'

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
      {list ? list.map((choice) => (
        <div
          className='chordChoice'
          onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}
        >
          {choice}
        </div>
      )):  null
      }

    </Modal>
  )
}

export default AlterChordOpt;