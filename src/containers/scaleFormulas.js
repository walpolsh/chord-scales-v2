import React from 'react';

////https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82
const ScaleFormulas = (props) => { 
  const {handleHighlight, scale, tableStyle, buildCycle, buildScale, onOff, showMenu} = props;
  const style = showMenu ? {paddingTop: '200px'} : {paddingTop: '60px'}
  return (
  <div style={style}>
    <h1>Scale Formulas</h1>
    <table style={tableStyle}>
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