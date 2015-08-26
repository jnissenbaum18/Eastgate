var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    school: {
        type: String
    },
    type: {
        type: String
    },
    components: {
        v: {
            type: Boolean,
            default: true
        },
        s: {
            type: Boolean,
            default: true
        },
        m: {
            type: Boolean,
            default: true
        }
    },
    castingtime: {
        type: Number
    },
    range: {
        type: Number
    },
    area: {
        type: String
    },
    duration: {
        type: String
    },
    savingthrow: [{
        type: String
    }],
    spellresistance: {
        type: Boolean
    },
    description: {
        type: String
    }
})

mongoose.model('Spell', schema);