const Car = require('../models/car')
const Seller = require('../models/seller')

exports.createSeller = async (req, res) => {
    try {
        const { name, cars } = req.body
    
        for (const carID of cars) {
            const iCar = await Car.findById(carID)
            if (!iCar) {
                return res.status(400).json({
                    message: `Car not found`,
                    carid: carID
                })
            }
        }

        const seller = await Seller.create({
            sellerName: name,
            cars: cars
        })

        res.status(201).json({
            message: "Seller created successfully",
            data: seller
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}