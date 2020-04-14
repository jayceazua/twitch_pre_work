const Hangman = function (word, guesses) {
  this.word = word.toLowerCase().split('')
  this.lettersGuessed = ['c']
  this.guesses = guesses

}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach((letter) => {
    this.lettersGuessed.includes(letter) ? puzzle += letter : puzzle += '*'
  });

  return puzzle
}

const game = new Hangman('Cat', 3)
console.log(game.getPuzzle())