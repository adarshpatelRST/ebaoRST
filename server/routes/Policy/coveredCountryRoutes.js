const express = require('express');
const router = express.Router();
const coveredCountryController = require('../../controllers/Policy/CoveredCountryController');

router.get('/', coveredCountryController.getAllCoveredCountries);
router.get('/:id', coveredCountryController.getCoveredCountryById);
router.post('/', coveredCountryController.createCoveredCountry);
router.put('/:id', coveredCountryController.updateCoveredCountryById);
router.delete('/:id', coveredCountryController.deleteCoveredCountryById);

module.exports = router;
