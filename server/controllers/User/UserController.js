const User = require('../../models/User/User');

// @route   POST /api/users
// @desc    Create a new user
// @access  Public
exports.createUser = async (req, res) => {
  const { UserName, Email, Password, FirstName, LastName } = req.body;

  try {
    const newUser = new User({
      UserName,
      Email,
      Password, // Consider hashing the password before saving
      FirstName,
      LastName
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /api/users
// @desc    Get all users
// @access  Public
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /api/users/:id
// @desc    Get a user by ID
// @access  Public
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   PUT /api/users/:id
// @desc    Update a user
// @access  Public
exports.updateUserById = async (req, res) => {
  const { UserName, Email, Password, FirstName, LastName, IsActive } = req.body;

  const updatedFields = {
    UserName,
    Email,
    Password, // Consider hashing the password before saving
    FirstName,
    LastName,
    IsActive,
    UpdatedOn: Date.now()
  };

  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Public
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    
    res.status(200).json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(500).send('Server Error');
  }
};
