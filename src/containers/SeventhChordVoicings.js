import React from 'react';
import Voicings from './Voicings'

const SeventhChordVoicings = (props) => {
  const voicings = [props.closedSeventh, props.drop2, props.drop3, props.drop23, props.drop24, props.doubleDrop24]
  const voicingNames = ['', 'Closed', 'Drop 2', 'Drop 3', 'Drop 2/3', 'Drop2/4', 'Double Drop 2/4']
  const { scale, buildChord, buildScale, buildCycle, onOff, tableStyle, handleHighlight } = props;

  return (
    <div>
        <h2>Seventh Chord Vocings</h2>
        {scale.map((mode, j) => {
          let buildMode = buildScale( mode, mode)
          
          const [scaleName, chordName] = [mode[2], mode[3][0][0][0]]
          const chordNames = mode[3][0][0]  
          return (
          <div key={j++}>
            <h2>{`${scaleName} (${chordName})`}</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th>Voicing</th>
                  {
                      buildCycle(buildMode[1].map((x, i) => <td key={j ++}>{x} {chordNames[i]}</td>))
                  }
                </tr>
              </thead>
              <tbody key={j++}>
              {
                onOff === '1' ?
                voicings.map((x, i) => {
                 return (
                   <Voicings 
                    key={i++}
                    mode={mode}
                    buildChord={buildChord}
                    buildCycle={buildCycle}
                    handleHighlight={handleHighlight}
                    voicing={x}
                    index={0}
                    name={voicingNames[i]}
                   />
                 ) 
                })
                :
                voicings.map((x, i) => {
                 return (
                   <Voicings 
                     key={i++}
                     mode={mode}
                     buildChord={buildChord}
                     buildCycle={buildCycle}
                     handleHighlight={handleHighlight}
                     voicing={x}
                     index={1}
                     name={voicingNames[i]}
                   />
                 ) 
                })
              }
              </tbody>
            </table>
          </div>
            )})}
        </div>
  )
}

export default SeventhChordVoicings