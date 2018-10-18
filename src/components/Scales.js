import React, { Component } from 'react';
//https://medium.com/@ezra_69528/music-theory-foundations-in-a-few-lines-of-code-90026efb5b23



// to get a new key pop x from the front of the 'notes' and push it to the end.





class Scales extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      value: '',
    }

    this.changeKey = this.changeKey.bind(this)
  }
  
  changeKey(event){
    let notes = ["C", "Db", "D", "Eb", "E", "F", "F#", "Gb", "Ab", "A", "Bb", "B"]
    const e = event.target.value
    let chunk1 = notes.slice(0, e)
    let chunk2 = notes.slice(e, notes.length)
    let newKey = chunk2.concat(chunk1)
    this.setState({
      notes: newKey,
    })
  }

  render() {
    const notes = this.state.notes;
    const key = this.state.value
    const buildScale = (a,b,c,d,e,f,g) => [
      notes[a],
      notes[b],
      notes[c],
      notes[d],
      notes[e],
      notes[f],
      notes[g],
    ]
    
    const triads = (scale) => {
      // create a new array, set a starting index, reach the end of the array, return to the first index and stop the loop at the initial array.

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

    const major = buildScale(0,2,4,5,7,9,11)
    const harmonicMinor = buildScale(0,2,3,5,7,8,11)

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
          <h1>Select Scale</h1>

        </div>
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
        <h1>{key.toString} Major</h1>
        <h1>{major.join(' - ')}</h1>
        <h1>{modes(major)}</h1>
        <h1>{triads(major)}</h1>

        <h1>Harmonic Minor</h1>
        <h1>{harmonicMinor.join(' - ')}</h1>
        <h1>{modes(harmonicMinor)}</h1>
        <h1>{triads(harmonicMinor)}</h1>




      </div>
    )
  }
}


export default Scales