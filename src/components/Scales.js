import React, { Component } from 'react';
import { Major } from '../constants/scales';
import { closedTriad, openTriad, closedSeventh, drop2, drop3, drop23, drop24, doubleDrop24 } from '../constants/chords';

//https://medium.com/@ezra_69528/music-theory-foundations-in-a-few-lines-of-code-90026efb5b23

const permute = (arr, i) => {
  const chunk1 = arr.slice(0, i)
  const chunk2 = arr.slice(i, arr.length)
  return chunk2.concat(chunk1)
}


 
class Scales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],
      numerals: [0,1,2,3,4,5,6,7,8,9,10,11],
      value: '',
      scale: Major,
    }

    this.changeKey = this.changeKey.bind(this)
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
    let scales = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
    const e = event.target.value
    const chunk1 = scales.slice(0, e)
    const chunk2 = scales.slice(e, scales.length)  
    let newScale = chunk2.concat(chunk1)
    this.setState({
      scale: newScale,
    })
  }


  render() {
  //   const permute2 = (arr, i) => {
  //     let seventh = buildScale(Major[0])
  //     let [nums, notes] = seventh
  //     let numsArr = [nums]
  //     nums = [nums[0], nums[2], nums[4], nums[6]]
  //     notes = [notes[0], notes[2], notes[4], notes[6]]
  //     for (let i = 0; i < nums.length; i++) {
  //       while (numsArr.length <= 4) {
  //         if (i === 0) {
  //           numsArr.push(nums[0])
  //         }
  //       }
  //     }
  //     console.log(arr, notes, nums)
  // }
    const buildScale = (arr) => { 
      let notes = this.state.notes;
      let scaleNums = arr[0].slice(0, 7);
      let scaleNotes = arr[0].slice(7,14);
      return [scaleNums, scaleNotes.map(x => notes[x])]
    }

    const buildChord = (scale, voicing) => {
      let arr = buildScale(scale)
      
      let firstInversion = (a) => {
        let map = a.filter((n, i) => i % 2 === 0)
        return map
      }

      let nums = firstInversion(arr[0])
      let notes = firstInversion(arr[1])
    
      let numsArr = nums.map((num, i) => {
        return permute(nums, i)
      }).map(x => voicing(x))
      let notesArr = notes.map((note, i) => {
        return permute(notes, i)
      }).map(x => voicing(x))
      
      return [numsArr, notesArr]
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
          <h1>Select Scale</h1>
          <select onChange={this.changeScale}>
            <option value='-'>-</option>
            <option value='0'>Major</option>
          </select>
        </div>
        <table style={table}>
          <tbody style={{ borderSpacing: 10}}>
          {Major.map((scales, i) => {
            return (
                <tr key={i}>
                  <th key={i}>{scales[1]}</th>
                  {buildScale(scales).map(x => <td key={x}>{x.join('-')}</td>)}
                </tr>
            )
          })}

          </tbody>
        </table>
        
        <h1>Chord Vocings</h1>

        <h2>{this.state.scale[0][1]}</h2>
        <table style={table}>
          <thead>
            <tr>
              <th>
                Closed Sevenths
              </th>
            </tr>
          </thead>
          <tbody>
            {buildChord(Major[0], drop3).map((mode, i) => {
              return (
                <tr key={i}>           
                  {mode.map(x => <td key={x}>{x}</td>)}
                </tr>
              )
            })}
            {/* <th>Drop 2</th>
            {inversions(buildChord(Major[0], drop2)).map((mode, i) => {
              return (
                  <tr>           
                    {mode.map(x => <td>{x.join('-')}</td>)}
                  </tr>
              )
            })}
          <th>Drop 3</th>
          {inversions(buildChord(Major[0], drop3)).map((mode, i) => {
            return (
                <tr>           
                  {mode.map(x => <td>{x.join('-')}</td>)}
                </tr>
            )
          })}
          <th>Drop 2 and 3</th>
          {inversions(buildChord(Major[0], drop23)).map((mode, i) => {
            return (
                <tr>           
                  {mode.map(x => <td>{x.join('-')}</td>)}
                </tr>
            )
          })}
          <th>Drop 2 and 4</th>
          {inversions(buildChord(Major[0], drop24)).map((mode, i) => {
            return (
                <tr>           
                  {mode.map(x => <td>{x.join('-')}</td>)}
                </tr>
            )
          })}
          <th>Double Drop 2 and 3</th>
          {inversions(buildChord(Major[0], doubleDrop24)).map((mode, i) => {
            return (
                <tr>           
                  {mode.map(x => <td>{x.join('-')}</td>)}
                </tr>
            )
          })} */}
        </tbody>

      </table>
      </div>
    )
  }
}


export default Scales