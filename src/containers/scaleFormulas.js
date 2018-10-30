import React from 'react';

////https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82
const style = {
  paddingTop: '150px',
}
const ScaleFormulas = (props) => { 
  return (
  <div style={style}>
    <h1>Scale Formulas</h1>
    <table style={props.tableStyle}>
    <tbody style={ {  borderSpacing: 20 }}>
      {props.scale.map(( scales, i ) => {
        let [nums, notes, scaleName] = props.buildScale( scales )
        return (

            props.onOff === '1' ?
            <tr key={ i++ }>
              <th key={ i++ }>{ 
                `${ scaleName }`
              }</th>
              { props.buildCycle(nums.map(x => <td key={ i++ }>{ x }</td>)) }
            </tr>
            :
            <tr key={i++} onClick={props.handleHighlight}>
              <th key={ i++ }>{ `${ scaleName }` }</th>
              { props.buildCycle(notes.map(x => <td key={ i ++ }>{ x }</td>)) }
            </tr>
          )
          
        })}
        
        </tbody>
    </table>

  </div >

  )

  
}


export default ScaleFormulas