import React, { Component } from 'react';
import {Chromatic, Major, MelodicMinor, HarmonicMinor } from '../constants/scales';
import {closedSeventh, drop2, drop3, drop23, drop24, doubleDrop24} from '../constants/chords';
import { Cycles } from '../constants/chords';
import { permute } from '../constants/helpers'
import {headerDiv, headerStyle, bodyDiv, tableStyle}  from '../styles/styles'
import Header from '../containers/Header'
import ScaleFormulas from '../containers/ScaleFormulas'

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
    let [scaleNums, scaleNotes, scaleName, scaleChord] = arr
    return [scaleNums, scaleNotes.map(x => this.state.notes[x]), scaleName, scaleChord]
  }

  render() {
    let notes = this.state.notes;
    let cycles = this.state.cycle;
    let scale = this.state.scale
    let onOff = this.state.onOff
    


    const buildChord = (scale, voicing, index) => {
      let arr = this.buildScale(scale)
      let degrees = arr[index].filter((n, i) => i % 2 === 0)
      return degrees.map((note, i) => permute(degrees, i))
      .map(x => voicing(x))
    }

    const buildCycle = (arr) => {
      return cycles.map(x => arr[x])
    }

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

        <h1>Seventh Chord Cycles</h1>
    

          <table style={tableStyle}>
            {scale.map((scales, j) =>  {
              let chordCycles = buildCycle(scales[3][0][0]).map(y => y)
              let numCycles = buildCycle(this.buildScale(scales)[0]).map(x=> x)
              let noteCycles = buildCycle(this.buildScale(scales)[1]).map(x=> x)
              
              return(
              <tbody key={j + 1}> 
                { onOff === '1' ?
                <tr>
                  <th key={scales}>{`${scales[2]}`}</th>
                    {chordCycles.map((y, i) => <td key={i}>{numCycles[i]} {y}</td>)}
                </tr>
                :
                <tr>
                  <th key={scales}>{`${scales[2]}`}</th>
                  {chordCycles.map((y, i) => <td key={i}>{noteCycles[i]} {y}</td>)}
                </tr>
                  
                }
              </tbody>
            )})}
          </table>

        <h1>Seventh Chord Vocings</h1>
        {scale.map((mode, j) => {
          return (
          <div key={j}>
            <h2>{`${mode[2]} (${mode[3][0][0][0]})`}</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th>Voicing</th>
                  <th>Root Position</th>
                  <th>First Inversion</th>
                  <th>Second Inversion</th>
                  <th>Third Inversion</th>
                </tr>
              </thead>
              <tbody>

              {
                this.state.onOff === '1' ?
                <tr>
                  <th>Closed</th>
                  {buildChord(mode, closedSeventh, 0).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
                :
                <tr>
                 <th>Closed</th>
                  {buildChord(mode, closedSeventh, 1).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
              }
              {
                this.state.onOff === '1' ?
                <tr>
                  <th>Drop 2</th>
                   {buildChord(mode, drop2, 0).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
                :
                <tr>
                 <th>Drop 2</th>
                  {buildChord(mode, drop2, 1).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
              }
              {
                this.state.onOff === '1' ?
                <tr>
                <th>Drop 3</th>
                  {buildChord(mode, drop3, 0).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
                :
                <tr>
                <th>Drop 3</th>
                 {buildChord(mode, drop3, 1).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
               </tr>
              }
              {
                this.state.onOff === '1' ?
                <tr>
                <th>Drop 2/3</th>
                  {buildChord(mode, drop23, 0).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
                :
                <tr>
                <th>Drop 2/3</th>
                 {buildChord(mode, drop23, 1).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
               </tr>
              }
              {
                this.state.onOff === '1' ?
                <tr>
                 <th>Drop 2/4</th>
                  {buildChord(mode, drop24, 0).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
                :
                <tr>
                 <th>Drop 2/4</th>
                  {buildChord(mode, drop24, 1).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>

              }
              {
                this.state.onOff === '1' ?
                <tr>
                 <th>Double Drop 2/3</th>
                  {buildChord(mode, doubleDrop24, 0).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
                :
                <tr>
                 <th>Double Drop 2/3</th>
                  {buildChord(mode, doubleDrop24, 1).map((degree, i) => <td key={i}>{degree.join(' ')}</td>)}
                </tr>
              }

              </tbody>
            </table>
          </div>
          )
        })}
      </div>
    )
  }
}
export default Scales