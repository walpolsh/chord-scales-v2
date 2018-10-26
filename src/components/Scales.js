import React, { Component } from 'react';
import {Chromatic, Major, MelodicMinor, HarmonicMinor } from '../constants/scales';
import {closedSeventh, drop2, drop3, drop23, drop24, doubleDrop24} from '../constants/chords';
import { Cycles } from '../constants/chords';
import { permute } from '../constants/helpers'
import {headerDiv, headerStyle, bodyDiv, tableStyle}  from '../styles/styles'
import Header from '../containers/Header'
import ScaleFormulas from '../containers/ScaleFormulas'
import SeventhChordCycles from '../containers/SeventhChordCycles'
import SeventhChordVoicings from '../containers/SeventhChordVoicings'


class Scales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Chromatic,
      value: '',
      scale: Major,
      cycle: Cycles[0],
      onOff: 0,
    }

    this.changeKey = this.changeKey.bind(this)
    this.changeScale = this.changeScale.bind(this)
    this.changeCycle = this.changeCycle.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.buildScale = this.buildScale.bind(this)
    this.buildChord = this.buildChord.bind(this)
    this.buildCycle = this.buildCycle.bind(this)
  }

  changeKey(event) {
    let keys = Chromatic;
    const e = event.target.value
    this.setState({
      notes: permute(keys, e),
    })
  }

  changeScale(event) {
    let scales = [Major, MelodicMinor, HarmonicMinor];
    const e = event.target.value
    this.setState({
      scale: scales[e],
    })
  }

  changeCycle(event) {
    let cycles = Cycles;
    const e = event.target.value
    this.setState({
      cycle: cycles[e],
    })
  }
  
  handleSwitch(event) {
    const e = event.target.value;
    this.setState({
      onOff: e,
    })
  }

  buildScale(arr) { 
    let notes = this.state.notes;
    let [scaleNums, scaleNotes, scaleName, scaleChord] = arr
    return [scaleNums, scaleNotes.map(x => notes[x]), scaleName, scaleChord]
  }

  buildChord(scale, voicing, index) {
    let arr = this.buildScale(scale)
    let degrees = arr[index].filter((n, i) => i % 2 === 0)
    return degrees.map((note, i) => permute(degrees, i))
    .map(x => voicing(x))
  }

  buildCycle(arr) {
    return this.state.cycle.map(x => arr[x])
  }

  render() {
    let scale = this.state.scale
    let onOff = this.state.onOff
    
    return (
      <div>
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
        />

        <SeventhChordCycles 
          bodyDiv={bodyDiv}
          tableStyle={tableStyle}
          scale={scale}
          onOff={onOff}
          buildScale={this.buildScale}
          buildCycle={this.buildCycle}
        />

        <SeventhChordVoicings 
          bodyDiv={bodyDiv}
          tableStyle={tableStyle}
          scale={scale}
          onOff={onOff}
          buildChord={this.buildChord}
          closedSeventh={closedSeventh}
          drop2={drop2}
          drop3={drop3}
          drop23={drop23}
          drop24={drop24}
          doubleDrop24={doubleDrop24}
        />
      </div>
    )
  }
}
export default Scales