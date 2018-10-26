import React from 'react';

const SeventhChordCycles = (props) => {
  return (
    <div>
      <h1>Seventh Chord Cycles</h1>
      <table style={props.tableStyle}>
        {props.scale.map((scales, j) =>  {
          let chordCycles = props.buildCycle(scales[3][0][0]).map(y => y)
          let numCycles = props.buildCycle(props.buildScale(scales)[0]).map(x=> x)
          let noteCycles = props.buildCycle(props.buildScale(scales)[1]).map(x=> x)
          
          return(
          <tbody key={j + 1}> 
            { props.onOff === '1' ?
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

    </div>
  )
}

export default SeventhChordCycles