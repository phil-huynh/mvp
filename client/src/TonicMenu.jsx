import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var TonicMenu = ({showTonicMenu, handleTonicMenuWindow, handleTonicChange}) => {

  const sharp = '#';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E'
  const dim = '\u00B0';


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
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title='C'>C</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title='D'>D</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title='E'>E</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title='F'>F</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title='G'>G</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title='A'>A</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title='B'>B</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`B${flat}`}>{`B${flat}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`E${flat}`}>{`E${flat}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`A${flat}`}>{`A${flat}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`D${flat}`}>{`D${flat}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`G${flat}`}>{`G${flat}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`F${sharp}`}>{`F${sharp}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`C${sharp}`}>{`C${sharp}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`G${sharp}`}>{`G${sharp}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`D${sharp}`}>{`D${sharp}`}</div>
      <div
        className='modalMenuChoice'
        onClick={(e) => {handleTonicChange(e); handleTonicMenuWindow()}}
        title={`A${sharp}`}>{`A${sharp}`}</div>
    </Modal>
  )
}

export default TonicMenu;


