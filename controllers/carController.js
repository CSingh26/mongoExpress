const Car = require('../models/car')
const Brand = require('../models/brand')

exports.createCar = async (req, res) => {
    try {
        const { carModel, year, brand} = req.body
        const cBrand = await Brand.findOne({ __id: brand})

        if(cBrand) {
            const car = await Car.create({
                carModel,
                year,
                brand: cBrand._id
            })
            return res.status(201).json({
                message: "Car added successfully",
                data: car
            })
        } else {
            return res.status(404).json({
                message: "Car not found"
            })
        }
        
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}
