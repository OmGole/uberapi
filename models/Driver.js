const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  name:String,
  email:String,
  carNo:Number,
  mobileNo:Number,
  profilePic:String,
  Rating:Number
})

module.exports = mongoose.model('Driver',DriverSchema);