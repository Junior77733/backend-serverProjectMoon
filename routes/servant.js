const express = require('express');
const router = express.Router()

const servantName = require('../servant-name.json');
const servantNp = require('../servant-np.json');
const servantSkill = require('../servant-skill.json');

router.get('/name', (req, res) => {
    res.status(200).json(servantName)
})

router.get('/skill', (req, res) => {
    res.status(200).json(servantSkill)
})

router.get('/np', (req, res) => {
    res.status(200).json(servantNp)
})

module.exports = router;