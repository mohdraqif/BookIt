// MongoDB: connects and performs "ONLY CRUD" operations of application with the database

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient //for connection setup

MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db('BookIt')

  db.collection('users').insertMany([
    {
      Name: 'Mohd.Raqif',
      email: "mohdraqif94@gmail.com"
    }, 
    {
      Name: 'Mohd.Faizan',
      email: 'mohdfaizanbly5@gmail.com'
    }
  ], (error, result) =>{
    if(error){
      return console.log('Unable to insert user!')
    }
    console.log(result.ops)
  })
  
})