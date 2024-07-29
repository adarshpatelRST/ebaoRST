const express = require('express');
const router = express.Router();
const tariffController = require('../../controllers/Tariff/tariffController');

// @route   POST /api/tariffs
// @desc    Create a new tariff
// @access  Public
router.post('/', tariffController.createTariff);

// @route   GET /api/tariffs
// @desc    Get all tariffs
// @access  Public
router.get('/', tariffController.getAllTariffs);

// @route   GET /api/tariffs/:id
// @desc    Get a tariff by ID
// @access  Public
router.get('/:id', tariffController.getTariffById);

// @route   PUT /api/tariffs/:id
// @desc    Update a tariff
// @access  Public
router.put('/:id', tariffController.updateTariffById);

// @route   DELETE /api/tariffs/:id
// @desc    Delete a tariff
// @access  Public
router.delete('/:id', tariffController.deleteTariffById);

module.exports = router;
