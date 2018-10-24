import React from 'react';

const Header = () => <header>
  <div>
    <h1>Select Key</h1>
    <select onChange={this.changeKey}>
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
  </div>
  <div>
  <h1>Select Scale</h1>
    <select onChange={this.changeScale}>
      <option value='0'>Major</option>
      <option value='1'>Melodic Minor</option>
      <option value='2'>Harmonic Minor</option>
    </select>
  </div>
  <div>
  <h1>Notes/Numerals</h1>
    <select onChange={this.handleSwitch}>
      <option value='0'>Notes</option>
      <option value='1'>Numerals</option>
    </select>
  </div>
  <div>
  <h1>Cycle</h1>
    <select onChange={this.changeCycle}>
      <option value='0'>Cycle 2</option>
      <option value='1'>Cycle 3</option>
      <option value='2'>Cycle 4</option>
      <option value='3'>Cycle 5</option>
      <option value='4'>Cycle 6</option>
      <option value='5'>Cycle 7</option>
    </select>
  </div>
</header>

export default Header