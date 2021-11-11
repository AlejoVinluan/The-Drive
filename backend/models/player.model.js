const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
        type: String,
        require: true,
        trim: true,
    },

}, {
    timestamps: true
})

const Player = mongoose.model('Player', playerSchema)
module.exports = Player;