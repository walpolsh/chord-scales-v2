import React from 'react';


const Header = (props) => 
<header>
<div style={props.headerStyle}>
  <h1>Chord Scale Encyclopedia</h1>
    <div className='headerDiv'>
      <h2>Key of {props.currentKey}</h2>
      <div>
        <button onClick={props.changeKey} value='0'>C</button>
        <button onClick={props.changeKey} value='7'>G</button>
        <button onClick={props.changeKey} value='2'>D</button>
        <button onClick={props.changeKey} value='9'>A</button>
        <button onClick={props.changeKey} value='4'>E</button>
        <button onClick={props.changeKey} value='11'>B</button>
      </div>
      <div>
        <button onClick={props.changeKey} value='5'>F</button>
        <button onClick={props.changeKey} value='10'>Bb</button>
        <button onClick={props.changeKey} value='3'>Eb</button>
        <button onClick={props.changeKey} value='8'>Ab</button>
        <button onClick={props.changeKey} value='1'>Db</button>
        <button onClick={props.changeKey} value='6'>Gb</button>
      </div>
    </div>
    <div className='headerDiv'>
      <h2>{props.currentScale}</h2>
      <div>
        <div>
          <button onClick={props.changeScale} value='0'>Major</button>
          <button onClick={props.changeScale} value='1'>Melodic Minor</button>
          <button onClick={props.changeScale} value='2'>Harmonic Minor</button>
          <button onClick={props.changeScale} value='3'>Harmonic Major</button>
          <button onClick={props.changeScale} value='4'>Hungarian Minor</button>
        </div>
        <div>
        </div>
      </div>
    </div>
    <div className='headerDiv'>
      <h2>Notes or Numerals</h2>
      <div>
        <button onClick={props.handleSwitch} value='0'>Notes</button>
        <button onClick={props.handleSwitch} value='1'>Numerals</button>
      </div>
    </div>
    <div className='headerDiv'>
      <h2>Intervallic Cycles</h2>
        <div>
          <button onClick={props.changeCycle} value='0'>Cycle 2</button>
          <button onClick={props.changeCycle} value='1'>Cycle 3</button>
          <button onClick={props.changeCycle} value='2'>Cycle 4</button>
          <button onClick={props.changeCycle} value='3'>Cycle 5</button>
          <button onClick={props.changeCycle} value='4'>Cycle 6</button>
          <button onClick={props.changeCycle} value='5'>Cycle 7</button>
        </div>
    </div>
  </div>
</header>

export default Header