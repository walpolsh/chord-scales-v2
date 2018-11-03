import React from 'react';

const Header = (props) => {
  const {onOff, currentKey, changeKey, currentScale, changeScale, changeCycle, currentCycle, handleSwitch, toggleMenu} = props;
  console.log(onOff)
  return (
    <div className="topnav">
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
            <div className='buttonContainer'>
              <div className="areaA">
                <button onClick={changeKey} value='0'>C</button>
                <button onClick={changeKey} value='7'>G</button>
                <button onClick={changeKey} value='2'>D</button>
                <button onClick={changeKey} value='9'>A</button>
                <button onClick={changeKey} value='4'>E</button>
                <button onClick={changeKey} value='11'>B</button>

              </div>
              <div className="areaB">
                <button onClick={changeKey} value='5'>F</button>
                <button onClick={changeKey} value='10'>Bb</button>
                <button onClick={changeKey} value='3'>Eb</button>
                <button onClick={changeKey} value='8'>Ab</button>
                <button onClick={changeKey} value='1'>Db</button>
                <button onClick={changeKey} value='6'>Gb</button>

              </div>

            </div>
          </div>
          <div className='headerDiv'>
            <h2>{currentScale}</h2>
            <div className='buttonContainer'>
                <button onClick={changeScale} value='0'>Major</button>
                <button onClick={changeScale} value='1'>Melodic Minor</button>
                <button onClick={changeScale} value='2'>Harmonic Minor</button>
                <button onClick={changeScale} value='3'>Harmonic Major</button>
                <button onClick={changeScale} value='4'>Hungarian Minor</button>

            </div>
          </div>
          <div className='headerDiv'>
            <h2>{onOff === '1' ? 'Numerals' : 'Notes'}</h2>
            <div className='buttonContainer'>
                <button onClick={handleSwitch} value='0'>Notes</button>
                <button onClick={handleSwitch} value='1'>Nums</button>
            </div>
          </div>
          <div className='headerDiv'>
            <h2>{currentCycle[1] === 1 ? '2nds' : currentCycle[1] === 2 ? '3rds' : currentCycle[1] === 3 ? '4ths' : currentCycle[1] === 4 ? '5ths' : currentCycle[1] === 5 ? '6ths' : '7ths' }</h2>
              <div className='buttonContainer'>
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
    </div>
  )
}

export default Header