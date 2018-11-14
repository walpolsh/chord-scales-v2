import React from 'react';

const ChordVoicings = (props) => {
  const voicings = [props.closedSeventh, props.drop2, props.drop3, props.drop23, props.drop24, props.doubleDrop24]
  const voicingNames = ['Closed', 'Drop 2', 'Drop 3', 'Drop 2/3', 'Drop2/4', 'Double Drop 2/4']
  
  const { interval, scale, buildScale, onOff, tableStyle, handleHighlight, permute } = props;

  const modes = scale.map((mode, j) => {
    let [nums, notes, name, chords] = buildScale(mode)
    chords = chords[0][0]  
    let numsMap = interval.map(int => nums[int])
    let notesMap = interval.map(int => notes[int]) 
    let chordsMap = interval.map(int => chords[int])
    const inversions = (arr) => arr
      .map((note, i) => permute(arr, i))
      .map(x => x
      .filter((y, i)=> i % 2 === 0))

    let i = j
    let arr = []
    if (interval[0] === 0) {
        arr.push(
          <div key={i++}>
            <h2>{name} {chords[0]}</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th>Voicing</th>
                  {
                    onOff === '1' ? 
                    numsMap.map((num, n) => <td key={n++}>{num} {chordsMap[n]}</td>) 
                    : 
                    notesMap.map((note, n) => <td key={n++}>{note} {chordsMap[n]}</td>)
                  }
                </tr>
              </thead>
              <tbody key={i++}>
                  {
                    onOff === '1' ?
                    voicings.map((voicing, x) => 
                     <tr className='no-highlight' onClick={handleHighlight}>
                        <th>{voicingNames[x]}</th>
                        {interval.map(int => <td>
                        {voicing(inversions(nums)[int]).join(' ')}
                        </td> )}
                     </tr>
                    )
                    :
                    voicings.map((voicing, x) => 
                     <tr key={x++} className='no-highlight' onClick={handleHighlight}>
                        <th key={x++}>{voicingNames[x]}</th>
                        {interval.map(int => 
                          <td key={x++}>
                          {voicing(inversions(notes)[int]).join(' ')}
                          </td> )}
                     </tr>
                    )
                  }
              </tbody>
            </table>

          </div>
      )
    } 
    if (interval[0] > 0) {
      arr.push(
        <div key={i++}>
          <h2>{name} {chords[0]}</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Voicing</th>
                {
                  onOff === '1' ? 
                  nums.map((num, n) => <td>{num} {chords[n]}</td>) 
                  : 
                  notes.map((note, n) => <td>{note} {chords[n]}</td>)
                }
              </tr>
            </thead>
            <tbody key={i++}>
                {
                  onOff === '1' ?
                  voicings.map((voicing, x) => 
                   <tr className='no-highlight' onClick={handleHighlight}>
                      <th>{voicingNames[x]}</th>
                      {interval.map((int, y) => <td>
                        {voicing(inversions(nums)[y]).join(' ')}
                        <br/>
                        {voicing(inversions(nums)[int]).join(' ')}
                      </td> )}
                   </tr>
                  )
                  :
                  voicings.map((voicing, x) => 
                   <tr className='no-highlight' onClick={handleHighlight}>
                      <th>{voicingNames[x]}</th>
                      {interval.map((int,y) => <td>
                        {voicing(inversions(notes)[y]).join(' ')}
                        <br />
                        {voicing(inversions(notes)[int]).join(' ')}
                      </td> )}
                   </tr>
                  )
                }
            </tbody>
          </table>

        </div>
      )
    }
    return arr
  })
  
  return (
    <div>
        <h2>Seventh Chord Vocings</h2>
        {modes}

        </div>
  )
}

export default ChordVoicings