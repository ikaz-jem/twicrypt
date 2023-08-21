const express = require('express')
const router = express.Router()
const db = require('../../database/database')
const createAd = require('../../helpers/createAd')

const isUserParam = require('../../functions/checkIsUserParams')
const isUserBody = require('../../functions/checkIsUserBody')
const checkSignatureAuth = require('../../functions/checkSignatureAuth')

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

// get user
router.get('/user/:paramAddress', isUserParam, async (req, res) => {
    try {
        const user = req.paramAddress
        console.log(user);
        return res.status(200).json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ Error: "Internal Server Error !" })
    }
})

// checking if user existe send his data otherwise create user will be done by middleware
router.post('/user_session', isUserBody, async (req, res) => {
    try {
        const user = req.bodyUser
        console.log("user pass",user)
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Error: "Internal Server Error" })
    }
})

// guest session
router.post('/guest_session/:paramAddress', async(req, res) => {
    try {
        const { paramAddress } = req.params
        const [guest] = await db.execute('INSERT INTO users (walletAddress, user_type) VALUES (?,?)', [paramAddress,'guest'])
        
        return res.status(200).json(guest)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({Error : "Internal Server Error !"})
    }
})

// create ad
router.post('/create_ad', isUserBody, async (req, res) => {
    try {
        const user_id = req.bodyAddress
        // Data input validation 
        const { error, value } = createAd.validate(req.body, {
            allowUnknown: true, // Allow other fields in the request body
        })

        if (error) {
            // Return validation error response
            console.log(error);
            return res.status(200).json({ error: error.details[0].message })
        }

        const { name, link, image, icon } = value

        await db.execute(`INSERT INTO caroussel_ads (name, user_id, link, image, icon) VALUES (?,?,?,?,?)`, [name, user_id, link, image, icon])

        return res.status(200).json({ Message: "Ad Created Successfully Thank You For Sponsoring Us" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Error: "Internal Server Error !" })
    }
})

// user Auth
router.post('/interact',isUserBody ,checkSignatureAuth, async (req, res) => {
try {
    console.log("Successfullt Authorized")
    return res.status(200).json({Message : "Verified :)"})
} catch (error) {
    console.log(error)
    return res.status(500).json({Error : "Internal Server Error !"})
}
})

// referals
router.post('/referal/:paramAddress', isUserParam, isUserBody, async(req, res) => {
try {
    const referrer = req.paramId
    const referred = req.bodyId 
    console.log("Referrer is ",referrer)
    console.log("Referred is ",referred)
    await db.execute('INSERT INTO referrals (referring_user_id, referred_user_id) VALUES (?,?)', [referrer, referred])
    return res.status(201).json({Message : "Referred User Done"})
    
} catch (error) {
    if(error.code === "ER_DUP_ENTRY") {
        return res.status(409).json({Message : "User with same id is already referred to your list"})
    }
    console.log(error)
    return res.status(500).json({Error : "Internal Server Error !"})
}
})


module.exports = router

// const bcrypt = require('bcrypt')
// const salt = 10

// const array = []
// const signature = ["6911374f726b688f61d37d1896c29508fdd83a14e5e4eb887a4a914a347269320xa7eC8C039F0e00cC6a1FabB9642d5f869116Dc800xa7eC8C039F0e00cC6a1FabB964"]

// const firstSign = signature[0].slice(0,66)
// const secSign = signature[0].slice(66,132)

// // console.log(signature[0].length)
// console.log(firstSign)
// console.log(secSign)
// const hash = async() => {
//     const hashed = await bcrypt.hash(firstSign,salt)
//     console.log(hashed)
// }
// hash()