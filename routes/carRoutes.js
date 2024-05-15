const router = require('express').Router()

const { createCar } = require('../controllers/carController')
const { isCar } = require('../validator/carValidator')

router.post("/", isCar, createCar)

module.exports = router