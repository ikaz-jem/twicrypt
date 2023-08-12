const db = require('../database/database')
const userExistence = require('../helpers/userExistence')
const checkAddress = require('../functions/addressValidation')

const isUserBody = async (req, res, next) => {
    try {
        // Data input validation 
        const { error, value } = userExistence.validate(req.body, {
            allowUnknown: true, // Allow other fields in the request body
          })
          
        if (error) {
            // Return validation error response
            return res.status(400).json({ error: error.details[0].message });
        }

        const { bodyAddress } = value;

        const [bodyUser_id] = await db.execute('SELECT id FROM users WHERE walletAddress = ?', [bodyAddress])

        if (bodyUser_id.length === 0) {
            // address validation
            if (checkAddress(bodyAddress)) {
                try {
                    // Insert the new user into the database
                    await db.execute('INSERT INTO users(walletAddress) VALUES (?)', [bodyAddress])

                    return res.status(201).json({ status: "User registered successfully" });
                } catch (error) {
                    console.log(error);
                    return res.status(500).json({ error: error });
                }
            } else {
                return res.status(409).json({ error: "Please verify your walletAddress input!" });
            }
        } else {
            console.log("User_id from body recognized and passed to next middleware");
            req.bodyAddress = bodyUser_id[0].id
            return next()
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ Error: err })
    }
}

module.exports = isUserBody