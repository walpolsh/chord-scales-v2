import React from 'react';

////https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82

const Table = props => {
  return (
    <table> 
      {props.scale.map((scales, i) => scales)}
    </table>

  )
}
export default Table