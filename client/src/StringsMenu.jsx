import React from 'react';

var StringsMenu = ({handleStringChoicen, name})  => {
  const sharp = '\u266F';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';
  const natural = '\u266E';
  const dim = '\u00B0'

  return (
    <span className={name}>
      <select onChange={(e) => {handleStringChoice(e)}}>
        <option selected title="Guitar" value={`E,F${flat},D${dblSharp}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}`}>Guitar - Standard</option>
        <option value={`E,F${flat},D${dblSharp}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}`}>Guitar - Drop D</option>
        <option value={`D,C${dblSharp},E${dblFlat}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}`}>Guitar - Double Drop D</option>
        <option value={`D,C${dblSharp},E${dblFlat}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}`}>Guitar - Open G</option>
        <option value={`E,F${flat},D${dblSharp}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.C,B${sharp},D${dblFlat}.A,G${dblSharp},B${dblFlat}.C,B${sharp},D${dblFlat}`}>Guitar - Open C6</option>
        <option value={`D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.F${sharp},G${flat},E${dblSharp}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}`}>Guitar - Open D</option>
        <option value={`A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}.C,B${sharp},D${dblFlat}.G,F${dblSharp},A${dblFlat}`}>Ukelele</option>
        <option value={`G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}`}>Mandolin</option>
        <option value={`G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}`}>4 String Bass</option>
        <option value={`G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}.B,C${flat},A${dblSharp}`}>5 String Bass</option>
        <option value={`E,F${flat},D${dblSharp}.A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}.G,F${dblSharp},A${dblFlat}`}>Violin</option>
        <option value={`A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}.G,F${dblSharp},A${dblFlat}.C,B${sharp},D${dblFlat}`}>Viola</option>
        <option value={`A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}.G,F${dblSharp},A${dblFlat}.C,B${sharp},D${dblFlat}`}>Cello</option>
      </select>
    </span>
  )
}

export default StringsMenu;