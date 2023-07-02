import React from 'react';
import { Modal } from 'react-bootstrap';
import { useStoreContext } from '../../Providers/StoreContext.js';
import { Constants } from '../../Providers/Constants.js';

export const TonicMenu = () => {

  const {State, Setters, Conditions} = useStoreContext();
  const {tonics} = Constants;
  const {showTonicMenu, scaleType} = State;
  const {setShowTonicMenu, getScale} = Setters;

  return (
    <Modal
      className='modalMenu'
      show={showTonicMenu}
      onHide={() => {setShowTonicMenu(false)}}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>
            Choose a Tonic
          </h2>
        </Modal.Title>
      </Modal.Header>
      {tonics.map((tonic) => (
        <div
          key={tonic}
          className='modalMenuChoice'
          onClick={(e) => {getScale(e.target.title, scaleType); setShowTonicMenu(false)}}
          title={tonic}>{tonic}</div>
      ))}
    </Modal>
  )
}




