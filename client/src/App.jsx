import React from 'react';
import StringSet from './StringSet.jsx'
import StringsMenu from './StringsMenu.jsx'
import TonicMenu from './TonicMenu.jsx'
import ScalesMenu from './ScalesMenu.jsx'
import ScaleChords from './ScaleChords.jsx'
import ViewMenu from './ViewMenu.jsx'
import LabelMenu from './LabelMenu.jsx'
import Header from './Header.jsx'
import NeckDash from './NeckDash.jsx'
import MapScalesRender from './MapScalesRender.jsx'
import MapChordsRender from './MapChordsRender.jsx'
import Dropdown from './Dropdown.jsx'
import FretGuide from './FretGuide.jsx'
import AlterChordOpt from './AlterChordOpt.jsx'
import axios from 'axios';

const sharp = '\u266F';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E';
const dim = '\u00B0'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ch0: 'Triad',
      ch1: 'Triad',
      ch2: 'Triad',
      ch3: 'Triad',
      ch4: 'Triad',
      ch5: 'Triad',
      ch6: 'Triad',
      ch0Alt: false,
      ch1Alt: false,
      ch2Alt: false,
      ch3Alt: false,
      ch4Alt: false,
      ch5Alt: false,
      ch6Alt: false,
      choices: [],
      chords: {},
      chords2: {},
      chordDegrees: {},
      chordDegButtonClass: 'chordDegButton',
      chordOneSelected: false,
      chordOptRoot: '',
      chordTwoSelected: false,
      chordTypes: {},
      chordFocus: 'Neutral',
      currentCard: '',
      compare: false,
      currentChordTones: [],
      currentChordTones2: [],
      currentList: '',
      currentStrings: [`E,F${flat},D${dblSharp}`, `B,C${flat},A${dblSharp}`, `G,F${dblSharp},A${dblFlat}`, `D,C${dblSharp},E${dblFlat}`, `A,G${dblSharp},B${dblFlat}`, `E,F${flat},D${dblSharp}`],
      currentStringsMirror: [`E,F${flat},D${dblSharp}`, `A,G${dblSharp},B${dblFlat}`, `D,C${dblSharp},E${dblFlat}`, `G,F${dblSharp},A${dblFlat}`, `B,C${flat},A${dblSharp}`, `E,F${flat},D${dblSharp}`],
      defaultType: 'Triads',
      displayChordDegrees: false,
      findChordsToggle: 'navOption',
      findScalesToggle: 'navOption',
      hideScale: 'Show Scale',
      hideScaleButton: 'hide scale',
      instrument: 'Guitar',
      keyCenter: {},
      keyCenter2: {},
      labelType: 'Note Names',
      mapChordsToggle: 'navOption',
      mapScalesToggle: 'navOption toggle_on',
      middle: 'inner_middle',
      moreSeventhsButton: 'Show 7th Chords',
      noteNameToggle: 'toggle_on',
      renderView: 'Map Scales',
      scale: [],
      scale2: [],
      scaleDegrees: {},
      scaleDegreeToggle: 'toggle_off',
      scaleHiddenLabel: 'Hide Scale',
      scaleHiddenToggle: 'toggle_off',
      scaleName:'Major',
      scaleType:'major',
      scaleType2: 'major',
      scaleUnfocusedToggle: 'toggle_off',
      scaleVisibleLabel: 'Scale Visible',
      scaleUnfocusedLabel: 'Unfocus Scale',
      scaleVisibleToggle: 'toggle_on',
      second: false,
      secondButton: 'Compare a scale',
      selectedChord:{},
      selectedChord2:{},
      settingsToggle: 'navOption',
      sevenths: false,
      sevenths2: false,
      sharedNotes: [],
      showAlter: false,
      showScaleMenu: false,
      showStringsMenu: false,
      showTonicMenu: false,
      showViewMenu: false,
      singleOrCompareButton: 'Single Chord',
      solfege: {},
      solfegeToggle: 'toggle_off',
      strings: {},
      stringbox: 'stringbox',
      stringsLeft: {},
      tonic: '',
      tonic2: '',
      tuning: ' E A D G B E ',
      tutorialToggle: 'navOption',
      view: 'Traditional View',

    }

    this.getChordTypes = this.getChordTypes.bind(this)
    this.getChoices = this.getChoices.bind(this)
    this.getDegrees = this.getDegrees.bind(this);
    this.getScale = this.getScale.bind(this);
    this.getScale2 = this.getScale2.bind(this);
    this.getStrings = this.getStrings.bind(this);
    this.handleAlterChord = this.handleAlterChord.bind(this);
    this.handleAlterChordWindow = this.handleAlterChordWindow.bind(this);
    this.handleViewMenuWindow = this.handleViewMenuWindow.bind(this);
    this.handleTonicMenuWindow = this.handleTonicMenuWindow.bind(this);
    this.handleScaleMenuWindow = this.handleScaleMenuWindow.bind(this);
    this.handleStringsMenuWindow = this.handleStringsMenuWindow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChordFocus = this.handleChordFocus.bind(this);
    this.handleChordDegrees = this.handleChordDegrees.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleMoreSevenths = this.handleMoreSevenths.bind(this);
    this.handleNavChoice = this.handleNavChoice.bind(this);
    this.handleNeckNotes = this.handleNeckNotes.bind(this);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleScaleChange2 = this.handleScaleChange2.bind(this);
    this.handleSecondScale = this.handleSecondScale.bind(this);
    this.handleSevenths = this.handleSevenths.bind(this);
    this.handleSingleOrCompare = this.handleSingleOrCompare.bind(this);
    this.handleStringChoice = this.handleStringChoice.bind(this);
    this.handleTonicChange = this.handleTonicChange.bind(this);
    this.handleTonicChange2 = this.handleTonicChange2.bind(this);
    this.handleView = this.handleView.bind(this);
    this.resetAll = this.resetAll.bind(this)
    this.resetCard = this.resetCard.bind(this)
    this.resetChords = this.resetChords.bind(this)
    this.selectChord = this.selectChord.bind(this);
    this.selectChord2 = this.selectChord2.bind(this);
    this.setTones = this.setTones.bind(this);
    this.setTones2 = this.setTones2.bind(this);
  }

  componentDidMount () {
    this.getStrings();
    this.getDegrees();
    this.getScale('C', 'major')
    this.getScale2('C', 'major')
    this.getChordTypes()
  }

  getChoices () {
    axios.get('/choices')
      .then((res) => {
        this.setState({
          choices: res.data
        })
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 29 ~ App ~ getStrings ~ err", err)
      })
  }

  getChordTypes () {
    axios.get('/chordtypes')
      .then((res) => {
        this.setState({
          chordTypes: res.data
        })
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 166 ~ App ~ getChordTypes ~ err", err)
      })
  }

  getDegrees () {
    axios.get('/degrees')
      .then((res) => {
        this.setState({
          solfege: res.data.solfege,
          scaleDegrees: res.data.scaleDegrees,
          chordDegrees: res.data.chordDegrees
        })
      })
      .catch((err) => {
      console.log("🚀 ~ file: App.jsx ~ line 85 ~ App ~ getDegrees ~ err", err)
      })
  }

  getScale (key, scale) {
    this.resetAll()
    axios.get('/scales', { params: { key: key, scale: scale } })
      .then((res) => {
        this.setState({
          keyCenter: res.data,
          tonic: res.data.tonic,
          scale: res.data.scale,
          chords: res.data.chords,
        })
      })
  }

  getScale2 (key, scale) {
    axios.get('/scales', { params: { key: key, scale: scale } })
      .then((res) => {
        this.setState({
          keyCenter2: res.data,
          tonic2: res.data.tonic,
          scale2: res.data.scale,
          chords2: res.data.chords
        })
      })
  }

  getStrings () {
    axios.get('/strings')
    .then((res) => {
      this.setState({
        strings: res.data.right,
        stringsLeft: res.data.left
      })
    })
    .catch((err) => {
      console.log("🚀 ~ file: App.jsx ~ line 29 ~ App ~ getStrings ~ err", err)
    })
  }

  handleAlterChord (e) {
    let type = e.target.title
    let typeKey = this.state.currentCard
    let alterKey = `${typeKey}Alt`
    this.setState({
      [typeKey]: type,
      [alterKey]: true
    })
  }

  handleAlterChordWindow (chord, list, root) {
    if(this.state.showAlter===false) {
      this.setState({
        showAlter: true,
        currentCard: chord,
        currentList: list,
        chordOptRoot: root
      })
    }
    if(this.state.showAlter===true) {
      this.setState({
        showAlter: false,
        currentCard: '',
        currentList: '',
        chordOptRoot: ''
      })
    }
  }

  handleViewMenuWindow () {
    if(this.state.showViewMenu===false) {
      this.setState({
        showViewMenu: true,
      })
    }
    if(this.state.showViewMenu===true) {
      this.setState({
        showViewMenu: false,
      })
    }
  }

  handleTonicMenuWindow () {
    if(this.state.showTonicMenu===false) {
      this.setState({
        showTonicMenu: true,
      })
    }
    if(this.state.showTonicMenu===true) {
      this.setState({
        showTonicMenu: false,
      })
    }
  }

  handleScaleMenuWindow () {
    if(this.state.showScaleMenu===false) {
      this.setState({
        showScaleMenu: true,
      })
    }
    if(this.state.showScaleMenu===true) {
      this.setState({
        showScaleMenu: false,
      })
    }
  }

  handleStringsMenuWindow () {
    if(this.state.showStringsMenu===false) {
      this.setState({
        showStringsMenu: true,
      })
    }
    if(this.state.showStringsMenu===true) {
      this.setState({
        showStringsMenu: false,
      })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChordFocus (focus) {
    this.setState({
      chordFocus: focus
    })
  }

  handleChordDegrees() {
    if (this.state.displayChordDegrees) {
      this.setState({
        displayChordDegrees: false,
        chordDegButtonClass: 'chordDegButton',
        chordFocus: 'Neutral'
      })
    }
    if (!this.state.displayChordDegrees) {
      this.setState({
        displayChordDegrees: true,
        chordDegButtonClass: 'chordDegButton toggle_on'
      })
    }
  }

  handleHide(e) {
    var hideScale = e.target.title
    if(hideScale === 'Hide Scale') {
      this.setState({
        hideScale: hideScale,
        scaleHiddenToggle: 'toggle_on',
        scaleUnfocusedToggle: 'toggle_off',
        scaleVisibleToggle: 'toggle_off',
        scaleVisibleLabel: 'Show Scale',
        scaleHiddenLabel: 'Scale Hidden',
        scaleUnfocusedLabel: 'Unfocus Scale',
      })
    }
    if(hideScale === 'Show Scale') {
      this.setState({
        hideScale: hideScale,
        scaleHiddenToggle: 'toggle_off',
        scaleUnfocusedToggle: 'toggle_off',
        scaleVisibleToggle: 'toggle_on',
        scaleVisibleLabel: 'Scale Visible',
        scaleHiddenLabel: 'Hide Scale',
        scaleUnfocusedLabel: 'Unfocus Scale',
      })
    }
    if(hideScale === 'Unfocus Scale') {
      this.setState({
        hideScale: hideScale,
        scaleHiddenToggle: 'toggle_off',
        scaleUnfocusedToggle: 'toggle_on',
        scaleVisibleToggle: 'toggle_off',
        scaleVisibleLabel: 'Show Scale',
        scaleHiddenLabel: 'Hide Scale',
        scaleUnfocusedLabel: 'Scale Unfocused',
      })
    }
  }

  handleMoreSevenths () {
    this.state.sevenths2 === true ?
    this.setState({
      sevenths2: false,
      moreSeventhsButton: 'Show 7th Chords'
    }) :
    this.setState({
      sevenths2: true,
      moreSeventhsButton: 'Show Triads'
    })
  }

  handleNavChoice(e) {
    let choice = e.target.title
    if (choice === 'mapChords') {
      this.setState({
        mapChordsToggle: 'navOption toggle_on',
        mapScalesToggle: 'navOption',
        findChordsToggle: 'navOption',
        findScalesToggle: 'navOption',
        tutorialToggle: 'navOption',
        settingsToggle: 'navOption',
        renderView: 'Map Chords'
      })
    }
    if (choice === 'mapScales') {
      this.setState({
        mapChordsToggle: 'navOption',
        mapScalesToggle: 'navOption toggle_on',
        findChordsToggle: 'navOption',
        findScalesToggle: 'navOption',
        tutorialToggle: 'navOption',
        settingsToggle: 'navOption',
        renderView: 'Map Scales'
      })
    }
    if (choice === 'findChords') {
      this.setState({
        mapChordsToggle: 'navOption',
        mapScalesToggle: 'navOption',
        findChordsToggle: 'navOption toggle_on',
        findScalesToggle: 'navOption',
        tutorialToggle: 'navOption',
        settingsToggle: 'navOption'
      })
    }
    if (choice === 'findScales') {
      this.setState({
        mapChordsToggle: 'navOption',
        mapScalesToggle: 'navOption',
        findChordsToggle: 'navOption',
        findScalesToggle: 'navOption toggle_on',
        tutorialToggle: 'navOption',
        settingsToggle: 'navOption'
      })
    }
    if (choice === 'tutorial') {
      this.setState({
        mapChordsToggle: 'navOption',
        mapScalesToggle: 'navOption',
        findScalesToggle: 'navOption',
        findChordsToggle: 'navOption',
        tutorialToggle: 'navOption toggle_on',
        settingsToggle: 'navOption'
      })
    }
    if (choice === 'settings') {
      this.setState({
        mapChordsToggle: 'navOption',
        mapScalesToggle: 'navOption',
        findScalesToggle: 'navOption',
        findChordsToggle: 'navOption',
        tutorialToggle: 'navOption',
        settingsToggle: 'navOption toggle_on'
      })
    }
  }

  handleNeckNotes (e) {
    var labelType = e.target.title
    if (labelType === 'Note Names') {
      this.setState({
        labelType: labelType,
        noteNameToggle: 'toggle_on',
        scaleDegreeToggle: 'toggle_off',
        solfegeToggle: 'toggle_off'
      })
    }
    if (labelType === 'Scale Degrees') {
      this.setState({
        labelType: labelType,
        noteNameToggle: 'toggle_off',
        scaleDegreeToggle: 'toggle_on',
        solfegeToggle: 'toggle_off'
      })
    }
    if (labelType === 'Solfege') {
      this.setState({
        labelType: labelType,
        noteNameToggle: 'toggle_off',
        scaleDegreeToggle: 'toggle_off',
        solfegeToggle: 'toggle_on'
      })
    }
  }

  handleScaleChange(e) {
    var key = this.state.tonic
    var scale = e.target.title
    var name = e.target.outerText
    this.setState({
      scaleType: scale,
      scaleName: name
    })
    this.getScale(key, scale)
  }

  handleScaleChange2(e) {
    var key = this.state.tonic2
    var scale = e.target.value
    this.setState({
      scaleType: scale
    })
    this.getScale2(key, scale)
  }

  handleSecondScale () {
    this.state.second === true ?
    this.setState({
      second: false,
      secondButton: 'Compare a Scale'
    }) :
    this.setState({
      second: true,
      secondButton: 'Just One Scale'
    })
  }

  handleSevenths () {
    this.state.sevenths === true ?
    this.setState({
      sevenths: false,
      defaultType: 'Triads'
    }) :
    this.setState({
      sevenths: true,
      defaultType: 'Seventh Chords'
    })
  }

  handleSingleOrCompare (e) {
    if(this.state.compare) {
      this.setState({
        compare: false,
        singleOrCompareButton: 'Single Chord',
        selectedChord2: {},
        currentChordTones2: [],
        chordTwoSelected: false,
        sharedNotes: false
      })
    }
    if(!this.state.compare) {
      this.setState({
        compare: true,
        singleOrCompareButton: 'Compare Chords',
      })
    }
  }

  handleStringChoice(e) {
    var mirror=[];
    var data = e.target.title
    var dataArray = data.split('.')
    var instrument = dataArray[0]
    var tuning = dataArray[1]
    var strings = dataArray.slice(2)
    strings.forEach((string) => {
      mirror.unshift(string)
    })
    this.setState({
      currentStrings: strings,
      currentStringsMirror: mirror,
      instrument: instrument,
      tuning: tuning
    })
  }

  handleSubmit (e) {
    axios.post('/notes', {
      user: this.state.username,
      notes: this.state.noteBody
    })
    .then(() => {
      console.log('notes sent')
    })
    .catch((err) => {
    console.log("🚀 ~ file: App.jsx ~ line 178 ~ App ~ handleSubmit ~ err", err)
    })
  }

  handleTonicChange(e) {
    var key = e.target.title
    var scale = this.state.scaleType
    this.getScale(key, scale)
  }

  handleTonicChange2(e) {
    var key = e.target.value
    var scale = this.state.scaleType2
    this.getScale2(key, scale)
  }

  handleView (e) {
    let view = e.target.title
    let middle;
    let stringbox;

    if (view === 'Traditional View' || view === 'Mirror View') {
      middle = 'inner_middle';
      stringbox = 'stringbox';
    }

    if (view === 'Lefty Traditional View' || view === 'Lefty Mirror View') {
      middle = 'inner_middle_left';
      stringbox = 'stringbox_left';
    }

    this.setState({
      view: view,
      middle: middle,
      stringbox: stringbox
    })
  }

  resetCard(chord) {
    let typeKey = chord
    let alterKey = `${typeKey}Alt`
    this.setState({
      [typeKey]: 'Triad',
      [alterKey]: false
    })
  }

  resetChords() {
    this.setState({
      ch0: 'Triad',
      ch1: 'Triad',
      ch2: 'Triad',
      ch3: 'Triad',
      ch4: 'Triad',
      ch5: 'Triad',
      ch6: 'Triad',
      ch0Alt: false,
      ch1Alt: false,
      ch2Alt: false,
      ch3Alt: false,
      ch4Alt: false,
      ch5Alt: false,
      ch6Alt: false,

    })
  }

  resetAll() {
    this.resetChords()
    this.setState({
      selectedChord:{},
      selectedChord2:{},
      currentChordTones: [],
      currentChordTones2: [],
      chordOneSelected: false,
      chordTwoSelected: false,
      sharedNotes: [],
      compare: false,
      displayChordDegrees: false,
      chordDegButtonClass: 'chordDegButton',
      chordFocus: 'Neutral',
    })
  }

  selectChord (chord, tones) {
    if(chord === this.state.selectedChord && this.state.compare && this.state.chordTwoSelected === false) {
      this.setState({
        selectedChord: {},
        currentChordTones: [],
        chordOneSelected: false,
        compare: false,
        displayChordDegrees: false,
        chordDegButtonClass: 'chordDegButton'
      })
    }
    if(!this.state.chordOneSelected || !this.state.compare) {
      this.setState({
        selectedChord: chord,
        currentChordTones: tones,
        chordOneSelected: true
      })
    }
    if (chord === this.state.selectedChord && !this.state.compare && this.state.chordOneSelected) {
      this.setState({
        selectedChord: {},
        currentChordTones: [],
        chordOneSelected: false,
        displayChordDegrees: false,
        chordDegButtonClass: 'chordDegButton'
      })
    }
  }

  selectChord2 (chord, tones) {
    console.log(chord)
    console.log(tones)
    let checker = {}
    let notes = this.state.currentChordTones
    var sharedNotes = []

    for(var i = 0; i < notes.length; i++) {
      checker[notes[i]] = true
    }

    for (var j = 0; j < tones.length; j++) {
      if (checker[tones[j]]) {
        sharedNotes.push(tones[j])
      }
    }

    if(this.state.compare === false) {
      this.setState({
        selectedChord2: {},
        currentChordTones2: [],
        chordTwoSelected: false,
        chordFocus: 'Neutral',
        sharedNotes: [],
      })
    }
    if (chord === this.state.selectedChord) {
      this.setState({
        selectedChord: {},
        currentChordTones: [],
        selectedChord2: {},
        currentChordTones2: [],
        chordOneSelected: false,
        chordTwoSelected: false,
        chordFocus: 'Neutral',
        sharedNotes: [],
        compare: false,
        displayChordDegrees: false,
        chordDegButtonClass: 'chordDegButton'
      })
    } else if (chord === this.state.selectedChord2) {
      this.setState({
        selectedChord2: {},
        currentChordTones2: [],
        chordTwoSelected: false,
        chordFocus: 'Neutral',
        sharedNotes: []
      })
    } else {
      this.setState({
        selectedChord2: chord,
        currentChordTones2: tones,
        chordTwoSelected: true,
        sharedNotes: sharedNotes
      })
    }
  }

  setTones (tones) {
    this.setState({
      currentChordTones: tones
    })
  }

  setTones2 (tones) {
    this.setState({
      currentChordTones2: tones
    })
  }

  render() {
    return (
      <div className = "page">
        <div className="top">
          <Header
            handleNavChoice={this.handleNavChoice}
            mapChordsToggle={this.state.mapChordsToggle}
            mapScalesToggle={this.state.mapScalesToggle}
            findChordsToggle={this.state.findChordsToggle}
            findScalesToggle={this.state.findScalesToggle}
            tutorialToggle={this.state.tutorialToggle}
            settingsToggle={this.state.settingsToggle}
          />
        </div>
          <ViewMenu
            handleView={this.handleView}
            handleViewMenuWindow={this.handleViewMenuWindow}
            showViewMenu={this.state.showViewMenu}
          />
          <StringsMenu
            handleStringChoice={this.handleStringChoice}
            handleStringsMenuWindow={this.handleStringsMenuWindow}
            showStringsMenu={this.state.showStringsMenu}
            name={'stringsMenu'}
          />
        <div className="neckDash">
          <NeckDash
            handleViewMenuWindow={this.handleViewMenuWindow}
            handleStringsMenuWindow={this.handleStringsMenuWindow}
            view={this.state.view}
            instrument={this.state.instrument}
            tuning={this.state.tuning}
            sharedNotes={this.state.sharedNotes}
            name={'hideScaleMenu'}
            handleHide={this.handleHide}
            resetAll={this.resetAll}
            scaleHiddenToggle={this.state.scaleHiddenToggle}
            scaleUnfocusedToggle={this.state.scaleUnfocusedToggle}
            scaleVisibleToggle={this.state.scaleVisibleToggle}
            scaleHiddenLabel={this.state.scaleHiddenLabel}
            scaleUnfocusedLabel={this.state.scaleUnfocusedLabel}
            scaleVisibleLabel={this.state.scaleVisibleLabel}
            />
        </div>
        <div className="middle">
          {!['Violin', 'Viola', 'Cello'].includes(this.state.instrument) ?
            <FretGuide
              name ={'guideContainerUpper'}
              view={this.state.view}
            />: null
          }
          <div className={`${this.state.middle}`}>
            <div className={`${this.state.stringbox}`}>
              <StringSet
                allStrings={this.state.strings}
                strings={this.state.currentStrings}
                stringsMirror={this.state.currentStringsMirror}
                stringsLeft={this.state.stringsLeft}
                scale={this.state.scale}
                chord={this.state.currentChordTones}
                chord2={this.state.currentChordTones2}
                view={this.state.view}
                chordOneSelected={this.state.chordOneSelected}
                chordTwoSelected={this.state.chordTwoSelected}
                selectedChord={this.state.selectedChord}
                selectedChord2={this.state.selectedChord2}
                hideScale={this.state.hideScale}
                solfege={this.state.solfege}
                scaleDegrees={this.state.scaleDegrees}
                chordDegrees={this.state.chordDegrees}
                keyCenter={this.state.keyCenter}
                labelType={this.state.labelType}
                chordFocus={this.state.chordFocus}
                displayChordDegrees={this.state.displayChordDegrees}
                instrument={this.state.instrument}
                render={this.state.renderView}
              />
            </div>
          </div>
          {!['Violin', 'Viola', 'Cello'].includes(this.state.instrument) ?
            <FretGuide
              name ={'guideContainerLower'}
              view={this.state.view}
            />: null
          }
        </div>
        {this.state.renderView === 'Map Scales' ?
          <div className='map_scales_bottom_render'>
            <MapScalesRender
              ch0={this.state.ch0}
              ch1={this.state.ch1}
              ch2={this.state.ch2}
              ch3={this.state.ch3}
              ch4={this.state.ch4}
              ch5={this.state.ch5}
              ch6={this.state.ch6}
              ch0Alt={this.state.ch0Alt}
              ch1Alt={this.state.ch1Alt}
              ch2Alt={this.state.ch2Alt}
              ch3Alt={this.state.ch3Alt}
              ch4Alt={this.state.ch4Alt}
              ch5Alt={this.state.ch5Alt}
              ch6Alt={this.state.ch6Alt}
              chordDegButtonClass={this.state.chordDegButtonClass}
              chordFocus={this.state.chordFocus}
              chordOneSelected={this.state.chordOneSelected}
              chordTwoSelected={this.state.chordTwoSelected}
              compareChords={this.state.compare}
              currentCard={this.state.currentCard}
              currentChord={this.state.selectedChord}
              currentChord2={this.state.selectedChord2}
              currentChordTones={this.state.currentChordTones}
              currentChordTones2={this.state.currentChordTones2}
              defaultType={this.state.defaultType}
              displayChordDegrees={this.state.displayChordDegrees}
              handleAlterChord={this.handleAlterChord}
              handleAlterChordWindow={this.handleAlterChordWindow}
              handleChordDegrees={this.handleChordDegrees}
              handleChordFocus={this.handleChordFocus}
              handleLock={this.handleSingleOrCompare}
              handleNeckNotes={this.handleNeckNotes}
              handleScaleChange={this.handleScaleChange}
              handleScaleChange2={this.handleScaleChange2}
              handleScaleMenuWindow={this.handleScaleMenuWindow}
              handleSevenths={this.handleSevenths}
              handleTonicChange={this.handleTonicChange}
              handleTonicChange2={this.handleTonicChange2}
              handleTonicMenuWindow={this.handleTonicMenuWindow}
              keyCenter={this.state.keyCenter}
              list={this.state.currentList}
              noteNameToggle={this.state.noteNameToggle}
              resetCard={this.resetCard}
              resetChords={this.resetChords}
              root={this.state.chordOptRoot}
              scale={this.state.scale}
              scaleDegreeToggle={this.state.scaleDegreeToggle}
              scaleName={this.state.scaleName}
              selectChord={this.selectChord}
              selectChord2={this.selectChord2}
              setTones={this.setTones}
              setTones2={this.setTones2}
              sevenths={this.state.sevenths}
              sharedNotes={this.state.sharedNotes}
              showAlter={this.state.showAlter}
              showScaleMenu={this.state.showScaleMenu}
              showTonicMenu={this.state.showTonicMenu}
              solfegeToggle={this.state.solfegeToggle}
              tonic={this.state.tonic}
            />
          </div>
          :
          this.state.renderView === 'Map Chords' ?
          <MapChordsRender/>
          :null
        }
      </div>
    )
  }
}

export default App;
