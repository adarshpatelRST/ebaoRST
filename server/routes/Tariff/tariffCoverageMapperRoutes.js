const express = require('express');
const router = express.Router();
const tariffCoverageMapperController = require('../../controllers/Tariff/tariffCoverageMapperController');

// @route   POST /api/tariff-coverage-mappers
// @desc    Create a new tariff coverage mapper
// @access  Public
router.post('/', tariffCoverageMapperController.createTariffCoverageMapper);

// @route   GET /api/tariff-coverage-mappers
// @desc    Get all tariff coverage mappers
// @access  Public
router.get('/', tariffCoverageMapperController.getAllTariffCoverageMappers);

// @route   GET /api/tariff-coverage-mappers/:id
// @desc    Get a tariff coverage mapper by ID
// @access  Public
router.get('/:id', tariffCoverageMapperController.getTariffCoverageMapperById);

// @route   PUT /api/tariff-coverage-mappers/:id
// @desc    Update a tariff coverage mapper
// @access  Public
router.put('/:id', tariffCoverageMapperController.updateTariffCoverageMapperById);

// @route   DELETE /api/tariff-coverage-mappers/:id
// @desc    Delete a tariff coverage mapper
// @access  Public
router.delete('/:id', tariffCoverageMapperController.deleteTariffCoverageMapperById);

module.exports = router;
