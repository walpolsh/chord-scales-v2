import React from 'react';
import banner from './header.png'

const Header = (props) => {
  const {changeKey, changeScale, changeCycle, handleSwitch, onOff} = props;

  return (
    <div className='topnav'>
      <div className='headerBox'>
        <img alt='banner' src={banner} style={{width: '300px', height: '50px'}}></img>
      </div>
      <div className='menuBox'>
        <div>
          {
            onOff === '1' ?
            <button onClick={handleSwitch} value='0'>Nums</button>
            :
            <button onClick={handleSwitch} value='1'>Notes</button>
          }
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
     
            <select onChange={changeScale}> 
              <option value='0'>Major</option>
              <option value='1'>Melodic Minor</option>
              <option value='2'>Harmonic Minor</option>
              <option value='3'>Harmonic Major</option>
              <option value='4'>Hungarian Major</option>
              <option value='5'>Hungarian Minor</option>
              <option value='6'>Neapolitan Minor</option>
              <option value='7'>Neapolitan Major</option>
            </select>

            <select onChange={changeCycle}>
              <option value='0'>Cycle 2</option>
              <option value='1'>Cycle 3</option>
              <option value='2'>Cycle 4</option>
              <option value='3'>Cycle 5</option>
              <option value='4'>Cycle 6</option>
              <option value='5'>Cycle 7</option>
              <option value='6'>2nds</option>
              <option value='7'>3rds</option>
              <option value='8'>4ths</option>
              <option value='9'>5ths</option>
              <option value='10'>6ths</option>
              <option value='11'>7ths</option>

            </select>
        </div>
    </div>

  )
}

export default Header