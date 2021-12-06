import React from 'react';
var Dropdown = ({title, optionsArr, onChange, disabled = false}) => {
  var count = -1;
  return (
    <>
      <select disabled={disabled} key={title} className={title} id={title} onChange={onChange}>
        {optionsArr.map((option) => {
          count++;
          return <option key={option + count} value={option}>{option}</option>
        })}
      </select>
    </>
  )

}
export default Dropdown;