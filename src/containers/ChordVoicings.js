import React from 'react';
import { closedSeventh } from '../constants/chords';

const ChordVoicings = (props) => {
  return (
    <tr>
      <th>{props.name}</th>
      {props.scale.map(mode => {
        return (
          <d>{this.props.buildChord(mode)}</d>

        )
      })}
    </tr>
  )
}

//name, 
export default ChordVoicings