const express = require('express');
const app = express();
const PORT = 8888;

const servantName = 'servant-name.json';
const servantNp = 'servant-np.json';
const servantSkill = 'servant-skill.json';

app.get('/servant/name', (req, res) => {res.status(200).json(servantName)});
app.get('/servant/np', (req, res) => {res.status(200).json(servantNp)});
app.get('/servant/skill', (req, res) => {res.status(200).json(servantSkill)});

app.listen(PORT, () => console.log(`API listening at http://localhost:${PORT}`));