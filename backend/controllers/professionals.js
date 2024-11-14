const mongodb = require('../data/db');
const ObjectId = require('mongodb').ObjectId;

const getAllPros = async (req, res) => {
    const result = await mongodb.getDatabase().db.collection('pros').find();
    result.toArray().then((pros) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pros);
    });
};

const getSinglePro = async (req, res) => {
    const proId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db.collection('pros').find({_id: proId});
    result.toArray().then((pros) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pros[0]);
    });
};

module.exports = {
    getAllPros,
    getSinglePro
}