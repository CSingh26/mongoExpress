const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/database')
const brand = require('./routes/brandRoutes')
const cars = require('./routes/carRoutes')
const seller = require('./routes/sellerRoutes')
const trans = require('./routes/transactionRoutes')
const user = require('./routes/userRoutes')

// Initialize Express app
const app = express()

app.use(express.json())
// Routes
app.use("/api/brand", brand)
app.use("/api/cars", cars)
app.use("/api/seller", seller)
app.use("/api/trans", trans)
app.use("/api/user", user)

// Start the server
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`)
})

db.connect()
