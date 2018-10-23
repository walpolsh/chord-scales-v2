import React, { Component } from 'react';
import { Major, MelodicMinor, HarmonicMinor } from '../constants/scales';
import { closedTriad, openTriad, closedSeventh, drop2, drop3, drop23, drop24, doubleDrop24 } from '../constants/chords';
import permute from '../constants/helpers'

//https://medium.com/@ezra_69528/music-theory-foundations-in-a-few-lines-of-code-90026efb5b23


 
class Scales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],
      value: '',
      scale: Major,
    }
  }
  
  changeKey = (event) => {
    let keys = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
    const e = event.target.value
    let newKey = permute(keys, e)
    this.setState({
      notes: newKey,
    })
  }

  changeScale = (event) => {
    let scales = [Major, MelodicMinor, HarmonicMinor];
    const e = event.target.value
    let newScale = scales[e]
    this.setState({
      scale: newScale,
    })
  }


  render() {

    const buildScale = (arr) => { 
      let notes = this.state.notes;
      let scaleNums = arr[0]
      let scaleNotes = arr[1]
      return [scaleNums, scaleNotes.map(x => notes[x])]
    }

    const buildChord = (scale, voicing, index) => {
      let arr = buildScale(scale)
      let degrees = arr[index].filter((n, i) => i % 2 === 0)
      let chordArr = degrees.map((note, i) => {
        return permute(degrees, i)
      }).map(x => voicing(x))
      return chordArr
    }

    const headerStyle = {
      width: '100%',
      textAlign: 'center',
      background: 'gray',
      color: 'white',
    }

    const table = {
        width: '100%',
        tableLayout: 'fixed',
        textAlign: 'center',
        borderSpacing: 20,
        background: 'gray',
        color: 'white',
    }
    return(
      <div>
        <div style={headerStyle}>
          <h1>Select Key</h1>
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
          <h1>Select Scale</h1>
          <select onChange={this.changeScale}>
            <option value='0'>Major</option>
            <option value='1'>Melodic Minor</option>
            <option value='2'>Harmonic Minor</option>
          </select>
        </div>
        <table style={table}>
          <tbody style={{ borderSpacing: 10}}>
          {this.state.scale.map((scales, i) => {
            return (
                <tr key={i}>
                  <th key={i}>{scales[2]}</th>
                  {buildScale(scales).map(x => <td key={x}>{x.join('-')}</td>)}
                </tr>
            )
          })}
          </tbody>
        </table>
        
        <h1>Chord Vocings</h1>
        {this.state.scale.map(mode => {
          return (
          <div>
            <h2>{mode[2]}</h2>
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
                <tr>
                 <th>Closed Seventh</th>
                  {buildChord(mode, closedSeventh, 1).map((degree, i) => <td>{degree}</td>)}
                </tr>
                <tr>
                  <th>#</th>
                  {buildChord(mode, closedSeventh, 0).map((degree, i) => <td>{degree}</td>)}
                </tr>
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