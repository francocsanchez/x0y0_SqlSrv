const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.get('/user', userController.list);

module.exports = router;