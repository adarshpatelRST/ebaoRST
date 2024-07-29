const express = require('express');
const router = express.Router();
const agreementCategoryController = require('../../controllers/Tariff/AgreementCategoryController');

// @route   POST /api/agreement-categories
// @desc    Create a new agreement category
// @access  Public
router.post('/', agreementCategoryController.createAgreementCategory);

// @route   GET /api/agreement-categories
// @desc    Get all agreement categories
// @access  Public
router.get('/', agreementCategoryController.getAllAgreementCategories);

// @route   GET /api/agreement-categories/:id
// @desc    Get an agreement category by ID
// @access  Public
router.get('/:id', agreementCategoryController.getAgreementCategoryById);

// @route   PUT /api/agreement-categories/:id
// @desc    Update an agreement category
// @access  Public
router.put('/:id', agreementCategoryController.updateAgreementCategoryById);

// @route   DELETE /api/agreement-categories/:id
// @desc    Delete an agreement category
// @access  Public
router.delete('/:id', agreementCategoryController.deleteAgreementCategoryById);

module.exports = router;
