const express = require('express');
const router = express.Router();
const TariffCoverageMapper = require('../models/Tariff/TariffCoverageMapper');

// @route   POST /api/tariff-coverage-mappers
// @desc    Create a new tariff-coverage mapping
// @access  Public
router.post('/', async (req, res) => {
  const { TariffId, CoverageId, CreatedBy } = req.body;

  try {
    const newMapping = new TariffCoverageMapper({
      TariffId,
      CoverageId,
      CreatedBy
    });

    const mapping = await newMapping.save();
    res.json(mapping);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/tariff-coverage-mappers
// @desc    Get all tariff-coverage mappings
// @access  Public
router.get('/', async (req, res) => {
  try {
    const mappings = await TariffCoverageMapper.find().populate('TariffId CoverageId CreatedBy UpdatedBy');
    res.json(mappings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/tariff-coverage-mappers/:id
// @desc    Get a tariff-coverage mapping by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const mapping = await TariffCoverageMapper.findById(req.params.id).populate('TariffId CoverageId CreatedBy UpdatedBy');
    if (!mapping) {
      return res.status(404).json({ msg: 'Mapping not found' });
    }
    res.json(mapping);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Mapping not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/tariff-coverage-mappers/:id
// @desc    Update a tariff-coverage mapping
// @access  Public
router.put('/:id', async (req, res) => {
  const { TariffId, CoverageId, UpdatedBy, IsActive } = req.body;

  const updatedFields = {
    TariffId,
    CoverageId,
    UpdatedBy,
    IsActive,
    UpdatedOn: Date.now()
  };

  try {
    let mapping = await TariffCoverageMapper.findById(req.params.id);

    if (!mapping) {
      return res.status(404).json({ msg: 'Mapping not found' });
    }

    mapping = await TariffCoverageMapper.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.json(mapping);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Mapping not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/tariff-coverage-mappers/:id
// @desc    Delete a tariff-coverage mapping
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const mapping = await TariffCoverageMapper.findByIdAndDelete(req.params.id);

    if (!mapping) {
      return res.status(404).json({ msg: 'Mapping not found' });
    }

    res.json({ msg: 'Mapping removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Mapping not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
