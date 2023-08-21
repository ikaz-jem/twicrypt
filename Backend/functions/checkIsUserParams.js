const db = require('../database/database')

const isUserParam = async (req, res, next) => {
    try {
        const { paramAddress } = req.params

        const [paramUser] = await db.execute('SELECT * FROM users WHERE walletAddress = ?', [paramAddress])
        
        if (paramUser.length === 0 ) {
            console.log("User not Found")
            return res.status(404).json({Message : "User Not Found !"})
        } else {
            console.log("User_id from params recognized and passed to next middleware");
            req.paramId = paramUser[0].id
            req.paramUser = paramUser[0]
            return next()
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ Error: err })
    }
}

module.exports = isUserParam