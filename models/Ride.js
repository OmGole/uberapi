const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  price:Number,
  currentLocation:String,
  destination:String,
  pickUpTime:String
})

module.exports = mongoose.model('Ride',RideSchema);