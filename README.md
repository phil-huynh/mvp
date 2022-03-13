# Strings Theory

## General Info

Strings Theory is a resource application for music students and professionals. The app is currenlty still in development, but a working version of the currently available features can be viewed at http://ec2-13-58-22-143.us-east-2.compute.amazonaws.com:3000/ . The app is not currently optimized for mobile. The best way to view this app is currently on a laptop or desktop computer. This app is being updated frequently. 

## <a name="demo"></a>⚜️ Demo
---
### Map Chords Feature
#### This feature is in development. It will allow the user to view chords independent of a scale reference and make comparisons to other chords that do not share a source scale. Updates coming soon. 
---
### Map Scales Feature 
#### Everything that is availble in this feature is fully functional. There will be additions to this feature that will allow for comparisons to other scales or non related structures. The demo below reflects the current state of the feature.
<img src="https://media.giphy.com/media/bREeb4eQTTHkDy40Fz/giphy.gif" width=900/> 

#### Users can choose how they would like the neck to be rendered. Users can choose the default "Traditional View" to see the notes stacked with the lowest on the bottom and the highest notes on the top. "Mirror View" displays the low notes on top and the high notes on the bottom(this emulates a guitarist looking at their hands in a mirror). "Lefty Traditional View" and "Lefty Mirror View" do the same things respectively in addition to the neck switching directions from (low->high) to (high->low). 
<img src="https://media.giphy.com/media/I9QN347uJmAcE6oqOF/giphy.gif" width=900/> 

#### Users can choose from several instruments with multiple tunings. Neck renders will dynamically render to correspond with the instrument and tuning selected.
<img src="https://media.giphy.com/media/igIsud0EoGotF0XuMk/giphy.gif" width=900/> 

#### Users can look up several scales in all 12 keys and the neck display, scale display, and chord cards will update accordingly. 
<img src="https://media.giphy.com/media/1DZfvEO5LmFbaKh2B2/giphy.gif" width=900/> 

#### If no chord is selected, clicking on a note name in the scale display will mark all locations of the selected note on the neck and will also highlight the selected note name in all of the chord cards that contain it. Click the currently selected note to clear selection.  
<img src="https://media.giphy.com/media/4vWRmkcBdV3jM0CAO6/giphy.gif" width=900/> 

#### The notes on the neck can be viewed as note names(A, B, C, D, E, F, G, ect..), scale degrees(1,2,3,4,5,6,7, ect...), or solfege(do, re, mi, fa, sol, la, ti, do). The default voicing toggle selects what type of voicing the chords fall back to when reset. The default voicing can be Triads or Seventh Chords. 
<img src="https://media.giphy.com/media/GFytdYT3e1GTr4K0dC/giphy.gif" width=900/> 

#### When a chord card is selected, the notes of the chord will be highlighted on the neck and in the scale display. Click the currently selected chord card to clear selection. 
####
#### If a chord has been selected, a "Chord Degrees" button will appear in the dash. When this feature is toggled on, the notes that are contained in the chord will display as chord degrees on the neck. If there are two chords selected, the chord degrees will not appear on the neck until a chord is "Focused"(see section on Focus) . 
####
#### The scale visibity can be toggled as needed. The scale can be set to Visible(fully visible), Unfocused(partially transparent), or hidden. If a chord is selected, it will not be affected by this toggle. This allows users see chords more clearly and choose what they need to see. 
<img src="https://media.giphy.com/media/9bV454prI06Tdf7RfA/giphy.gif" width=900/> 
<img src="https://media.giphy.com/media/9bPGXl6gGx4zeKXBXM/giphy.gif" width=900/> 
<img src="https://media.giphy.com/media/Yd1Rk35ZvNNqueD1TU/giphy.gif" width=900/> 

