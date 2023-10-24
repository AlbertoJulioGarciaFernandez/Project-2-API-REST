const router = require('express').Router(),
    { getAllUsers, getOneUser, getProfile, createUser, updateUser, deleteUser, deleteProfile } = require('../controllers/user.controller.js'),
    { checkAuth, checkAdmin } = require('../middleware');

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/getProfile', checkAuth, getProfile)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.post('/', createUser)
router.put('/:id', checkAuth, updateUser)
router.delete('/deleteProfile', checkAuth, deleteUser, deleteProfile) // For any user
router.delete('/:id', checkAuth, checkAdmin, deleteUser) // For admins

// router.get('/', checkAuth, checkAdmin, getAllUsers) // trae todos los registros del modelo - todos los usuarios
// router.get('/getProfile', checkAuth, getProfile)
// router.get('/:id', checkAuth, checkAdmin, getOneUser) //trae un solo registro - le indicamos el id por params
// router.post('/', checkAuth, checkAdmin, createUser) // crea un nuevo registro en el modelo - los datos se los pasamos por el body
// router.put('/:id', checkAuth, checkAdmin, updateUser) // actualiza un solo registro - le enviamos el id por params y los datos a actualizar por el body
// router.delete('/:id', checkAuth, checkAdmin, deleteUser)  // elimina un recurso - le indicamos el id por params

module.exports = router
