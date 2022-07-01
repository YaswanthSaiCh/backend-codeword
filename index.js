const express = require('express');
const dotenv = require('dotenv').config();
const helloRoute = require('./routes/hello.route');
const isPrimeRoute = require('./routes/isprime.route');
const port = process.env.PORT;
const app = express();

//Main route
app.get('/', (req, res) => {
    res.send("Welcome")
})

// Rerouting all the routes
app.use('/hello', helloRoute);
app.use('/is-prime', isPrimeRoute);

app.listen(port, () => {
    //Running on 3000
    console.log("Listening at port", port);
})