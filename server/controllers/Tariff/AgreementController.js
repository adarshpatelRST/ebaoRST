const Agreement = require('../../models/Tariff/Agreement');

// @route   POST /api/agreements
// @desc    Create a new agreement
// @access  Public
exports.createAgreement = async (req, res) => {
  const { AgreementName, AgreementCode, AgreementCategory, CreatedBy } = req.body;

  try {
    const newAgreement = new Agreement({
      AgreementName,
      AgreementCode,
      AgreementCategory,
      CreatedBy
    });

    const agreement = await newAgreement.save();
    res.status(201).json(agreement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /api/agreements
// @desc    Get all agreements
// @access  Public
exports.getAllAgreements = async (req, res) => {
  try {
    const agreements = await Agreement.find().populate('AgreementCategory CreatedBy UpdatedBy');
    res.status(200).json(agreements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /api/agreements/:id
// @desc    Get an agreement by ID
// @access  Public
exports.getAgreementById = async (req, res) => {
  try {
    const agreement = await Agreement.findById(req.params.id).populate('AgreementCategory CreatedBy UpdatedBy');
    if (!agreement) {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    res.status(200).json(agreement);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   PUT /api/agreements/:id
// @desc    Update an agreement
// @access  Public
exports.updateAgreementById = async (req, res) => {
  const { AgreementName, AgreementCode, AgreementCategory, UpdatedBy, IsActive } = req.body;

  const updatedFields = {
    AgreementName,
    AgreementCode,
    AgreementCategory,
    UpdatedBy,
    IsActive,
    UpdatedOn: Date.now()
  };

  try {
    let agreement = await Agreement.findById(req.params.id);

    if (!agreement) {
      return res.status(404).json({ msg: 'Agreement not found' });
    }

    agreement = await Agreement.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.status(200).json(agreement);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   DELETE /api/agreements/:id
// @desc    Delete an agreement
// @access  Public
exports.deleteAgreementById = async (req, res) => {
  try {
    const agreement = await Agreement.findByIdAndDelete(req.params.id);

    if (!agreement) {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    
    res.status(200).json({ msg: 'Agreement removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    res.status(500).send('Server Error');
  }
};
