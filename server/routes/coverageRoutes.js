const express = require('express');
const router = express.Router();
const Coverage = require('../models/Tariff/Coverage');

// @route   POST /api/coverages
// @desc    Create a new coverage
// @access  Public
router.post('/', async (req, res) => {
  const { CoverageName, CoverageCode, Limit, CoveredCountry, DriverCounts, Amount, CreatedBy } = req.body;

  try {
    const newCoverage = new Coverage({
      CoverageName,
      CoverageCode,
      Limit,
      CoveredCountry,
      DriverCounts,
      Amount,
      CreatedBy
    });

    const coverage = await newCoverage.save();
    res.json(coverage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/coverages
// @desc    Get all coverages
// @access  Public
router.get('/', async (req, res) => {
  try {
    const coverages = await Coverage.find().populate('CreatedBy UpdatedBy');
    res.json(coverages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/coverages/:id
// @desc    Get a coverage by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const coverage = await Coverage.findById(req.params.id).populate('CreatedBy UpdatedBy');
    if (!coverage) {
      return res.status(404).json({ msg: 'Coverage not found' });
    }
    res.json(coverage);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Coverage not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/coverages/:id
// @desc    Update a coverage
// @access  Public
router.put('/:id', async (req, res) => {
  const { CoverageName, CoverageCode, Limit, CoveredCountry, DriverCounts, Amount, UpdatedBy, IsActive } = req.body;

  const updatedFields = {
    CoverageName,
    CoverageCode,
    Limit,
    CoveredCountry,
    DriverCounts,
    Amount,
    UpdatedBy,
    IsActive,
    UpdatedOn: Date.now()
  };

  try {
    let coverage = await Coverage.findById(req.params.id);

    if (!coverage) {
      return res.status(404).json({ msg: 'Coverage not found' });
    }

    coverage = await Coverage.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.json(coverage);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Coverage not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/coverages/:id
// @desc    Delete a coverage
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const coverage = await Coverage.findByIdAndDelete(req.params.id);

    if (!coverage) {
      return res.status(404).json({ msg: 'Coverage not found' });
    }

    res.json({ msg: 'Coverage removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Coverage not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
