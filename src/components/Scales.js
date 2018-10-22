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
    const chunk1 = keys.slice(0, e)
    const chunk2 = keys.slice(e, keys.length)  
    let newKey = chunk2.concat(chunk1)
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
    
    const buildScale = (arr) => { 
      let notes = this.state.notes;
      let scaleNums = arr[0].slice(0, 7);
      let scaleNotes = arr[0].slice(7,14);
      return [scaleNums, scaleNotes.map(x => notes[x])]
    }

    const buildChord = (scale, voicing) => {
      let arr = buildScale(scale)
      const first = (a) => {
        let map = a.filter((n, i) => i % 2 === 0)
        return map
      }
      const second = (a) => {
        return a.filter((n, i) => i % 2 !== 0)
      }
      
      let nums = arr[0].concat(arr[0][0])
      let notes = arr[1].concat(arr[1][0])

      let nums1 = first(nums)
      let notes1 = first(notes)
      let nums2 = second(nums)
      let notes2 = second(notes)

      return [voicing(notes1), voicing(notes2), voicing(nums1), voicing(nums2)]
    }

    const inversions = (chord) => {
      let [notes1, notes2, nums1, nums2] = chord
      console.log(nums1[0], nums2[0])
      let numsArr, notesArr; 
      numsArr = [
        [nums1[0], nums1[1], nums1[2], nums1[3]],
        [nums2[0], nums2[1], nums2[2], nums2[3]],
        [nums1[1], nums1[2], nums1[3], nums2[0]],
        [nums2[1], nums2[2], nums2[3], nums1[1]],
        [nums1[2], nums1[3], nums2[0], nums2[1]],
        [nums2[2], nums2[3], nums1[1], nums1[2]],
        [nums1[3], nums2[0], nums2[1], nums2[2]]
      ].sort((a,b) => {
        console.log(a)
        return a.indexOf(nums1[0]) - b.indexOf(nums2[0])
      })

      
      notesArr = [
        [notes1[0], notes1[1], notes1[2], notes1[3]],
        [notes2[0], notes2[1], notes2[2], notes2[3]],
        [notes1[1], notes1[2], notes1[3], notes2[0]],
        [notes2[1], notes2[2], notes2[3], notes1[1]],
        [notes1[2], notes1[3], notes2[0], notes2[1]],
        [notes2[2], notes2[3], notes1[1], notes1[2]],
        [notes1[3], notes2[0], notes2[1], notes2[2]]
      ].sort((a,b) => {
        console.log(a)
        return a.indexOf(notes1[0]) - b.indexOf(notes2[0])
      })

      console.table(numsArr)
      return [notesArr, numsArr]
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
          {Major.map((scales, i) => {
            let [numbers, notes] = buildScale(scales)
              return (
                <tbody key={i} style={{ borderSpacing: 10}}>
                  <tr>
                    <th>{scales[1]}</th>
                    {buildScale(scales).map(x => <td key={x}>{x}</td>)}
                  </tr>
                </tbody>
              )
            })}
        </table>
        <h1>Chord Vocings</h1>
        <h2>Closed Sevenths</h2>
        <table style={table}>
        <tr>
          <th>{this.state.scale[0][1]}</th>
        </tr>
          {inversions(buildChord(Major[0], closedSeventh)).map((mode, i) => {
              return (
                <tbody>
                  <tr>           
                    {mode.map(x => <td>{x}</td>)}
                  </tr>
                </tbody>
              )
            })}
        </table>

        <h2>Closed Sevenths</h2>
        <table style={table}>
        <tr>
          <th>{this.state.scale[0][1]}</th>
        </tr>
          {inversions(buildChord(Major[0], drop2)).map((mode, i) => {
              return (
                <tbody>
                  <tr>           
                    {mode.map(x => <td>{x}</td>)}
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