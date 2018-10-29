import React from 'react';

const ChordVoicings = (props) => {
  return (
    <tr onClick={props.handleHighlight}>
      <th>{props.name}</th>
      {props.scale.map(mode => {
        return (
          <d>{props.buildChord(mode)}</d>
        )
      })}
    </tr>
  )
}

export default ChordVoicings