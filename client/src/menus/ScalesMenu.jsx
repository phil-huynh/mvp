import React from 'react';
import { Modal } from 'react-bootstrap';
import { Constants } from '../../Providers/Constants.js';
import { useStoreContext } from '../../Providers/StoreContext.js';

export const ScalesMenu = () => {

  const {State, Setters, Conditions} = useStoreContext();
  const {sharp, flat, dblSharp, dblFlat, natural, dim, labels, titles} = Constants;
  const {showScaleMenu} = State;
  const {setShowScaleMenu, handleScaleChange} = Setters;

  return (
    <Modal
      className='modalMenu'
      show={showScaleMenu}
      onHide={() => {setShowScaleMenu(false)}}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>
            Choose a Scale Type
          </h2>
        </Modal.Title>
      </Modal.Header>
      {labels.map((label, i) => (
        <div
          key={`${i}${label}`}
          className="modalMenuChoice"
          onClick={(e) => {handleScaleChange(e); setShowScaleMenu(false)}}
          title={titles[i]}>{label}</div>
      ))}
    </Modal>
  )
}

