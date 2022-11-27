import React from 'react'
import { Modal } from 'react-bootstrap'
import { useStoreContext } from '../StoreContext.js'

export const AlterChordOpt = () => {

  const {sharp, flat, dblSharp, dblFlat, natural, dim, showAlter, handleAlterChordWindow, handleAlterChord, currentList, root} = useStoreContext()

  return (
    <Modal
      className='modalMenu'
      show={showAlter}
      onHide={() => {handleAlterChordWindow()}}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>
            Choose Diatonic Structure
          </h2>
        </Modal.Title>
      </Modal.Header>
      {currentList ? currentList.map((choice) => (
        <div
          key={choice}
          className='modalMenuChoice'
          title={choice[1]}
          onClick={(e)=>{handleAlterChord(e); handleAlterChordWindow()}}
        >
          {root}{choice[0]}
        </div>
      )):  null
      }

    </Modal>
  )
}
