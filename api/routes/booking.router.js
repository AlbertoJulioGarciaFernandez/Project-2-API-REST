const router = require('express').Router(),
    { getAllActors, getOneActor, createActor, updateActor, deleteActor, getActorMoviesLazy, getActorMoviesEager } = require('../controllers/actor.controller.js');

// Basic CRUD
router.get('/', getAllActors);
router.get('/:id', getOneActor);
router.post('/', createActor);
router.put('/:id', updateActor);
router.delete('/:id', deleteActor);

// Iteration 2.1
router.get('/:actorId/movies/lazy', getActorMoviesLazy);
router.get('/:actorId/movies/eager', getActorMoviesEager);

module.exports = router;
