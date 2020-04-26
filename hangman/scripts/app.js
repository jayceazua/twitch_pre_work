const guessesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzle')
let game1


window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  // call the getPuzzle method
  game1.makeGuess(guess)
  // call the remainingGuesses method
  render()
})

const render = () => {
  puzzleEl.innerHTML = ''
  guessesEl.textContent = game1.statusMessage
  game1.puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })

}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()