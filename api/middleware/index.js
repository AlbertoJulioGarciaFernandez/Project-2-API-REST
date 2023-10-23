const jwt = require('jsonwebtoken')
const User = require('../models/user.model.js')

function checkAuth(req, res, next) { // Proceso de autenticación: Comprobamos tanto si el usuario ha accedido con su usuario/contraseña y tiene clave «token»
    if (!req.headers.authorization) return res.status(401).send('Token not found')  // Verificamos que nos envía la clave token en «req.headers»

    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
        if (err) return res.status(401).send('Token not valid')

        const user = await User.findOne({ where: { email: result.email } })
        if (!user) return res.status(401).send('User not found')

        res.locals.user = user

        next()
    })
}

function checkAdmin(req, res, next) { // Comprobamos si el usuario tiene acceso o no a un recurso en concreto (autorización):
    if (res.locals.user.role !== 'admin') {
        return res.status(401).send('User not authorized')
    } else {
        next()
    }
}

module.exports = { checkAuth, checkAdmin }
