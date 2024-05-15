const router = require('express').Router()

const { createBrand } = require('../controllers/brandController')
const { isBrand } = require('../validator/brandValidator')

router.post("/", isBrand, createBrand)

module.exports = router