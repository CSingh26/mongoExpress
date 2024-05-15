exports.isCar = (req, res, next) => {
    try {
        const {model, year, brand } = req.body

        if (!model || !year || !brand) {
            return res.status(404).json({
                message: "Please enter all the car details!"
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