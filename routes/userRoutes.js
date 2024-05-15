const router = require("express").Router()

const { addUser } = require("../controllers/userController")
const { isUser } = require("../validator/userValidator")

router.post("/", isUser, addUser);

module.exports = router