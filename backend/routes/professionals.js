const express = require('express');
const router = express.Router();
const prosController = require('../controllers/professionals');

router.get('/', prosController.getAllPros);
router.get('/:id', prosController.getSinglePro);

module.exports = router;