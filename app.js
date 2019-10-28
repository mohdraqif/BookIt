const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '/public')))
hbs.registerPartials(path.join(__dirname, '/views/partials'))

app.get('/', (req, res) =>{
  res.render('home', {title: "This is 'Home'"})
})
app.get('/about', (req, res) => {
  res.render('about', {title: "This is 'About'"})
})
app.get('/store', (req, res) =>{
  res.render('store', {title: "// This whole page will become a POPUP //"})
})
app.get('/login', (req, res) => {
  res.render('login', {title: "This is 'Connect Us'"})
})
app.get('/sale', (req, res) => {
  res.render('sale', {title: "This is 'Sale'"})
})
app.get('/buy', (req, res) => {
  res.render('buy', {title: "This is 'Buy Store'"})
})
app.get('/sell', (req, res) => {
  res.render('sell', {title: "This is 'Sell Store'"})
})
app.get('/terms', (req, res) => {
  res.render('terms', {title: "This is 'Terms & Conditions'"})
})
app.get('/support', (req, res) => {
  res.render('support', {title: "This is 'Support Us'"})
})



app.listen(3000, () => {
  console.log('Server On Port 3000')
})