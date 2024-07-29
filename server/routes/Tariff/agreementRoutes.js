const express = require('express');
const router = express.Router();
const agreementController = require('../../controllers/Tariff/agreementController');

// @route   POST /api/agreements
// @desc    Create a new agreement
// @access  Public
router.post('/', agreementController.createAgreement);

// @route   GET /api/agreements
// @desc    Get all agreements
// @access  Public
router.get('/', agreementController.getAllAgreements);

// @route   GET /api/agreements/:id
// @desc    Get an agreement by ID
// @access  Public
router.get('/:id', agreementController.getAgreementById);

// @route   PUT /api/agreements/:id
// @desc    Update an agreement
// @access  Public
router.put('/:id', agreementController.updateAgreementById);

// @route   DELETE /api/agreements/:id
// @desc    Delete an agreement
// @access  Public
router.delete('/:id', agreementController.deleteAgreementById);

module.exports = router;
