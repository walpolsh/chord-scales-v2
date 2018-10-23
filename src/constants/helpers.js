const permute = (arr, i) => {
  const chunk1 = arr.slice(0, i)
  const chunk2 = arr.slice(i, arr.length)
  return chunk2.concat(chunk1)
}

export default permute