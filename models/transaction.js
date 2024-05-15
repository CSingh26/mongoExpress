const mong = require('mongoose')

const transactionModel = new mong.Schema({
    customer: {
        type: mong.Schema.Types.ObjectId,
        ref: "User"
    }, 
    carModel: {
        type: mong.Schema.Types.ObjectId,
        ref: "Cars"
    }, 
    seller: {
        type: mong.Schema.Types.ObjectId,
        ref: "Seller"
    }
})

const Transaction = mong.model("Transaction", transactionModel)

module.exports = Transaction