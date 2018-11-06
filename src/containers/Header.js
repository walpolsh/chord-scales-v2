import React from 'react';


const Header = (props) => {
  const {changeKey, changeScale, changeCycle, handleSwitch} = props;

  return (
    <div className='topnav'>
      <div className='headerBox'>
        <h1>Chord Scale Encyclopedia</h1>
      </div>
      <div className='menuBox'>
        <div> Key 
        </div>
          <select onChange={changeKey}>
            <option value='0'>C</option>
            <option value='1'>Db</option>
            <option value='2'>D</option>
            <option value='3'>Eb</option>
            <option value='4'>E</option>
            <option value='5'>F</option>
            <option value='6'>Gb</option>
            <option value='7'>G</option>
            <option value='8'>Ab</option>
            <option value='9'>A</option>
            <option value='10'>Bb</option>
            <option value='11'>B</option>
          </select>
        <div> Scale 
        </div>
          <select onChange={changeScale}> 
            <option value='0'>Major</option>
            <option value='1'>Melodic Minor</option>
            <option value='2'>Harmonic Minor</option>
            <option value='3'>Harmonic Major</option>
            <option value='4'>Hungarian Minor</option>
          </select>
        <div> Notation
        </div>
          <select onChange={handleSwitch}>
            <option value='0'>Notes</option>
            <option value='1'>Numerals</option>
          </select>
        <div> Cycle 
        </div>
          <select onChange={changeCycle}>
            <option value='0'>2nds</option>
            <option value='1'>3rds</option>
            <option value='2'>4ths</option>
            <option value='3'>5ths</option>
            <option value='4'>6ths</option>
            <option value='5'>7ths</option>
          </select>
      </div>
    </div>

  )
}

export default Header