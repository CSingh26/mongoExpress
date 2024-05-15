const mong = require('mongoose')

const userModel = new mong.Schema({
    userName: {
        type: String,
        required: true
    }, 
    city: {
        type: String,
        required: true
    }
})

const User = mong.model("User", userModel)

module.exports = User