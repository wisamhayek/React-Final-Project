const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserById, getAllUsers } = require('../controller/user');

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/login', loginUser);
router.post('/signup', createUser);

module.exports = router;