import React from 'react';
import StringSet from './StringSet.jsx'
import StringsMenu from './StringsMenu.jsx'
import TonicMenu from './TonicMenu.jsx'
import ScalesMenu from './ScalesMenu.jsx'
import ScaleChords from './ScaleChords.jsx'
import ViewMenu from './ViewMenu.jsx'
import Dropdown from './Dropdown.jsx'
import axios from 'axios';

const sharp = '\u266F';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';

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
      view: 'Traditional'

    }
    this.getStrings = this.getStrings.bind(this);
    this.getScale = this.getScale.bind(this);
    this.getScale2 = this.getScale2.bind(this);
    this.handleSevenths = this.handleSevenths.bind(this);
    this.handleMoreSevenths = this.handleMoreSevenths.bind(this);
    this.handleTonicChange = this.handleTonicChange.bind(this);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleTonicChange2 = this.handleTonicChange2.bind(this);
    this.handleScaleChange2 = this.handleScaleChange2.bind(this);
    this.handleSecondScale = this.handleSecondScale.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStringChoice = this.handleStringChoice.bind(this);
    this.handleView = this.handleView.bind(this);
    this.selectChord = this.selectChord.bind(this)
    this.selectChord2 = this.selectChord2.bind(this)
  }

  componentDidMount () {
    this.getStrings();
    this.getScale('C', 'major')
    this.getScale2('C', 'major')
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

  getScale (key, scale) {
    axios.get('/scales', { params: { key: key, scale: scale } })
      .then((res) => {
        this.setState({
          tonic: res.data.tonic,
          scale: res.data.scale,
          chords: res.data.chords,
          selectedChord: {},
          currentChordTones: [],
          selectedChord2: {},
          currentChordTones2: [],
          chordOneSelected: false,
          chordTwoSelected: false
        })
      })
  }

  getScale2 (key, scale) {
    axios.get('/scales', { params: { key: key, scale: scale } })
      .then((res) => {
        this.setState({
          tonic2: res.data.tonic,
          scale2: res.data.scale,
          chords2: res.data.chords,
          selectedChord: {},
          currentChordTones: [],
          selectedChord2: {},
          currentChordTones2: [],
          chordOneSelected: false,
          chordTwoSelected: false
        })
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

  handleTonicChange(e) {
    var key = e.target.value
    var scale = this.state.scaleType
    this.getScale(key, scale)
  }

  handleScaleChange(e) {
    var key = this.state.tonic
    var scale = e.target.value
    this.setState({
      scaleType: scale
    })
    this.getScale(key, scale)
  }

  handleStringChoice(e) {
    var strings = e.target.value
    var stringArray = strings.split('.')
    var mirror = stringArray.reverse()
    this.setState({
      currentStrings: stringArray,
      currentStringsMirror: mirror
    })
  }

  handleTonicChange2(e) {
    var key = e.target.value
    var scale = this.state.scaleType2
    this.getScale2(key, scale)
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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

  handleView (e) {
    var view = e.target.value
    this.setState({
      view: view
    })
  }

  selectChord (chord, tones) {
    if(chord === this.state.selectedChord && this.state.chordTwoSelected === false) {
      this.setState({
        selectedChord: {},
        currentChordTones: [],
        chordOneSelected: false,
      })
    }
    if(this.state.chordOneSelected === false) {
      this.setState({
        selectedChord: chord,
        currentChordTones: tones,
        chordOneSelected: true
      })
    }
  }

  selectChord2 (chord, tones) {
    if (chord === this.state.selectedChord) {
      this.setState({
        selectedChord: {},
        currentChordTones: [],
        selectedChord2: {},
        currentChordTones2: [],
        chordOneSelected: false,
        chordTwoSelected: false
      })
    } else if (chord === this.state.selectedChord2) {
      this.setState({
        selectedChord2: {},
        currentChordTones2: [],
        chordTwoSelected: false
      })
    } else {
      this.setState({
        selectedChord2: chord,
        currentChordTones2: tones,
        chordTwoSelected: true
      })
    }
  }

  render() {
    return (
      <div className = "page">
        <div className="top">
          <span className="navbar">
            Strings Theory
          </span>
        </div>
        <div className="middle">
          <div className="inner_middle">
            <div className="stringbox">
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

              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom_left">
            <div className="btn1">
              <button
                onClick={(e) => this.handleSevenths(e)}
                className="seventh_button"
                id="sevenths_button">
                {this.state.seventhsButton}
              </button>
            </div>
            <div className="btn3">
              <button
                onClick={(e) => this.handleSecondScale(e)}
                className="seventh_button"
                id="second_button">
                {this.state.secondButton}
              </button>
            </div>
            {this.state.second === true ?
              <div className="btn2">
                <button
                  onClick={(e) => this.handleMoreSevenths(e)}
                  className="seventh_button"
                  id="sevenths_button2">
                  {this.state.moreSeventhsButton}
                </button>
              </div> : null
            }
          </div>
          <div className="bottom_center">
            <ScaleChords
              chords={this.state.chords}
              sevenths={this.state.sevenths}
              selectChord={this.selectChord}
              selectChord2={this.selectChord2}
              currentChord={this.state.selectedChord}
              currentChord2={this.state.selectedChord2}
              chordOneSelected={this.state.chordOneSelected}
            />
            <React.Fragment>
              {this.state.second === true ?
                <ScaleChords
                  chords={this.state.chords2}
                  sevenths={this.state.sevenths2}
                />: null}
            </React.Fragment>
          </div>
          <div className="bottom_right">
          <TonicMenu
              handleTonicChange={this.handleTonicChange}
              name={'tonic_options_left'}
            />
            <ScalesMenu
              handleScaleChange={this.handleScaleChange}
              name={'scale_options_left'}
            />
            <StringsMenu
              handleStringChoice={this.handleStringChoice}
            />
            <TonicMenu
              handleTonicChange={this.handleTonicChange2}
              name={'tonic_options_right'}
            />
            <ScalesMenu
              handleScaleChange={this.handleScaleChange2}
              name={'scale_options_right'}
            />
            <ViewMenu
              handleView={this.handleView}
              name={'viewMenu'}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
