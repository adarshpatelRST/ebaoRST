const express = require('express');
const router = express.Router();
const Tariff = require('../models/Tariff/Tariff');

// @route   POST /api/tariffs
// @desc    Create a new tariff
// @access  Public
router.post('/', async (req, res) => {
  const { TariffName, TariffOwnerId, ChannelCode, AgreementCode, AccountNumber, CreatedBy } = req.body;

  try {
    const newTariff = new Tariff({
      TariffName,
      TariffOwnerId,
      ChannelCode,
      AgreementCode,
      AccountNumber,
      CreatedBy
    });

    const tariff = await newTariff.save();
    res.json(tariff);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/tariffs
// @desc    Get all tariffs
// @access  Public
router.get('/', async (req, res) => {
  try {
    const tariffs = await Tariff.find().populate('TariffOwnerId CreatedBy UpdatedBy');
    res.json(tariffs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/tariffs/:id
// @desc    Get a tariff by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const tariff = await Tariff.findById(req.params.id).populate('TariffOwnerId CreatedBy UpdatedBy');
    if (!tariff) {
      return res.status(404).json({ msg: 'Tariff not found' });
    }
    res.json(tariff);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Tariff not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/tariffs/:id
// @desc    Update a tariff
// @access  Public
router.put('/:id', async (req, res) => {
  const { TariffName, TariffOwnerId, ChannelCode, AgreementCode, AccountNumber, UpdatedBy, IsActive } = req.body;

  const updatedFields = {
    TariffName,
    TariffOwnerId,
    ChannelCode,
    AgreementCode,
    AccountNumber,
    UpdatedBy,
    IsActive,
    UpdatedOn: Date.now()
  };

  try {
    let tariff = await Tariff.findById(req.params.id);

    if (!tariff) {
      return res.status(404).json({ msg: 'Tariff not found' });
    }

    tariff = await Tariff.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.json(tariff);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Tariff not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/tariffs/:id
// @desc    Delete a tariff
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const tariff = await Tariff.findByIdAndDelete(req.params.id);

    if (!tariff) {
      return res.status(404).json({ msg: 'Tariff not found' });
    }

    res.json({ msg: 'Tariff removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Tariff not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
