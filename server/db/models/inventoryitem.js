var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {
        type: String
    },
    pagereference: {
        type: String
    },
    weight: {
        type: Number
    },
    quantity: {
        type: Number
    },
    description: {
        type: String
    }
})

mongoose.model('Inventoryitem', schema);