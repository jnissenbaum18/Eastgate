var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {
        type: String
    },
    description: {
        type: String
    },
    reference: {
        book: {
            type: String
        },
        page: {
            type: Number
        }
    }
})

mongoose.model('Feat', schema);