const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 300

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`))