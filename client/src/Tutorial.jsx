import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

var Tutorial = ({showTutorial, handleTutorialWindow}) => {

  var views = ['Traditional View', 'Mirror View', 'Lefty Traditional View', 'Lefty Mirror View']

  return (
    <Modal
      className='tutorial'
      show={showTutorial}
      onHide={() => {handleTutorialWindow()}}
    >
      <Modal.Header
        closeButton
        closeVariant='white'
      >
          <a id="top"> </a>
      </Modal.Header>
          <span className="tutorial_header toggle_on">
            Strings Theory Tutorial
          </span>
        <div
          className='tutorial_body'
          title = 'tutorial'
        >
          <div className="feature_header toggle_on">Map Scales</div>
          <div className="tutorial_topic_header toggle_on tutorial_contents">Contents</div>
          <div><a href="#neck_view">Changing the Neck View</a></div>
          <div><a href="#instrument_tuning">Changing Instrument or Tuning</a></div>
          <div><a href="#get_scales">Look Up A Scale</a></div>
          <div><a href="#select_single_notes">The Single Note Marker</a></div>
          <div><a href="#label_types_and_default_voicing">Label Types and Default Voicings</a></div>
          <div><a href="#selecting_chord1">Selecting a chord</a></div>
          <div><a href="#scale_visibility">Changing Scale Visibility</a></div>
          <div><a href="#chord_degrees">The Chord Degree Toggle</a></div>
          <div><a href="#second_chord">Locking chords and Selecting a Second Chord</a></div>
          <div><a href="#focus">Focus Toggle</a></div>
          <div><a href="#alter_chords">Altering and Resetting Chord Card Structures</a></div>
          <div><a href="#reset_all">The Reset All Button</a></div>

          <div className="tutorial_topic_header toggle_on first_topic" id="neck_view">Changing the Neck View</div>
          <div>First, choose how you would like to view the neck. By default, the neck is in <span className="toggle_on">Traditional View</span>(notes stacked with the lowest on the bottom and the highest notes on the top). You can change this by clicking on <span className="toggle_on">Traditional View</span> in the upper left of the page. Strings Theory provides 3 other ways to view the neck. <span className="toggle_on">Mirror View</span> displays the low notes on top and the high notes on the bottom (this emulates looking at your hands in a mirror). <span className="toggle_on">Lefty Traditional View</span> and <span className="toggle_on">Lefty Mirror View</span> do the same things respectively in addition to the neck switching directions from (low->high) to (high->low). <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/I9QN347uJmAcE6oqOF/giphy.gif"/>

          <div className="tutorial_topic_header toggle_on" id="instrument_tuning">Changing Instrument or Tuning</div>
          <div>You can choose from several instruments in multiple tunings. Click <span className="toggle_on">Guitar: E A D G B E</span> to change the instrument and tuning. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/igIsud0EoGotF0XuMk/giphy.gif"/>

          <div className="tutorial_topic_header toggle_on" id="get_scales">Look Up A Scale</div>
          <div>You can look up several scales in all 12 keys and the neck display, scale display, and chord cards will update accordingly. You can change the tonic and scale independently. For example, to change the scale when the app first opens, click the <span className="toggle_on">C</span> to change the tonic pitch or click on <span className="toggle_on">Major</span> to change the type of scale. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/1DZfvEO5LmFbaKh2B2/giphy.gif"/>

          <a className="tutorial_topic_header toggle_on" id="select_single_notes">The Single Note Marker</a>
          <div>If no chord is selected, clicking on a note name in the scale display will <span className="targetNoteTutorial">mark</span> all locations of the selected note on the neck and will also <span className="targetNoteTutorial">highlight</span> the selected note name in all of the chord cards that contain it. Click the currently <span className="targetNoteTutorial">selected note</span> to clear selection. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/4vWRmkcBdV3jM0CAO6/giphy.gif"/>

          <a className="tutorial_topic_header toggle_on" id="label_types_and_default_voicing">Label Types and Default Voicings</a>
          <div>The notes on the neck can be viewed as <span className="toggle_on">Note Names</span>(A, B, C, D, E, F, G, ect..), <span className="toggle_on">Scale Degrees</span>(1,2,3,4,5,6,7, ect...), or <span className="toggle_on">Solfege</span>(do, re, mi, fa, sol, la, ti, do, ect...). The "Default Voicing" toggle selects what type of voicing the chords fall back to when reset. "Default Voicing" can be <span className="toggle_on">Triads</span> or <span className="toggle_on">Seventh Chords</span>. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/GFytdYT3e1GTr4K0dC/giphy.gif"/>

          <a className="tutorial_topic_header toggle_on" id="selecting_chord1">Selecting a chord</a>
          <div>When a chord card is selected it will <span className="chord1Tutorial">glow</span> and the notes of the chord will be <span className="chord1Tutorial">highlighted</span> on the neck and in the scale display. Click the currently <span className="chord1Tutorial">selected chord</span> card to clear selection. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/9bV454prI06Tdf7RfA/giphy.gif"/>

          <a className="tutorial_topic_header toggle_on" id="scale_visibility">Changing Scale Visibility</a>
          <div>The scale visibity can be toggled as needed. The scale can be set to <span className="toggle_on">Visible</span>(fully visible), <span className="toggle_on">Unfocused</span>(partially transparent), or <span className="toggle_on">Hidden</span>. If a <span className="chord1Tutorial">chord is selected</span>, it will not be affected by this toggle. This allows you to see chords more clearly and choose what you need to see. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/Yd1Rk35ZvNNqueD1TU/giphy.gif"/>

          <a className="tutorial_topic_header toggle_on" id="chord_degrees">The Chord Degree Toggle</a>
          <div>If a <span className="chord1Tutorial">chord is selected</span>, a "Chord Degrees" button will appear in the dash and will be initially toggled off. When <span className="toggle_on">Chord Degrees</span> is clicked and activated, the notes that are contained in the <span className="chord1Tutorial">selected chord</span> will display as chord degrees(R, 3rd, 5th, ect...) on the neck. If <span className="chord1Tutorial">two chords</span> <span className="chord2Tutorial">are selected</span>, the chord degrees will not appear on the neck until a chord is <span className="toggle_on">Focused</span>. (see section on <a href="#second_chord">Selecting a Second Chord</a> and section on <a href="#focus">Focus</a>) <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/9bPGXl6gGx4zeKXBXM/giphy.gif"/>

          <a className="tutorial_topic_header toggle_on" id="second_chord">Locking chords and Selecting a Second Chord</a>
          <div>When a <span className="chord1Tutorial">chord is selected</span>, a "Lock" toggle will appear on the chord card. If the user clicks this toggle, it will <span className="toggle_on">Lock</span> the chord and allow for a <span className="chord2Tutorial">second chord</span> to be <span className="chord2Tutorial">selected</span>. The notes of the <span className="chord2Tutorial">second chord</span> will also <span className="chord2Tutorial">highlighted</span> on the neck and in the scale display. The remaining notes that do not belong to either chord will automatically be hidden. If the two chords share notes, the <span className="sharedNoteTutorial">Shared Notes</span> indicator will <span className="sharedNoteTutorial">glow</span> in the upper right corner and the note names of the <span className="sharedNoteTutorial">shared notes</span> inside the chord cards and in the scale display will also <span className="sharedNoteTutorial">glow</span>. The <span className="sharedNoteTutorial">shared notes</span> will be <span className="sharedNoteTutorial">highlighted</span> on the neck. Click on the current <span className="chord2Tutorial">second chord</span> to clear the <span className="chord2Tutorial">second chord</span> selection. The <span className="toggle_on">Locked</span> chord can be unlocked by clicking the toggle again. Both chord selections can be cleared by clicking the <span className="toggle_on">Locked</span> <span className="chord1Tutorial">chord</span>. </div>
          <div>Any alterations made to either chord will be immediately relfected in the neck display, scale display, and chord cards.(see section on <a href="#alter_chords">Alterations</a>) <a href="#top">Back to Top</a></div>
          <img className="tutorialGif_upper"src="https://media.giphy.com/media/2mxIRT4tYqfjCd9pI9/giphy.gif"/>
          <img className="tutorialGif" src="https://media.giphy.com/media/D1Ho0OKm5ugM0tpSpu/giphy.gif"/>

          <div className="tutorial_topic_header toggle_on" id="focus">Focus Toggle</div>
          <div>If <span className="chord1Tutorial">two chords</span> <span className="chord2Tutorial">are selected</span>, a "Focus" toggle will appear on each. By default, "Focus" is neutral, both cards' toggle displays as "Focus", and all notes on the neck are equally visible. When this button clicked, the focus moves to the chosen chord. One chord card toggle will read <span className="toggle_on">Focused</span> and the other "Unfocused". The notes of the <span className="toggle_on">Focused</span> chord remain fully visible (including <span className="sharedNoteTutorial">shared notes</span> ) and the notes of the "Unfocused" chord will become partially transparent to make the <span className="toggle_on">Focused</span> chord more readable. Clicking on the "Unfocused" toggle will shift the chord focus that chord and the toggle labels will switch. Clicking on the <span className="toggle_on">Focused</span> toggle will return the Focus to neutral. If <span className="toggle_on">Chord Degrees</span> is toggled on, the chord degrees of the <span className="toggle_on">Focused</span> chord will be displayed. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/rW4BR9jvafN6IEBWXt/giphy.gif"/>

          <a className="tutorial_topic_header toggle_on" id="alter_chords">Altering Chord Card Structures and Voicing Resets</a>
          <div>Each chord can be altered idependently. If you click the "Alter Me" button on a chord card, a menu opens which will display postion specific options for the selected chord. Each menu will only dispay structures that are diatonically available to that specific chord in that specific key. You can choose between several chord alerations and pentatonic scales. On the altered chord card, a <span className="targetNoteTutorial">Reset Me</span> button will appear. The <span className="targetNoteTutorial">Reset Me</span> button can independently reset the chord card. Additionally, if any of the chords have been altered, the <span className="targetNoteTutorial">Reset Voicings</span> button at the end of the lower dash will glow red, indicating that there are chords to reset. Clicking <span className="targetNoteTutorial">Reset Voicings</span> will return all of the chords back to the default voicing. If a chord has been altered, it will not be affected by a default chord change until it is reset. The notes added or subtracted from the voicing will render accordingly on the neck, in the scale display, and on the chord cards. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif_upper" src="https://media.giphy.com/media/0Gj4OkDPQQoNwePReF/giphy.gif"/>
          <img className="tutorialGif" src="https://media.giphy.com/media/TF9pU92RbiWRMA3tJs/giphy.gif"/>

          <a className="tutorial_topic_header toggle_on" id="reset_all">The Reset All Button</a>
          <div>If any changes have been made that can reset(note selected in scale display, chord selected or locked, chord altered, chord degrees toggled on) the <span className="targetNoteTutorial">Reset All</span>  button in the upper right corner will glow red. Click this button to reset everything on the page. <a href="#top">Back to Top</a></div>
          <img className="tutorialGif" src="https://media.giphy.com/media/3HMw1s2DzOnBT5n1P5/giphy.gif"/>
          <a href="#top">Back to Top</a>
        </div>
    </Modal>
  )
}

export default Tutorial;