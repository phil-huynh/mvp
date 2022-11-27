import React from 'react'
import { Modal } from 'react-bootstrap'
import { useStoreContext } from '../StoreContext.js'

export const StringsMenu = ({}) => {

  const { sharp, flat, dblSharp, dblFlat, natural, dim, showStringsMenu, handleStringsMenuWindow, handleStringChoice, name } = useStoreContext()

  const stringA = `A,G${dblSharp},B${dblFlat}`;
  const stringB = `B,C${flat},A${dblSharp}`;
  const stringC = `C,B${sharp},D${dblFlat}`;
  const stringD = `D,C${dblSharp},E${dblFlat}`;
  const stringE = `E,F${flat},D${dblSharp}`;
  const stringF = `F,E${sharp},G${dblFlat}`;
  const stringG = `G,F${dblSharp},A${dblFlat}`;
  const stringFsharp = `F${sharp},G${flat},E${dblSharp}`;
  const stringGflat = `F${sharp},G${flat},E${dblSharp}`;
  const stringCsharp = `C${sharp},D${flat},B${dblSharp}`;
  const stringDflat = `C${sharp},D${flat},B${dblSharp}`;
  const stringBflat = `A${sharp},B${flat},C${dblFlat}`;
  const stringAsharp = `A${sharp},B${flat},C${dblFlat}`;
  const stringEflat = `D${sharp},E${flat},F${dblFlat}`;
  const stringDsharp = `D${sharp},E${flat},F${dblFlat}`;
  const stringGsharp = `G${sharp},A${flat},F${dblSharp}${sharp}`;
  const stringAflat = `G${sharp},A${flat},F${dblSharp}${sharp}`;

  const tunings = [
    ['Guitar - Standard', [`Guitar. E A D G B E .${stringE}.${stringB}.${stringG}.${stringD}.${stringA}.${stringE}`]],
    ['Guitar - Drop D ', [`Guitar. D A D G B E .${stringE}.${stringB}.${stringG}.${stringD}.${stringA}.${stringD}`]],
    ['Guitar - Double Drop D', [`Guitar. D A D G B D .${stringD}.${stringB}.${stringG}.${stringD}.${stringA}.${stringD}`]],
    ['Guitar - Drop C', [`Guitar. C G C F A D .${stringD}.${stringA}.${stringF}.${stringC}.${stringG}.${stringC}`]],
    ['Guitar - Drop B', [`Guitar. B F${sharp} B E G${sharp} C${sharp} .${stringCsharp}.${stringGsharp}.${stringE}.${stringB}.${stringFsharp}.${stringB}`]],
    ['Guitar - Drop A', [`Guitar. A E A D F${sharp} B .${stringB}.${stringFsharp}.${stringD}.${stringA}.${stringE}.${stringA}`]],
    ['Guitar - Open G', [`Guitar. D G D G B D .${stringD}.${stringB}.${stringG}.${stringD}.${stringG}.${stringD}`]],
    ['Guitar - Open E', [`Guitar. E B E G${sharp} B E .${stringE}.${stringB}.${stringGsharp}.${stringE}.${stringB}.${stringE}`]],
    ['Guitar - Open A', [`Guitar. E A E A C${sharp} E .${stringE}.${stringCsharp}.${stringA}.${stringE}.${stringA}.${stringE}`]],
    ['Guitar - Open C6', [`Guitar. C A C G C E .${stringE}.${stringC}.${stringG}.${stringC}.${stringA}.${stringC}`]],
    ['Guitar - Open D', [`Guitar. D A D F${sharp} A D .${stringD}.${stringA}.${stringFsharp}.${stringD}.${stringA}.${stringD}`]],
    ['Guitar - Open D Minor', [`Guitar. D A D F A D .${stringD}.${stringA}.${stringF}.${stringD}.${stringA}.${stringD}`]],
    ['Guitar - DADGAD', [`Guitar. D A D G A D .${stringD}.${stringA}.${stringG}.${stringD}.${stringA}.${stringD}`]],
    ['Guitar - DGCGCD(Rain Song)', [`Guitar. D G C G C D .${stringD}.${stringC}.${stringG}.${stringC}.${stringG}.${stringD}`]],
    ['Ukelele', [`Ukelele. G C E A .${stringA}.${stringE}.${stringC}.${stringG}`]],
    ['Mandolin', [`Mandolin. E A D G .${stringG}.${stringD}.${stringA}.${stringE}`]],
    ['4 String Bass', [`Bass. E A G D .${stringG}.${stringD}.${stringA}.${stringE}`]],
    ['5 String Bass BEADG', [`Bass. B E A D G .${stringG}.${stringD}.${stringA}.${stringE}.${stringB}`]],
    ['5 String Bass EADGC', [`Bass. E A D G C .${stringC}.${stringG}.${stringD}.${stringA}.${stringE}`]],
    ['6 String Bass BEADGC', [`Bass. B E A D G C .${stringC}.${stringG}.${stringD}.${stringA}.${stringE}.${stringB}`]],
    ['Violin', [`Violin. G D A E .${stringE}.${stringA}.${stringD}.${stringG}`]],
    ['Viola', [`Viola. C G D A .${stringA}.${stringD}.${stringG}.${stringC}`]]
  ];

  return (
    <Modal
      className='modalMenu'
      show={showStringsMenu}
      onHide={() => {handleStringsMenuWindow()}}
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
            onClick={(e) => {handleStringChoice(e); handleStringsMenuWindow()}}
            title={tuning[1][0]}
          >
            {tuning[0]}
          </div>
        ))}
      </div>
    </Modal>
  )
}

