const express = require('express')
const app = express()

const maintenanceMode = true

app.use((req, res, next) => {
  if (maintenanceMode) {
    return res.send('The server is currently under maintenance. Please try again later.')
  }
  next() // Continue if maintenanceMode is false
})

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
