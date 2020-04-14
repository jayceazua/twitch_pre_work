const Hangman = function (word, guesses) {
  this.word = word.toLowerCase().split('')
  this.lettersGuessed = ['c']
  this.guesses = guesses

}

Hangman.prototype.getPuzzle = function () { // O(n^2) runtime to search and replace for hangman
  let puzzle = ''

  this.word.forEach((letter) => { // O(n)
    // O(n)
    this.lettersGuessed.includes(letter) ? puzzle += letter : puzzle += ' *'
  });

  return puzzle
}

const game = new Hangman('Cat', 3)
console.log(game.getPuzzle())