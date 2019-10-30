// Mongoose: connects and performs "ALL AVAILABLE" operations on database (which mongodb model can't perform)

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/BookIt-data', { 
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true 
})

const User = mongoose.model('User', {       //makes a mongodb instance model named User
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  }
})

const me = new User({
  name: 'Mohd.Raqif',
  email: 'mohdraqif94@gmail.com'
})

me.save().then(() =>{
  console.log(me)
}).catch((error) =>{
  console.log(error)
})