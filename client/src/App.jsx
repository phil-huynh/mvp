import React, { useState, useEffect } from 'react';
import { StringSet } from './StringSet.jsx'
import { StringsMenu } from './StringsMenu.jsx'
import { TonicMenu } from './TonicMenu.jsx'
import { ScalesMenu } from './ScalesMenu.jsx'
import { ScaleChords } from './ScaleChords.jsx'
import { ViewMenu } from './ViewMenu.jsx'
import { LabelMenu } from './LabelMenu.jsx'
import { Header } from './Header.jsx'
import { NeckDash } from './NeckDash.jsx'
import { MapScalesRender } from './MapScalesRender.jsx'
import { MapChordsRender } from './MapChordsRender.jsx'
import { FretGuide } from './FretGuide.jsx'
import { Tutorial } from './Tutorial.jsx'
import { AlterChordOpt } from './AlterChordOpt.jsx'
import { Welcome } from './Welcome.jsx'
import { ChordCalculator } from './ChordCalculator.jsx'
import { BeginnerNeck } from './BeginnerNeck.jsx'
import { ConstructionFindStructures } from './ConstructionFindStructures.jsx'
import { useStoreContext } from '../StoreContext.js'
import axios from 'axios';


const App = () => {

  const {sharp, flat, dblSharp, dblFlat, natural, dim, getStrings, getDegrees, getScale, getScale2, calcChord1, calcChord2, view, instrument, middle, stringbox, renderView, updatedSharedNotes, currentChordTones, currentChordTones2, defaultType} = useStoreContext()



  const traditional = view === "Traditional View"
  const lefty = view === "Lefty Traditional View"
  const mirror = view === "Mirror View"
  const leftyMirror = view === "Lefty Mirror View"


  useEffect(() => {
    getStrings();
    getDegrees();
    getScale('C', 'major');
    getScale2('C', 'major');
  }, [])

  useEffect(() => {
    updatedSharedNotes()
  }, [calcChord1, calcChord2, currentChordTones, currentChordTones2, defaultType])



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
            <FretGuide
              name ={'guideContainerUpper'}
            />: null
          }
          <div className={`${middle}`}>
            <div className={`${stringbox}`}>
              <StringSet/>
            </div>
          </div>
          {!['Violin', 'Viola', 'Cello'].includes(instrument) ?
            <FretGuide
              name ={'guideContainerLower'}
            />: null
          }
        </div>
      </div>
      {renderView === 'Map Scales' ?
        <div className='map_scales_bottom_render'>
          <MapScalesRender/>
        </div>
        :
        renderView === 'Map Chords' ?
        <MapChordsRender/>
        : renderView === 'Beginner' ?
        <BeginnerNeck/>
        :null
      }
    </div>
  )
}

export default App;

