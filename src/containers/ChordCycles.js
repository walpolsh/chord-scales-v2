import React from 'react';
import { Major } from '../constants/scales'

const ChordCycles = (props) => {  
  const {scale, tableStyle, buildCycle, buildScale, interval, handleHighlight, onOff} = props

  return (
    <div>
      <h2>Seventh Chords</h2>
      <table style={tableStyle} >
      <thead>
          <tr>
            <th>Scale</th>
            {
              scale.map((scales, j) =>  {
              let i = j
              let major = buildScale(Major)[0][0].map(x => x)
              let numCycles = buildCycle(buildScale(Major)[0][0]).map(x=> x)
              {
                let arr = []
                if (interval[0] === 0) {
                  arr.push(<th key={i++} >{numCycles[j]}</th>)
    
                } 
                if (interval[0] > 0) {
                  arr.push(<th key={i++} >{major[j]}</th>)
                }
                return (
                 arr
                )
              }
              })
            }
          </tr>
        </thead>

        <tbody>
        {scale.map((mode, j) => {
          let [nums, notes, name, chords] = buildScale(mode)
          chords = chords[0][0]
          let noteMap = interval.map((x, i) => notes[x])
          let numMap = interval.map((x, i) => nums[x])
          let chordMap = interval.map((x, i) => chords[x])
          let noteResult = notes.map((note, i) => {
            let arr = []
            if (interval[0] === 0) {
              arr.push(<td key={j++}>{notes[interval[i]]} {chords[interval[i]]}</td>)
            } 
            if (interval[0] > 0) {
              arr.push(<td key={j++}>{notes[i]} {chords[i]}<br/>{noteMap[i]} {chordMap[i]}</td>)
            }
            return arr
          })
          let numResult = nums.map((num, i) => {
            let arr = []
            if (interval[0] === 0) {
              arr.push(<td key={j++}>{nums[interval[i]]} {chords[interval[i]]}</td>)
            } 
            if (interval[0] > 0) {
              arr.push(<td key={j++}>{nums[i]} {chords[i]}<br/>{numMap[i]} {chordMap[i]}</td>)
            }
            return arr
          })
          return (
              <tr key={j++} className='no-highlight' onClick={handleHighlight}>
                  {name.map((x, n) => <th key={n++}>{x}</th>)}
                { onOff === '1' ? numResult.map((x) => x) : noteResult.map(x => x) }
              </tr>
        )})}
            </tbody>
      </table>  

    </div>
  )
}

export default ChordCycles