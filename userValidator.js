exports.isUser = (req, res, next) => {
    try {
        const { name, city } = req.body

        if(!name || !city) {
            return res.status(404).json({
                message: "Please fill out all the details"
            })
        }

        return next()
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Name",
            error: err
        })
    }
}