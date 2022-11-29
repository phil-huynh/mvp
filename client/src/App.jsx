import React, { useState, useEffect } from 'react';
import { StringSet } from './neckComponents/StringSet.jsx';
import { StringsMenu } from './menus/StringsMenu.jsx';
import { ViewMenu } from './menus/ViewMenu.jsx';
import { Header } from './dashboards/Header.jsx';
import { NeckDash } from './dashboards/NeckDash.jsx';
import { MapScalesRender } from './mapScalesComponents/MapScalesRender.jsx';
import { MapChordsRender } from './mapChordsComponents/MapChordsRender.jsx';
import { FretGuide } from './neckComponents/FretGuide.jsx';
import { Tutorial } from './messagesAndInfo/Tutorial.jsx';
import { Welcome } from './messagesAndInfo/Welcome.jsx';
import { ConstructionFindStructures } from './messagesAndInfo/ConstructionFindStructures.jsx';
import { useStoreContext } from '../Providers/StoreContext.js';
import { Constants } from '../Providers/Constants.js';


const App = () => {
  const {State, Setters, Conditions} = useStoreContext();

  const {sharp, flat, dblSharp, dblFlat, natural, dim} = Constants;
  const {calcChord1, calcChord2, currentChordTones, currentChordTones2, defaultType, renderView, instrument} = State;
  const {getStrings, getDegrees, getScale, updateSharedNotes} = Setters;
  const {mapChords, mapScales, lefty} = Conditions;

  useEffect(() => {
    getStrings();
    getDegrees();
    getScale('C', 'major');
  }, [])

  useEffect(() => {
    updateSharedNotes();
  }, [calcChord1, calcChord2, currentChordTones, currentChordTones2, defaultType, renderView])


  let [middle, stringbox] = ['inner_middle', 'stringbox'];
  if (lefty) {
    [middle, stringbox] = ['inner_middle_left', 'stringbox_left'];
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

