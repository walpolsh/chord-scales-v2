import React from 'react';

const Intervals = (props) => {  
  return (
    <div>
      <h1>Scale Intervals</h1>
      <table style={props.tableStyle} >
        <tbody>
        {props.scale.map((mode, j) => {
          let [nums, notes, name] = props.buildScale(mode)
          let noteMap = props.interval.map((x, i) => notes[x])
          let numMap = props.interval.map((x, i) => nums[x])
          let noteResult = notes.map((note, i) => {
            let arr = []
            if(props.interval[0] === 0) {
              arr.push(<td key={j++}>{notes[i]}</td>)
            }  else {
              arr.push(<td key={j++}>{notes[i]}</td>)
              arr.push( <td key={j++}>{noteMap[i]} </td> )

            }
            return arr
          })
          let numResult = nums.map((num, i) => {
            let arr = []
            if(props.interval[0] === 0) {
              arr.push(<td key={j++}>{nums[i]}</td>)
            } else {
              arr.push(<td key={j++}>{nums[i]}</td>)
              arr.push( <td key={j++}> {numMap[i]} </td> )
            }
            return arr
          })
          return (
              <tr key={j++} onClick={props.handleHighlight}>
                {name.map((x, i) => <th key={i++}>{x}</th>)}
                {props.onOff === '1' ? numResult.map((x) => x) : noteResult.map(x => x)  }
              </tr>
        )})}
        </tbody>
      </table>  
      <h1>Chord Intervals</h1>
      <table style={props.tableStyle} >
        <tbody>
        {props.scale.map((mode, j) => {
          let [nums, notes, name, chords] = props.buildScale(mode)
          chords = chords[0][0]
          let noteMap = props.interval.map((x, i) => notes[x])
          let numMap = props.interval.map((x, i) => nums[x])
          let chordMap = props.interval.map((x, i) => chords[x])
          let noteResult = notes.map((note, i) => {
            let arr = []
            if (props.interval[0] === 0) {
              arr.push( <td key={j++}>{notes[i]}{chords[i]}</td> )
            } else {
              arr.push( <td key={j++}>{notes[i]}{chords[i]}</td> )
              arr.push( <td key={j++}>{noteMap[i]}{chordMap[i]}</td> )
              
            }
            return arr
          })
          let numResult = nums.map((num, i) => {
            let arr = []
            if (props.interval[0] === 0) {
              arr.push( <td key={j++}>{nums[i]}{chords[i]}</td> )
            } else {
              arr.push( <td key={j++}>{nums[i]}{chords[i]}</td> )
              arr.push( <td key={j++}>{numMap[i]}{chordMap[i]}</td> )
            }
            return arr

          })
          return (
              <tr key={j++} onClick={props.handleHighlight}>
                  {name.map((x, i) => <th key={i++}>{x}</th>)}
                { props.onOff === '1' ? numResult.map((x) => x) : noteResult.map(x => x) }
              </tr>
        )})}
            </tbody>
      </table>  

    </div>
  )
}

export default Intervals