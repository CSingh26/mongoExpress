const User = require('../models/user')

exports.addUser = async (req, res) => {
    try {
        const { name, city } = req.body

        const user = await User.create({ name, city })

        return res.status(200).json({
            message: "User Added Successfully",
            data: user
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}