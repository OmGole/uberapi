const mongoose = require("mongoose")

const url = "mongodb+srv://OmGole:@MHTcet2020@nodeprojects.4wkat.mongodb.net/Uber?retryWrites=true&w=majority"

const connectDB =(url) => {
 return mongoose.connect(url,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology:true
}).then(()=>console.log('Connected to db'))
}

module.exports = connectDB
