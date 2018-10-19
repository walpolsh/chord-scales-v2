import React, { Component } from 'react';
//https://medium.com/@ezra_69528/music-theory-foundations-in-a-few-lines-of-code-90026efb5b23

class Scales extends Component {
  constructor() {
    super();
    this.state = {
      notes: ["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"],
      numerals: [0,1,2,3,4,5,6,7,8,9,10,11],
      value: '',
      }

    this.changeKey = this.changeKey.bind(this)

  }
  
  changeKey = (event) => {
    let notation = this.state.notes;
    const e = event.target.value
    const chunk1 = notation.slice(0, e)
    const chunk2 = notation.slice(e, notation.length)
    let newKey = chunk2.concat(chunk1)
    console.log(newKey)
    this.setState({
      notes: newKey,
    })
  }

  render() {
    
    const triads = (scale) => {
      // create a new array, set a starting index, reach the end of the array, return to the first index and stop the loop at the initial array.
      let closed = [[scale[0], scale[2], scale[4]],
      [scale[1], scale[3], scale[5]]]
      
      let arr = [
        [scale[0], scale[2], scale[4]],
        [scale[1], scale[3], scale[5]],
        [scale[2], scale[4], scale[6]],
        [scale[3], scale[5], scale[0]],
        [scale[4], scale[6], scale[1]],
        [scale[5], scale[0], scale[2]],
        [scale[6], scale[1], scale[3]]
      ]
      return arr.map((item, key )=> 
      <div>
            <ul key={key}>{item.join(' - ')}</ul>
          </div>
      )
    }


    const buildScale = (a) => { 
      let notes = this.state.notes;
      let scaleNums = a.slice(0, 7);
      let scaleNotes = a.slice(7,14);
      return [scaleNums, scaleNotes.map(x => notes[x])]
    }
    //Major Keys
    const Ionian = ['1', '2', '3', '4', '5', '6', '7',0,2,4,5,7,9,11]
    const Dorian = ['1','2','b3','4','5','6','b7',0,2,3,5,7,9,10]

    const modes = (scale) => {
      let arr = []
      for (let i = 0; i < scale.length; i++) {
        let first = scale.slice(0, i)
        let last = scale.slice(i, scale.length)
        arr.push(last.concat(first))
      }
      arr.shift()
      return arr.map(x => <ul>{x.join(' - ')}</ul>)
    }
    return(
      <div>
        <div>
          <h1>Select Key</h1>
            <select onChange={this.changeKey}>
              <option value='-'>-</option>
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

          <h1>Select Scale</h1>

        </div>
        <h1>{buildScale(Dorian)}</h1>
        <h1>{buildScale(Ionian)}</h1>



      </div>
    )
  }
}


export default Scales