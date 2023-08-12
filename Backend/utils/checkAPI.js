require('dotenv').config()

const api = process.env.APP_API_KEY
const checkAPI = async (req, res, next) => {
    const headers = await req.headers['apikey']
    if (headers == api && req.headers.host === 'localhost:4001') {
        return next()
    } else {
        return res.send("the link does not exist ")
    }
}

module.exports = checkAPI