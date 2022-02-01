import React from 'react';
import StringSet from './StringSet.jsx'
import ChordLabels from './ChordLabels.jsx'
import ChordNames from './ChordNames.jsx'
import MoreChordLabels from './MoreChordLabels.jsx'
import MoreChordNames from './MoreChordNames.jsx'
import Roots from './Roots.jsx'
import Thirds from './Thirds.jsx'
import Fifths from './Fifths.jsx'
import Sevenths from './Sevenths.jsx'
import MoreRoots from './MoreRoots.jsx'
import MoreThirds from './MoreThirds.jsx'
import MoreFifths from './MoreFifths.jsx'
import MoreSevenths from './MoreSevenths.jsx'
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
      currentStrings: [`E,F${flat},D${dblSharp}`, `B,C${flat},A${dblSharp}`, `G,F${dblSharp},A${dblFlat}`, `D,C${dblSharp},E${dblFlat}`, `A,G${dblSharp},B${dblFlat}`, `E,F${flat},D${dblSharp}`],
      choices: [],
      scaleType:'major',
      tonic: '',
      scale: [],
      chords: {},
      sevenths: false,
      seventhsButton: 'Show 7th Chords',
      second: false,
      secondButton: 'Compare a scale',
      scaleType2: 'major',
      tonic2: '',
      scale2: [],
      chords2: {},
      sevenths2: false,
      moreSeventhsButton: 'Show 7th Chords',
      username: '',
      noteBody: ''

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
          strings: res.data
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
          chords: res.data.chords
        })
      })
  }

  getScale2 (key, scale) {
    axios.get('/scales', { params: { key: key, scale: scale } })
      .then((res) => {
        this.setState({
          tonic2: res.data.tonic,
          scale2: res.data.scale,
          chords2: res.data.chords
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
    this.setState({
      currentStrings: stringArray
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

  render() {
    return (
      <div className = "page">
        <div className="top">
          <div className="top_left">
            <span className="tonic_options_left">
              <select onChange={(e) => {this.handleTonicChange(e)}}>
                <option selected value='C'>C</option>
                <option value='D'>D</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
                <option value='G'>G</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value={`B${flat}`}>{`B${flat}`}</option>
                <option value={`E${flat}`}>{`E${flat}`}</option>
                <option value={`A${flat}`}>{`A${flat}`}</option>
                <option value={`D${flat}`}>{`D${flat}`}</option>
                <option value={`G${flat}`}>{`G${flat}`}</option>
                <option value={`C${flat}`}>{`C${flat}`}</option>
                <option value={`F${flat}`}>{`F${flat}`}</option>
                <option value={`B${dblFlat}`}>{`B${dblFlat}`}</option>
                <option value={`E${dblFlat}`}>{`E${dblFlat}`}</option>
                <option value={`A${dblFlat}`}>{`A${dblFlat}`}</option>
                <option value={`D${dblFlat}`}>{`D${dblFlat}`}</option>
                <option value={`F${sharp}`}>{`F${sharp}`}</option>
                <option value={`C${sharp}`}>{`C${sharp}`}</option>
                <option value={`G${sharp}`}>{`G${sharp}`}</option>
                <option value={`D${sharp}`}>{`D${sharp}`}</option>
                <option value={`A${sharp}`}>{`A${sharp}`}</option>
                <option value={`E${sharp}`}>{`E${sharp}`}</option>
                <option value={`B${sharp}`}>{`B${sharp}`}</option>
              </select>
            </span>
            <span className="scale_options_left">
              <select onChange={(e) => {this.handleScaleChange(e)}}>
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
            <span className="chooseStrings">
              <select onChange={(e) => {this.handleStringChoice(e)}}>
                <option selected value={`E,F${flat},D${dblSharp}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}`}>Guitar - Standard</option>
                <option value={`E,F${flat},D${dblSharp}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}`}>Guitar - Drop D</option>
                <option value={`D,C${dblSharp},E${dblFlat}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}`}>Guitar - Double Drop D</option>
                <option value={`D,C${dblSharp},E${dblFlat}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}`}>Guitar - Open G</option>
                <option value={`E,F${flat},D${dblSharp}.B,C${flat},A${dblSharp}.G,F${dblSharp},A${dblFlat}.C,B${sharp},D${dblFlat}.A,G${dblSharp},B${dblFlat}.C,B${sharp},D${dblFlat}`}>Guitar - Open C6</option>
                <option value={`D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.F${sharp},G${flat},E${dblSharp}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}`}>Guitar - Open D</option>
                <option value={`A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}.C,B${sharp},D${dblFlat}.G,F${dblSharp},A${dblFlat}`}>Ukelele</option>
                <option value={`G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}`}>Mandolin</option>
                <option value={`G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}`}>4 String Bass</option>
                <option value={`G,F${dblSharp},A${dblFlat}.D,C${dblSharp},E${dblFlat}.A,G${dblSharp},B${dblFlat}.E,F${flat},D${dblSharp}.B,C${flat},A${dblSharp}`}>5 String Bass</option>
                <option value={`E,F${flat},D${dblSharp}.A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}.G,F${dblSharp},A${dblFlat}`}>Violin</option>
                <option value={`A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}.G,F${dblSharp},A${dblFlat}.C,B${sharp},D${dblFlat}`}>Viola</option>
                <option value={`A,G${dblSharp},B${dblFlat}.D,C${dblSharp},E${dblFlat}.G,F${dblSharp},A${dblFlat}.C,B${sharp},D${dblFlat}`}>Cello</option>
              </select>
            </span>
          </div>
          <div className="top_center">Strings Theory</div>
          <div className="top_right">
            <span className="tonic_options_right">
              <select onChange={(e) => {this.handleTonicChange2(e)}}>
                <option selected value='C'>C</option>
                <option value='D'>D</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
                <option value='G'>G</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value={`B${flat}`}>{`B${flat}`}</option>
                <option value={`E${flat}`}>{`E${flat}`}</option>
                <option value={`A${flat}`}>{`A${flat}`}</option>
                <option value={`D${flat}`}>{`D${flat}`}</option>
                <option value={`G${flat}`}>{`G${flat}`}</option>
                <option value={`C${flat}`}>{`C${flat}`}</option>
                <option value={`F${flat}`}>{`F${flat}`}</option>
                <option value={`F${sharp}`}>{`F${sharp}`}</option>
                <option value={`C${sharp}`}>{`C${sharp}`}</option>
                <option value={`G${sharp}`}>{`G${sharp}`}</option>
                <option value={`D${sharp}`}>{`D${sharp}`}</option>
                <option value={`A${sharp}`}>{`A${sharp}`}</option>
                <option value={`E${sharp}`}>{`E${sharp}`}</option>
                <option value={`B${sharp}`}>{`B${sharp}`}</option>
                <option value={`B${dblFlat}`}>{`B${dblFlat}`}</option>
                <option value={`E${dblFlat}`}>{`E${dblFlat}`}</option>
                <option value={`A${dblFlat}`}>{`A${dblFlat}`}</option>
                <option value={`D${dblFlat}`}>{`D${dblFlat}`}</option>
              </select>
            </span>
          <span className="scale_options_right">
              <select onChange={(e) => {this.handleScaleChange2(e)}}>
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
          </div>
        </div>
        <div className="middle">
          <div className="inner_middle">
            <div className="stringbox">
              <StringSet
                allStrings={this.state.strings}
                strings={this.state.currentStrings}
                scale={this.state.scale}
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
            <ChordLabels
              chords={this.state.chords}
              sevenths={this.state.sevenths}
              />
            <ChordNames
              chords={this.state.chords}
              sevenths={this.state.sevenths}
              />
            <Roots chords={this.state.chords}/>
            <Thirds chords={this.state.chords}/>
            <Fifths chords={this.state.chords}/>
            <React.Fragment>
              {this.state.sevenths === true ?
                <Sevenths chords={this.state.chords}/> : null
              }
            </React.Fragment>
            <React.Fragment>
              {this.state.second === true ?
                <React.Fragment>
                  <MoreChordLabels
                    chords={this.state.chords2}
                    sevenths={this.state.sevenths2}
                  />
                  <MoreChordNames
                    chords={this.state.chords2}
                    sevenths={this.state.sevenths2}
                  />
                  <MoreRoots chords={this.state.chords2}/>
                  <MoreThirds chords={this.state.chords2}/>
                  <MoreFifths chords={this.state.chords2}/>
                    <React.Fragment>
                      {this.state.sevenths2 === true ?
                        <MoreSevenths chords={this.state.chords2}/> : null
                      }
                    </React.Fragment>
                </React.Fragment>: null
              }
            </React.Fragment>
          </div>
          <div className="bottom_right">
          </div>
        </div>
      </div>
    )
  }
}

export default App;

