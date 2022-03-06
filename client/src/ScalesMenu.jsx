import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var ScalesMenu = ({showScaleMenu, handleScaleMenuWindow, handleScaleChange}) => {

  const sharp = '\u266F';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E';
  const dim = '\u00B0'

  return (
    <Modal
      className='scaleMenuWindow'
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
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='major'>Major</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='naturalMinor'>Natural Minor</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='harmonicMinor'>Harmonic Minor</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='melodicMinor'>Melodic Minor</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='dorian'>Dorian</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='phrygian'>Phrygian</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='lydian'>Lydian</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='mixolydian'>Mixolydian</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='locrian'>Locrian</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='persian'>Persian</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='double harmonic major'>Double Harmonic Major</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='hungarian gypsy minor'>Hungarian Gypsy Minor</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='romanian major'>Romanian Major</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='romanian minor'>Romanian Minor</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='lydian dominant'>Lydian Dominant</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='ukrainian dorian'>Ukrainian Dorian</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='phrygian dominant'>Phrygian Dominant</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='lydian augmented'>Lydian Augmented</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='locrian natural6'>Locrian #6</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='ionian sharp5'>Ionian #5</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='phrygian dorian'>Phrygian Dorian</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='mixolydian flat13'>Mixolydian b13</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='aeoleon flat5'>Aeoleon b13</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='altered'>Altered Scale</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='gypsy'>Gypsy Scale</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='hungarian major'>Hungarian Major</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='neapolitan major'>Neapolitan Major</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='neapolitan minor'>Neapolitan</div>
      <div
        className="scaleChoice"
        onClick={(e) => {handleScaleChange(e); handleScaleMenuWindow()}}
        title='arabian'>Arabian</div>
    </Modal>
  )
}

export default ScalesMenu;