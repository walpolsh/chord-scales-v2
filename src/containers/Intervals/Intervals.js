import React from 'react';

const Intervals = (props) => {  
  return (
    <div>
      <h1>Scale Intervals</h1>
      <table style={props.tableStyle} >
        {props.scale.map((mode, j) => {
          let [nums, notes, name] = props.buildScale(mode)
          let chords = props.buildScale(mode)[0][0]
          let noteMap = props.interval.map((x, i) => notes[x])
          let numMap = props.interval.map((x, i) => nums[x])
          let noteResult = notes.map((note, i) => {
            let arr = []
            arr.push(`${notes[i]} - ${noteMap[i]}`)
            return arr
          })
          let numResult = nums.map((num, i) => {
            let arr = []
            arr.push(`${nums[i]} - ${numMap[i]}`)
            return arr
          })
          return (

            <tbody>

              <tr onClick={props.handleHighlight}>
                {name.map((x, i) => <th>{x}</th>)}
              {
                props.onOff === '1' ?

                numResult.map((x) => <td>{x}</td>)  

                  :
                
                 noteResult.map(x => <td>{x}</td>)  
                
              }
                </tr>
            </tbody>
        )})}
      </table>  
      <h1>Chord Intervals</h1>
      <table style={props.tableStyle} >
        {props.scale.map((mode, j) => {
          let [nums, notes, name, chords] = props.buildScale(mode)
          chords = chords[0][0]
          let noteMap = props.interval.map((x, i) => notes[x])
          let numMap = props.interval.map((x, i) => nums[x])
          let chordMap = props.interval.map((x, i) => chords[x])
          let noteResult = notes.map((note, i) => {
            let arr = []
            if (props.interval[0] === 0) {
              arr.push(
                  <td>{notes[i]}{chords[i]}</td>
              )
            } else {
              arr.push(
                <td>{notes[i]}{chords[i]}</td>
              )
              arr.push(
                <td>{noteMap[i]}{chordMap[i]}</td>
              )
              
            }
            return arr
          })
          let numResult = nums.map((num, i) => {
            let arr = []
            if (props.interval[0] === 0) {
              arr.push(
                  <td>{nums[i]}{chords[i]}</td>
              )
            } else {
              arr.push(
              <td>{nums[i]}{chords[i]}</td>
              )
              arr.push(
                  <td>{numMap[i]}{chordMap[i]}</td>
              )
              
            }
            return arr

          })
          return (
            <tbody>
              <tr onClick={props.handleHighlight}>
                  {name.map((x, i) => <td>{x}</td>)}
                {
                  props.onOff === '1' ?
                  numResult.map((x) => x)  
                    :
                  noteResult.map(x => x)  
                }
              </tr>
            </tbody>
        )})}
      </table>  

    </div>
  )
}

export default Intervals