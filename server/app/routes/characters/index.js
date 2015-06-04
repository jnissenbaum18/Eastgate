'use strict';
var router = require('express').Router();
var path = require('path')
module.exports = router;
var mongoose = require('mongoose');
var Character = mongoose.model('Character');

router.get('/characters', function (req, res) {
    Character.find({_id: req.query.characterIds}, function (err, characters) {
        res.send(characters)
    })

});