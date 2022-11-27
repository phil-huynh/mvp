import React from 'react'
import { Modal } from 'react-bootstrap'
import { useStoreContext } from '../StoreContext.js'

export const TonicMenu = () => {

  const {sharp, flat, dblSharp, dblFlat, natural, dim, showTonicMenu, handleTonicMenuWindow, handleTonicChange} = useStoreContext()

  const tonics = ['C', 'D', 'E', 'F', 'G', 'A', 'B', `B${flat}`, `E${flat}`, `A${flat}`, `D${flat}`, `G${flat}`, `F${sharp}`, `C${sharp}`, `G${sharp}`, `D${sharp}`, `A${sharp}`]

  return (
    <Modal
      className='modalMenu'
      show={showTonicMenu}
      onHide={() => {handleTonicMenuWindow()}}
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
          onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
          title={tonic}>{tonic}</div>
      ))}
    </Modal>
  )
}




