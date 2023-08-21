const bcrypt = require('bcrypt')

const checkSignatureAuth = async (req, res, next) => {
    try {
        // user and signature and hash objects from previous middleware
        const user = req.user
        const hash1 = user.fir_signature
        const hash2 = user.sec_signature
        
        const signature = req.signature
        const fir_signature = signature.slice(0, signature.length / 2)
        const sec_signature = signature.slice(signature.length /2, signature.length)
    
    
        const isMatch1 = await bcrypt.compare(fir_signature, hash1)
        const isMatch2 = await bcrypt.compare(sec_signature, hash2)

        if(isMatch1 && isMatch2) {
            console.log("Successfully Compared the Hash Signature");
            return next()
        }
        return res.status(401).json({Error : "Incorrect Signature"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({Error : "Internal Server Error !"})
    }
}

module.exports = checkSignatureAuth