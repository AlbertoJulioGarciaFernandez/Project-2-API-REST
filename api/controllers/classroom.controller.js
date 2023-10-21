// const Address = require('../models/address.model.js');

// async function getAllAddresses(req, res) {
// 	try {
// 		const addresses = await Address.findAll({ paranoid: false })
// 		if (addresses) {
// 			return res.status(200).json(addresses)
// 		} else {
// 			return res.status(404).send('No addresses found')
// 		}
// 	} catch (error) {
// 		res.status(500).send(error.message)
// 	}
// }

// async function getOneAddress(req, res) {
// 	try {
// 		const address = await Address.findByPk(req.params.id)
// 		if (address) {
// 			return res.status(200).json(address)
// 		} else {
// 			return res.status(404).send('Address not found')
// 		}
// 	} catch (error) {
// 		res.status(500).send(error.message)
// 	}
// }

// async function createAddress(req, res) {
// 	try {
// 		const address = await Address.create({
// 			street: req.body.street,
// 		})
// 		return res.status(200).json({ message: 'Address created', address: address })
// 	} catch (error) {
// 		res.status(500).send(error.message)
// 	}
// }

// async function updateAddress(req, res) {
// 	try {
// 		const [addressExists, address] = await Address.update(req.body, {
// 			returning: true,
// 			where: {
// 				id: req.params.id,
// 			},
// 		})
// 		if (addressExists !== 0) {
// 			return res.status(200).json({ message: 'Address updated', address: address })
// 		} else {
// 			return res.status(404).send('Address not found')
// 		}
// 	} catch (error) {
// 		return res.status(500).send(error.message)
// 	}
// }

// async function deleteActor(req, res) {
// 	try {
// 		const actor = await Actor.destroy({
// 			where: {
// 				id: req.params.id,
// 			},
// 		})
// 		if (actor) {
// 			return res.status(200).json('Actor deleted')
// 		} else {
// 			return res.status(404).send('Actor not found')
// 		}
// 	} catch (error) {
// 		return res.status(500).send(error.message)
// 	}
// }

// // Iteration 2.1
// // Search for an actor and retrieve all the movies he/she has been in
// // via «lazy loading».
// async function getActorMoviesLazy(req, res) {
//   try {
//     const actor = await Actor.findByPk(req.params.actorId,
//     );

//     if (actor) {
//       // return res.status(200).json(await actor.getMovies());
//       // To get rid of the joining table information in the response
//       // (lazy loading), we comment the above return and add the 
//       // following (Important: Do NOT forget the «await» before the
//       // function getMovies() since if the function returned something, 
//       // we would not get anything):
//       return res.status(200).json(await actor.getMovies({ joinTableAttributes: [] }));
//       // Important: The use of await in lazy loading is essential since
//       // we make two requests, not one (like in eager loading).
//     } else {
//       return res.status(404).send(`No movies found for actor with id «${req.params.actorId}».`);
//     }

//   } catch (error) {
//     return res.status(500).send(error.message)
//   }

// }

// // Iteration 2.1
// // Search for an actor and retrieve all the movies he/she has been in
// // via «eager loading».
// async function getActorMoviesEager(req, res) {
//   try {
//     const actor = await Actor.findByPk(req.params.actorId, {
//       // Any «include» options will apply to the target object,
//       // in this particular case, «Movie».
//       include: {
//         model: Movie,
//         // Iteration 2.4
//         // To get rid of the joining table information in the response
//         // (eager loading), we have to add the following:
//         through: { attributes: [] }
//       }
//     }
//     );

//     if (actor) {
//       // Normal return statement:
//       // return res.status(200).json(actor);
//       // Return statement for iteration 2.4:
//       return res.status(200).json(actor.movies);
//       // We do not need to use await in eager loading since 
//       // the request we did above already retrieved all the 
//       // information belonging to the actor whose id matched
//       // the one we passed through parameters.
//       // The information we need is stored in the key «movies»,
//       // which we access like this: «actor.movies».
//       // Note: We use res.status().json() when we wish to 
//       // return objects, whereas if we are to return simple
//       // strings, we normally use: res.status().send().
//     } else {
//       return res.status(404).send(`No movies found for actor with id «${req.params.actorId}».`);
//     }

//   } catch (error) {
//     return res.status(500).send(error.message)
//   }

// }

// module.exports = {
//   getAllActors,
// 	getOneActor,
// 	createActor,
// 	updateActor,
// 	deleteActor,
//   getActorMoviesLazy,
//   getActorMoviesEager
// }
