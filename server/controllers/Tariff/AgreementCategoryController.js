const AgreementCategory = require('../../models/Tariff/AgreementCategory');

// @route   POST /api/agreement-categories
// @desc    Create a new agreement category
// @access  Public
exports.createAgreementCategory = async (req, res) => {
  const { CategoryName, CreatedBy } = req.body;

  try {
    const newCategory = new AgreementCategory({
      CategoryName,
      CreatedBy
    });

    const category = await newCategory.save();
    res.status(201).json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /api/agreement-categories
// @desc    Get all agreement categories
// @access  Public
exports.getAllAgreementCategories = async (req, res) => {
  try {
    const categories = await AgreementCategory.find().populate('CreatedBy UpdatedBy');
    res.status(200).json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /api/agreement-categories/:id
// @desc    Get an agreement category by ID
// @access  Public
exports.getAgreementCategoryById = async (req, res) => {
  try {
    const category = await AgreementCategory.findById(req.params.id).populate('CreatedBy UpdatedBy');
    if (!category) {
      return res.status(404).json({ msg: 'Agreement category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement category not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   PUT /api/agreement-categories/:id
// @desc    Update an agreement category
// @access  Public
exports.updateAgreementCategoryById = async (req, res) => {
  const { CategoryName, UpdatedBy, IsActive } = req.body;

  const updatedFields = {
    CategoryName,
    UpdatedBy,
    IsActive,
    UpdatedOn: Date.now()
  };

  try {
    let category = await AgreementCategory.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ msg: 'Agreement category not found' });
    }

    category = await AgreementCategory.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.status(200).json(category);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement category not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   DELETE /api/agreement-categories/:id
// @desc    Delete an agreement category
// @access  Public
exports.deleteAgreementCategoryById = async (req, res) => {
  try {
    const category = await AgreementCategory.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ msg: 'Agreement category not found' });
    }
    
    res.status(200).json({ msg: 'Agreement category removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement category not found' });
    }
    res.status(500).send('Server Error');
  }
};
