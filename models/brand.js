const mong = require('mongoose')

const carBrandSchema = new mong.Schema({
    name:{
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    }
})

const Brand = mong.model('Brand', carBrandSchema)

module.exports = Brand