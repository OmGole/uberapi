const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:String,
  email:String,
  mobileNo:Number,
  password:String
})

module.exports = mongoose.model('User',UserSchema);