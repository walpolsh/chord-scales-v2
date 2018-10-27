import React from 'react';
import Voicings from './Voicings'

const SeventhChordVoicings = (props) => {
  const voicings = [props.closedSeventh, props.drop2, props.drop3, props.drop23, props.drop24, props.doubleDrop24]
  const voicingNames = ['', 'Closed', 'Drop 2', 'Drop 3', 'Drop 2/3', 'Drop2/4', 'Double Drop 2/4']
  
  return (
    <div>
        <h1>Seventh Chord Vocings</h1>
        {props.scale.map((mode, j) => {
          let [nums, notes] = props.buildScale( mode, mode)
          const [scaleName, chordName] = [mode[2], mode[3][0][0][0]]

          return (
          <div key={j++}>
            <h2>{`${scaleName} (${chordName})`}</h2>
            <table style={props.tableStyle}>
              <thead>
                <tr>
                  <th>Voicing</th>
                  {
                    props.onOff === '1' ?
                      props.buildCycle(nums.map(x => <th key={j ++}>{x}</th>))
                    :
                      props.buildCycle(notes.map(x => <th key={j ++}>{x}</th>))
                  }
                </tr>
              </thead>
              <tbody>
              {
                props.onOff === '1' ?
                voicings.map((x, i) => {
                 return (
                   <Voicings 
                    key={i++}
                    mode={mode}
                    buildChord={props.buildChord}
                    buildCycle={props.buildCycle}

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
                     buildChord={props.buildChord}
                     buildCycle={props.buildCycle}
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