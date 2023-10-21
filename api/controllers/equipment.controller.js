// const Actor = require('../models/actor.model.js'),
//   Movie = require('../models/movie.model.js');

// // Iteration 2.2
// // Add a actor to a movie
// async function addActorMovie(req, res) {
//   try {
//     const movie = await Movie.findByPk(req.params.movieId),
//       actor = await Actor.findByPk(req.params.actorId);

//     if (movie) {
//       if (actor) {
//         const addActorMovie = await movie.addActor(actor);

//         // Checking whether the adding operation has been successful:
//         if (addActorMovie) {
//           return res.status(200).send(`The actor with id «${req.params.movieId}» has been successfully added to the movie whose id is «${req.params.actorId}»!`);
//         } else {
//           return res.status(400).send(`The actor with id «${req.params.movieId}» is already part of the cast in the movie whose id is «${req.params.actorId}».`);
//         }
        
//       } else {
//         return res.status(404).send(`No actor with id «${req.params.actorId}» found.`);
//       }
//     } else {
//       return res.status(404).send(`No movie with id «${req.params.movieId}» found.`);
//     }


//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// }

// // Iteration 2.3
// // Remove and actor from a movie
// async function deleteActorMovie(req, res) {
//   try {
//     const movie = await Movie.findByPk(req.params.movieId),
//       actor = await Actor.findByPk(req.params.actorId);

//     if (movie) {
//       if (actor) {
//         const removeActorMovie = await movie.removeActor(actor);

//         // Checking whether the removing operation has been successful:
//         if (removeActorMovie) {
//           return res.status(200).send(`The actor with id «${req.params.movieId}» has been deleted from the movie whose id is «${req.params.actorId}»`);
//         } else {
//           return res.status(404).send(`No actor with id «${req.params.actorId}» as part of the cast in movie with id «${req.params.movieId}».`);
//         }

//       } else {
//         return res.status(404).send(`No actor with id «${req.params.actorId}» found.`);
//       }
//     } else {
//       return res.status(404).send(`No movie with id «${req.params.movieId}» found.`);
//     }

//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// }

// module.exports = {
//   addActorMovie,
//   deleteActorMovie
// }
