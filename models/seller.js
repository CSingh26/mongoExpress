const mong = require('mongoose')

const sellerModel  = new mong.Schema({
    sellerName: {
        type: String,
        required: true
    }, 
    cars: {
        type: mong.Schema.Types.ObjectId,
        ref: "Car"
    }
})

const Seller = mong.model("Seller", sellerModel)

module.exports = Seller