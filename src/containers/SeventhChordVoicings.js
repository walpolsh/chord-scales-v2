import React from 'react';
import Voicings from './Voicings'

const SeventhChordVoicings = (props) => {
  const arr = [[props.closedSeventh, props.drop2, props.drop3, props.drop23, props.drop24, props.doubleDrop24], ['Closed', 'Drop 2', 'Drop 3', 'Drop 2/3', 'Drop2/4', 'Double Drop 2/4']]
  return (
    <div>
        <h1>Seventh Chord Vocings</h1>
        {props.scale.map((mode, j) => {
          return (
          <div key={j}>
            <h2>{`${mode[2]} (${mode[3][0][0][0]})`}</h2>
            <table style={props.tableStyle}>
              <thead>
                <tr>
                  <th>Voicing</th>
                  <th>Root Position</th>
                  <th>First Inversion</th>
                  <th>Second Inversion</th>
                  <th>Third Inversion</th>
                </tr>
              </thead>
              <tbody>
              {
                props.onOff === '1' ?
                arr[0].map((x, i) => {
                 return (
                   <Voicings 
                    key={i++}
                    mode={mode}
                    buildChord={props.buildChord}
                    voicing={x}
                    index={0}
                    name={arr[1][i]}
                   />
                 ) 
                })
                :
                arr[0].map((x, i) => {
                 return (
                   <Voicings 
                     key={i++}
                     mode={mode}
                     buildChord={props.buildChord}
                     voicing={x}
                     index={1}
                     name={arr[1][i]}
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