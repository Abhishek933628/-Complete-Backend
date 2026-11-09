const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true
  },
  password: String
})


const userMoodel = mongoose.model("user", userSchema)


module.exports = userMoodel;