import React from 'react';

////https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82

const ScaleFormulas = (props) => {
  return (
  <div style={props.bodyDiv}>
    <h1>Scale Formulas</h1>
    <table style={props.tableStyle}>
      {props.scale.map((scales, i) => {
        let [nums, notes]= props.buildScale(scales)
        return (
        <tbody key={i++} style={{ borderSpacing: 20}}>
          {
            props.onOff === '1' ?
            <tr key={i++}>
              <th key={i++}>{`${scales[2]}`}</th>
              {nums.map(x => <td key={i++}>{x}</td>)}
            </tr>
            :
            <tr>
              <th key={i++}>{`${scales[2]}`}</th>
              {notes.map(x => <td key={i ++}>{x}</td>)}
            </tr>
          }
      </tbody>
        )
      })}
    </table>
  </div >

  )

  
}


export default ScaleFormulas