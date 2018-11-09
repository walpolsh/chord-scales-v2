import React from 'react';
import { Major } from '../constants/scales'

const SeventhChordCycles = (props) => {
  const {tableStyle, scale, buildScale, buildCycle, handleHighlight, onOff} = props;
  return (
    <div>
      <h2>Seventh Chord Cycles</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Scale</th>
            {
              scale.map((scales, j) =>  {
              let i = j
              let numCycles = buildCycle(buildScale(Major)[0][0]).map(x=> x)
              return (
                <th key={i++}>{numCycles[j]}</th> 
              )
              })
            }
          </tr>
        </thead>
        <tbody>
        
        {
          scale.map((scales, j) =>  {
            let scaleName = buildScale( scales )[2]
            let chordNames = scales[3][0][0]
            let chordCycles = buildCycle(chordNames).map(y => y)
            let numCycles = buildCycle(buildScale(scales)[0]).map(x=> x)
            let noteCycles = buildCycle(buildScale(scales)[1]).map(x=> x)
          
            return(

              onOff === '1' ?
              <tr key={j++} className='no-highlight' onClick={handleHighlight}>
                <th key={scales}>{`${scaleName}`}</th>
                  {chordCycles.map((y, i) => <td key={i}>{numCycles[i]} {y}</td>)}
              </tr>
              :
              <tr key={j++} className='no-highlight' onClick={handleHighlight}>
                <th key={scales}>{`${scaleName}`}</th>
                {chordCycles.map((y, i) => <td key={i}>{noteCycles[i]} {y}</td>)}
              </tr>
              
            )
          })
        }
          </tbody>
      </table>

    </div>
  )
}

export default SeventhChordCycles