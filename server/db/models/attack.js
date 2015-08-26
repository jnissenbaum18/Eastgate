var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {
        type: String
    },
    damage: {
        type: String
    },
    critical: {
        type: String
    },
    range: {
        type: Number
    },
    type: {
        type: String
    },
    twohanded: {
        type: Boolean
    },
    specialqualities: [{
        name: {
            type: String
        },
        modifier: {
            type: Number
        },
        description: {
            type: String
        }
    }],
    notes: {
        type: String
    }
})

mongoose.model('Attack', schema);