const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const carousselAds = require('../routes/carousselAds/mainCaroussel')
const checkAPI = require('../utils/checkAPI')

app.use(cors())
app.use(bodyParser.json())
app.use(checkAPI)
app.use('/users', carousselAds)

app.listen(4001, () => {
    console.log(`server running on port 4001`)
})