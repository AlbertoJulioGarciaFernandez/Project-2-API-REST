const router = require('express').Router(),
    { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller.js')

router.get('/', checkAuth, getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
