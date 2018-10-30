


const permuteAlt = (arr, i) => {
  const arr2 = []
  const chunk1 = arr.slice(0, i)
  const chunk2 = arr.slice(i, arr.length)
  arr2.push( chunk2.concat(chunk1))
  return arr2
}

//Chromatic Scale
export const Chromatic = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]

//Major
let majorChords = []

for (let i = 0; i < 7; i++) {
  majorChords.push(permuteAlt(["maj7", "min7", "min7", "maj7", "dom7", "min7", "min7b5"], i))
}

const Ionian = [['1', '2', '3', '4', '5', '6', '7'], [0, 2, 4, 5, 7, 9, 11],['Major/Ionian'], [majorChords[0]]]
const Dorian = [['1','2','b3','4','5','6','b7'], [0, 2, 3, 5, 7, 9, 10], ['Dorian'], [majorChords[1]]]
const Phrygian = [['1', 'b2', 'b3', '4', '5', 'b6', 'b7'], [0, 1, 3, 5, 7, 8, 10], ['Phrygian'], [majorChords[2]]]
const Lydian = [['1', '2', '3', '#4', '5', '6 ', '7'], [0, 2, 4, 6, 7, 9, 11], ['Lydian'], [majorChords[3]]]
const Mixolydian = [['1', '2', '3', '4', '5', '6', 'b7'], [0, 2, 4, 5, 7, 9, 10], ['Mixolydian'], [majorChords[4]]]
const Aeolian = [['1', '2', 'b3', '4', '5', 'b6', 'b7'], [0, 2, 3, 5, 7, 8, 10], ['Aeolian'], [majorChords[5]]]
const Locrian = [['1', 'b2', 'b3', '4', 'b5', 'b6', 'b7'], [0, 1, 3, 5, 6, 8, 10], ['Locrian '], [majorChords[6]]]
export const Major = [Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian]


//Melodic Minor
let melodicMinorChords = []

for (let i = 0; i < 7; i++) {
  melodicMinorChords.push(permuteAlt(["min/maj7", "min7", "maj7#5", "dom7", "dom7", "min7b5", "min7b5"], i))
}

const Melodic = [['1', '2', 'b3', '4', '5', '6', '7'], [0, 2, 3, 5, 7, 9, 11],['Melodic Minor'], [melodicMinorChords[0]]]
const Dorianb2 = [['1','b2','b3','4','5','6','b7'], [0, 1, 3, 5, 7, 9, 10], ['Dorian b2'], [melodicMinorChords[1]]]
const LydianAug = [['1', '2', '3', '#4', '#5', '6', '7'], [0, 2, 4, 6, 8, 9, 11], ['Lydian #5'], [melodicMinorChords[2]]]
const LydianDom = [['1', '2', '3', '#4', '5', '6', 'b7'], [0, 2, 4, 6, 7, 9, 10], ['Lydian b7'], [melodicMinorChords[3]]]
const Mixolydianb6 = [['1', '2', '3', '4', '5', 'b6', 'b7'], [0, 2, 4, 5, 7, 8, 10], ['Mixolydian b6'], [melodicMinorChords[4]]]
const LocrianNat2 = [['1', '2', 'b3', '4', 'b5', 'b6', 'b7'], [0, 2, 3, 5, 6, 8, 10], ['Locrian ♮2'], [melodicMinorChords[5]]]
const Locrianb4 = [['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'], [0, 1, 3, 4, 6, 8, 10], ['Locrian b4'], [melodicMinorChords[6]]]
export const MelodicMinor = [Melodic, Dorianb2, LydianAug, LydianDom, Mixolydianb6, LocrianNat2, Locrianb4]

//Harmonic Minor
let harmonicMinorChords = []

for (let i = 0; i < 7; i++) {
  harmonicMinorChords.push(permuteAlt(["min/maj7", "min7b5 ", "maj7#5", "min7", "dom7", "maj7", "dim7"], i))
}

