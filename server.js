// import modules

import express from 'express'
import { pokemonTrainers } from './data/pokemon-trainers.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')

// Mount Middleware (app.use)


// Mount routes

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/pokemon-trainers', function(req, res) {
  res.render('pokemon-trainers/index', {
    pokemonTrainers
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})