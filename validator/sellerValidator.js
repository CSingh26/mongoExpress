exports.isSeller = (req, res, next) => {
    try {
        const { name, cars } = req.body
        if (!name || !cars) {
            return res.status(404).json({
                message: "Please fill in all the seller details!"
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err
        })
    }
}