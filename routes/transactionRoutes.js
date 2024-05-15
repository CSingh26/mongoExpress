const router = require('express').Router()

const { validTransaction } = require('../validator/transactionValidator')
const { createTransctions } = require('../controllers/transactionController')
const { payment } = require('../middleware/payment')

router.post('/', validTransaction, payment, createTransctions)