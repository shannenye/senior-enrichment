'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const Student = db.model('student');
const Campus = db.model('campus');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
// apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the apiRouters you create

apiRouter.get('/campuses', (req, res, next) => {
	Campus.findAll({include: {all : true}})
	.then(allCampuses => res.send(allCampuses))
	.catch(next)
})

apiRouter.get('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id, {include: {all: true}})
	.then(foundCampus => res.send(foundCampus))
	.catch(next)
})

apiRouter.post('/campuses', (req, res, next) => {
	// console.log("this is running: ", req)
	Campus.create(req.body)
	.then(campusCreated => res.send(campusCreated))
	.catch(next)
})

apiRouter.put('/campuses/:id', (req, res, next) => {
	console.log("entering route to find req.body: ", req.body)
	Campus.findById(req.params.id)
	.then(campusToUpdate => {
		return campusToUpdate.update(req.body)
	})
	.then(updatedValue => {
		console.log("exiting route: ", updatedValue)
		res.send(updatedValue)
	})
	.catch(next)
})

apiRouter.delete('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(foundCampus => foundCampus.destroy())
	.then(() => res.sendStatus(204))
	.catch(next)
})

apiRouter.get('/students', (req, res, next) => {
	Student.findAll({include: {all: true}})
	.then(allStudents => res.send(allStudents))
	.catch(next)
})

apiRouter.get('/students/:id', (req, res, next) => {
	Student.findById(req.params.id, {include: {all: true}})
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

module.exports = apiRouter