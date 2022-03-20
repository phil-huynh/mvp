import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var ViewMenu = ({showStringsMenu, handleStringsMenuWindow, handleStringChoice, name}) => {

const sharp = '#';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E';
const dim = '\u00B0';

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
      className='modalMenu'
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
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. E A D G B E .${stringE}.${stringB}.${stringG}.${stringD}.${stringA}.${stringE}`}>Guitar - Standard</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. E${flat} A${flat} D${flat} G${flat} B${flat} E${flat} .${stringEflat}.${stringBflat}.${stringGflat}.${stringDflat}.${stringAflat}.${stringEflat}`}>Guitar - E flat Standard</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. D A D G B E .${stringE}.${stringB}.${stringG}.${stringD}.${stringA}.${stringD}`}>Guitar - Drop D</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. D A D G B D .${stringD}.${stringB}.${stringG}.${stringD}.${stringA}.${stringD}`}>Guitar - Double Drop D</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. C G C F A D .${stringD}.${stringA}.${stringF}.${stringC}.${stringG}.${stringC}`}>Guitar - Drop C</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. B F${sharp} B E G${sharp} C${sharp} .${stringCsharp}.${stringGsharp}.${stringE}.${stringB}.${stringFsharp}.${stringB}`}>Guitar - Drop B</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. A E A D F${sharp} B .${stringB}.${stringFsharp}.${stringD}.${stringA}.${stringE}.${stringA}`}>Guitar - Drop A</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. D G D G B D .${stringD}.${stringB}.${stringG}.${stringD}.${stringG}.${stringD}`}>Guitar - Open G</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. E B E G${sharp} B E .${stringE}.${stringB}.${stringGsharp}.${stringE}.${stringB}.${stringE}`}>Guitar - Open E</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. E A E A C${sharp} E .${stringE}.${stringCsharp}.${stringA}.${stringE}.${stringA}.${stringE}`}>Guitar - Open A</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. C A C G C E .${stringE}.${stringC}.${stringG}.${stringC}.${stringA}.${stringC}`}>Guitar - Open C6</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. D A D F${sharp} A D .${stringD}.${stringA}.${stringFsharp}.${stringD}.${stringA}.${stringD}`}>Guitar - Open D</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. D A D F A D .${stringD}.${stringA}.${stringF}.${stringD}.${stringA}.${stringD}`}>Guitar - Open D Minor</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. D A D G A D .${stringD}.${stringA}.${stringG}.${stringD}.${stringA}.${stringD}`}>Guitar - DADGAD</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Guitar. D G C G C D .${stringD}.${stringC}.${stringG}.${stringC}.${stringG}.${stringD}`}>Guitar - DGCGCD(Rain Song)</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Ukelele. G C E A .${stringA}.${stringE}.${stringC}.${stringG}`}>Ukelele</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Mandolin. E A D G .${stringG}.${stringD}.${stringA}.${stringE}`}>Mandolin</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`4 String Bass. E A G D .${stringG}.${stringD}.${stringA}.${stringE}`}>4 String Bass</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`5 String Bass. B E A D G .${stringG}.${stringD}.${stringA}.${stringE}.${stringB}`}>5 String Bass BEADG</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`5 String Bass. E A D G C .${stringC}.${stringG}.${stringD}.${stringA}.${stringE}`}>5 String Bass EADGC</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`6 String Bass. B E A D G C .${stringC}.${stringG}.${stringD}.${stringA}.${stringE}.${stringB}`}>6 String Bass BEADGC</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Violin. G D A E .${stringE}.${stringA}.${stringD}.${stringG}`}>Violin</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Viola. C G D A .${stringA}.${stringD}.${stringG}.${stringC}`}>Viola</div>
        <div
          className="modalMenuChoice"
          onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
          title={`Cello. C G D A .${stringA}.${stringD}.${stringG}.${stringC}`}>Cello</div>
      </div>
    </Modal>
  )
}

export default ViewMenu;