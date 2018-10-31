import React from 'react';

const Voicings = (props) => {
  const {handleHighlight, name, buildChord, buildCycle, mode, voicing, index} = props;
  return (
    <tr onClick={handleHighlight}>
      <th>{name}</th>
      {buildCycle(buildChord(mode, voicing, index).map((degree, i) => 
        <td key={i++}>
          {degree.join(' ')}
        </td>
      ))}
    </tr>
  )
}

export default Voicings