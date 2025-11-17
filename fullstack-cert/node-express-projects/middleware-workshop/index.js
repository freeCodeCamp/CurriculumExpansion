const express = require('express')
const app = express()

// Create a router
const menuRouter = express.Router()

// Router-level middleware
menuRouter.use((req, res, next) => {
  console.log('Request made to /menu routes')
  next()
})

// Routes handled by this router
menuRouter.get('/', (req, res) => {
  res.send('Welcome to the menu! Try /menu/drinks or /menu/foods')
})

menuRouter.get('/drinks', (req, res) => {
  res.send('Welcome to the drinks menu!')
})

menuRouter.get('/foods', (req, res) => {
  res.send('Welcome to the foods menu!')
})

// Mount the router on /menu
app.use('/menu', menuRouter)

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})

