const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controller/google.js');

router.post('/login', loginUser);
router.post('/signup', createUser);

module.exports = router;