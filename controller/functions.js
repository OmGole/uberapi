const User = require("../models/User")
const Driver = require("../models/Driver")
const Ride = require("../models/Ride")
const UserHistory = require("../models/UserHistroy")

const getUser = (req,res) => {
  try {
    const {id} = req.params;
  const user = User.findOne({_id:id})
  res.status(200).json({user})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const getAllUsers = (req,res) => {
  try {
    const users = User.find({});
    res.json({users})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const createUser = (req,res) => {
  try {
    const user = User.create(req.body)
  res.status(201).json({user})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const getDriver = (req,res) => {
  try {
    const {id} = req.params;
  const driver = Driver.findOne({_id:id})
  res.status(200).json({driver})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const createDriver = (req,res) => {
  try {
    const driver = Driver.create(req.body)
  res.status(201).json({driver})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

module.exports = {getUser,getAllUsers,createUser,getDriver,createDriver}