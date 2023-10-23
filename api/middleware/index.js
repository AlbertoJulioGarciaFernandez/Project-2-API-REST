const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

function checkAuth(req, res, next) { //checkeamos autenticación, si el usuario está logueado y tiene token
    if (!req.headers.authorization) return res.status(401).send('Token not found')  // comprobamos que nos envia el token en el req.headers

    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
        if (err) return res.status(401).send('Token not valid')

        const user = await User.findOne({ where: { email: result.email } })
        if (!user) return res.status(401).send('User not found')

        res.locals.user = user

        next()
    })
}

function checkAdmin(req, res, next) { //checkeamos autorización, si el usuario tiene acceso o no a un recurso
    if (res.locals.user.role !== 'admin') {
        return res.status(401).send('User not authorized')
    } else {
        next()
    }
}

module.exports = { checkAuth, checkAdmin }
