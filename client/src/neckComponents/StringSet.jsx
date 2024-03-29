import React from 'react';
import { String } from './String.jsx';
import { useStoreContext } from '../../Providers/StoreContext.js';

export const StringSet = ()  => {

  const {State, Setters, Conditions} = useStoreContext();
  const {currentStrings, currentStringsMirror, view} = State;
  const {mirrorViews} = Conditions;

  let neckClass;

  const list = mirrorViews ? currentStringsMirror : currentStrings
  if (list && list.length === 4) neckClass = 'four_string_neck';
  if (list && list.length === 5) neckClass = 'five_string_neck';
  if (list && list.length === 6) neckClass = 'six_string_neck';

  return (

    <div className={`${neckClass}`}>
      {list && list.map((string, i) => (
          <String
            key={i}
            string={string}
          />
      ))}
    </div>

  )
}








