const express = require('express');
const router = express.Router();
const Agreement = require('../models/Tariff/Agreement');

// @route   POST /api/agreements
// @desc    Create a new agreement
// @access  Public
router.post('/', async (req, res) => {
  const { AgreementName, AgreementCode, AgreementCategory, CreatedBy } = req.body;
  console.log("Add Agreemtents");
  try {
    const newAgreement = new Agreement({
      AgreementName,
      AgreementCode,
      AgreementCategory,
      CreatedBy
    });

    const agreement = await newAgreement.save();
    res.json(agreement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/agreements
// @desc    Get all agreements
// @access  Public
router.get('/', async (req, res) => {
  try {
    const agreements = await Agreement.find().populate('AgreementCategory CreatedBy UpdatedBy');
    res.json(agreements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/agreements/:id
// @desc    Get an agreement by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const agreement = await Agreement.findById(req.params.id).populate('AgreementCategory CreatedBy UpdatedBy');
    if (!agreement) {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    res.json(agreement);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/agreements/:id
// @desc    Update an agreement
// @access  Public
router.put('/:id', async (req, res) => {
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

    res.json(agreement);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/agreements/:id
// @desc    Delete an agreement
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const agreement = await Agreement.findByIdAndDelete(req.params.id);

    if (!agreement) {
      return res.status(404).json({ msg: 'Agreement not found' });
    }

    res.json({ msg: 'Agreement removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Agreement not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
