const getPuzzle = async (wordCount) => {
  // by leaving out the http or https it automatically gets the correct version 
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle.')
  }

}

export {
  getPuzzle as default
}