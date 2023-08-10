const express = require('express')
const router = express.Router()
const db = require('../database/database')

router.get('/', async (req, res) => {
    const insert = await db.execute('INSERT INTO users (username) VALUES (?)', ['MEdox'])
    res.send(insert)
})

module.exports = router