import React from 'react'
import { Modal } from 'react-bootstrap'
import { Constants } from '../Constants.js'
import { useStoreContext } from '../StoreContext.js'

export const ScalesMenu = () => {

  const {State, Setters, Conditions} = useStoreContext()
  const {sharp, flat, dblSharp, dblFlat, natural, dim, labels, titles} = Constants
  const {showScaleMenu} = State
  const {handleScaleMenuWindow, handleScaleChange} = Setters

  return (
    <Modal
      className='modalMenu'
      show={showScaleMenu}
      onHide={() => {handleScaleMenuWindow()}}
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
          onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
          title={titles[i]}>{label}</div>
      ))}
    </Modal>
  )
}

