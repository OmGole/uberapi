const express = require('express');
const app = express();
const route = require('./routes/route')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json())
app.use('/',route);

const start = async ()=> {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(5000,()=>{
      console.log('server started');
    })
  } catch (error) {
    
  }
}
start()

