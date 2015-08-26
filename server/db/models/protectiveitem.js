var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {
        type: String
    },
    type: {
        type: String
    },
    armorclassbonus: {
        type: Number
    },
    maximumdexterity: {
        type: Number
    },
    armorcheckpenalty: {
        type: Number
    },
    spellfailure: {
        type: Number
    },
    speed: {
        type: Number
    },
    weight: {
        type: Number
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

mongoose.model('Protectiveitem', schema);