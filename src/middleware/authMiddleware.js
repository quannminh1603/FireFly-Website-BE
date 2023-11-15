const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const authMiddleware = (req, res, next) => {
    // verify a token symmetric
    console.log('check token', req.headers.token)
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                message: "The authentication",
                status: "ERR"
            })
        }
        if (user?.role) {
            console.log("true")
            next()
        } else {
            return res.status(404).json({
                message: "The authentication",
                status: "ERR"
            })
        }
    });
}

const authUserMiddleware = (req, res, next) => {
    console.log('req.headers', req.headers)
    // verify a token symmetric
    // console.log('check token', req.headers.token)
    const token = req.headers.token.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                message: "The authentication",
                status: "ERR"
            })
        }
        if (user?.role || user?.id === userId) {
            // console.log("true")
            next()
        } else {
            return res.status(404).json({
                message: "The authentication",
                status: "ERR"
            })
        }
    });
}

module.exports = {
    authMiddleware,
    authUserMiddleware
}