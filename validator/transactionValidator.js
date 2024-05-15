exports.validTransaction = (req, res, next) => {
    try {
        const { user, seller, car } = req.body

        if (!user || !seller || !car) {
            return res.status(400).json({
                message: "Bad Request: User, seller, or car data is missing"
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
