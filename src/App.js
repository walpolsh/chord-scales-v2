import React, { Component } from 'react';
import './App.css';
import {Chromatic, Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMinor } from './constants/scales';
import {closedSeventh, drop2, drop3, drop23, drop24, doubleDrop24} from './constants/chords';
import { Cycles } from './constants/chords';
import { permute } from './constants/helpers'
import {headerDiv, headerStyle, bodyDiv, tableStyle, appStyle}  from './styles/styles'
import Header from './containers/Header'
import ScaleFormulas from './containers/ScaleFormulas'
import SeventhChordCycles from './containers/SeventhChordCycles'
import SeventhChordVoicings from './containers/SeventhChordVoicings'
import Intervals from './containers/Intervals/Intervals'
import intervalArray from './constants/intervals'



class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: Chromatic,
      value: '',
      scale: Major,
      cycle: Cycles[0],
      onOff: 0,
      interval: intervalArray[0],
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

  handleHighlight(e) {
    console.log(e)
      if (e.currentTarget.style.background === 'grey') {
        e.currentTarget.style.background = 'yellow';
        e.currentTarget.style.color = 'black';
      } else {
        e.currentTarget.style.background = 'grey';
        e.currentTarget.style.color = 'white';
      }
  }

  buildScale(arr) { 
    let [scaleNums, scaleNotes, scaleName, scaleChord] = arr
    return [scaleNums, scaleNotes.map(x => this.state.notes[x]), scaleName, scaleChord]
  }

  buildChord(scale, voicing, index) {
    let arr = this.buildScale(scale)
    let degreesA = arr[index].filter((n, i) => i % 2 === 0)
    let degreesB = arr[index].filter((n, i) => i % 2 !== 0)
    degreesB.push(degreesA[0])
    let permuteA = degreesA.map((note, i) => permute(degreesA, i)).map(x => voicing(x))
    let permuteB = degreesB.map((note, i) => permute(degreesB, i)).map(x => voicing(x))
    let result = permuteA.map((note, i) => {
      let arr = []
      arr.push(permuteA[i], permuteB[i])
      return arr
    })
    return result.flat()
  }

  buildCycle(arr) {
    return this.state.cycle.map(x => arr[x])
  }
  render() {
    let scale = this.state.scale
    let onOff = this.state.onOff
    
    return (
      <div style={appStyle}>
        <Header 
          headerDiv={headerDiv}
          headerStyle={headerStyle}
          changeKey={this.changeKey}
          changeScale={this.changeScale}
          changeCycle={this.changeCycle}
          handleSwitch={this.handleSwitch}
        />
        
        <ScaleFormulas 
          bodyDiv={bodyDiv}
          tableStyle={tableStyle}
          scale={scale}
          onOff={onOff}
          buildScale={this.buildScale}
          buildCycle={this.buildCycle}
          handleHighlight={(e) => this.handleHighlight(e)}
        />

        <SeventhChordCycles 
          bodyDiv={bodyDiv}
          tableStyle={tableStyle}
          scale={scale}
          onOff={onOff}
          buildScale={this.buildScale}
          buildCycle={this.buildCycle}
          handleHighlight={(e) => this.handleHighlight(e)}
        />

        <Intervals 
          bodyDiv={bodyDiv}
          tableStyle={tableStyle}
          scale={scale}
          onOff={onOff}
          interval={this.state.interval}
          buildScale={this.buildScale}
          buildChord={this.buildChord}
          buildCycle={this.buildCycle}
          handleHighlight={(e) => this.handleHighlight(e)}
        />

        <SeventhChordVoicings 
          bodyDiv={bodyDiv}
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


      </div>
    )
  }
}
export default App