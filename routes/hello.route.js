const express = require('express');
const router = express.Router();

//Hello Route
router.get('/', (req, res) => {
    //console.log("hello route");
    res.send(`Hello Route`);
})

//Returning name on the Route
router.get('/:name', (req, res) => {
    //console.log("hello route");
    const name = req.params.name;
    res.send(`Hello ${name}`);
})



module.exports = router