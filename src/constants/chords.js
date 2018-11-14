export const closedSeventh = (chord) => [chord[0], chord[1], chord[2], chord[3]]
export const drop2 = (chord) => [chord[0], chord[2], chord[3], chord[1]]
export const drop3 = (chord) => [chord[0], chord[3], chord[1], chord[2]]
export const drop23 = (chord) => [chord[0], chord[1], chord[3], chord[2]]
export const drop24 = (chord) => [chord[0], chord[2], chord[1], chord[3]]
export const doubleDrop24 = (chord) => [chord[0], chord[3], chord[2], chord[1]]

const Cycle2 = [0, 1, 2, 3, 4, 5, 6]
const Cycle3 = [0, 2, 4, 6, 1, 3, 5]
const Cycle4 = [0, 3, 6, 2, 5, 1, 4]
const Cycle5 = [0, 4, 1, 5, 2, 6, 3]
const Cycle6 = [0, 5, 3, 1, 6, 4, 2]
const Cycle7 = [0, 6, 5, 4, 3, 2, 1]
const second = [1, 2, 3, 4, 5, 6, 0]
const third = [2, 3, 4, 5, 6, 0, 1]
const fourth = [3, 4, 5, 6, 0, 1, 2]
const fifth = [4, 5, 6, 0, 1, 2, 3]
const sixth = [5, 6, 0, 1, 2, 3, 4]
const seventh = [6, 0, 1, 2, 3, 4, 5]

export const Cycles = [Cycle2, Cycle3, Cycle4, Cycle5, Cycle6, Cycle7, second, third, fourth, fifth, sixth, seventh]