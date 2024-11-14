const express = require('express');
const router = express.Router();
const prosController = require('../controllers/professionals');

router.get('/professional', prosController.getData);

module.exports = router;