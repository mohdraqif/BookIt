const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '/public')))
hbs.registerPartials(path.join(__dirname, '/views/partials'))

app.get('/', (req, res) =>{
  res.render('home', {title: 'Home'})
})
app.get('/about', (req, res) => {
  res.render('about', {title: 'About'})
})
app.get('/sale', (req, res) =>{
  res.render('sale', {title: 'Sale'})
})
app.get('/login', (req, res) => {
  res.render('login', {title: 'LogIn/SignUp'})
})


app.listen(3000, () => {
  console.log('Server On Port 3000')
})