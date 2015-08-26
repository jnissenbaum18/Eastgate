'use strict';
var router = require('express').Router();
var path = require('path')
module.exports = router;
var mongoose = require('mongoose');
var Promise = require('bluebird');

var User = mongoose.model('User');
var Character = mongoose.model('Character');

router.get('/:id', function (req, res, next) {
	User.findOne({_id: req.params.id}).populate('characters').exec()
	.then(function (user) {
		res.json(user.characters)
	})
	.then(null, next);
});

router.get('/current/:id', function (req, res, next) {
	Character.findById(req.params.id).exec()
	.then(function (character) {
		res.json(character)
	})
	.then(null, next);
})

router.post('/:id', function (req, res, next){
	return Promise.all([Character.create(req.body), User.findById(req.params.id).exec()])
	.spread(function (character, user){
		user.characters.push(character._id);
		return user.save();
	})
	.then(function (savedUser) {
		res.status(200).json(savedUser);
	})
	.then(null, next);
});

router.put('/', function (req, res, next) {
	Character.findByIdAndUpdate(req.body._id, req.body).exec() 
	.then(function(){
		res.status(200).json("updated");
	})
	.then(null, next);
})

router.delete('/:id', function (req, res, next) {
	Character.findOne({_id: req.params.id}).exec()
	.then(function (character) {
		character.removal()
	})
	.then(function () {
		res.send('Deleted');
	})
	.then(null, next);
})