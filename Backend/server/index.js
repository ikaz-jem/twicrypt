const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const homeRouter = require('../routes/home')

app.use(cors())
app.use(bodyParser.json())
app.use('/home', homeRouter)

app.listen(4000, () => {
    console.log(`server running on port 4000`)
})