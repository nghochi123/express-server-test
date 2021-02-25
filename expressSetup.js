const express = require('express');
const request = require('request');
const busRouter = require('./Routers/bus');

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(busRouter);



app.listen(port, () => console.log(`listening on ${port}`));