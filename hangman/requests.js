// Making an http request using XMLHttpRequest
const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle)
    } else if (e.target.readyState === 4) {
      reject('An error has taken place.')
    }
  })

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
})


/* Using Callbacks 
// const getPuzzle = (wordcount, callback) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', (e) => {

//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       callback(undefined, data.puzzle)

//     } else if (e.target.readyState === 4) {
//       callback('An error has taken place.', undefined)
//     }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordcount}`)
//   request.send()
// }


fetch api notes


*/
