class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.lettersGuessed = []
    this.remainingGuesses = remainingGuesses
    this.status = 'playing'
  }

  calStatus() {
    const finished = this.word.every((letter) => this.lettersGuessed.includes(letter) || letter === ' ')

    if (this.remainingGuesses === 0) {
      this.status = 'failed'

    } else if (finished) {
      this.status = 'finished'

    } else {
      this.status = 'playing'

    }
  }

  get statusMessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
      return `You suck! The word was "${this.word.join('')}"`
    } else {
      return 'You won!'
    }
  }

  get puzzle() {
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

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.lettersGuessed.includes(guess)
    const isBadguess = !this.word.includes(guess)

    if (this.status !== 'playing') {
      return
    }

    if (isUnique) {
      this.lettersGuessed.push(guess)
    }

    if (isUnique && isBadguess) {
      this.remainingGuesses -= 1
    }

    this.calStatus()
  }

}