#### When a chord is selected, a "Lock" toggle will appear on the chord card. If the user clicks this toggle, it will lock the chord and allow for a second chord to be selected. The notes of the second chord will also highlight on the neck and in the scale display. The remaining notes that do not belong to either chord will automatically be hidden. If the two chords share notes, the "Shared Notes" indicator will glow in the upper right corner and the note names of the shared notes inside the chord cards and in the scale display will glow in the same color as the indicator. Click on the current second chord to clear the second chord selection. The "Locked" chord can be unlocked by clicking the toggle again. Both chord selections can be cleared by clicking the "Locked" chord. 
####
#### Any alterations made to either chord will be immediately relfected in the neck display, scale display, and chord cards.(see section on alterations)
<img src="https://media.giphy.com/media/2mxIRT4tYqfjCd9pI9/giphy.gif" width=900/>
<img src="https://media.giphy.com/media/D1Ho0OKm5ugM0tpSpu/giphy.gif" width=900/> 

#### If two chords are selected, a "Focus" toggle will appear on each. By default, focus is neutral, both cards' toggle displays as "Focus", and all notes on the neck are equally visible. By clicking this button on a card, the users moves the focus to the chosen chord. One chord card toggle will read "Focused" and the other "Unfocused". The notes of the "Focused" chord remain fully visible (including shared notes) and the notes of he "Unfocused" chord will become partially transparent to make the "Focused" chord more readable. Clicking on the "Unfocused" toggle will shift the chord focus to the new chord and the toggle labels will switch. Clicking on the "Focused" toggle will return the focus to neutral. If Chord Degrees is toggled on, the chord degrees of the "Focused" chord will be displayed.  
<img src="https://media.giphy.com/media/rW4BR9jvafN6IEBWXt/giphy.gif" width=900/> 

#### Each chord can be altered idependently. If a user clicks the "Alter Me" button on a chord card, a modal window opens which will display dynamic and postion specific options for the selected chord. Each modal menu will only dispay structures that are diatonically available to that specific chord in that specific key. Users can choose between several chord alerations and pentatonic scales. The altered chord card will render a reset button that can independently reset the chord card. Additionally, if any chords have been altered, the "Reset Voicings" button will glow red, indicating that there are chords to reset. Clicking "Reset Voicings" will return all of the chords back to the default voicing. 
####
#### If a chord has been altered, it will not be affected by a default chord change until it is reset. The notes added or subtracted from the voicing will render accordingly on the neck, in the scale display, and on the chord cards.
<img src="https://media.giphy.com/media/0Gj4OkDPQQoNwePReF/giphy.gif" width=900/>  
<img src="https://media.giphy.com/media/TF9pU92RbiWRMA3tJs/giphy.gif" width=900/> 

#### If any changes have been made that can reset(note selected in scale display, chord selected or locked, chord altered, chord degrees toggled on) the "Reset All" button in the upper right corner will glow red. Click this button to reset everything on the page.   
<img src="https://media.giphy.com/media/3HMw1s2DzOnBT5n1P5/giphy.gif" width=900/> 


---
### Map Chords Feature
#### This feature is in development. It will allow the user to identify unknown chords or scales that they are playing by inputting them on the neck. It will identify chords and scales as well a provide alternative options and suggestions for related structures. Updates coming soon. 
---
---
## 🧪 Technologies

### Dependencies
- axios: 0.24.0,
- bootstrap: 5.1.3
- bootstrap-icons: 1.8.0
- express: 4.17.1
- morgan: 1.10.0
- nodemon: 2.0.15
- pg: 8.7.1
- react: 17.0.2
- react-bootstrap: 2.1.2
- react-dom: 17.0.2
- react-icons: 4.3.1
- webpack: 5.64.4

### Dev Dependencies
- @babel/core: 7.15.8
- @babel/preset-env: 7.15.8
- @babel/preset-react: 7.16.0
- babel-loader: 8.2.3
- css-loader: 6.5.0
- eslint: 8.1.0
- style-loader: 3.3.1
- url-loader: 4.1.1
- webpack: 5.61.0
- webpack-cli: 4.9.1

## 🚀 Installation and Setup
```
$ git clone https://github.com/phil-huynh/mvp.git
```
From the root directory, run
```
$ npm install
$ npm run build-dev
$ npm start
```
## 🤝 Contributors
- [Phil Huynh](https://www.github.com/phil-huynh/)
