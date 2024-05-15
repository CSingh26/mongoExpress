exports.isBrand = (req, res, next) => {
    try {
        const { name, country } = req.body

        if (!name || !country) {
            return res.status(404).json({
                message: "Please fill in all the details"
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