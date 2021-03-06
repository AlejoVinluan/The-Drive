const router = require('express').Router()
let Player = require('../models/player.model')

router.route('/').get((req, res) => {
    Player.find()
    .then(players => res.json(players))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router