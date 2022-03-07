import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var ViewMenu = ({showStringsMenu, handleStringsMenuWindow, handleStringChoice, name}) => {

  const sharp = '\u266F';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E';
  const dim = '\u00B0'

  var stringA = `A,G${dblSharp},B${dblFlat}`
  var stringB = `B,C${flat},A${dblSharp}`
  var stringC = `C,B${sharp},D${dblFlat}`
  var stringD = `D,C${dblSharp},E${dblFlat}`
  var stringE = `E,F${flat},D${dblSharp}`
  var stringF = `F,E${sharp},G${dblFlat}`
  var stringG = `G,F${dblSharp},A${dblFlat}`
  var stringFsharp = `F${sharp},G${flat},E${dblSharp}`
  var stringGflat = `F${sharp},G${flat},E${dblSharp}`
  var stringCsharp = `C${sharp},D${flat},B${dblSharp}`
  var stringDflat = `C${sharp},D${flat},B${dblSharp}`
  var stringBflat = `A${sharp},B${flat},C${dblFlat}`
  var stringAsharp = `A${sharp},B${flat},C${dblFlat}`
  var stringEflat = `D${sharp},E${flat},F${dblFlat}`
  var stringDsharp = `D${sharp},E${flat},F${dblFlat}`
  var stringGsharp = `G${sharp},A${flat}`
  var stringAflat = `G${sharp},A${flat}`


  return (
    <Modal
      className='stringsMenuWindow'
      show={showStringsMenu}
      onHide={() => {handleStringsMenuWindow()}}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>
            Choose Instrument and Tuning
          </h2>
        </Modal.Title>
      </Modal.Header>
      <div className={name}>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Guitar. E B G D A E .${stringE}.${stringB}.${stringG}.${stringD}.${stringA}.${stringE}`}>Guitar - Standard</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Guitar. E B G D A D .${stringE}.${stringB}.${stringG}.${stringD}.${stringA}.${stringD}`}>Guitar - Drop D</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Guitar. D B G D A D .${stringD}.${stringB}.${stringG}.${stringD}.${stringA}.${stringD}`}>Guitar - Double Drop D</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Guitar. D B G D G D .${stringD}.${stringB}.${stringG}.${stringD}.${stringG}.${stringD}`}>Guitar - Open G</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Guitar. E C G C A C  .${stringE}.${stringC}.${stringG}.${stringC}.${stringA}.${stringC}`}>Guitar - Open C6</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Guitar. D A F${sharp} D A D .${stringD}.${stringA}.${stringFsharp}.${stringD}.${stringA}.${stringD}`}>Guitar - Open D</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Ukelele. A E C G .${stringA}.${stringE}.${stringC}.${stringG}`}>Ukelele</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Mandolin. G D A E .${stringG}.${stringD}.${stringA}.${stringE}`}>Mandolin</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`4 String Bass. G D A E .${stringG}.${stringD}.${stringA}.${stringE}`}>4 String Bass</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`5 String Bass. G D A E B .${stringG}.${stringD}.${stringA}.${stringE}.${stringB}`}>5 String Bass</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Violin. E A D G .${stringE}.${stringA}.${stringD}.${stringG}`}>Violin</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Viola. A D G C .${stringA}.${stringD}.${stringG}.${stringC}`}>Viola</div>
        <div className="tuningChoice" onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}} title={`Cello. A D G C .${stringA}.${stringD}.${stringG}.${stringC}`}>Cello</div>
      </div>
    </Modal>
  )
}

export default ViewMenu;