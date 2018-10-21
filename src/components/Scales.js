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
    this.setState({
      notes: newKey,
    })
  }

  render() {
    
    const triads = (scale) => {
    }

    const sevenths = (scale) => {
    }


    const buildScale = (a) => { 
      let notes = this.state.notes;
      let scaleNums = a[0].slice(0, 7);
      let scaleNotes = a[0].slice(7,14);
      return [scaleNums, scaleNotes.map(x => notes[x])]
    }

    //Major Keys
    const Ionian = [['1', '2', '3', '4', '5', '6', '7',0,2,4,5,7,9,11],['Ionian']]
    const Dorian = [['1','2','b3','4','5','6','b7',0,2,3,5,7,9,10], ['Dorian']]
    const Phrygian = [['1', 'b2', 'b3', '4 ', '5 ', 'b6', 'b7', 0, 1, 3, 5, 7, 8, 10], ['Phrygian']]
    const Lydian = [['1', '2 ', '3 ', '#4', '5 ', '6 ', '7 ', 0, 2, 4, 6, 7, 9, 11], ['Lydian']]
    const Mixolydian = [['1', '2 ', '3 ', '4 ', '5 ', '6 ', 'b7', 0, 2, 4, 5, 7, 9, 10], ['Mixolydian']]
    const Aeolian = [['1', '2 ', 'b3', '4 ', '5 ', 'b6', 'b7', 0, 2, 3, 5, 7, 8, 10], ['Aeolian']]
    const Locrian = [['1', 'b2', 'b3', '4 ', 'b5', 'b6', 'b7', 0, 1, 3, 5, 6, 8, 10], ['Locrian ']]
    const Major = [Ionian, Dorian, Phrygian, Lydian, Mixolydian,Aeolian, Locrian]
    
    const headerStyle = {
      width: '100%',
      textAlign: 'center',
      background: 'gray',
      color: 'white',
    }
    
    const table = {
        width: '100%',
        tableLayout: 'fixed',
        textAlign: 'center',
        background: 'gray',
        color: 'white',
    }

    const tableHead = {
      textAlign: 'center',
    }

    const tr = {
      border: '15px, #f33'
    }
    const td = {
      width: '15%',
    }

    return(
      <div>
        <div style={headerStyle}>
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

        </div>
        <table>
          <tbody>

              {Major.map(scales => {
                    let [numbers, notes] = buildScale(scales)
                    return <tr><td>{scales[1]}</td>
                          {notes.map(x => <td>{x}</td>)}
                          </tr>
                  }  
                )}
          </tbody>
        </table>
        
        {/* <table style={table}>
          <thead>{`${this.state.notes[0]} Major `}</thead>
          <tbody>
          <thead>
            {MajorStrings.map(x => <tr>{x}</tr>)}
          </thead>
        {Major.map(scales => {
          let [numbers, notes] = buildScale(scales)
          console.log(notes)
          return (
                // <td>
                //   {y.map(x => <tr style={td}>{x}</tr>)}
                // </td>
                <td>
                  {notes.map(x => <tr style={td}>{x}</tr>)}
                </td>
            )
        })}
          </tbody>
        </table> */}
      </div>
    )
  }
}


export default Scales