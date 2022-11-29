import React from 'react'
import { Modal } from 'react-bootstrap'
import { useStoreContext } from '../../Providers/StoreContext.js'
import { Constants } from '../../Providers/Constants.js'

export const AlterChordOpt = () => {

  const {State, Setters, Conditions} = useStoreContext()
  const {sharp, flat, dblSharp, dblFlat, natural, dim } = Constants
  const {showAlter, currentList, chordOptRoot} = State
  const {handleAlterChordWindow, handleAlterChord } = Setters

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
          {chordOptRoot}{choice[0]}
        </div>
      )):  null
      }

    </Modal>
  )
}
