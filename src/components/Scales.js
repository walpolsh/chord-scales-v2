import React, { Component } from 'react';
import { Major } from '../constants/scales'

//https://medium.com/@ezra_69528/music-theory-foundations-in-a-few-lines-of-code-90026efb5b23

let permute = (arr, i) => {
  const chunk1 = arr.slice(0, i)
  const chunk2 = arr.slice(i, arr.length)
  return chunk2.concat(chunk1)
}
 
class Scales extends Component {
  constructor() {
    super();
    this.state = {
      notes: ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],
      numerals: [0,1,2,3,4,5,6,7,8,9,10,11],
      value: '',
    }

    this.changeKey = this.changeKey.bind(this)
  }
  
  changeKey = (event) => {
    let keys =  ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
    const e = event.target.value
    let newKey = permute(keys, e)
    this.setState({
      notes: newKey,
    })
  }

  render() {
    
    const buildSeventhChord = (scale) => {
      let arr = buildScale(scale)
      const closedPosition = (a) => {
        return a.filter((n, i) => {
          return i % 2 === 0
        })
      }

      let nums = closedPosition(arr[0])
      let notes = closedPosition(arr[1])
      console.log(nums)
      return [nums, notes]

    }

    const inversions = (chord) => {
      let nums = chord[0]
      let notes = chord[1]
      let invertNums = [nums]
      let invertNotes = [notes]
      for (let i = 1; i < nums.length; i++) {
        nums = permute(nums, i)
        notes = permute(notes, i)
        invertNums.push(nums)
        invertNotes.push(notes)

      }
      return [invertNums, invertNotes]
    }

    const buildScale = (scale) => { 
      let notes = this.state.notes;
      let scaleNums = scale[0].slice(0, 7);
      let scaleNotes = scale[0].slice(7,14);
      return [scaleNums, scaleNotes.map(x => notes[x])]
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
    let maj7 = buildSeventhChord(Major[0])
    console.log(inversions(maj7))
    return(
      <div>
        <div style={headerStyle}>
          <h1>Select Key</h1>
            <select onChange={this.changeKey}>
              <option value='-'>-</option>
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
        <table style={table}>
          {Major.map((scales, i) => {
            let [numbers, notes] = buildScale(scales)
              return (
                <tbody key={i} style={{ borderSpacing: 10}}>
                  <tr>
                    <th>{scales[1]}</th>
                    {notes.map(x => <td key={x}>{x}</td>)}
                  </tr>
                  <tr>
                    <th>#</th>
                    {numbers.map(x => <td key={x}>{x}</td>)}
                  </tr>
                </tbody>
              )
            })}
        </table>
      </div>
    )
  }
}


export default Scales