const express = require('express');
const router = express.Router();

const prosController = require('../controllers/professionals');

router.get('/', prosController.getData);

module.exports = router;