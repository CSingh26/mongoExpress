const router = require('express').Router()

const { createSeller } = require('../controllers/sellerController')
const { isSeller } = require('../validator/sellerValidator')

router.post("/", isSeller, createSeller)

module.exports = router