const express = require('express');
const router = express.Router();
const coverageController = require('../../controllers/Tariff/coverageController');

// @route   POST /api/coverages
// @desc    Create a new coverage
// @access  Public
router.post('/', coverageController.createCoverage);

// @route   GET /api/coverages
// @desc    Get all coverages
// @access  Public
router.get('/', coverageController.getAllCoverages);

// @route   GET /api/coverages/:id
// @desc    Get a coverage by ID
// @access  Public
router.get('/:id', coverageController.getCoverageById);

// @route   PUT /api/coverages/:id
// @desc    Update a coverage
// @access  Public
router.put('/:id', coverageController.updateCoverageById);

// @route   DELETE /api/coverages/:id
// @desc    Delete a coverage
// @access  Public
router.delete('/:id', coverageController.deleteCoverageById);

module.exports = router;
