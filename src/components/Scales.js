import React, { Component } from 'react';
import {Chromatic, Major, MelodicMinor, HarmonicMinor } from '../constants/scales';
import {closedSeventh, drop2, drop3, drop23, drop24, doubleDrop24} from '../constants/chords';
import { Cycles } from '../constants/chords';
import permute from '../constants/helpers'


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
  }

  //first index of keys becomes last index
  changeKey = (event) => {
    let keys = Chromatic;
    const e = event.target.value
    console.log(e)
    this.setState({
      notes: permute(keys, e),
    })
  }

  //scale is chosen by select option event
  changeScale = (event) => {
    let scales = [Major, MelodicMinor, HarmonicMinor];
    const e = event.target.value
    this.setState({
      scale: scales[e],
    })
  }

  //cycle is chosen by select option event
  changeCycle = (event) => {
    let cycles = Cycles;
    const e = event.target.value
    this.setState({
      cycle: cycles[e],
    })
  }
  
  handleSwitch = (event) => {
    const e = event.target.value;
    this.setState({
      onOff: e,
    })
  }

  render() {

    const buildScale = (arr) => { 
      let notes = this.state.notes;
      let [scaleNums, scaleNotes, scaleName, scaleChord] = arr
      return [scaleNums, scaleNotes.map(x => notes[x]), scaleName, scaleChord]
    }

    const buildChord = (scale, voicing, index) => {
      let arr = buildScale(scale)
      let degrees = arr[index].filter((n, i) => i % 2 === 0)
      return degrees.map((note, i) => permute(degrees, i))
      .map(x => voicing(x))
    }

    const buildCycle = (arr) => {
      let cycles = this.state.cycle
      return cycles.map(x => arr[x])
    }

    const headerStyle = {
      position: 'fixed',
      top: '0',
      width: '100%',
      textAlign: 'center',
      background: 'gray',
      color: 'white',
      paddingBottom: '20px',
    }
    const bodyDiv = {
      paddingTop: '100px',
    }
    const headerDiv = {
      float: 'left',
      width: '24%',
    }

    const table = {
        width: '100%',
        tableLayout: 'fixed',
        textAlign: 'center',
        borderSpacing: 10,
        background: 'gray',
        color: 'white',
    }
    return (
      <div>
        <div style={headerStyle}>
          <h1>Chord Scale Encyclopedia</h1>
          <div style={headerDiv}>
            <h2>Key</h2>
              <select onChange={this.changeKey}>
                <option value='0'>C</option>
                <option value='1'>Db</option>
                <option value='2'>D</option>
                <option value='3'>Eb</option>
                <option value='4'>E</option>
                <option value='5'>F</option>
                <option value='6'>Gb</option>
                <option value='7'>G</option>
                <option value='8'>Ab</option>
                <option value='9'>A</option>
                <option value='10'>Bb</option>
                <option value='11'>B</option>
              </select>
            </div>
            <div style={headerDiv}>
            <h2>Scale</h2>
              <select onChange={this.changeScale}>
                <option value='0'>Major</option>
                <option value='1'>Melodic Minor</option>
                <option value='2'>Harmonic Minor</option>
              </select>
            </div>
            <div style={headerDiv}>
            <h2>Notes/Numerals</h2>
              <select onChange={this.handleSwitch}>
                <option value='0'>Notes</option>
                <option value='1'>Numerals</option>
              </select>
            </div>
            <div style={headerDiv}>
            <h2>Cycle</h2>
              <select onChange={this.changeCycle}>
                <option value='0'>Cycle 2</option>
                <option value='1'>Cycle 3</option>
                <option value='2'>Cycle 4</option>
                <option value='3'>Cycle 5</option>
                <option value='4'>Cycle 6</option>
                <option value='5'>Cycle 7</option>
              </select>
            </div>
          </div>

      <div style={bodyDiv}>
        <h1>Scale Formulas</h1>
        <table style={table}>
          {this.state.scale.map((scales, i) => {
            let [nums, notes]= buildScale(scales)
            return (
            <tbody key={i++} style={{ borderSpacing: 20}}>
              {
                this.state.onOff === '1' ?
                <tr key={i++}>
                  <th key={i++}>{`${scales[2]}`}</th>
                  {nums.map(x => <td key={i++}>{x}</td>)}
                </tr>
                :
                <tr>
                  <th key={i++}>{`${scales[2]}`}</th>
                  {notes.map(x => <td key={i ++}>{x}</td>)}
                </tr>
              }
          </tbody>
            )
          })}
        </table>

      </div >
      <div>

      </div>
        <h1>Seventh Chord Cycles</h1>
    

          <table style={table}>
            {this.state.scale.map((scales, j) =>  {
              let chordCycles = buildCycle(scales[3][0][0]).map(y => y)
              let numCycles = buildCycle(buildScale(scales)[0]).map(x=> x)
              let noteCycles = buildCycle(buildScale(scales)[1]).map(x=> x)
              
              return(
              <tbody key={j + 1}> 
                { this.state.onOff === '1' ?
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
        {this.state.scale.map((mode, j) => {
          return (
          <div key={j}>
            <h2>{`${mode[2]} (${mode[3][0][0][0]})`}</h2>
            <table style={table}>
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