const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.lettersGuessed = ['c']
  this.remainingGuesses = remainingGuesses

}

Hangman.prototype.getPuzzle = function () { // O(n^2) runtime to search and replace for hangman
  let puzzle = ''

  this.word.forEach((letter) => { // O(n)
    if (this.lettersGuessed.includes(letter) || letter === '') {
      puzzle += letter
    } else {
      puzzle += ' *'
    }
  });

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.lettersGuessed.includes(guess)
  const isBadguess = !this.word.includes(guess)

  if (isUnique) {
    this.lettersGuessed.push(guess)
  }
  if (isUnique && isBadguess) {
    this.remainingGuesses -= 1
  }
}