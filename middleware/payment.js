const Seller = require('../models/seller')
const User = require('../models/user')

exports.payment = async (req, res, next) => {
    try {
        const { userID, sellerID } = req.body

        const user = await User.findById(userID)
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const seller = await Seller.findById(sellerID)
        if (!seller) {
            return res.status(404).json({
                message: "Seller not found"
            })
        }

        return next()
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err
        })
    }
}
