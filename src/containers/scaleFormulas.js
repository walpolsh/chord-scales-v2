import React from 'react';
import { Major } from '../constants/scales'

////https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82
const ScaleFormulas = (props) => { 
  const {handleHighlight, scale, tableStyle, buildCycle, buildScale, onOff, showMenu} = props;
  const style = showMenu ? {paddingTop: '320px'} : {paddingTop: '60px'}
  return (
  <div style={style}>
    <h2>Scale Formulas</h2>
    <table style={tableStyle}>
    <thead>
      <tr>
        <th>Scale</th>
        {
          scale.map((scales, j) =>  {
          let i = j
          let numCycles = buildCycle(buildScale(Major)[0][0]).map(x=> x)
          return (
            <th key={i++} >{numCycles[j]}</th> 
          )
          })
        }
      </tr>
    </thead>
    <tbody style={ {  borderSpacing: 20 }}>

      {scale.map(( scales, i ) => {
        let [nums, notes, scaleName] = buildScale( scales )
        return (
            onOff === '1' ?
            <tr key={ i++ } className='no-highlight' onClick={handleHighlight}>
              <th key={ i++ }>{ 
                `${ scaleName }`
              }</th>
              { buildCycle(nums.map(x => <td key={ i++ }>{ x }</td>)) }
            </tr>
            :
            <tr key={i++} className='no-highlight' onClick={handleHighlight}>
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