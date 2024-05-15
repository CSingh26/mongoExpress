const mong = require('mongoose')

const carModel = mong.Schema({
    carModel: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    brand: {
        type: mong.Schema.Types.ObjectId,
        ref: "Brand"
    }
})

const Car = mong.model('Car', carModel)

module.exports = Car