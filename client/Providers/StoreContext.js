import React, { useState, createContext, useContext } from 'react';
import { Constants } from './Constants.js';
import axios from 'axios';

const {sharp, flat, dblSharp, dblFlat, natural, dim, standard, standardMirror, enharmonic} = Constants;

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [calcChord1, setCalcChord1] = useState([]);
  const [calcChord2, setCalcChord2] = useState([]);
  const [ch0, setCh0] = useState('Triad');
  const [ch1, setCh1] = useState('Triad');
  const [ch2, setCh2] = useState('Triad');
  const [ch3, setCh3] = useState('Triad');
  const [ch4, setCh4] = useState('Triad');
  const [ch5, setCh5] = useState('Triad');
  const [ch6, setCh6] = useState('Triad');
  const [ch0Alt, setCh0Alt] = useState(false);
  const [ch1Alt, setCh1Alt] = useState(false);
  const [ch2Alt, setCh2Alt] = useState(false);
  const [ch3Alt, setCh3Alt] = useState(false);
  const [ch4Alt, setCh4Alt] = useState(false);
  const [ch5Alt, setCh5Alt] = useState(false);
  const [ch6Alt, setCh6Alt] = useState(false);
  const [chords, setChords] = useState({});
  const [chordDegrees, setChordDegrees] = useState({});
  const [chordDegreesUpper, setChordDegreesUpper] = useState({});
  const [chordOneSelected, setChordOneSelected] = useState(false);
  const [chordObjKey, setChordObjKey] = useState('');
  const [chord2ObjKey, setChord2ObjKey] = useState('');
  const [chordOptRoot, setChordOptRoot] = useState('');
  const [chordTwoSelected, setChordTwoSelected] = useState(false);
  const [chordType1, setChordType1] = useState({});
  const [chordType2, setChordType2] = useState({});
  const [chordFocus, setChordFocus] = useState('Neutral');
  const [currentCard, setCurrentCard] = useState('');
  const [compare, setCompare] = useState(false);
  const [currentChordTones, setCurrentChordTones] = useState([]);
  const [currentChordTones2, setCurrentChordTones2] = useState([]);
  const [currentList, setCurrentList] = useState('');
  const [currentStrings, setCurrentStrings] = useState(standard);
  const [currentStringsMirror, setCurrentStringsMirror] = useState(standardMirror);
  const [defaultType, setDefaultType] = useState('Triads');
  const [displayChordDegrees, setDisplayChordDegrees] = useState(false);
  const [hideScale, setHideScale] = useState('Show Scale');
  const [highestFret, setHighestFret] = useState(17);
  const [instrument, setInstrument] = useState('Guitar');
  const [keyCenter, setKeyCenter] = useState({});
  const [labelType, setLabelType] = useState('Note Names');
  const [lowestFret, setLowestFret] = useState(0);
  const [middle, setMiddle] = useState('inner_middle');
  const [neckWindowMode, setNeckWindowMode] = useState('none');
  const [noteRefs1, setNoteRefs1] = useState({});
  const [noteRefs2, setNoteRefs2] = useState({});
  const [renderView, setRenderView] = useState('Welcome');
  const [resetVoicingCount, setResetVoicingCount] = useState(0);
  const [root1, setRoot1] = useState('');
  const [root2, setRoot2] = useState('');
  const [scale, setScale] = useState([]);
  const [scaleDegrees, setScaleDegrees] = useState({});
  const [scaleType, setScaleType] = useState('major');
  const [scaleName, setScaleName] = useState('Major');
  const [selectedChord, setSelectedChord] = useState({});
  const [selectedChord2, setSelectedChord2] = useState({});
  const [selNote, setSelNote] = useState('');
  const [sevenths, setSevenths] = useState(false);
  const [sharedNotes, setSharedNotes] = useState([]);
  const [showAlter, setShowAlter] = useState(false);
  const [showFindStructures, setShowFindStructures] = useState(false);
  const [showScaleMenu, setShowScaleMenu] = useState(false);
  const [showStringsMenu, setShowStringsMenu] = useState(false);
  const [showTonicMenu, setShowTonicMenu] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showViewMenu, setShowViewMenu] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [solfege, setSolfege] = useState({});
  const [strings, setStrings] = useState({});
  const [stringbox, setStringbox] = useState('stringbox');
  const [stringsLeft, setStringsLeft] = useState({});
  const [tonic, setTonic] = useState('');
  const [tuning, setTuning] = useState(' E A D G B E ');
  const [useCapo, setUseCapo] = useState(false);
  const [view, setView] = useState('Traditional View');
  const [voicing1, setVoicing1] = useState('');
  const [voicing2, setVoicing2] = useState('');
  const [windowCycle, setWindowCycle] = useState('start');



  const mapScales = renderView === 'Map Scales';
  const mapChords = renderView === 'Map Chords';
  const welcome = renderView === 'Welcome';
  const tutorial = renderView === 'Tutorial';

  const trad = view === 'Traditional View';
  const mirror = view === 'Mirror View';
  const leftyTrad = view === 'Lefty Traditional View';
  const leftyMirror = view === 'Lefty Mirror View';
  const lefty = (leftyTrad || leftyMirror);
  const mirrorViews = (mirror || leftyMirror);

  const focus1 = chordFocus === 'Focus 1';
  const focus2 = chordFocus === 'Focus 2';
  const neutral = chordFocus === 'Neutral';

  const showScale = hideScale === 'Show Scale';
  const hiddenScale= hideScale === 'Hide Scale';
  const unfocusScale = hideScale === 'Unfocus Scale';

  const noteNameLabels = labelType === 'Note Names';
  const scaleDegLabels = labelType === 'Scale Degrees';
  const solfegeLabels = labelType === 'Solfege';

  const windowMode = neckWindowMode === 'window';
  const startMode = neckWindowMode === 'from start';
  const endMode = neckWindowMode === 'to end';
  const cycleStart = windowCycle === 'start';
  const cycleEnd = windowCycle === 'end';
  const capoMode = neckWindowMode === 'capo';
  const modeActive = neckWindowMode !== 'none';


  const clear = (which) => {
    if (which === '1') {
      setCalcChord1([]);
      setNoteRefs1({});
      setChordType1({});
      setVoicing1('');
      setRoot1('');
      setChordFocus('Neutral');
      setSharedNotes([]);
    }
    if (which === '2') {
      setCalcChord2([]);
      setNoteRefs2({});
      setChordType2({});
      setVoicing2('');
      setRoot2('');
      setChordFocus('Neutral');
      setSharedNotes([]);
    }
  }


  const getChord = (root, type, which) => {
    axios.get('/chord', { params: { root: root, type: type } })
      .then((res) => {
        if (which === '1') {
          setCalcChord1(res.data.chordNotes);
          setNoteRefs1(res.data.noteRefs);
          setChordType1(res.data.type);
        }
        if (which === '2') {
          setCalcChord2(res.data.chordNotes);
          setNoteRefs2(res.data.noteRefs);
          setChordType2(res.data.type);
        }
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 213 ~ App ~ getChord ~ err", err)
      })
  }


  const updateSharedNotes = () => {
    let shared = [];
    if(mapScales) {
      if (currentChordTones.length > 0 && currentChordTones2.length > 0) {
        let checker = {};
        currentChordTones.forEach((note) => { checker[note] = true });
        currentChordTones2.forEach((note) => {
          if (checker[note]) { shared.push(note); }
        });
      }
    }
    if(mapChords) {
      if (calcChord1.length > 0 && calcChord2.length > 0) {
        let [checker, checker2, final] = [{}, {}, {}];

        calcChord1.forEach((note) => {
          checker[note] = true;
          checker[enharmonic(note)] = true;
        })
        calcChord2.forEach((note) => {
          checker2[note] = true;
          checker2[enharmonic(note)] = true;
        })
        calcChord1.forEach((note) => {
          let enharm = enharmonic(note);
          if (checker2[note] || checker2[enharm]) {
            final[note] = true;
            final[enharm] = true;
          }
        })
        calcChord2.forEach((note) => {
          let enharm = enharmonic(note);
          if (checker[note] || checker[enharm]) {
            final[note] = true;
            final[enharm] = true;
          }
        })
        for (let finalNote in final) {
          if(calcChord1.includes(finalNote) || calcChord2.includes(finalNote)){
            shared.push(finalNote);
          }
        }
      }
    }
    setSharedNotes(shared);
  }


  const getDegrees = () => {
    axios.get('/degrees')
      .then((res) => {
        setSolfege(res.data.solfege);
        setScaleDegrees(res.data.scaleDegrees);
        setChordDegrees(res.data.chordDegrees);
        setChordDegreesUpper(res.data.chordDegreesUpper);
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 85 ~ App ~ getDegrees ~ err", err);
      })
  }

  const getScale = (key, scale) => {
    resetAll();
    axios.get('/scales', { params: { key: key, scale: scale } })
      .then((res) => {
        setKeyCenter(res.data);
        setTonic(res.data.tonic);
        setScale(res.data.scale);
        setChords(res.data.chords);
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 266 ~ App ~ getScale ~ err", err);
      })
  }


  const getStrings = () => {
    axios.get('/strings')
    .then((res) => {
      setStrings(res.data.right);
      setStringsLeft(res.data.left);
    })
    .catch((err) => {
      console.log("🚀 ~ file: App.jsx ~ line 29 ~ App ~ getStrings ~ err", err);
    })
  }


  const handleAlterChord = (e) => {
    const type = e.target.title;
    const cards = ['ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6'];
    const index = cards.indexOf(currentCard);
    const typeFunc = [setCh0, setCh1, setCh2, setCh3, setCh4, setCh5, setCh6];
    const altFunc = [setCh0Alt, setCh1Alt, setCh2Alt, setCh3Alt, setCh4Alt, setCh5Alt, setCh6Alt];
    const count = resetVoicingCount + 1;
    typeFunc[index](type);
    altFunc[index](true);
    setResetVoicingCount(count);
  }


  const handleAlterChordWindow = (chord, list, root) => {
    if(!showAlter) {
      setShowAlter(true);
      setCurrentCard(chord);
      setCurrentList(list);
      setChordOptRoot(root);
    }
    if(showAlter) {
      setShowAlter(false);
      setCurrentCard('');
      setCurrentList('');
      setChordOptRoot('');
    }
  }


  const handleChordDegrees = () => {
    if (displayChordDegrees) { setDisplayChordDegrees(false); setChordFocus('Neutral'); }
    if (!displayChordDegrees) { setDisplayChordDegrees(true); }
  }


  const handleNavChoice = (e) => {
    setDisplayChordDegrees(false);
    setChordFocus('Neutral');
    if (e.target.title === 'mapChords') { setRenderView('Map Chords'); }
    if (e.target.title === 'mapScales') { setRenderView('Map Scales'); }
  }


  const handleScaleChange = (e) => {
    let [scale, name] = [e.target.title, e.target.outerText];
    setScaleType(scale);
    setScaleName(name);
    getScale(tonic, scale);
  }


  const handleSevenths = () => {
    sevenths ? setSevenths(false) : (setSevenths(true))
    sevenths ? setDefaultType('Triads') : setDefaultType('Seventh Chords')
  }


  const handleSingleOrCompare = (e) => {
    if(compare) { setCompare(false); resetSelectedChord2(); }
    if(!compare) { setCompare(true); }
  }


  const handleStringChoice = (e) => {
    let dataArray = e.target.title.split('.');
    let [instrument, tuning] = [dataArray[0], dataArray[1]];
    let [strings, mirrored] = [dataArray.slice(2), []];
    strings.forEach((string) => { mirrored.unshift(string) });

    setCurrentStrings(strings);
    setCurrentStringsMirror(mirrored);
    setInstrument(instrument);
    setTuning(tuning);
  }


  const handleRootChange = (e, which) => {
    let root = e.target.outerText;
    if (which === '1'){
      setRoot1(root);
      if(voicing1) { getChord(root, voicing1, which); }
    }
    if (which === '2'){
      setRoot2(root);
      if(voicing2) { getChord(root, voicing2, which); }
    }
  }


  const handleVoicingChange = (e, which) => {
    let spelling = e.target.outerText;
    if(which === '1') {
      setVoicing1(spelling);
      if(root1) { getChord(root1, spelling, which); }
    }
    if(which === '2') {
      setVoicing2(spelling);
      if(root2) { getChord(root2, spelling, which); }
    }
  }


  const handleView = (e) => { setView(e.target.title);  setWholeNeck(); }


  const markNote = (note) => { selNote === note ? setSelNote('') : setSelNote(note) }


  const resetCard = (chord) => {
    const count = resetVoicingCount - 1;
    const cards = ['ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6'];
    const index = cards.indexOf(chord);
    const typeFunc = [setCh0, setCh1, setCh2, setCh3, setCh4, setCh5, setCh6];
    const altFunc = [setCh0Alt, setCh1Alt, setCh2Alt, setCh3Alt, setCh4Alt, setCh5Alt, setCh6Alt];
    typeFunc[index]('Triad');
    altFunc[index](false);
    setResetVoicingCount(count);
  }


  const resetChords = () => {
    setCh0('Triad');
    setCh1('Triad');
    setCh2('Triad');
    setCh3('Triad');
    setCh4('Triad');
    setCh5('Triad');
    setCh6('Triad');
    setCh0Alt(false);
    setCh1Alt(false);
    setCh2Alt(false);
    setCh3Alt(false);
    setCh4Alt(false);
    setCh5Alt(false);
    setCh6Alt(false);
    setResetVoicingCount(0);
  }


  const setWholeNeck = () => {
    setLowestFret(0);
    setHighestFret(17);
    setNeckWindowMode('none');
    setUseCapo(false);
  }


  const resetAll = () => {
    setWholeNeck();
    if (mapScales) {
      resetChords();
      resetSelectedChord();
      resetSelectedChord2();
      setSelNote('');
      setCompare(false);
    }
    if (mapChords) {
      clear('1');
      clear('2');
      setSharedNotes([]);
      setDisplayChordDegrees(false);
      setChordFocus('Neutral');
    }
  }


  const resetSelectedChord = () => {
    setSelectedChord({});
    setCurrentChordTones([]);
    setChordOneSelected(false);
    setChordObjKey('');
    setDisplayChordDegrees(false);

  }


  const resetSelectedChord2 = () => {
  setSelectedChord2({});
  setCurrentChordTones2([]);
  setChordTwoSelected(false);
  setChord2ObjKey('');
  setChordFocus('Neutral');
  setSharedNotes([]);
  }


  const selectChord = (chord, tones, key) => {
    if(chord === selectedChord && compare && !chordTwoSelected) {
      resetSelectedChord();
      setCompare(false);
    }
    if(!chordOneSelected || !compare) {
      setCurrentChordTones(tones);
      setChordOneSelected(true);
      setChordObjKey(key);
      setSelectedChord(chord);
    }
    if (chord === selectedChord && !compare && chordOneSelected) {
      resetSelectedChord();
    }
  }


  const selectChord2 = (chord, tones, key) => {
    let [notes, checker, shared] = [currentChordTones, {}, []];
    notes.forEach((note) => { checker[note] = true });
    tones.forEach((tone) => { if (checker[tone]) { shared.push(tone) } });
    console.log("CONDITION CHECK", chord === selectedChord2)
    if(chord == selectedChord2) {
      console.log('HIT THE IF STATEMENT IN THE SELECTCHORD2 FUNCTION!!!!')
      resetSelectedChord2();
    }
    else if (chord === selectedChord) {
      resetSelectedChord();
      resetSelectedChord2();
      setCompare(false);
    }
    else {
      setSelectedChord2(chord);
      setCurrentChordTones2(tones);
      setChordTwoSelected(true);
      setSharedNotes(shared);
      setChord2ObjKey(key);
    }
  }


  const setCapo = (fret) => {
    lefty ? setHighestFret(fret) : setLowestFret(fret)
    setUseCapo(true);
    setNeckWindowMode('none');
  }


  const changeNeckWindowMode = (choice) => {
    choice !== neckWindowMode ? setNeckWindowMode(choice) : setNeckWindowMode('none')
    if((!lefty && choice === 'from start') || (lefty && choice === 'to end') || choice === 'window') {
      setUseCapo(false);
    }
  }


  const updateWindowCycle = (stage) => {
    setWindowCycle(stage);
    if (stage === 'off') { setNeckWindowMode('none') }
  }


  const setTones = (tones, key) => { setCurrentChordTones(tones);  setChordObjKey(key); }


  const setTones2 = (tones, key) => { setCurrentChordTones2(tones); setChord2ObjKey(key); }


  const store = {
    State: {
      calcChord1: calcChord1,
      calcChord2: calcChord2,
      ch0: ch0,
      ch1: ch1,
      ch2: ch2,
      ch3: ch3,
      ch4: ch4,
      ch5: ch5,
      ch6: ch6,
      ch0Alt: ch0Alt,
      ch1Alt: ch1Alt,
      ch2Alt: ch2Alt,
      ch3Alt: ch3Alt,
      ch4Alt: ch4Alt,
      ch5Alt: ch5Alt,
      ch6Alt: ch6Alt,
      chordDegrees: chordDegrees,
      chordDegreesUpper: chordDegreesUpper,
      chordOneSelected: chordOneSelected,
      chordObjKey: chordObjKey,
      chord2ObjKey: chord2ObjKey,
      chordOptRoot: chordOptRoot,
      chordTwoSelected: chordTwoSelected,
      chordType1: chordType1,
      chordType2: chordType2,
      chordFocus: chordFocus,
      currentCard: currentCard,
      compare: compare,
      currentChordTones: currentChordTones,
      currentChordTones2: currentChordTones2,
      currentList: currentList,
      currentStrings: currentStrings,
      currentStringsMirror: currentStringsMirror,
      defaultType: defaultType,
      displayChordDegrees: displayChordDegrees,
      hideScale: hideScale,
      highestFret: highestFret,
      instrument: instrument,
      keyCenter: keyCenter,
      labelType: labelType,
      lowestFret: lowestFret,
      middle: middle,
      neckWindowMode: neckWindowMode,
      noteRefs1: noteRefs1,
      noteRefs2: noteRefs2,
      renderView: renderView,
      resetVoicingCount: resetVoicingCount,
      root1: root1,
      root2: root2,
      scale: scale,
      scaleDegrees: scaleDegrees,
      scaleName: scaleName,
      scaleType: scaleType,
      selectedChord: selectedChord,
      selectedChord2: selectedChord2,
      selNote: selNote,
      sevenths: sevenths,
      sharedNotes: sharedNotes,
      showAlter: showAlter,
      showFindStructures: showFindStructures,
      showScaleMenu: showScaleMenu,
      showStringsMenu: showStringsMenu,
      showTonicMenu: showTonicMenu,
      showTutorial: showTutorial,
      showViewMenu: showViewMenu,
      showWelcome: showWelcome,
      solfege: solfege,
      strings: strings,
      stringbox: stringbox,
      stringsLeft: stringsLeft,
      tonic: tonic,
      tuning: tuning,
      useCapo: useCapo,
      view: view,
      voicing1: voicing1,
      voicing2: voicing2,
      windowCycle: windowCycle,
    },
    Setters: {
      setNeckWindowMode: setNeckWindowMode,
      setWindowCycle: setWindowCycle,
      clear: clear,
      updateSharedNotes: updateSharedNotes,
      getDegrees: getDegrees,
      getScale: getScale,
      getStrings: getStrings,
      enharmonic: enharmonic,
      handleAlterChord: handleAlterChord,
      handleAlterChordWindow: handleAlterChordWindow,
      handleChordDegrees: handleChordDegrees,
      handleNavChoice: handleNavChoice,
      handleScaleChange: handleScaleChange,
      handleSevenths: handleSevenths,
      handleSingleOrCompare: handleSingleOrCompare,
      handleStringChoice: handleStringChoice,
      handleRootChange: handleRootChange,
      handleVoicingChange: handleVoicingChange,
      handleView: handleView,
      markNote: markNote,
      resetCard: resetCard,
      resetChords: resetChords,
      setWholeNeck: setWholeNeck,
      resetAll: resetAll,
      selectChord: selectChord,
      selectChord2: selectChord2,
      setLowestFret: setLowestFret,
      setHighestFret: setHighestFret,
      setCapo: setCapo,
      setChordFocus: setChordFocus,
      setHideScale: setHideScale,
      setLabelType: setLabelType,
      setRenderView: setRenderView,
      setSharedNotes: setSharedNotes,
      setShowFindStructures: setShowFindStructures,
      setShowTonicMenu: setShowTonicMenu,
      setShowTutorial: setShowTutorial,
      setShowScaleMenu: setShowScaleMenu,
      setShowStringsMenu: setShowStringsMenu,
      setShowViewMenu: setShowViewMenu,
      setShowWelcome: setShowWelcome,
      setTones: setTones,
      setTones2: setTones2,
      updateWindowCycle: updateWindowCycle
    },
    Conditions: {
      mapScales: mapScales,
      mapChords: mapChords,
      welcome: welcome,
      tutorial: tutorial,
      trad: trad,
      mirror: mirror,
      leftyTrad: leftyTrad,
      leftyMirror: leftyMirror,
      lefty: lefty,
      mirrorViews: mirrorViews,
      focus1: focus1,
      focus2: focus2,
      neutral: neutral,
      showScale: showScale,
      hiddenScale: hiddenScale,
      unfocusScale: unfocusScale,
      noteNameLabels: noteNameLabels,
      scaleDegLabels: scaleDegLabels,
      solfegeLabels: solfegeLabels,
      windowMode: windowMode,
      startMode: startMode,
      endMode: endMode,
      cycleStart: cycleStart,
      cycleEnd: cycleEnd,
      capoMode: capoMode,
      modeActive: modeActive
    }
 }
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStoreContext = () => useContext(StoreContext)