const Harmonic = [['1', '2', 'b3', '4', '5', 'b6', '7'], [0, 2, 3, 5, 7, 8, 11],['Harmonic Minor'], [harmonicMinorChords[0]]]
const LocrianNat6 = [['1', 'b2', 'b3', '4', 'b5', '6', 'b7'], [0, 1, 3, 5, 6, 9, 10], ['Locrian ♮6'], [harmonicMinorChords[1]]]
const IonianSharp5 = [['1', '2', '3', '4', '#5', '6', '7'], [0, 2, 4, 5, 8, 9, 11], ['Ionian #5'], [harmonicMinorChords[2]]]
const DorianSharp4 = [['1', '2', 'b3', '#4', '5', '6', 'b7'], [0, 2, 3, 6, 7, 9, 10], ['Dorian #4'], [harmonicMinorChords[3]]]
const PhrygianNat3 = [['1', 'b2', '3', '4', '5', 'b6', 'b7'], [0, 1, 4, 5, 7, 8, 10], ['Phrygian ♮3'], [harmonicMinorChords[4]]]
const LydianSharp2 = [['1', '#2', '3', '#4', '5', '6', '7'], [0, 3, 4, 6, 7, 9, 11], ['Lydian #2'], [harmonicMinorChords[5]]]
const Locrianb4Alt7 = [['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'bb7'], [0, 1, 3, 4, 6, 8, 9], ['Locrian b4 bb7'], [harmonicMinorChords[6]]]

export const HarmonicMinor = [Harmonic, LocrianNat6, IonianSharp5, DorianSharp4, PhrygianNat3, LydianSharp2, Locrianb4Alt7]

//Harmonic Major
let harmonicMajorChords = []

for (let i = 0; i < 7; i++) {
  harmonicMajorChords.push(permuteAlt(["maj7", "min7b5 ", "min7", "min/maj7", "dom7", "maj7#5", "dim7"], i))
}

const HarmonicMaj = [['1', '2', '3', '4', '5', 'b6', '7'], [0, 2, 4, 5, 7, 8, 11],['Harmonic Major'], [harmonicMajorChords[0]]]
const Dorianb5 = [['1', '2', 'b3', '4', 'b5', '6', 'b7'], [0, 2, 3, 5, 6, 9, 10], ['Dorian b5'], [harmonicMajorChords[1]]]
const Phrygianb4 = [['1', 'b2', 'b3', 'b4', '5', 'b6', 'b7'], [0, 1, 3, 4, 7, 8, 10], ['Phrygian b4'], [harmonicMajorChords[2]]]
const Lydianb3 = [['1', '2', 'b3', '#4', '5', '6', 'b7'], [0, 2, 3, 6, 7, 9, 10], ['Lydian b3'], [harmonicMajorChords[3]]]
const Mixolydianb2 = [['1', 'b2', '3', '4', '5', '6', 'b7'], [0, 1, 4, 5, 7, 8, 10], ['Dorian b2'], [harmonicMajorChords[4]]]

const LydianSharp2Sharp5 = [['1', '#2', '3', '#4', '#5', '6', '7'], [0, 3, 4, 6, 8, 9, 11], ['Lydian #2 #5'], [harmonicMajorChords[5]]]
const Locrianbb7 = [['1', 'b2', 'b3', '4', 'b5', 'b6', 'bb7'], [0, 1, 3, 4, 6, 8, 9], ['Locrian bb7'], [harmonicMajorChords[6]]]

export const HarmonicMajor = [HarmonicMaj, Dorianb5, Phrygianb4, Lydianb3, Mixolydianb2, LydianSharp2Sharp5, Locrianbb7]

// Hungarian minor


let hungarianMinorChords = []

for (let i = 0; i < 7; i++) {
  hungarianMinorChords.push(permuteAlt(["maj7", "min7b5 ", "min7", "min/maj7", "dom7", "maj7#5", "dim7"], i))
}

const HungarianMin = [['1','2','b3','#4','5','b6','7'], [0, 2, 3, 6, 7, 8, 11],['Hungarian Minor'], [hungarianMinorChords[0]]]
const Oriental = [['1','b2','3','4','b5','6','b7'], [0, 1, 4, 5, 6, 9, 10], ['Oriental'], [hungarianMinorChords[1]]]
const IonianAugmented2 = [['1','#2','3','4','#5','6','7'], [0, 3, 4, 5, 8, 9, 11], ['Ionian Augmented 2'], [hungarianMinorChords[2]]]
const Locrainbb3bb7 = [['1','b2','bb3','4','b5','b6','bb7'], [0, 1, 2, 5, 6, 8, 9], ['Locrain bb3 bb7'], [hungarianMinorChords[3]]]
const DoubleHarmonic = [['1','b2','3','4','5','b6','7'], [0, 1, 4, 5, 7, 8, 11], ['Double Harmonic'], [hungarianMinorChords[4]]]
const LydianSharp2Sharp6 = [['1','#2','3','#4','5','#6','7'], [0, 3, 4, 6, 7, 10, 11], ['Lydian #2 #6'], [hungarianMinorChords[5]]]
const Phyrgianb4bb7 = [['1','b2','b3','b4','5','b6','bb7'], [0, 1, 3, 4, 7, 8, 9], ['Phyrgian b4 bb7'], [hungarianMinorChords[6]]]

export const HungarianMinor = [ HungarianMin, Oriental, IonianAugmented2, Locrainbb3bb7, DoubleHarmonic, LydianSharp2Sharp6, Phyrgianb4bb7]
// 
// 
// 


