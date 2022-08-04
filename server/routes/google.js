const express = require('express');
const router = express.Router();
// const { createUser, loginUser, withGoogle } = require('../controller/google.js');
const { withGoogle } = require('../controller/google.js');

router.post('/login', withGoogle);
// router.post('/login', loginUser);
// router.post('/signup', createUser);

module.exports = router;