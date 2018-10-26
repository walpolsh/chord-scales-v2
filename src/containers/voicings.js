import React from 'react';

const Voicings = (props) => {
  return (
                <tr>
                  <th>{props.name}</th>
                  {props.buildChord(props.mode, props.voicing, props.index).map((degree, i) => <td key={i++}>{degree.join(' ')}</td>)}
                </tr>
  )
}

export default Voicings