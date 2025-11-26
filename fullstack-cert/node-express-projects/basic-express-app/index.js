/* 
This basic Express app serves random jokes at the /joke route.
*/

const express = require('express')
const app = express()
const port = 3000

// A small list of jokes
const jokes = [
  'Why do programmers prefer dark mode? Because light attracts bugs!',
  'There are only 10 kinds of people in the world: those who understand binary and those who don’t.',
  'I told my computer I needed a break, and it said "No problem, I’ll go to sleep."',
  'Why do Java developers wear glasses? Because they don’t see sharp.'
]

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Joke Server! Visit /joke to get a random one.')
})

// Joke route
app.get('/joke', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
  res.send(randomJoke)
})

// About route
app.get('/about', (req, res) => {
  res.send('This Joke Server was built with Express.js')
})

// Start the server
app.listen(port, () => {
  console.log(`Joke Server running at http://localhost:${port}`)
})
