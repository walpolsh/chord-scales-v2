
import React, { Component } from 'react';
import './App.css';
import { Chromatic, Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor } from './constants/scales';
import {closedSeventh, drop2, drop3, drop23, drop24, doubleDrop24} from './constants/chords';
import { Cycles } from './constants/chords';
import { permute } from './constants/helpers'
import {tableStyle}  from './styles/styles'
import Header from './containers/Header'
import ScaleFormulas from './containers/ScaleFormulas'
import ChordCycles from './containers/ChordCycles'
import ChordVoicings from './containers/ChordVoicings'



class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: Chromatic,
      value: '',
      scale: Major,
      cycle: Cycles[0],
      onOff: 1,
    }

    this.changeKey = this.changeKey.bind(this)
    this.changeScale = this.changeScale.bind(this)
    this.changeCycle = this.changeCycle.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.buildScale = this.buildScale.bind(this)
    this.buildCycle = this.buildCycle.bind(this)
    this.handleHighlight = this.handleHighlight.bind(this)
  }

  componentDidMount(){
    let keySig = document.getElementById('keySig');
    document.addEventListener('keydown', (event) => {
      if (event.key === 'a') {
        document.getElementById('notes/nums').click()
      }
      if (event.key === 's') {
        keySig.click()
      }
      if (event.key === 'd') {
        document.getElementById('scale').focus()
      }
      if (event.key === 'f') {
        document.getElementById('cycles/ints').focus()
      }
    })
  }
  changeKey(event) {
    let keys = Chromatic;
    const e = event.target.value
    this.setState({
      notes: permute(keys, e),
    })
  }

  changeScale(event) {
    let scales = [Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor];
    const e = event.target.value
    this.setState({
      scale: scales[e],
    })
  }

  changeCycle(event) {
    const e = event.target.value
    this.setState({
      cycle: Cycles[e],
    })
  }

  
  handleSwitch(event) {
    const e = event.target.value;
    this.setState({
      onOff: e,
    })
  }

  buildScale(arr) { 
    let [scaleNums, scaleNotes, scaleName, scaleChord] = arr
    return [scaleNums, scaleNotes.map(x => this.state.notes[x]), scaleName, scaleChord]
  }

  buildCycle(arr) {
    return this.state.cycle.map(x => arr[x])
  }

  handleHighlight(e) {
    if (e.currentTarget.className === 'no-highlight') {
      e.currentTarget.className = 'highlighted';
    } else {
      e.currentTarget.className = 'no-highlight';
    }
  }

  render() {
    let scale = this.state.scale
    let onOff = this.state.onOff
    
    return (
      <div className="App">
        <Header
          onOff={this.state.onOff}
          changeKey={this.changeKey}
          changeScale={this.changeScale}
          changeCycle={this.changeCycle}
          handleSwitch={this.handleSwitch}
        />
        <div id="innerDiv">

          <ScaleFormulas 
            tableStyle={tableStyle}
            scale={scale}
            onOff={onOff}
            interval={this.state.cycle}
            buildScale={this.buildScale}
            buildCycle={this.buildCycle}
            handleHighlight={(e) => this.handleHighlight(e)}
          />
          <ChordCycles 
            scale={scale}
            tableStyle={tableStyle}
            buildCycle={this.buildCycle}
            buildScale={this.buildScale}
            interval={this.state.cycle}
            handleHighlight={(e) => this.handleHighlight(e)}
            onOff={onOff}
          />

          <ChordVoicings 
            closedSeventh={closedSeventh}
            drop2={drop2}
            drop3={drop3}
            drop23={drop23}
            drop24={drop24}
            doubleDrop24={doubleDrop24}
            interval={this.state.cycle}
            scale={scale}
            buildScale={this.buildScale}
            tableStyle={tableStyle}
            onOff={onOff}
            permute={permute}
            handleHighlight={(e) => this.handleHighlight(e)}
          />

          <footer>
            <div>
              <hr/> 
              <a href="https://github.com/walpolsh">© Paul J. Walsh</a>
            </div>
          </footer>

        </div>


      </div>
    )
  }
}
export default App