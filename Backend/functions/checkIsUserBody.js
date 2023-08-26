const db = require('../database/database')
const userExistence = require('../helpers/userExistence')
const checkAddress = require('../functions/addressValidation')
const bcrypt = require('bcrypt')

const isUserBody = async (req, res, next) => {
    try {
        // Data input validation 
        const { error, value } = userExistence.validate(req.body, {
            allowUnknown: true, // Allow other fields in the request body
        })

        // Return validation error response
        if (error) {
            console.log(error.details[0].message)
            return res.status(400).json({ error: error.details[0].message });
        }

        // Destructuring the address and signature from validation form to use in logic
        const { bodyAddress, signature } = value;

        // Request the user data from the db
        const [bodyUser] = await db.execute('SELECT * FROM users WHERE walletAddress = ?', [bodyAddress])

        // If no user returned
        if (bodyUser.length === 0) {
            // address validation
            if (checkAddress(bodyAddress)) {
                try {
                    // if signature is present in the body
                    if (signature) {
                        // hashing the signature
                        const fir_signature = signature.slice(0, signature.length / 2)
                        const sec_signature = signature.slice(signature.length / 2, signature.length)
                        const salt = 10
                        const hash1 = await bcrypt.hash(fir_signature, salt)
                        const hash2 = await bcrypt.hash(sec_signature, salt)

                        // in case of error hashing
                        if (!hash1 || !hash2) {
                            return res.status(409).json({ Error: "Error Hashing Your Signature Password Please Try Again" })
                        }

                        // Insert the new user into the database
                        await db.execute('INSERT INTO users(walletAddress, fir_signature, sec_signature, user_type) VALUES (?,?,?,?)', [bodyAddress, hash1, hash2, 'user'])
                        console.log({ status: "User registered successfully with hashed signature fully acceccissble to all features" });

                        // Return the new user registred
                        const [newUser] = await db.execute('SELECT id FROM users WHERE walletAddress = ?', [bodyAddress])
                        // asign the user to the req object
                        req.bodyId = newUser[0].id
                        // call the next middleware
                        return next()
                        // if no signature present in the body object
                    } else {
                        // insert user as guest and null signature
                        await db.execute('INSERT INTO users(walletAddress, user_type) VALUES (?,?)', [bodyAddress, 'guest'])
                        console.log({ status: "User registered successfully as guest" })
                        // return the user registered from db
                        const [newUser] = await db.execute('SELECT id FROM users WHERE walletAddress = ?', [bodyAddress])
                        // asign the user to req object
                        req.bodyId = newUser[0].id
                        // call the next middleware in stack
                        return next()
                    }
                } catch (error) {
                    console.log(error);
                    return res.status(500).json({ Error: "Internal Server Error ! Case Inserting" });
                }
                // Error in address validation
            } else {
                return res.status(409).json({ error: "Please verify your walletAddress input!" });
            }
            // User already exist
        } else {
            console.log("User_id from body recognized and passed to next middleware");
            req.bodyId = bodyUser[0].id
            req.bodyUser = bodyUser[0]
            req.signature = signature
            return next()
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ Error: "Internal Server Error !" })
    }
}

module.exports = isUserBody