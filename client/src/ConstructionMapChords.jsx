import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

export const ConstructionMapChords = ({showConstructionMapChords, handleConstructionMapChordsWindow, handleNavChoice}) => {

  return (
    <Modal
      className='construction'
      show={showConstructionMapChords}
      onHide={() => {handleConstructionMapChordsWindow()}}
    >
      <Modal.Header
        closeButton
        closeVariant='white'
      >
        <Modal.Title>
          <h2>
            A Message from Strings Theory
          </h2>
        </Modal.Title>
      </Modal.Header>
      <div
          className='construction_message'
          onClick={(e)=>{handleConstructionMapChordsWindow()}}
        >
          <div className="sorry targetNoteTutorial">Sorry!</div>
          <div className="upper_construction_message">The <span className="sorry_label toggle_on">Map Chords</span> feature is in development and is not yet ready for general use. This feature will be coming soon. Please check back again. This site is frequently updated.</div>
          <div className="middle_construction_message">When available, this feature will allow the you to view chords independent of a scale reference and make comparisons to other chords that do not share a source scale. Updates will be coming soon.</div>
          <div className="bottom_construction_message">In the meantime, try one of these currently available features.</div>
          <div className='construction_options'>
            <span
              title="mapScales"
              className='construction_choice toggle_on'
              onClick={(e)=>{handleNavChoice(e)}}
              >
              Map Scales
            </span>
            <span
              title="tutorial"
              className='construction_choice toggle_on'
              onClick={(e)=>{handleNavChoice(e)}}
            >
              Tutorial
            </span>
          </div>
        </div>
    </Modal>
  )
}

