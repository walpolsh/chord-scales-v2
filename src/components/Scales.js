import React, { Component } from 'react';
//https://medium.com/@ezra_69528/music-theory-foundations-in-a-few-lines-of-code-90026efb5b23



// to get a new key pop x from the front of the 'notes' and push it to the end.



// const triads = (scale) => {
//   const arr1 = [scale[0], scale[2], scale[4]]
//   const arr2 = [scale[1], scale[3], scale[5]]
//   const sliceIt = [arr1.shift().push()]
//   console.log(sliceIt)


// }


class Scales extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      value: 0,
    }

    this.changeKey = this.changeKey.bind(this)
  }
  
  
  
  changeKey(event){
    let notes = ["C", "C#", "D",  "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
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
    const buildScale = (a,b,c,d,e,f,g) => [
      notes[a],
      notes[b],
      notes[c],
      notes[d],
      notes[e],
      notes[f],
      notes[g],
    ]
    
    const triads = []
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
      return arr.map(x => <div>{x.join(' - ')}</div>)
    }

    return(
      <div>
        <select onChange={this.changeKey}>
          <option value='-'>-</option>
          <option value='0'>C</option>
          <option value='1'>C#</option>
          <option value='2'>D</option>
          <option value='3'>D#</option>
          <option value='4'>E</option>
          <option value='5'>F</option>
          <option value='6'>F#</option>
          <option value='7'>G</option>
          <option value='8'>G#</option>
          <option value='9'>A</option>
          <option value='10'>A#</option>
          <option value='11'>B</option>
        </select>
        <h1>Major</h1>
        <h1>{major.join(' - ')}</h1>
        <h1>{modes(major)}</h1>
        <h1>Harmonic Minor</h1>
        <h1>{harmonicMinor.join(' - ')}</h1>
        <h1>{modes(harmonicMinor)}</h1>



      </div>
    )
  }
}


export default Scales