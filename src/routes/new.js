const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/NewsController')

router.use('/new', newController.index)

module.exports = router