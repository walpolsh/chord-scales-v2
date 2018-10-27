import React from 'react';

const ChordVoicings = (props) => {
  return (
    <tr>
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