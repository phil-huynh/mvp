import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var ConstructionFindStructures = ({showConstructionFindStructures, handleConstructionFindStructuresWindow, handleNavChoice}) => {

  return (
    <Modal
      className='construction'
      show={showConstructionFindStructures}
      onHide={() => {handleConstructionFindStructuresWindow()}}
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
          onClick={(e)=>{handleConstructionFindStructuresWindow()}}
        >
          <div className="sorry targetNoteTutorial">Sorry!</div>
          <div className="upper_construction_message">The <span className="sorry_label toggle_on">Find Structures</span> feature is in development and is not yet ready for general use. This feature will be coming soon. Please check back again. This site is frequently updated.</div>
          <div className="middle_construction_message">When available, this feature will allow the you to identify unknown chords or scales that you are playing by inputting them on the neck. It will identify chords and scales as well a provide alternative options and suggestions for related structures. Updates will be coming soon.</div>
          <div className="bottom_construction_message">In the meantime, try one of these currently available features.</div>
          <div className='construction_options'>
          <span
              title="mapChords"
              className='construction_choice toggle_on'
              onClick={(e)=>{handleNavChoice(e)}}
              >
              Map Chords
            </span>
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

export default ConstructionFindStructures;