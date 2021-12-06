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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strings: {},
      currentStrings: ['E', 'A', 'D', 'G', 'B', 'E'],
      scaleType:'major',
      tonic: '',
      scale: [],
      chords: {},
      sevenths: true,
      seventhsButton: 'Show Triads',
      second: true,
      secondButton: 'Just One Scale',
      scaleType2: 'major',
      tonic2: '',
      scale2: [],
      chords2: {},
      sevenths2: true,
      moreSeventhsButton: 'Show Triads',
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
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.getStrings();
    this.getScale('C', 'major')
    this.getScale2('E', 'harmonicMinor')
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
                <option value='Bflat'>B&#x266d;</option>
                <option value='Eflat'>E&#x266d;</option>
                <option value='Aflat'>A&#x266d;</option>
                <option value='Dflat'>D&#x266d;</option>
                <option value='Fsharp'>F&#x266F;</option>
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
                <option value='Bflat'>B&#x266d;</option>
                <option value='Eflat'>E&#x266d;</option>
                <option value='Aflat'>A&#x266d;</option>
                <option value='Dflat'>D&#x266d;</option>
                <option value='Fsharp'>F&#x266F;</option>
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
              </select>
            </span>
          </div>
        </div>
        <div className="middle">
          <div className="inner_middle">
            <div className="stringbox">
              <div className="inner_stringbox">
                <div className="neck">

                <StringSet
                  allStrings={this.state.strings}
                  strings={this.state.currentStrings}
                />
              </div>
            </div>
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
            <form>
              <h2 className="notes">Notes</h2>
              <label className="user">
                Username
                <input
                  className="user_name"
                  type="text"
                  maxLength="60"
                  name="username"
                  value={this.state.username}
                  onChange={(e) => {this.handleChange(e)}}
                />
              </label>
                <textarea
                  className="notes_input"
                  cols="25"
                  rows="20"
                  name="noteBody"
                  value={this.state.noteBody}
                  onChange={this.handleChange}>
                </textarea>
                <button onClick={(e) => this.handleSubmit(e)}
                  className="notes_submit"
                  id="submitNotes"
                  >Submit
                </button>
            </form>

          </div>

        </div>
      </div>
    )
  }
}

export default App;

