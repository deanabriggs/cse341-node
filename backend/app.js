// app.js

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const mongodb = require('./data/connect');
const professionalRoutes = require('./routes/professionals');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});
    }
});