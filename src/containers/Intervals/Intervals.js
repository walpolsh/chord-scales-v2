import React from 'react';

const Intervals = (props) => {  
  return (
    <div>
      <h1>Scale Intervals</h1>
      <table style={props.tableStyle} >
        {props.scale.map((mode, j) => {
          let [nums, notes, name, chords] = props.buildScale(mode)
          chords = chords[0][0]
          let noteMap = props.interval.map((x, i) => notes[x])
          let numMap = props.interval.map((x, i) => nums[x])
          let chordMap = props.interval.map((x, i) => chords[x])
          let noteResult = notes.map((note, i) => {
            let arr = []
            arr.push(`${notes[i]} - ${noteMap[i]}`)
            return arr
          })
          let numResult = nums.map((num, i) => {
            let arr = []
            arr.push(`${nums[i]}} - ${numMap[i]}`)
            return arr
            
          })

          console.log(noteResult , chordMap[0][0])
          return (

            <tbody>

              <tr>
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
            arr.push(`${notes[i]} ${chords[i]} - ${noteMap[i]} ${chordMap[i]}`)
            return arr
          })
          let numResult = nums.map((num, i) => {
            let arr = []
            arr.push(`${nums[i]} ${chords[i]} - ${numMap[i]} ${chordMap[i]}`)
            return arr
            
          })

          console.log(noteResult , chordMap[0][0])
          return (

            <tbody>

              <tr>
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

    </div>
  )
}

export default Intervals