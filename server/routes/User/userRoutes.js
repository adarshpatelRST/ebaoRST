const express = require('express');
const router = express.Router();
const userController = require('../../controllers/User/UserController');

// @route   POST /api/users
// @desc    Create a new user
// @access  Public
router.post('/', userController.createUser);

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', userController.getAllUsers);

// @route   GET /api/users/:id
// @desc    Get a user by ID
// @access  Public
router.get('/:id', userController.getUserById);

// @route   PUT /api/users/:id
// @desc    Update a user
// @access  Public
router.put('/:id', userController.updateUserById);

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Public
router.delete('/:id', userController.deleteUserById);

module.exports = router;
