const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserById, getUsers } = require('../controller/user');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/login', loginUser);
router.post('/signup', createUser);

module.exports = router;