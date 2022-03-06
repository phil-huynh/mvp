
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var ViewMenu = ({showViewMenu, handleViewMenuWindow, handleView}) => {

  var views = ['Traditional View', 'Mirror View', 'Lefty Traditional View', 'Lefty Mirror View']

  return (
    <Modal
      className='viewMenuWindow'
      show={showViewMenu}
      onHide={() => {handleViewMenuWindow()}}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>
            Choose Neck View
          </h2>
        </Modal.Title>
      </Modal.Header>
      {views.map((view) => (
        <div
          className='viewChoice'
          title = {view}
          onClick={(e)=>{handleView(e); handleViewMenuWindow()}}
        >
          {view}
        </div>
      ))
      }

    </Modal>
  )
}

export default ViewMenu;