const express = require('express')
const router = express.Router()
const db = require('../../database/database')
const createAd = require('../../helpers/createAd')

const isUserParam = require('../../functions/checkIsUserParams')
const isUserBody = require('../../functions/checkIsUserBody')

// get all ads of main carousel
router.get('/carousel', async (req, res) => {
    try {
        const [data] = await db.execute('SELECT * FROM caroussel_ads')
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Error: "Internal Server Error !" })
    }
})

// checking if user existe send his data otherwise create user will be done by middleware
router.get('/get_user/:paramAddress', isUserParam, async (req, res) => {
    try {
        const user_id = req.paramAddress
        const [userData] = await db.execute('SELECT * FROM users WHERE id = ?', [user_id])
        return res.status(200).json(userData)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Error: "Internal Server Error" })
    }
})

router.post('/create_ad',isUserBody, async (req, res) => {
try {
    const user_id = req.bodyAddress
       // Data input validation 
       const { error, value } = createAd.validate(req.body, {
        allowUnknown: true, // Allow other fields in the request body
      })
      
    if (error) {
        // Return validation error response
        console.log(error);
        return res.status(400).json({ error: error.details[0].message })
    }

    const { name, link, image, icon } = value
    
    //await db.execute(`INSERT INTO caroussel_ads (name, user_id, link, image, icon) VALUES (?,?,?,?,?)`, [name, user_id, link, image, icon])
    
    return res.status(200).json({Message : "Ad Created Successfully Thank You For Sponsoring Us"})
} catch (error) {
    console.log(error)
    return res.status(500).json({Error : "Internal Server Error !"})
}
})

module.exports = router