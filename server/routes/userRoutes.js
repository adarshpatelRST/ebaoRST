const express = require('express');
const router = express.Router();
const User = require('../models/User/User');

// CRUD operations for User
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    console.log('Added new user:', newUser);
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error adding user:', err.message);
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      console.log('User not found:', req.params.id);
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('Fetched user:', user);
    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (user == null) {
      console.log('User not found for update:', req.params.id);
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('Updated user:', user);
    res.json(user);
  } catch (err) {
    console.error('Error updating user:', err.message);
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user == null) {
      console.log('User not found for deletion:', req.params.id);
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('Deleted user:', user);
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error('Error deleting user:', err.message);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
