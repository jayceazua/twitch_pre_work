// HTTP (HyperText Transfer Protocol)
// Request - what we want to do
// Response - what was actually done

const guessesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzle')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  // call the getPuzzle method
  game1.makeGuess(guess)
  // call the remainingGuesses method
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
  console.log(game1.status)

})


// Making an http request using XMLHttpRequest
// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     console.log(data)
//   } else if (e.target.readyState === 4) {
//     console.log('An error has taken place.')
//   }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.send()

const request = new XMLHttpRequest()
const countryCode = 'US'

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    const country = data.find((country) => country.alpha2Code === countryCode)
    console.log(country.name)
  } else if (e.target.readyState === 4) {
    console.log(`Your country does not exist!`)
  }
})


request.open('GET', `http://restcountries.eu/rest/v2/all`)
request.send()