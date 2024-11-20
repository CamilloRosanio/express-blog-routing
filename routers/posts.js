// Dichiarazione ROUTER
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Router Posts ricevuto');
})







module.exports = router;