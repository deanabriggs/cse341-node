const mongodb = require('../data/connect');

const ObjectId = require('mongodb').ObjectId;

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('professionals').find();
    result.toArray().then((professionals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(professionals[0]);
    });
};

module.exports = {
    getData
};