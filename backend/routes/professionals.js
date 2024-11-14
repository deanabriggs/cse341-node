const express = require('express');
const router = express.Router();
const prosController = require('../controllers/professionals');

router.get('/professional', prosController.getAllPros);
router.get('/professional:id', prosController.getSinglePro);

module.exports = router;