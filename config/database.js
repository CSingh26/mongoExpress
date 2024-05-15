const mong = require("mongoose")

const url = 'mongodb+srv://singhchaittanya:cQ1ha40v7spwGkKm@cluster0.a22ney6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mong.connect(url, options)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MondoDB:', err))

module.exports = mong