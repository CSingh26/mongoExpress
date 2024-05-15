const Transaction = require('../models/transaction')
const Seller = require('../models/seller')
const User = require('../models/user')
const Car = require('../models/car')

exports.createTransctions = async (req, res) => {
    try {
        const {user, carModel, seller }  = req.body
        const checkCar = await Car.findById({ carModel })
        
        if (!checkCar) {
            return res.status(404).json({
                message: "Car Not found"
            })
        }

        const checkSeller = await Seller.findOne({
            _id: seller,
            cars: { $eleMatch: {
                $eq: carModel
            }}
        })
        
        if (!checkSeller) {
            return res.status(404).json({
                message: "Sller Not found"
            })
        }

        const transaction = await Transaction.create({
            user,
            carModel,
            seller
        })

        return res.status(200).json({
            message: "Transcation Successfull",
            data: transaction
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}