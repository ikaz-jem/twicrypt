const db = require('../database/database')

const isUserParam = async (req, res, next) => {
    try {
        const { paramAddress } = req.params
        const [paramUser_id] = await db.execute('SELECT id FROM users WHERE walletAddress = ?', [paramAddress])

        if (paramUser_id.length === 0 ) {
            res.status(404).json({Message : "User Not Found !"})
        } else {
            console.log("User_id from params recognized and passed to next middleware");
            req.paramAddress = paramUser_id[0].id
            return next()
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ Error: err })
    }
}

module.exports = isUserParam