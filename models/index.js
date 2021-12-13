const mongoose = require('mongoose')

//schemea is how the structure of the information is going to be saved in the database
const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  //changed to thumbsUp
  thumbsUp: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('message', MessageSchema)
