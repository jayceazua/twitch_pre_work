const guessesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzle')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage


window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  // call the getPuzzle method
  game1.makeGuess(guess)
  // call the remainingGuesses method
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
  console.log(game1.status)

})