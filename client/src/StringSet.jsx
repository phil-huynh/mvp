import React from 'react';
import { String } from './String.jsx';
import { useStoreContext } from '../StoreContext.js'

export const StringSet = ()  => {

  const {State, Setters, Conditions} = useStoreContext()

  const {currentStrings, currentStringsMirror, view} = State
  const {mirrorViews} = Conditions

  let [list, neckClass, firstString, lastString] = [[], '', '', '']

  mirrorViews ? list = currentStringsMirror : list = currentStrings
  if (list && list.length === 4){neckClass = 'four_string_neck'}
  if (list && list.length === 5){neckClass = 'five_string_neck'}
  if (list && list.length === 6){neckClass = 'six_string_neck'}

  return (

    <div className={`${neckClass}`}>
      {list ? list.map((string, i) => {
        i === 0 ? firstString = true : firstString = false
        i === list.length - 1 ? lastString = true : lastString = false
        return (
          <String
            key={i}
            string={string}
            // firstString={firstString}
            // lastString={lastString}
          />
        )
      }): null}
    </div>

  )
}








