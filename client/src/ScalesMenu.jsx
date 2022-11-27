import React from 'react'
import { Modal } from 'react-bootstrap'
import { useStoreContext } from '../StoreContext.js'

export const ScalesMenu = () => {

  const {sharp, flat, dblSharp, dblFlat, natural, dim, showScaleMenu, handleScaleMenuWindow, handleScaleChange} = useStoreContext()

  const titles = ['major','naturalMinor','harmonicMinor','melodicMinor','dorian','phrygian','lydian','mixolydian','locrian','persian','double harmonic major','hungarian gypsy minor','romanian major','romanian minor','lydian dominant','ukrainian dorian','phrygian dominant','lydian augmented','locrian natural6','ionian sharp5','phrygian dorian','mixolydian flat13','aeoleon flat5','altered','gypsy','hungarian major','neapolitan major','neapolitan minor',
  'arabian']
  const labels = ['Major','Natural Minor','Harmonic Minor','Melodic Minor','Dorian','Phrygian','Lydian','Mixolydian','Locrian','Persian','Double Harmonic Major','Hungarian Gypsy Minor','Romanian Major','Romanian Minor','Lydian Dominant','Ukrainian Dorian','Phrygian Dominant','Lydian Augmented','Locrian #6','Ionian #5','Phrygian Dorian','Mixolydian b13','Aeoleon b13','Altered Scale','Gypsy Scale','Hungarian Major','Neapolitan Major','Neapolitan Minor','Arabian']

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

