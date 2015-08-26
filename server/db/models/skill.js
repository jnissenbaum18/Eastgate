var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	inclass: {
        type: Boolean,
        default: false
    },
    crossclass: {
        type: Boolean,
        default: false
    },
    trainedonly: {
        type: Boolean,
        default: true
    },
    armorcheckpenalty: {
        type: Boolean,
        default: false
    },
    ranks: {
        type: Number
    }
})

//pre init hook setting adc and trained only

mongoose.model('Skill', schema);