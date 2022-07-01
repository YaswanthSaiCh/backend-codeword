const express = require('express');
const primeNumber = require('../utils/primeNumber')
const router = express.Router();

//is-prime Route

router.get('/', (req, res) => {
    //console.log("hello route");
    res.send('is-prime Route');

})

router.get('/:number', (req, res) => {
    //console.log("hello route");
    const number = req.params.number;
    res.send(primeNumber(number));

})

module.exports = router;