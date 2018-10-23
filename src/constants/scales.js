//Major

const Ionian = [['1', '2', '3', '4', '5', '6', '7', 0, 2, 4, 5, 7, 9, 11],['Ionian']]
const Dorian = [['1','2','b3','4','5','6','b7', 0, 2, 3, 5, 7, 9, 10], ['Dorian']]
const Phrygian = [['1', 'b2', 'b3', '4 ', '5 ', 'b6', 'b7', 0, 1, 3, 5, 7, 8, 10], ['Phrygian']]
const Lydian = [['1', '2 ', '3 ', '#4', '5 ', '6 ', '7 ', 0, 2, 4, 6, 7, 9, 11], ['Lydian']]
const Mixolydian = [['1', '2 ', '3 ', '4 ', '5 ', '6 ', 'b7', 0, 2, 4, 5, 7, 9, 10], ['Mixolydian']]
const Aeolian = [['1', '2 ', 'b3', '4 ', '5 ', 'b6', 'b7', 0, 2, 3, 5, 7, 8, 10], ['Aeolian']]
const Locrian = [['1', 'b2', 'b3', '4 ', 'b5', 'b6', 'b7', 0, 1, 3, 5, 6, 8, 10], ['Locrian ']]
export const Major = [Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian]

//Melodic Minor
const Melodic = [['1', '2', 'b3', '4', '5', '6', '7', 0, 2, 3, 5, 7, 9, 11],['Melodic Minor']]
const Dorianb2 = [['1','b2','b3','4','5','6','b7', 0, 1, 3, 5, 7, 9, 10], ['Dorian b2']]
const LydianAug = [['1', '2', '3', '#4 ', '#5 ', '6', '7', 0, 2, 4, 6, 8, 9, 11], ['Lydian #5']]
const LydianDom = [['1', '2 ', '3', '#4', '5', '6', 'b7', 0, 2, 4, 6, 7, 9, 10], ['Lydian b7']]
const Mixolydianb6 = [['1', '2 ', '3', '4', '5', 'b6', 'b7', 0, 2, 4, 5, 7, 8, 10], ['Mixolydian b6']]
const LocrianNat2 = [['1', '2 ', 'b3', '4', 'b5', 'b6', 'b7', 0, 2, 3, 5, 6, 8, 10], ['Locrian ♮2']]
const Locrianb4 = [['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 0, 1, 3, 4, 6, 8, 10], ['Locrian b4']]
export const MelodicMinor = [Melodic, Dorianb2, LydianAug, LydianDom, Mixolydianb6, LocrianNat2, Locrianb4]

//Harmonic Minor
const Harmonic = [['1', '2', 'b3', '4', '5', 'b6', '7', 0, 2, 3, 5, 7, 8, 11],['Harmonic Minor']]
const LocrianNat6 = [['1','b2','b3','4','b5','6','b7', 0, 1, 3, 5, 6, 9, 10], ['Locrian ♮6']]
const IonianSharp5 = [['1', '2', '3', '4', '#5', '6', '7', 0, 2, 4, 5, 8, 9, 11], ['Ionian #5']]
const DorianSharp4 = [['1','2','b3','#4','5','6','b7', 0, 2, 3, 6, 7, 9, 10], ['Dorian #4']]
const PhrygianNat3 = [['1', 'b2', '3', '4 ', '5 ', 'b6', 'b7', 0, 1, 4, 5, 7, 8, 10], ['Phrygian ♮3']]
const LydianSharp2 = [['1', '#2 ', '3 ', '#4', '5 ', '6 ', '7 ', 0, 3, 4, 6, 7, 9, 11], ['Lydian #2']]
const Locrianb4Alt7 = [['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'bb7', 0, 1, 3, 4, 6, 8, 9], ['Locrian b4 bb7']]
export const HarmonicMinor = [Harmonic, LocrianNat6, IonianSharp5, DorianSharp4, PhrygianNat3, LydianSharp2, Locrianb4Alt7]
