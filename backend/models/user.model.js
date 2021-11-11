const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
}, {
    timestamps: true
})

const User = mongoose.model('User', playerSchema)
module.exports = User;