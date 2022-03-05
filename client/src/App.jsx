import React from 'react';
import StringSet from './StringSet.jsx'
import StringsMenu from './StringsMenu.jsx'
import TonicMenu from './TonicMenu.jsx'
import ScalesMenu from './ScalesMenu.jsx'
import ScaleChords from './ScaleChords.jsx'
import ViewMenu from './ViewMenu.jsx'
import LabelMenu from './LabelMenu.jsx'
import FocusMenu from './FocusMenu.jsx'
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
      strings: {},
      stringsLeft: {},
      currentStrings: [`E,F${flat},D${dblSharp}`, `B,C${flat},A${dblSharp}`, `G,F${dblSharp},A${dblFlat}`, `D,C${dblSharp},E${dblFlat}`, `A,G${dblSharp},B${dblFlat}`, `E,F${flat},D${dblSharp}`],
      currentStringsMirror: [`E,F${flat},D${dblSharp}`, `A,G${dblSharp},B${dblFlat}`, `D,C${dblSharp},E${dblFlat}`, `G,F${dblSharp},A${dblFlat}`, `B,C${flat},A${dblSharp}`, `E,F${flat},D${dblSharp}`],
      choices: [],
      scaleType:'major',
      keyCenter: {},
      keyCenter2: {},
      tonic: '',
      scale: [],
      chords: {},
      sevenths: false,
      selectedChord:{},
      currentChordTones: [],
      chordOneSelected: false,
      chordTwoSelected: false,
      selectedChord2:{},
      currentChordTones2: [],
      seventhsButton: 'Show 7th Chords',
      second: false,
      secondButton: 'Compare a scale',
      scaleType2: 'major',
      tonic2: '',
      scale2: [],
      chords2: {},
      sevenths2: false,
      moreSeventhsButton: 'Show 7th Chords',
      view: 'Traditional',
      hideScale: false,
      hideScaleButton: 'hide scale',
      solfege: {},
      scaleDegrees: {},
      chordDegrees: {},
      labelType: 'Note Names',
      singleOrCompareButton: 'Single Chord',
      chordFocus: 'Neutral',
      compare: false,
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
      showAlter: false,
      currentCard: '',
      currentList: '',
      chordOptRoot: '',
      middle: 'inner_middle',
      stringbox: 'stringbox',
    }

    this.getChoices = this.getChoices.bind(this)
    this.getDegrees = this.getDegrees.bind(this);
    this.getScale = this.getScale.bind(this);
    this.getScale2 = this.getScale2.bind(this);
    this.getStrings = this.getStrings.bind(this);
    this.handleAlterChord = this.handleAlterChord.bind(this);
    this.handleAlterChordWindow = this.handleAlterChordWindow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChordFocus = this.handleChordFocus.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleMoreSevenths = this.handleMoreSevenths.bind(this);
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChordFocus (e) {
    var focus = e.target.value
    this.setState({
      chordFocus: focus
    })
  }

  handleHide(e) {
    if(this.state.hideScale) {
      this.setState({
        hideScale: false,
        hideScaleButton: 'hide scale'
      })
    }
    if(!this.state.hideScale) {
      this.setState({
        hideScale: true,
        hideScaleButton: 'show scale'
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

  handleNeckNotes (e) {
    var labelType = e.target.value
    this.setState({
      labelType: labelType
    })
  }

  handleScaleChange(e) {
    var key = this.state.tonic
    var scale = e.target.value
    this.setState({
      scaleType: scale
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
      seventhsButton: 'Show 7th Chords'
    }) :
    this.setState({
      sevenths: true,
      seventhsButton: 'Show Triads'
    })
  }

  handleSingleOrCompare (e) {
    if(this.state.compare) {
      this.setState({
        compare: false,
        singleOrCompareButton: 'Single Chord',
        selectedChord2: {},
        currentChordTones2: [],
        chordTwoSelected: false
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
    var strings = e.target.value
    var stringArray = strings.split('.')
    stringArray.forEach((string) => {
      mirror.unshift(string)
    })
    this.setState({
      currentStrings: stringArray,
      currentStringsMirror: mirror,
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
    var key = e.target.value
    var scale = this.state.scaleType
    this.getScale(key, scale)
  }

  handleTonicChange2(e) {
    var key = e.target.value
    var scale = this.state.scaleType2
    this.getScale2(key, scale)
  }

  handleView (e) {
    let view = e.target.value
    let middle;
    let stringbox;

    if (view === 'Traditional' || view === 'Mirror') {
      middle = 'inner_middle';
      stringbox = 'stringbox';
    }

    if (view === 'Traditional-left' || view === 'Mirror-left') {
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
    })
  }

  selectChord (chord, tones) {
    if(chord === this.state.selectedChord && this.state.compare && this.state.chordTwoSelected === false) {
      this.setState({
        selectedChord: {},
        currentChordTones: [],
        chordOneSelected: false,
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
      })
    }
  }

  selectChord2 (chord, tones) {
    if(this.state.compare === false) {
      this.setState({
        selectedChord2: {},
        currentChordTones2: [],
        chordTwoSelected: false,
        chordFocus: 'Neutral'
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
        chordFocus: 'Neutral'
      })
    } else if (chord === this.state.selectedChord2) {
      this.setState({
        selectedChord2: {},
        currentChordTones2: [],
        chordTwoSelected: false,
        chordFocus: 'Neutral'
      })
    } else {
      this.setState({
        selectedChord2: chord,
        currentChordTones2: tones,
        chordTwoSelected: true
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
          <span className="navbar">
            <span className="navTitle">
              Strings Theory
            </span>
            <span></span>
            <span>
              Map Chords
            </span>
            <span>
              map Scales
            </span>
            <span>
              Find Chords
            </span>
            <span>
              Find Scales
            </span>
            <span>
              Tutorial
            </span>
            <span>
              Settings
            </span>
            <span></span>
          </span>
        </div>
        <div className="neckDash">
          <ViewMenu
            handleView={this.handleView}
            name={'viewMenu'}
          />
          <StringsMenu
            handleStringChoice={this.handleStringChoice}
            name={'stringsMenu'}
          />
          <button
            onClick={(e) => this.handleHide(e)}
            className="seventh_button">
            {this.state.hideScaleButton}
          </button>
        </div>
        <div className="middle">
          <FretGuide
            name ={'guideContainerUpper'}
            view={this.state.view}
          />
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
              />
            </div>
          </div>
          <FretGuide
            name ={'guideContainerLower'}
            view={this.state.view}
          />
        </div>
        <div className="bottomUpper">
        <TonicMenu
            handleTonicChange={this.handleTonicChange}
            name={'tonic_options_left'}
          />
          <ScalesMenu
            handleScaleChange={this.handleScaleChange}
            name={'scale_options_left'}
          />
          {this.state.second ?
            <React.Fragment>
              <TonicMenu
                handleTonicChange={this.handleTonicChange2}
                name={'tonic_options_right'}
              />
              <ScalesMenu
                handleScaleChange={this.handleScaleChange2}
                name={'scale_options_right'}
              />
            </React.Fragment>
            : null
          }
          <LabelMenu
            handleNeckNotes={this.handleNeckNotes}
            name={'labelMenu'}
            chordSelected={this.state.chordOneSelected}
          />
          {this.state.labelType ==='Chord Degrees' && this.state.chordOneSelected && this.state.chordTwoSelected ?
            <FocusMenu
              handleChordFocus={this.handleChordFocus}
              name={'labelMenu'}
              chordSelected={this.state.chordOneSelected}
            />
            : null
          }
          <button
            onClick={(e) => this.handleSingleOrCompare(e)}
            className="seventh_button">
            {this.state.singleOrCompareButton}
          </button>
          <button
            onClick={() => this.resetChords()}
            className="seventh_button"
            >
            Reset Chords
          </button>
          <button
            onClick={() => this.resetAll()}
            className="seventh_button"
            >
            Reset Everything
          </button>
          <button
            onClick={(e) => this.handleSevenths(e)}
            className="seventh_button"
            id="sevenths_button">
            {this.state.seventhsButton}
          </button>
          <button
            onClick={(e) => this.handleSecondScale(e)}
            className="seventh_button"
            id="second_button">
            {this.state.secondButton}
          </button>
          {this.state.second === true ?
            <button
              onClick={(e) => this.handleMoreSevenths(e)}
              className="seventh_button"
              id="sevenths_button2">
              {this.state.moreSeventhsButton}
            </button>
            : null
          }
          {this.state.chordOneSelected && this.state.chordTwoSelected ?
            <span className="sharedLight">Shared Notes</span> : null
          }
        </div>
        <div className="bottomLower">
          <AlterChordOpt
            showAlter={this.state.showAlter}
            handleAlterChord={this.handleAlterChord}
            handleAlterChordWindow={this.handleAlterChordWindow}
            currentCard={this.state.currentCard}
            list={this.state.currentList}
            root={this.state.chordOptRoot}
          />
          <ScaleChords
            keyCenter={this.state.keyCenter}
            sevenths={this.state.sevenths}
            selectChord={this.selectChord}
            selectChord2={this.selectChord2}
            currentChord={this.state.selectedChord}
            currentChord2={this.state.selectedChord2}
            chordOneSelected={this.state.chordOneSelected}
            currentChordTones={this.state.currentChordTones}
            currentChordTones2={this.state.currentChordTones2}
            compareChords={this.state.compare}
            handleAlterChordWindow={this.handleAlterChordWindow}
            resetCard={this.resetCard}
            setTones={this.setTones}
            setTones2={this.setTones2}
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
          />
          <React.Fragment>
            {this.state.second === true ?
              <ScaleChords
                keyCenter={this.state.keyCenter2}
                sevenths={this.state.sevenths2}
              />: null}
          </React.Fragment>
        </div>
        <div className="bottom_right">
        </div>
      </div>
    )
  }
}

export default App;
