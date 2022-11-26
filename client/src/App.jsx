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
import { Dropdown } from './Dropdown.jsx'
import { FretGuide } from './FretGuide.jsx'
import { Tutorial } from './Tutorial.jsx'
import { AlterChordOpt } from './AlterChordOpt.jsx'
import { Welcome } from './Welcome.jsx'
import { ChordCalculator } from './ChordCalculator.jsx'
import { BeginnerNeck } from './BeginnerNeck.jsx'
import { ConstructionFindStructures } from './ConstructionFindStructures.jsx'
import axios from 'axios';


const sharp = '#';
const flat = '\u266D';
const dblSharp = '\u{1D12A}';
const dblFlat = '\u{1D12B}';
const natural = '\u266E';
const dim = '\u00B0';

const App = () => {

  const [calcChord1, setCalcChord1] = useState([])
  const [calcChord2, setCalcChord2] = useState([])
  const [ch0, setCh0] = useState('Triad')
  const [ch1, setCh1] = useState('Triad')
  const [ch2, setCh2] = useState('Triad')
  const [ch3, setCh3] = useState('Triad')
  const [ch4, setCh4] = useState('Triad')
  const [ch5, setCh5] = useState('Triad')
  const [ch6, setCh6] = useState('Triad')
  const [ch0Alt, setCh0Alt]  = useState(false)
  const [ch1Alt, setCh1Alt]  = useState(false)
  const [ch2Alt, setCh2Alt]  = useState(false)
  const [ch3Alt, setCh3Alt]  = useState(false)
  const [ch4Alt, setCh4Alt]  = useState(false)
  const [ch5Alt, setCh5Alt]  = useState(false)
  const [ch6Alt, setCh6Alt]  = useState(false)
  const [choices, setChoices] = useState([])
  const [chords, setChords] = useState({})
  const [chords2, setChords2] = useState({})
  const [chordDegrees, setChordDegrees] = useState({})
  const [chordDegreesUpper, setChordDegreesUpper] = useState({})
  const [chordDegButtonClass, setChordDegButtonClass] = useState('chordDegButton')
  const [chordOneSelected, setChordOneSelected] = useState(false)
  const [chordObjKey, setChordObjKey] = useState('')
  const [chord2ObjKey, setChord2ObjKey] = useState('')
  const [chordOptRoot, setChordOptRoot] = useState('')
  const [chordTwoSelected, setChordTwoSelected] = useState(false)
  const [chordType1, setChordType1] = useState({})
  const [chordType2, setChordType2] = useState({})
  const [chordFocus, setChordFocus] = useState('Neutral')
  const [currentCard, setCurrentCard] = useState('')
  const [compare, setCompare] = useState(false)
  const [currentChordTones, setCurrentChordTones] = useState([])
  const [currentChordTones2, setCurrentChordTones2] = useState([])
  const [currentList, setCurrentList] = useState('')

  const [currentStrings, setCurrentStrings] = useState([`E,F${flat},D${dblSharp}`, `B,C${flat},A${dblSharp}`, `G,F${dblSharp},A${dblFlat}`, `D,C${dblSharp},E${dblFlat}`, `A,G${dblSharp},B${dblFlat}`, `E,F${flat},D${dblSharp}`])

  const [currentStringsMirror, setCurrentStringsMirror] = useState([`E,F${flat},D${dblSharp}`, `A,G${dblSharp},B${dblFlat}`, `D,C${dblSharp},E${dblFlat}`, `G,F${dblSharp},A${dblFlat}`, `B,C${flat},A${dblSharp}`, `E,F${flat},D${dblSharp}`])

  const [defaultType, setDefaultType] = useState('Triads')
  const [displayChordDegrees, setDisplayChordDegrees] = useState(false)
  const [hideScale, setHideScale] = useState('Show Scale')
  const [highestFret, setHighestFret] = useState(17)
  const [instrument, setInstrument] = useState('Guitar')
  const [keyCenter, setKeyCenter] = useState({})
  const [keyCenter2, setKeyCenter2] = useState({})
  const [labelType, setLabelType] = useState('Note Names')
  const [lowestFret, setLowestFret] = useState(0)
  const [middle, setMiddle] = useState('inner_middle')
  const [moreSeventhsButton, setMoreSeventhsButton] = useState('Show 7th Chords')
  const [neckWindowMode, setNeckWindowMode] = useState('none')
  const [noteRefs1, setNoteRefs1] = useState({})
  const [noteRefs2, setNoteRefs2] = useState({})
  const [renderView, setRenderView] = useState('Welcome')
  const [resetVoicingCount, setResetVoicingCount] = useState(0)
  const [root1, setRoot1] = useState('')
  const [root2, setRoot2] = useState('')
  const [scale, setScale] = useState([])
  const [scale2, setScale2] = useState([])
  const [scaleDegrees, setScaleDegrees] = useState({})
  const [scaleName, setScaleName] = useState('Major')
  const [scaleType, setScaleType] = useState('major')
  const [scaleType2, setScaleType2] = useState('major')
  const [second, setSecond] = useState(false)
  const [secondButton, setSecondButton] = useState('Compare a scale')
  const [selectedChord, setSelectedChord] = useState({})
  const [selectedChord2, setSelectedChord2] = useState({})
  const [selNote, setSelNote] = useState('')
  const [sevenths, setSevenths] = useState(false)
  const [sevenths2, setSevenths2] = useState(false)
  const [sharedNotes, setSharedNotes] = useState([])
  const [showAlter, setShowAlter] = useState(false)
  const [showFindStructures, setShowFindStructures] = useState(false)
  const [showScaleMenu, setShowScaleMenu] = useState(false)
  const [showStringsMenu, setShowStringsMenu] = useState(false)
  const [showTonicMenu, setShowTonicMenu] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)
  const [showViewMenu, setShowViewMenu] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [singleOrCompareButton, setSingleOrCompareButton] = useState('Single Chord')
  const [solfege, setSolfege] = useState({})
  const [strings, setStrings] = useState({})
  const [stringbox, setStringbox] = useState('stringbox')
  const [stringsLeft, setStringsLeft] = useState({})
  const [tonic, setTonic] = useState('')
  const [tonic2, setTonic2] = useState('')
  const [tuning, setTuning] = useState(' E A D G B E ')
  const [useCapo, setUseCapo] = useState(false)
  const [view, setView] = useState('Traditional View')
  const [voicing1, setVoicing1] = useState('')
  const [voicing2, setVoicing2] = useState('')
  const [windowCycle, setWindowCycle] = useState('start')

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
  }, [calcChord1, calcChord2])

  const clear = (which) => {
    if (which === '1') {
      setCalcChord1([])
      setNoteRefs1({})
      setChordType1({})
      setVoicing1('')
      setRoot1('')
      setChordFocus('Neutral')
      setSharedNotes([])
    }
    if (which === '2') {
      setCalcChord2([])
      setNoteRefs2({})
      setChordType2({})
      setVoicing2('')
      setRoot2('')
      setChordFocus('Neutral')
      setSharedNotes([])
    }
  }

  const getChoices = () => {
    axios.get('/choices')
      .then((res) => {
          setChoices(res.data)
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 29 ~ App ~ getStrings ~ err", err)
      })
  }

  const getChord = (root, type, which) => {

    console.log('root', root, 'type', type, 'which', which)
    axios.get('/chord', { params: { root: root, type: type } })
      .then((res) => {
        if (which === '1') {
          setCalcChord1(res.data.chordNotes)
          setNoteRefs1(res.data.noteRefs)
          setChordType1(res.data.type)
        }
        if (which === '2') {
          setCalcChord2(res.data.chordNotes)
          setNoteRefs2(res.data.noteRefs)
          setChordType2(res.data.type)
        }
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 213 ~ App ~ getChord ~ err", err)
      })
  }


  const updatedSharedNotes = () => {
    if (calcChord1.length > 0 && calcChord2.length > 0) {
      let [copy, copy2] = [calcChord1.slice(), calcChord2.slice()]
      let [shared, checker, checker2, final] = [[], {}, {}, {}]

      copy.forEach((note) => {
        checker[note] = true
        checker[enharmonic(note)] = true
      })

      copy2.forEach((note) => {
        checker2[note] = true
        checker2[enharmonic(note)] = true
      })

      copy.forEach((note) => {
        let enharm = enharmonic(note)
        if (checker2[note] || checker2[enharm]) {
          final[note] = true
          final[enharm] = true
        }
      })

      copy2.forEach((note) => {
        let enharm = enharmonic(note)
        if (checker[note] || checker[enharm]) {
          final[note] = true
          final[enharm] = true
        }
      })
      for (var finalNote in final) {
        if(copy.includes(finalNote) || copy2.includes(finalNote)){
          shared.push(finalNote)
        }
      }
      console.log("shared", shared)
      setSharedNotes(shared)
    }
  }

  const getDegrees = () => {
    axios.get('/degrees')
      .then((res) => {
        setSolfege(res.data.solfege)
        setScaleDegrees(res.data.scaleDegrees)
        setChordDegrees(res.data.chordDegrees)
        setChordDegreesUpper(res.data.chordDegreesUpper)
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 85 ~ App ~ getDegrees ~ err", err)
      })
  }

  const getScale = (key, scale) => {
    resetAll()
    axios.get('/scales', { params: { key: key, scale: scale } })
      .then((res) => {
        setKeyCenter(res.data)
        setTonic(res.data.tonic)
        setScale(res.data.scale)
        setChords(res.data.chords)
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 266 ~ App ~ getScale ~ err", err)
      })
  }

  const getScale2 = (key, scale) => {
    axios.get('/scales', { params: { key: key, scale: scale } })
      .then((res) => {
        setKeyCenter2(res.data)
        setTonic2(res.data.tonic)
        setScale2(res.data.scale)
        setChords2(res.data.chords)
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 278 ~ App ~ getScale2 ~ err", err)
      })
  }

  const getStrings = () => {
    axios.get('/strings')
    .then((res) => {
      setStrings(res.data.right)
      setStringsLeft(res.data.left)
    })
    .catch((err) => {
      console.log("🚀 ~ file: App.jsx ~ line 29 ~ App ~ getStrings ~ err", err)
    })
  }

  const enharmonic = (note) => {
    let chromaticScale = ["C", [`C${sharp}`, `D${flat}`], "D", [`D${sharp}`, `E${flat}`], "E", "F", [`F${sharp}`, `G${flat}`], "G", [`G${sharp}`, `A${flat}`], "A", [`A${sharp}`, `B${flat}`], "B"];

    let [noteBase, distanceToMove, enharmonicEquivalent] = [note[0], 0, '']
    let indexOfNoteBase = chromaticScale.indexOf(noteBase);
    for (var i = 1; i < note.length; i++) {
        if (note[i] === `${flat}`) {
            distanceToMove--;
        } else if (note[i] === `${sharp}`) {
            distanceToMove++;
        } else if ((note[i] + note[i + 1]) === `${dblSharp}`) {
            distanceToMove += 2
        } else if ((note[i] + note[i + 1]) === `${dblFlat}`) {
            distanceToMove -= 2
        } else if ((note[i - 1] + note[i]) === `${dblSharp}`) {
            continue;
        } else if ((note[i - 1] + note[i]) === `${dblFlat}`) {
            continue;
        }
    }
    let newIndex = indexOfNoteBase + distanceToMove;
    if (newIndex >= chromaticScale.length) {
        newIndex = indexOfNoteBase - (12 - distanceToMove);
    } else if (newIndex < 0) {
        newIndex = indexOfNoteBase + (distanceToMove + 12);
    }
    if (distanceToMove === 0) {
        enharmonicEquivalent = noteBase;
    } else if (note.length > 1 && (note[1] === `${sharp}` || note.includes(`${dblSharp}`))) {
        if (distanceToMove === 1 && chromaticScale[newIndex].length === 2) {
            enharmonicEquivalent = chromaticScale[newIndex][1];
        } else if (chromaticScale[newIndex].length === 2) {
            enharmonicEquivalent = chromaticScale[newIndex][0];
        } else {
            enharmonicEquivalent = chromaticScale[newIndex];
        }
    } else if (note.length > 1 && note[1] === `${flat}` || note.includes(`${dblFlat}`)) {
        if (distanceToMove === -1 && chromaticScale[newIndex].length === 2) {
            enharmonicEquivalent = chromaticScale[newIndex][0];
        } else if (chromaticScale[newIndex].length === 2) {
            enharmonicEquivalent = chromaticScale[newIndex][1];
        } else {
            enharmonicEquivalent = chromaticScale[newIndex];
        }
    }
    return enharmonicEquivalent;
  }

  const handleAlterChord = (e) => {
    const type = e.target.title
    const cards = ['ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6']
    const index = cards.indexOf(currentCard)
    const typeFunc = [setCh0, setCh1, setCh2, setCh3, setCh4, setCh5, setCh6]
    const altFunc = [setCh0Alt, setCh1Alt, setCh2Alt, setCh3Alt, setCh4Alt, setCh5Alt, setCh6Alt]
    const count = resetVoicingCount + 1
    typeFunc[index](type)
    altFunc[index](true)
    setResetVoicingCount(count)
  }

  const handleAlterChordWindow = (chord, list, root) => {
    if(!showAlter) {
      setShowAlter(true)
      setCurrentCard(chord)
      setCurrentList(list)
      setChordOptRoot(root)
    }
    if(showAlter) {
      setShowAlter(false)
      setCurrentCard('')
      setCurrentList('')
      setChordOptRoot('')
    }
  }

  const handleViewMenuWindow = () => {
    showViewMenu===true ? setShowViewMenu(false) : setShowViewMenu(true)
  }

  const handleTonicMenuWindow = () => {
    showTonicMenu ? setShowTonicMenu(false) : setShowTonicMenu(true)
  }

  const handleScaleMenuWindow = () => {
    showScaleMenu ? setShowScaleMenu(false) : setShowScaleMenu(true)
  }

  const handleStringsMenuWindow = () => {
    showStringsMenu===true ? setShowStringsMenu(false) : setShowStringsMenu(true)
  }

  const handleTutorialWindow = () => {
    if(!showTutorial) {
      setShowTutorial(true)
    }
    if(showTutorial) {
      setShowTutorial(false)
      setRenderView('Map Scales')
    }
  }

  const handleWelcomeWindow = () => {
    if(!showWelcome) {
      setShowWelcome(true)
    }
    if(showWelcome) {
      setShowWelcome(false)
      setHideScale('Show Scale')
    }
  }

  const handleConstructionFindStructuresWindow = () => {
    showFindStructures ? setShowFindStructures(false) : setShowFindStructures(true)
  }

  const handleChordFocus = (f) => {
    setChordFocus(f)
  }

  const handleChordDegrees = () => {
    if (displayChordDegrees) {
      setDisplayChordDegrees(false)
      setChordDegButtonClass('chordDegButton')
      setChordFocus('Neutral')
    }
    if (!displayChordDegrees) {
        setDisplayChordDegrees(true)
        setChordDegButtonClass('chordDegButton toggle_on chordDegToggle')
    }
  }

  const handleHide = (e) => { setHideScale(e.target.title) }

  const handleMoreSevenths = () => {
    if (sevenths2) {
      setSevenths2(false)
       setMoreSeventhsButton('Show 7th Chords')
    }
    else {
      setSevenths2(true)
      setMoreSeventhsButton('Show Triads')
    }
  }

  const handleNavChoice = (e) => {
    let choice = e.target.title
    if (choice === 'mapChords') {
      setRenderView('Map Chords')
      setSharedNotes([])
      setDisplayChordDegrees(false)
      setChordFocus('Neutral')
    }
    if (calcChord1.length > 0 && calcChord2.length > 0) {
      let copy = calcChord1.slice()
      let copy2 = calcChord2.slice()
      let [shared, checker, checker2, final] = [[], {}, {}, {}]

      copy.forEach((note) => {
        checker[note] = true
        checker[enharmonic(note)] = true
      })

      copy2.forEach((note) => {
        checker2[note] = true
        checker2[enharmonic(note)] = true
      })

      copy.forEach((note) => {
        let enharm = enharmonic(note)
        if (checker2[note] || checker2[enharm]) {
          final[note] = true
          final[enharm] = true
        }
      })

      copy2.forEach((note) => {
        let enharm = enharmonic(note)
        if (checker[note] || checker[enharm]) {
          final[note] = true
          final[enharm] = true
        }
      })

      for (let finalNote in final) {
        shared.push(finalNote)
      }
      updateShared(shared)
    }
    if (choice === 'mapScales') {
      setRenderView('Map Scales')
      setSharedNotes([])
      setDisplayChordDegrees(false)
      setChordFocus('Neutral')

      if (currentChordTones.length > 0 && currentChordTones2.length > 0) {
        let [checker, shared] = [{}, []]
        let notes = currentChordTones
        let notes2 = currentChordTones2
        notes.forEach((note) => { checker[note] = true })
        notes2.forEach((note) => {
          if (checker[note]) { shared.push(note) }
        })
        updateShared(shared)
      }
    }
    if (choice === 'findStructures') { handleConstructionFindStructuresWindow() }
    if (choice === 'tutorial') {
      setRenderView("Tutorial")
      handleTutorialWindow()
    }
  }

  const handleNeckNotes = (e) => { setLabelType(e.target.title) }

  const handleScaleChange = (e) => {
    let scale = e.target.title
    let name = e.target.outerText
    setScaleType(scale)
    setScaleName(name)
    getScale(tonic, scale)
  }

  const handleScaleChange2 = (e) => {
    let scale = e.target.value
    setScaleType(scale)
    getScale2(tonic2, scale)
  }

  const handleSecondScale = () => {
    if (second) {
      setSecond(false)
      setSecondButton('Compare a Scale')
    }
    else {
      setSecond(true)
      setSecondButton('Just One Scale')
    }
  }

  const handleSevenths = () => {
    if (sevenths) {
      setSevenths(false)
      setDefaultType('Triads')
    }
    else {
      setSevenths(true)
      setDefaultType('Seventh Chords')
    }
  }

  const handleSingleOrCompare = (e) => {
    if(compare) {
      setCompare(false)
      setCurrentChordTones2([])
      setChordTwoSelected(false)
      setChord2ObjKey('')
      setChordFocus('Neutral')
      setSharedNotes(false)
      setSelectedChord2({})
    }
    if(!compare) {
      setCompare(true)
    }
  }

  const handleStringChoice = (e) => {
    let dataArray = e.target.split('.')
    let [instrument, tuning] = [dataArray[0], dataArray[1]]
    let [strings, mirrored] = [dataArray.slice(2), []]
    strings.forEach((string) => {
      mirrored.unshift(string)
    })
    setCurrentStrings(strings)
    setCurrentStringsMirror(mirrored)
    setInstrument(instrument)
    setTuning(tuning)
  }

  const handleTonicChange = (e) => { getScale(e.target.title, scaleType) }

  const handleTonicChange2 = (e) => { getScale2(e.target.value, scaleType2) }

  const handleRootChange = (e, which) => {
    let root = e.target.outerText
    if (which === '1'){
      setRoot1(root)
      if(voicing1) {
        getChord(root, voicing1, which)
      }
    }
    if (which === '2'){
      setRoot2(root)
      if(voicing2) {
        getChord(root, voicing2, which)
      }
    }
  }

  const handleVoicingChange = (e, which) => {
    let spelling = e.target.outerText
    if(which === '1') {
      setVoicing1(spelling)
      if(root1) {
        getChord(root1, spelling, which)
      }
    }
    if(which === '2') {
      setVoicing2(spelling)
      if(root2) {
        getChord(root2, spelling, which)
      }
    }
  }

  const handleView = (e) => {
    let v = e.target.title
    let middle;
    let stringbox;

    if (v === 'Traditional View' || v === 'Mirror View') {
      middle = 'inner_middle';
      stringbox = 'stringbox';
    }

    if (v === "Lefty Traditional View" || v === "Lefty Mirror View") {
      middle = 'inner_middle_left';
      stringbox = 'stringbox_left';
    }
    setView(v)
    setMiddle(middle)
    setStringbox(stringbox)
    setLowestFret(0)
    setHighestFret(17)
    setNeckWindowMode('none')
    setUseCapo(false)
  }

  const markNote = (note) => { selNote === note ? setSelNote('') : setSelNote(note) }

  const resetCard = (chord) => {
    const count = resetVoicingCount - 1
    const cards = ['ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6']
    const index = cards.indexOf(chord)
    const typeFunc = [setCh0, setCh1, setCh2, setCh3, setCh4, setCh5, setCh6]
    const altFunc = [setCh0Alt, setCh1Alt, setCh2Alt, setCh3Alt, setCh4Alt, setCh5Alt, setCh6Alt]

    typeFunc[index]('Triad')
    altFunc[index](false)
    setResetVoicingCount(count)
  }

  const resetChords = () => {
    setCh0('Triad')
    setCh1('Triad')
    setCh2('Triad')
    setCh3('Triad')
    setCh4('Triad')
    setCh5('Triad')
    setCh6('Triad')
    setCh0Alt(false)
    setCh1Alt(false)
    setCh2Alt(false)
    setCh3Alt(false)
    setCh4Alt(false)
    setCh5Alt(false)
    setCh6Alt(false)
    setResetVoicingCount(0)
  }

  const setWholeNeck = () => {
    setLowestFret(0)
    setHighestFret(17)
    setNeckWindowMode('none')
    setUseCapo(false)
  }

  const resetAll = () => {
    setWholeNeck();
    if (renderView ==='Map Scales') {
      resetChords()
      setSelectedChord({})
      setSelectedChord2({})
      setCurrentChordTones([])
      setCurrentChordTones2([])
      setChordOneSelected(false)
      setChordTwoSelected(false)
      setSharedNotes([])
      setCompare(false)
      setDisplayChordDegrees(false)
      setChordDegButtonClass('chordDegButton')
      setChordFocus('Neutral')
      setSelNote('')
      setResetVoicingCount(0)
      setLowestFret(0)
      setHighestFret(17)
    }
    if (renderView === 'Map Chords') {
      clear('1')
      clear('2')
      setSharedNotes([])
      setDisplayChordDegrees(false)
      setChordDegButtonClass('chordDegButton')
      setChordFocus('Neutral')
      setLowestFret(0)
      setHighestFret(17)
    }
  }

  const selectChord = (chord, tones, key) => {
    if(chord === selectedChord && compare && !chordTwoSelected) {
      setSelectedChord({})
      setCurrentChordTones([])
      setChordOneSelected(false)
      setChordObjKey('')
      setCompare(false)
      setDisplayChordDegrees(false)
      setChordDegButtonClass('chordDegButton')
    }
    if(!chordOneSelected || !compare) {
      setCurrentChordTones(tones)
      setChordOneSelected(true)
      setChordObjKey(key)
      setSelectedChord(chord)
    }
    if (chord === selectedChord && !compare && chordOneSelected) {
      setSelectedChord({})
      setCurrentChordTones([])
      setChordOneSelected(false)
      setChordObjKey('')
      setDisplayChordDegrees(false)
      setChordDegButtonClass('chordDegButton')
    }
  }

  const selectChord2 = (chord, tones, key) => {
    let [notes, checker, shared] = [currentChordTones, {}, []]
    notes.forEach((note) => { checker[note] = true })
    tones.forEach((tone) => { if (checker[tone]) { shared.push(tone) } })
    if(!compare) {
      setSelectedChord2({})
      setCurrentChordTones2([])
      setChordTwoSelected(false)
      setChord2ObjKey('')
      setChordFocus('Neutral')
      setSharedNotes([])
    }
    if (chord === selectedChord) {
      setSelectedChord({})
      setSelectedChord2({})
      setCurrentChordTones([])
      setCurrentChordTones2([])
      setChordOneSelected(false)
      setChordTwoSelected(false)
      setChordFocus('Neutral')
      setSharedNotes([])
      setCompare(false)
      setDisplayChordDegrees(false)
      setChordDegButtonClass('chordDegButton')
      setChordObjKey('')
      setChord2ObjKey('')
    }
    else if (chord === selectedChord2) {
      setSelectedChord2({})
      setCurrentChordTones2([])
      setChordTwoSelected(false)
      setChordFocus('Neutral')
      setSharedNotes([])
      setChord2ObjKey('')
    }
    else {
      setSelectedChord2(chord)
      setCurrentChordTones2(tones)
      setChordTwoSelected(true)
      setSharedNotes(shared)
      setChord2ObjKey(key)
    }
  }

  const setStart = (fret) => { setLowestFret(fret) }
  const setEnd = (fret) => { setHighestFret(fret) }

  const setCapo = (fret) => {
    if(traditional || mirror) { setStart(fret) }
    if (lefty || leftyMirror) { setEnd(fret) }
    setUseCapo(true)
    setNeckWindowMode('none')
  }

  const changeNeckWindowMode = (choice) => {
    let current = neckWindowMode
    let left = (lefty || leftyMirror)
    choice !== current ? setNeckWindowMode(choice) : setNeckWindowMode('none')
    if((!left && choice === 'from start') || (left && choice === 'to end') || choice === 'window') {
      setUseCapo(false)
    }
  }

  const updateWindowCycle = (stage) => {
    setWindowCycle(stage)
    if (stage === 'off') { setNeckWindowMode('none') }
  }

  const setTones = (tones, key) => {
    setCurrentChordTones(tones)
    setChordObjKey(key)
  }

  const setTones2 = (tones, key) => {
    setCurrentChordTones2(tones)
    setChord2ObjKey(key)
  }

  const updateShared = (notes) => { setSharedNotes(notes) }

  return (
    <div className = "page">
      <div className="top">
        <Header
          handleNavChoice={handleNavChoice}
          renderView={renderView}
        />
        <Welcome
          showWelcome={showWelcome}
          handleWelcomeWindow={handleWelcomeWindow}
          handleNavChoice={handleNavChoice}
          />
        <ConstructionFindStructures
          showConstructionFindStructures={showFindStructures}
          handleConstructionFindStructuresWindow={handleConstructionFindStructuresWindow}
          handleNavChoice={handleNavChoice}
        />
        <Tutorial
          showTutorial={showTutorial}
          handleTutorialWindow={handleTutorialWindow}
        />
      </div>
        <ViewMenu
          handleView={handleView}
          handleViewMenuWindow={handleViewMenuWindow}
          showViewMenu={showViewMenu}
        />
        <StringsMenu
          handleStringChoice={handleStringChoice}
          handleStringsMenuWindow={handleStringsMenuWindow}
          showStringsMenu={showStringsMenu}
          name={'stringsMenu'}
        />
      <div className="neckDash">
        <NeckDash
          chordOneSelected={chordOneSelected}
          handleViewMenuWindow={handleViewMenuWindow}
          handleStringsMenuWindow={handleStringsMenuWindow}
          view={view}
          instrument={instrument}
          tuning={tuning}
          sharedNotes={sharedNotes}
          name={'hideScaleMenu'}
          handleHide={handleHide}
          resetAll={resetAll}
          resetVoicingCount={resetVoicingCount}
          selNote={selNote}
          render={renderView}
          chordDegButtonClass={chordDegButtonClass}
          handleChordDegrees={handleChordDegrees}
          root1={root1}
          root2={root2}
          voicing1={voicing1}
          voicing2={voicing2}
          displayChordDegrees={displayChordDegrees}
          chordFocus={chordFocus}
          handleNeckNotes={handleNeckNotes}
          setWholeNeck={setWholeNeck}
          setNeckWindowMode={changeNeckWindowMode}
          neckWindowMode={neckWindowMode}
          start={lowestFret}
          end={highestFret}
          setWindowCycle={updateWindowCycle}
          labelType={labelType}
          hideScale={hideScale}
          />
      </div>
      <div className="middle">
        <div className="neckComponent">

          {!['Violin', 'Viola', 'Cello'].includes(instrument) ?
            <FretGuide
              name ={'guideContainerUpper'}
              view={view}
              neckWindowMode={neckWindowMode}
              setStart={setStart}
              setEnd={setEnd}
              setCapo={setCapo}
              windowCycle={windowCycle}
              setWindowCycle={updateWindowCycle}
            />: null
          }
          <div className={`${middle}`}>
            <div className={`${stringbox}`}>
              <StringSet
                allStrings={strings}
                strings={currentStrings}
                stringsMirror={currentStringsMirror}
                stringsLeft={stringsLeft}
                scale={scale}
                scaleChord1={currentChordTones}
                scaleChord2={currentChordTones2}
                view={view}
                chordOneSelected={chordOneSelected}
                chordTwoSelected={chordTwoSelected}
                selectedChord={selectedChord}
                selectedChord2={selectedChord2}
                hideScale={hideScale}
                solfege={solfege}
                scaleDegrees={scaleDegrees}
                chordDegrees={chordDegrees}
                chordDegreesUpper={chordDegreesUpper}
                keyCenter={keyCenter}
                labelType={labelType}
                chordFocus={chordFocus}
                displayChordDegrees={displayChordDegrees}
                instrument={instrument}
                render={renderView}
                selNote={selNote}
                chordObjKey={chordObjKey}
                chord2ObjKey={chord2ObjKey}
                calcChord1={calcChord1}
                calcChord2={calcChord2}
                noteRefs1={noteRefs1}
                noteRefs2={noteRefs2}
                chordType1={chordType1}
                chordType2={chordType2}
                enharmonic={enharmonic}
                lowestFret={lowestFret}
                highestFret={highestFret}
                useCapo={useCapo}
              />
            </div>
          </div>
          {!['Violin', 'Viola', 'Cello'].includes(instrument) ?
            <FretGuide
              name ={'guideContainerLower'}
              view={view}
              neckWindowMode={neckWindowMode}
              setStart={setStart}
              setEnd={setEnd}
              setCapo={setCapo}
              windowCycle={windowCycle}
              setWindowCycle={updateWindowCycle}
            />: null
          }
        </div>
      </div>
      {renderView === 'Map Scales' ?
        <div className='map_scales_bottom_render'>
          <MapScalesRender
            ch0={ch0}
            ch1={ch1}
            ch2={ch2}
            ch3={ch3}
            ch4={ch4}
            ch5={ch5}
            ch6={ch6}
            ch0Alt={ch0Alt}
            ch1Alt={ch1Alt}
            ch2Alt={ch2Alt}
            ch3Alt={ch3Alt}
            ch4Alt={ch4Alt}
            ch5Alt={ch5Alt}
            ch6Alt={ch6Alt}
            chordDegButtonClass={chordDegButtonClass}
            chordFocus={chordFocus}
            chordOneSelected={chordOneSelected}
            chordTwoSelected={chordTwoSelected}
            compareChords={compare}
            currentCard={currentCard}
            currentChord={selectedChord}
            currentChord2={selectedChord2}
            currentChordTones={currentChordTones}
            currentChordTones2={currentChordTones2}
            defaultType={defaultType}
            displayChordDegrees={displayChordDegrees}
            handleAlterChord={handleAlterChord}
            handleAlterChordWindow={handleAlterChordWindow}
            handleChordDegrees={handleChordDegrees}
            handleChordFocus={handleChordFocus}
            handleLock={handleSingleOrCompare}
            handleNeckNotes={handleNeckNotes}
            handleScaleChange={handleScaleChange}
            handleScaleChange2={handleScaleChange2}
            handleScaleMenuWindow={handleScaleMenuWindow}
            handleSevenths={handleSevenths}
            handleTonicChange={handleTonicChange}
            handleTonicChange2={handleTonicChange2}
            handleTonicMenuWindow={handleTonicMenuWindow}
            keyCenter={keyCenter}
            list={currentList}
            markNote={markNote}
            resetCard={resetCard}
            resetChords={resetChords}
            resetVoicingCount={resetVoicingCount}
            root={chordOptRoot}
            scale={scale}
            scaleName={scaleName}
            selectChord={selectChord}
            selectChord2={selectChord2}
            selNote={selNote}
            setTones={setTones}
            setTones2={setTones2}
            sevenths={sevenths}
            sharedNotes={sharedNotes}
            showAlter={showAlter}
            showScaleMenu={showScaleMenu}
            showTonicMenu={showTonicMenu}
            tonic={tonic}
            updateShared={updateShared}
          />
        </div>
        :
        renderView === 'Map Chords' ?
        <MapChordsRender
          handleRootChange={handleRootChange}
          handleVoicingChange={handleVoicingChange}
          root1={root1}
          root2={root2}
          voicing1={voicing1}
          voicing2={voicing2}
          chord1={calcChord1}
          chord2={calcChord2}
          clear={clear}
          handleChordFocus={handleChordFocus}
          chordFocus={chordFocus}
          sharedNotes={sharedNotes}
        />
        : renderView === 'Beginner' ?
        <BeginnerNeck/>
        :null
      }
    </div>
  )
}

export default App;

