const db = require('../db')
const Student = db.model('student');

apiRouter.get('/students', (req, res, next) => {
	Student.findAll()
	.then(allStudents => res.send(allStudents))
	.catch(next)
})

apiRouter.get('/students/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(foundStudent => res.send(foundStudent))
	.catch(next)
})

apiRouter.post('/students', (req, res, next) => {
	Student.create(req.body)
	.then(studentCreated => res.send(studentCreated))
	.catch(next)
})

apiRouter.put('/students/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(studentToUpdate => studentToUpdate.update(req.body))
	.catch(next)
})

apiRouter.delete('/students/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(foundStudent => foundStudent.destroy())
	.then(() => res.sendStatus(204))
	.catch(next)
})

module.exports