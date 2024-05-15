const Brand = require('../models/brand')

exports.createBrand = async (req, res) => {
    try {
        const { name, country } = req.body
        const newBrand = await Brand.create({ name, country })
        res.status(201).json({
            message: "New Car Brand Added",
            data: Brand
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}
