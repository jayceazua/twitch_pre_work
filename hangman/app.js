const guessesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzle')
let game1 = new Hangman('Cat', 2)


window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  // call the getPuzzle method
  game1.makeGuess(guess)
  // call the remainingGuesses method
  render()
})

const render = () => {
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()