import React from 'react';

const SeventhChordCycles = (props) => {
  const {tableStyle, scale, buildScale, buildCycle, handleHighlight, onOff} = props;
  return (
    <div>
      <h1>Seventh Chord Cycles</h1>
      <table style={tableStyle}>
        {scale.map((scales, j) =>  {
        let scaleName = buildScale( scales )[2]
        let chordNames = scales[3][0][0]
        let chordCycles = buildCycle(chordNames).map(y => y)
        let numCycles = buildCycle(buildScale(scales)[0]).map(x=> x)
        let noteCycles = buildCycle(buildScale(scales)[1]).map(x=> x)
          
          return(
          <tbody key={j + 1}> 
            { onOff === '1' ?
            <tr className='no-highlight' onClick={handleHighlight}>
              <th key={scales}>{`${scaleName}`}</th>
                {chordCycles.map((y, i) => <td key={i}>{numCycles[i]} {y}</td>)}
            </tr>
            :
            <tr className='no-highlight' onClick={handleHighlight}>
              <th key={scales}>{`${scaleName}`}</th>
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