import React from 'react';


const Header = (props) => {
  const {currentKey, changeKey, currentScale, changeScale, changeCycle, handleSwitch, toggleMenu} = props;
  return (
    <ul className="topnav">
      <div>
        <div className='navhead'>
          <h1>Chord Scale Encyclopedia</h1>
          <div href='#' onClick={toggleMenu}>
              <i className="fa fa-bars"></i>
          </div>
        </div>
        <div id="myMenu">
          <div className='headerDiv'>
            <h2>Key of {currentKey}</h2>
            <div>
              <button onClick={changeKey} value='0'>C</button>
              <button onClick={changeKey} value='7'>G</button>
              <button onClick={changeKey} value='2'>D</button>
              <button onClick={changeKey} value='9'>A</button>
              <button onClick={changeKey} value='4'>E</button>
              <button onClick={changeKey} value='11'>B</button>
              <button onClick={changeKey} value='5'>F</button>
              <button onClick={changeKey} value='10'>Bb</button>
              <button onClick={changeKey} value='3'>Eb</button>
              <button onClick={changeKey} value='8'>Ab</button>
              <button onClick={changeKey} value='1'>Db</button>
              <button onClick={changeKey} value='6'>Gb</button>
            </div>
          </div>
          <div className='headerDiv'>
            <h2>{currentScale}</h2>
            <div>
              <div>
                <button onClick={changeScale} value='0'>Major</button>
                <button onClick={changeScale} value='1'>Melodic Minor</button>
                <button onClick={changeScale} value='2'>Harmonic Minor</button>
                <button onClick={changeScale} value='3'>Harmonic Major</button>
                <button onClick={changeScale} value='4'>Hungarian Minor</button>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div className='headerDiv'>
            <h2>Notes/Numerals</h2>
            <div>
              <button onClick={handleSwitch} value='0'>Notes</button>
              <button onClick={handleSwitch} value='1'>Nums</button>
            </div>
          </div>
          <div className='headerDiv'>
            <h2>Intervallic Cycles</h2>
              <div>
                <button onClick={changeCycle} value='0'>2nds</button>
                <button onClick={changeCycle} value='1'>3rds</button>
                <button onClick={changeCycle} value='2'>4ths</button>
                <button onClick={changeCycle} value='3'>5ths</button>
                <button onClick={changeCycle} value='4'>6ths</button>
                <button onClick={changeCycle} value='5'>7ths</button>
              </div>
          </div>
        </div> 
      </div>
    </ul>
  )
}

export default Header