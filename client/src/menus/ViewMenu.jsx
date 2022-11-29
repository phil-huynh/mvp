import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { useStoreContext } from '../../Providers/StoreContext.js';

export const ViewMenu = () => {

  const {State, Setters, Conditions} = useStoreContext();
  const {showViewMenu} = State;
  const {setShowViewMenu, handleView} = Setters;
  const views = ['Traditional View', 'Mirror View', 'Lefty Traditional View', 'Lefty Mirror View'];

  return (
    <Modal
      className='modalMenu'
      show={showViewMenu}
      onHide={() => {setShowViewMenu(false)}}
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
          key={view}
          className='modalMenuChoice'
          title = {view}
          onClick={(e)=>{handleView(e); setShowViewMenu(false)}}
        >
          {view}
        </div>
      ))
      }
    </Modal>
  )
}

