
import React, { Component } from 'react';
import './App.css';
import { Chromatic, Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMinor } from './constants/scales';
import {closedSeventh, drop2, drop3, drop23, drop24, doubleDrop24} from './constants/chords';
import { Cycles } from './constants/chords';
import { permute } from './constants/helpers'
import {tableStyle}  from './styles/styles'
import Header from './containers/Header'
import ScaleFormulas from './containers/ScaleFormulas'
import SeventhChordCycles from './containers/SeventhChordCycles'
import SeventhChordVoicings from './containers/SeventhChordVoicings'
// import Intervals from './containers/Intervals/Intervals'
import intervalArray from './constants/intervals'



class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: Chromatic,
      value: '',
      scale: Major,
      cycle: Cycles[0],
      onOff: 1,
      interval: intervalArray[0],
      showMenu: false,
    }

    this.changeKey = this.changeKey.bind(this)
    this.changeScale = this.changeScale.bind(this)
    this.changeCycle = this.changeCycle.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.buildScale = this.buildScale.bind(this)
    this.buildChord = this.buildChord.bind(this)
    this.buildCycle = this.buildCycle.bind(this)
    this.handleHighlight = this.handleHighlight.bind(this)
  }

  changeKey(event) {
    let keys = Chromatic;
    const e = event.target.value
    this.setState({
      notes: permute(keys, e),
    })
  }

  changeScale(event) {
    let scales = [Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMinor];
    const e = event.target.value
    this.setState({
      scale: scales[e],
    })
  }

  changeCycle(event) {
    const e = event.target.value
    this.changeInterval(e)
    this.setState({
      cycle: Cycles[e],
    })
  }

  changeInterval(e) {
    this.setState({
      interval: intervalArray[e],
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

  buildChord(scale, voicing, index) {
    let arr = this.buildScale(scale)
    
    const inversions =  arr[index].map((note, i) => permute(arr[index], i)).filter((n, i) => i % 2 === 0)

    const fullScale = (arr) => {
      const [one, two, three, four] = arr
      const result = []
      for (let i = 0; i < 7; i++) {
        result.push([one[i], two[i], three[i], four[i]])
      }
      result.push(result[0])
      return result.map(x => voicing(x))
    }
    
    return fullScale(inversions)

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
            buildScale={this.buildScale}
            buildCycle={this.buildCycle}
            handleHighlight={(e) => this.handleHighlight(e)}
          />

          <SeventhChordCycles 
            tableStyle={tableStyle}
            scale={scale}
            onOff={onOff}
            buildScale={this.buildScale}
            buildCycle={this.buildCycle}
            handleHighlight={(e) => this.handleHighlight(e)}
          />

          {/* <Intervals 
            bodyDiv={bodyDiv}
            tableStyle={tableStyle}
            scale={scale}
            onOff={onOff}
            interval={this.state.interval}
            buildScale={this.buildScale}
            buildChord={this.buildChord}
            buildCycle={this.buildCycle}
            handleHighlight={(e) => this.handleHighlight(e)}
          /> */}

          <SeventhChordVoicings 
            tableStyle={tableStyle}
            scale={scale}
            onOff={onOff}
            buildScale={this.buildScale}
            buildChord={this.buildChord}
            buildCycle={this.buildCycle}
            closedSeventh={closedSeventh}
            drop2={drop2}
            drop3={drop3}
            drop23={drop23}
            drop24={drop24}
            doubleDrop24={doubleDrop24}
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