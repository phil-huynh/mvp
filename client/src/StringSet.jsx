import React from 'react';
import { String } from './String.jsx';
import { useStoreContext } from '../StoreContext.js'

export const StringSet = ()  => {

  const {currentStrings, currentStringsMirror, view} = useStoreContext()
  let list = []
  let neckClass;
  let firstString;
  let lastString;
  (view==='Mirror View' || view==='Lefty Mirror View') ? list = currentStringsMirror : list = currentStrings
  if (list && list.length === 4){neckClass = 'four_string_neck'}
  if (list && list.length === 5){neckClass = 'five_string_neck'}
  if (list && list.length === 6){neckClass = 'six_string_neck'}
  console.log("list", list)
  return (

    <div className={`${neckClass}`}>
      {list ? list.map((string, i) => {
        i === 0 ? firstString = true : firstString = false
        i === list.length - 1 ? lastString = true : lastString = false
        return (
          <String
            key={i}
            string={string}
          />
        )
      }): null}
    </div>

  )
}








