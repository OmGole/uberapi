const mongoose = require('mongoose');

const UserHistorySchema = new mongoose.Schema({
  tripStartLocation:String,
  tripDestination:String,
  tripReview:Number,
  tripDateAndTime:String
})

module.exports = mongoose.model('UserHistory',UserHistorySchema);