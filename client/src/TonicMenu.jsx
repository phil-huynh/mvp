import React from 'react';

var TonicMenu = ({name, handleTonicChange})  => {
  const sharp = '\u266F';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';

  return (
    <span className={name}>
      <select onChange={(e) => {handleTonicChange(e)}}>
        <option selected value='C'>C</option>
        <option value='D'>D</option>
        <option value='E'>E</option>
        <option value='F'>F</option>
        <option value='G'>G</option>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value={`B${flat}`}>{`B${flat}`}</option>
        <option value={`E${flat}`}>{`E${flat}`}</option>
        <option value={`A${flat}`}>{`A${flat}`}</option>
        <option value={`D${flat}`}>{`D${flat}`}</option>
        <option value={`G${flat}`}>{`G${flat}`}</option>
        <option value={`C${flat}`}>{`C${flat}`}</option>
        <option value={`F${flat}`}>{`F${flat}`}</option>
        <option value={`B${dblFlat}`}>{`B${dblFlat}`}</option>
        <option value={`E${dblFlat}`}>{`E${dblFlat}`}</option>
        <option value={`A${dblFlat}`}>{`A${dblFlat}`}</option>
        <option value={`D${dblFlat}`}>{`D${dblFlat}`}</option>
        <option value={`F${sharp}`}>{`F${sharp}`}</option>
        <option value={`C${sharp}`}>{`C${sharp}`}</option>
        <option value={`G${sharp}`}>{`G${sharp}`}</option>
        <option value={`D${sharp}`}>{`D${sharp}`}</option>
        <option value={`A${sharp}`}>{`A${sharp}`}</option>
        <option value={`E${sharp}`}>{`E${sharp}`}</option>
        <option value={`B${sharp}`}>{`B${sharp}`}</option>
      </select>
    </span>
  )
}

export default TonicMenu;