import React, { useState, useEffect } from 'react';
import { StringSet } from './StringSet.jsx'
import { StringsMenu } from './StringsMenu.jsx'
import { ViewMenu } from './ViewMenu.jsx'
import { Header } from './Header.jsx'
import { NeckDash } from './NeckDash.jsx'
import { MapScalesRender } from './MapScalesRender.jsx'
import { MapChordsRender } from './MapChordsRender.jsx'
import { FretGuide } from './FretGuide.jsx'
import { Tutorial } from './Tutorial.jsx'
import { Welcome } from './Welcome.jsx'
import { ConstructionFindStructures } from './ConstructionFindStructures.jsx'
import { useStoreContext } from '../StoreContext.js'
import { Constants } from '../Constants.js'


const App = () => {
  const {State, Setters, Conditions} = useStoreContext()

  const {sharp, flat, dblSharp, dblFlat, natural, dim} = Constants
  const {calcChord1, calcChord2, instrument, currentChordTones, currentChordTones2, defaultType, renderView} = State
  const {getStrings, getDegrees, getScale, updateSharedNotes} = Setters
  const {mapChords, mapScales, lefty} = Conditions

  useEffect(() => {
    getStrings();
    getDegrees();
    getScale('C', 'major');
  }, [])

  useEffect(() => {
    updateSharedNotes()
  }, [calcChord1, calcChord2, currentChordTones, currentChordTones2, defaultType, renderView])


  let [middle, stringbox] = ['inner_middle', 'stringbox']
  if (lefty) {
    [middle, stringbox] = ['inner_middle_left', 'stringbox_left']
  }

  return (
    <div className = "page">
      <div className="top">
        <Header/>
        <Welcome/>
        <ConstructionFindStructures/>
        <Tutorial/>
      </div>
        <ViewMenu/>
        <StringsMenu/>
      <div className="neckDash">
        <NeckDash/>
      </div>
      <div className="middle">
        <div className="neckComponent">
          {!['Violin', 'Viola', 'Cello'].includes(instrument) ?
            <FretGuide name={'guideContainerUpper'}/> : null
          }
          <div className={`${middle}`}>
            <div className={`${stringbox}`}>
              <StringSet/>
            </div>
          </div>
          {!['Violin', 'Viola', 'Cello'].includes(instrument) ?
            <FretGuide name={'guideContainerLower'}/> : null
          }
        </div>
      </div>
      {mapScales ?
        <div className='map_scales_bottom_render'>
          <MapScalesRender/>
        </div>
        :
        mapChords ?
        <MapChordsRender/>
        :null
      }
    </div>
  )
}

export default App;

