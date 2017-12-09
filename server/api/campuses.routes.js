const db = require('../db')
const Campus = db.model('campus');

apiRouter.get('/campuses', (req, res, next) => {
	Campus.findAll()
	.then(allCampuses => res.send(allCampuses))
	.catch(next)
})

apiRouter.get('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(foundCampus => res.send(foundCampus))
	.catch(next)
})

apiRouter.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(campusCreated => res.send(campusCreated))
	.catch(next)
})

apiRouter.put('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(campusToUpdate => campusToUpdate.update(req.body))
	.catch(next)
})

apiRouter.delete('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(foundCampus => foundCampus.destroy())
	.then(() => res.sendStatus(204))
	.catch(next)
})

module.exports =