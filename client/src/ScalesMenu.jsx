import React from 'react';

var ScalesMenu = ({name, handleScaleChange})  => {
  const sharp = '\u266F';
  const flat = '\u266D';
  const dblSharp = '\u{1D12A}';
  const dblFlat = '\u{1D12B}';

  return (
    <span className="scale_options_left">
    <select onChange={(e) => {handleScaleChange(e)}}>
      <option selected value='major'>Major</option>
      <option value='naturalMinor'>Natural Minor</option>
      <option value='harmonicMinor'>Harmonic Minor</option>
      <option value='melodicMinor'>Melodic Minor</option>
      <option value='dorian'>Dorian</option>
      <option value='phrygian'>Phrygian</option>
      <option value='lydian'>Lydian</option>
      <option value='mixolydian'>Mixolydian</option>
      <option value='locrian'>Locrian</option>
      <option value='persian'>Persian</option>
      <option value='byzantine'>Byzantine</option>
      <option value='hungarian gypsy minor'>Hungarian Gypsy Minor</option>
      <option value='romanian'>Romanian</option>
      <option value='lydian dominant'>Lydian Dominant</option>
      <option value='ukrainian dorian'>Ukrainian Dorian</option>
      <option value='phrygian dominant'>Phrygian Dominant</option>
      <option value='lydian augmented'>Lydian Augmented</option>
      <option value='locrian sharp6'>Locrian #6</option>
      <option value='ionian sharp5'>Ionian #5</option>
      <option value='phrygian dorian'>Phrygian Dorian</option>
      <option value='mixolydian flat13'>Mixolydian b13</option>
      <option value='aeoleon flat5'>Aeoleon b13</option>
      <option value='altered'>Altered Scale</option>
      <option value='gypsy'>Gypsy Scale</option>
      <option value='hungarian major'>Hungarian Major</option>
      <option value='neapolitan major'>Neapolitan Major</option>
      <option value='neapolitan minor'>Neapolitan</option>
      <option value='arabian'>Arabian</option>
      <option value='javanese'>Javanese</option>
    </select>
  </span>
  )
}

export default ScalesMenu;