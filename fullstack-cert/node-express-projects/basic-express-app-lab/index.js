// Camper Bot's Personal Profile App

// index.js
const express = require('express')
const app = express()
const port = 3000

// Home
app.get('/', (req, res) => {
  res.send('Welcome to Camper Bot\'s homepage!')
})

// Hobbies
app.get('/hobbies', (req, res) => {
  res.send('I love cycling, boating, and playing guitar.')
})

// Skills
app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!')
})

// Optional JSON API
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  })
})

app.listen(port, () => {
  console.log(`Personal Profile App running at http://localhost:${port}`)
})
