const express = require('express');
const router = express.Router();
const {getUser,getAllUsers,createUser,getDriver,createDriver} = require('../controller/')

router.route("/user/:id").get(getUser)
router.route("/user").post(createUser)
router.route("/users").get(getAllUsers)
router.route("/driver/:id").get(getDriver)
router.route("/driver").post(createDriver)


module.exports = router;