import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var Welcome = ({showWelcome, handleWelcomeWindow, handleNavChoice}) => {

  return (
    <Modal
      className='welcome'
      show={showWelcome}
      backdrop="static"
      onHide={() => {handleWelcomeWindow()}}
    >
      <Modal.Header


      >
        <Modal.Title>
          <h2>
            A Message from Strings Theory
          </h2>
        </Modal.Title>
      </Modal.Header>
        <div
          className='welcome_message'
        >
          <div className="welcome_header toggle_on">Welcome to Strings Theory!</div>
          <div className="upper_welcome_message">The intent of this app is to be a tool that strings players of all skill levels can use to continue to grow and find new sounds. Players can explore new scales or tunings that they have not used before or they can study structures that they already use in greater depth. New features, tunings, scales, and techniques will be added to the app frequently. </div>
          <div className="middle_welcome_message">This app is currenly still in development with some finished features ready to use. There are tons of exciting features on the horizon. I hope you enjoy the currenly available features. Some upcoming features include modulation tools, modal interchange chords, two-five structures, common cadences, chromatic mediants, preset progressions, savable user progressions, savable user preferences, a songwriting tool, a beginner mode, and so much more.</div>
          <div className="bottom_welcome_message">In the meantime, try one of these currently available features.</div>
          <div className='construction_options'>
            <span
              title="mapChords"
              className='construction_choice toggle_on'
              onClick={(e)=>{handleNavChoice(e); handleWelcomeWindow()}}
              >
              Map Chords
            </span>
            <span
              title="mapScales"
              className='construction_choice toggle_on'
              onClick={(e)=>{handleNavChoice(e); handleWelcomeWindow()}}
              >
              Map Scales
            </span>
            <span
              title="tutorial"
              className='construction_choice toggle_on'
              onClick={(e)=>{handleNavChoice(e); handleWelcomeWindow()}}
            >
              Tutorial
            </span>
          </div>
        </div>
    </Modal>
  )
}

export default Welcome;