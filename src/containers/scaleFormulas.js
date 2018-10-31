import React from 'react';

////https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82
const style = {
  paddingTop: '150px',
}
const ScaleFormulas = (props) => { 
  const {handleHighlight, scale, tableStyle, buildCycle, buildScale, onOff} = props;
  return (
  <div style={style}>
    <h1>Scale Formulas</h1>
    <table style={tableStyle}>
    <tbody style={ {  borderSpacing: 20 }}>
      {scale.map(( scales, i ) => {
        let [nums, notes, scaleName] = buildScale( scales )
        return (
            onOff === '1' ?
            <tr key={ i++ } onClick={handleHighlight}>
              <th key={ i++ }>{ 
                `${ scaleName }`
              }</th>
              { buildCycle(nums.map(x => <td key={ i++ }>{ x }</td>)) }
            </tr>
            :
            <tr key={i++} onClick={handleHighlight}>
              <th key={ i++ }>{ `${ scaleName }` }</th>
              { buildCycle(notes.map(x => <td key={ i ++ }>{ x }</td>)) }
            </tr>
          )
          
        })}
        
        </tbody>
    </table>

  </div >

  )

  
}


export default ScaleFormulas