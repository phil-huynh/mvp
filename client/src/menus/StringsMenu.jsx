import React from 'react';
import { Modal } from 'react-bootstrap';
import { Constants } from '../../Providers/Constants.js';
import { useStoreContext } from '../../Providers/StoreContext.js';

export const StringsMenu = ({}) => {

  const {State, Setters, Conditions} = useStoreContext();
  const {sharp, flat, dblSharp, dblFlat, natural, dim, tunings} = Constants;
  const {showStringsMenu} = State;
  const {setShowStringsMenu, handleStringChoice} = Setters;

  return (
    <Modal
      className='modalMenu'
      show={showStringsMenu}
      onHide={() => {setShowStringsMenu(false)}}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2> Choose Instrument and Tuning </h2>
        </Modal.Title>
      </Modal.Header>
      <div className='stringsMenu'>
        {tunings.map((tuning, i) => (
          <div
            key={`tuning${i}`}
            className="modalMenuChoice"
            onClick={(e) => {handleStringChoice(e); setShowStringsMenu(false)}}
            title={tuning[1][0]}
          >
            {tuning[0]}
          </div>
        ))}
      </div>
    </Modal>
  )
}

